# Project 03 – Landsat Land Surface Temperature (LST)

This project computes and visualizes **Land Surface Temperature (LST)** using Landsat 8 thermal bands.  
The study area is defined by a custom ROI in Iran.

---

## 📌 Objective
Estimate and visualize **LST (°C)** from Landsat 8 imagery using Google Earth Engine and Python.  
The workflow includes NDVI-based emissivity correction and brightness temperature conversion.

---

## 🔧 Workflow
1. Define the study region (ROI)  
2. Load Landsat 8 Collection 2 Level-2 dataset  
3. Extract required bands:
   - Thermal band (B10)  
   - Red band (B4)  
   - NIR band (B5)  
4. Compute **NDVI**  
5. Estimate **surface emissivity** using NDVI threshold method  
6. Compute **Brightness Temperature (BT)**  
7. Correct BT with emissivity to obtain **LST**  
8. Export:
   - LST GeoTIFF  
   - LST CSV (optional)  
9. Visualize:
   - Colored LST map (GEE)  
   - LST raster visualization (Python)

---

## 📁 Project Structure

```
project03/
├── code/
│   ├── gee_lst.js
│   └── lst_calc.py
│
├── data/
│   └── landsat_bands (B4, B5, B10)
│
├── outputs/
│   ├── results/
│   │   └── lst_values.csv
│   │
│   └── figures/
│       ├── lst_map.png
│       └── lst_histogram.png
│
├── notes.md
└── README.md
```

---

## ✅ Output Examples

### 🌡️ LST Map (GeoTIFF Visualization)
`outputs/figures/lst_map.png`

### 📊 LST Histogram
`outputs/figures/lst_histogram.png`

---

## 🧠 Notes & Observations
- Landsat 8 thermal bands provide ~100m resolution LST.  
- NDVI-based emissivity correction improves accuracy.  
- LST maps are useful for urban heat island analysis and agricultural monitoring.  
- Future improvements:
  - Multi-year LST time series  
  - Comparison with station data  
  - Seasonal analysis

---

## ✅ Tools Used
- **Google Earth Engine (JavaScript API)**  
- **Landsat 8 Collection 2 Level-2**  
- **Python (numpy, matplotlib)**  
- **Jupyter Notebook**

---

## 📅 Status
🚧 **Month 06 – Project 03 In Progress**
