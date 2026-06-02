# Month 06 – Project 03  
## Landsat Land Surface Temperature (LST)

### 🎯 Project Objective
Estimate and visualize Land Surface Temperature (°C) using Landsat 8 thermal bands in Google Earth Engine.

---

### 🔧 Steps Completed
- [ ] Define study region (ROI)  
- [ ] Load Landsat 8 dataset (Collection 2 Level-2)  
- [ ] Extract bands (B4, B5, B10)  
- [ ] Compute NDVI  
- [ ] Estimate emissivity (NDVI threshold method)  
- [ ] Compute Brightness Temperature (BT)  
- [ ] Correct BT with emissivity → LST  
- [ ] Visualize LST map in GEE  
- [ ] Export outputs (GeoTIFF, CSV, PNG)  

---

### 🧠 Notes & Observations
- NDVI-based emissivity correction improves accuracy of LST  
- Brightness Temperature alone is not sufficient → needs emissivity adjustment  
- Landsat 8 provides ~100m resolution, useful for urban heat island analysis  
- Exported GeoTIFF allows flexible visualization in Python  
- Consistent color palette (blue–red) improves interpretability  

---

### ⚠️ Issues / Challenges
- Cloud contamination in thermal bands  
- ROI selection affects results (urban vs rural)  
- Need to validate LST with ground station data  

---

### ✅ Next Tasks
- Add exported outputs to `outputs` folder  
- Link figures inside project README  
- Compare LST results with NDVI maps  
- Prepare project summary for monthly documentation  
