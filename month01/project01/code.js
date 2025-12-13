// Month 01 - Project 01
// CHIRPS Mean Precipitation (2020) - Central Valley, California


// 1. Study region

var region = ee.Geometry.Polygon([
  [
    [-122.45, 38.95],
    [-121.00, 38.95],
    [-120.20, 38.20],
    [-119.80, 37.20],
    [-119.50, 36.30],
    [-119.80, 35.40],
    [-120.90, 35.20],
    [-122.10, 36.00],
    [-122.45, 37.20],
    [-122.45, 38.95]
  ]
]);


// 2. Load daily precipitation dataset

var chirps = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
.filterDate('2020-01-01', '2020-12-31')
.filterBounds(region);

// 3. Calculate yearly mean precipitation

var mean_precip = chirps.mean().clip(region);

// 4. Visualization
Map.centerObject(region, 7)
Map.addLayer(
  mean_precip,
  {min: 0, max: 50, palette: ['#f7fbff', '#c6dbef', '#6baed6', '#2171b5', '#08306b']},
  'Mean Precipitation 2020'
);

