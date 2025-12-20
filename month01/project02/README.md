# Project 02 – MODIS Monthly NDVI (Golestan, 2023)

This project extracts and visualizes monthly NDVI values for the year 2023 using the MODIS NDVI dataset in Google Earth Engine.  
The study area is Golestan Province, located in northern Iran.

---

## 📌 Objective
Compute and visualize the **monthly NDVI** for the year 2023 using MODIS data and a predefined ROI for Golestan Province.

---

## 🔧 Workflow
1. Define the study region using a GeoJSON boundary  
2. Load the MODIS NDVI dataset  
3. Filter the dataset by:
   - Date range: **2023-01-01 to 2023-12-31**
   - Study region (Golestan)
4. Compute **monthly mean NDVI**
5. Export:
   - Monthly NDVI CSV  
   - NDVI GeoTIFF  
6. Visualize:
   - Colored NDVI GeoTIFF (Python)
   - Monthly NDVI line chart (Python)

---

## 📁 Project Structure

```
project02/
├── code/
│   ├── gee_ndvi_modis_golestan_2023.js
│   ├── file02_geotiff_to_colored.py
│   └── file02_ndvi_line_chart.py
│
├── data/
│   └── ndvi_golestan_2023.tif
│
├── outputs/
│   ├── results/
│   │   ├── ndvi_monthly_golestan_2023.csv
│   │   └── ndvi_monthly_golestan_2023.xlsx
│   │
│   └── figures/
│       ├── ndvi_golestan_2023_colored.png
│       ├── ndvi_monthly_golestan_2023_line_chart.png
│       └── maybe_maps_per_month/
│
├── notes.md
└── README.md
```

---

## ✅ Output Examples

### 🌿 Colored NDVI (GeoTIFF Visualization)
`outputs/figures/ndvi_golestan_2023_colored.png`

### 📈 Monthly NDVI Line Chart
`outputs/figures/ndvi_monthly_golestan_2023_line_chart.png`

---

## 🧠 Notes & Observations
- MODIS NDVI provides consistent vegetation monitoring at global scale.  
- Monthly aggregation helps reduce noise and cloud contamination.  
- Exporting GeoTIFF allows for flexible visualization in Python.  
- Future improvements:
  - Add multi-year comparison  
  - Generate monthly NDVI maps  
  - Automate the workflow with Python  

---

## ✅ Tools Used
- **Google Earth Engine (JavaScript API)**  
- **MODIS NDVI Dataset**  
- **Python (matplotlib, rasterio, numpy)**  
- **Jupyter Notebook**

---

## 📅 Status
✅ **Month 02 – Project 02 Completed**
