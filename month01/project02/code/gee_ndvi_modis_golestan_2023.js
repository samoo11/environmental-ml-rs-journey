// ======================================================
// 1) Define Study Region (Golestan Province)
// ======================================================

var golestan = ee.Geometry.Polygon([
  [54.10, 36.80],
  [55.25, 36.80],
  [55.25, 37.30],
  [54.10, 37.30],
  [54.10, 36.80]
]);

Map.centerObject(golestan, 8);
// Map.addLayer(golestan, {color: 'red'}, "Golestan");


// ======================================================
// 2) Settings
// ======================================================

// Target year
var year = 2023;

// List of months (1 to 12)
var months = ee.List.sequence(1, 12);

// MODIS NDVI collection (MOD13Q1)
var modis = ee.ImageCollection('MODIS/061/MOD13Q1')
  .select('NDVI');  // Select NDVI band only


// ======================================================
// 3) Function to Create Monthly NDVI Composite
// ======================================================

// This function receives a month number (m)
// and returns the monthly NDVI composite image.

function makeMonthlyNdvi(m) {

  m = ee.Number(m);

  // Define start and end dates for the month
  var start = ee.Date.fromYMD(year, m, 1);
  var end = start.advance(1, 'month');

  // Build monthly NDVI composite
  var monthlyNdvi = modis
    .filterDate(start, end)        // Filter by month
    .filterBounds(golestan)        // Filter by region
    .mean()                        // Pixel-wise mean
    .multiply(0.0001)              // Apply scale factor
    .clip(golestan)                // Clip to region
    .set({
      'year': year,
      'month': m
    });                            // Add metadata

  return monthlyNdvi;
}


// ======================================================
// 4) Create NDVI for All 12 Months
// ======================================================

// Apply the function to each month
var monthlyNdviCollection = ee.ImageCollection(
  months.map(function (m) {
    return makeMonthlyNdvi(m);
  })
);

print('Monthly NDVI (Golestan, 2023)', monthlyNdviCollection);


// ======================================================
// 5) Visualize a Sample Month (June)
// ======================================================

// Select NDVI for month 6 (June)
var juneNdvi = monthlyNdviCollection
  .filter(ee.Filter.eq('month', 6))
  .first();

// Add to map
Map.addLayer(juneNdvi, {
  min: 0,
  max: 0.6,
  palette: ['white', 'yellow', 'red', 'green', 'blue']
}, 'NDVI June');


// ======================================================
// 6) Export June NDVI (Optional)
// ======================================================

Export.image.toDrive({
  image: juneNdvi,
  description: 'NDVI_June_2023',
  folder: 'GEE_Exports',
  scale: 250,
  region: golestan,
  maxPixels: 1e13
});


// ======================================================
// 7) Compute Monthly Mean NDVI Values (Table)
// ======================================================

// Convert each monthly NDVI image to a feature with mean NDVI
var ndviTable = monthlyNdviCollection.map(function (img) {

  var meanNdvi = img.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: golestan,
    scale: 250,
    maxPixels: 1e13
  }).get('NDVI');

  return ee.Feature(null, {
    'year': img.get('year'),
    'month': img.get('month'),
    'ndvi': meanNdvi
  });
});


// ======================================================
// 8) Export NDVI Table to CSV
// ======================================================

Export.table.toDrive({
  collection: ndviTable,
  description: 'NDVI_Monthly_Table_2023',
  fileFormat: 'CSV'
});
