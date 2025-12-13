# Month 01 – Project 01  
## CHIRPS Mean Precipitation (2020) – Central Valley, California

### 🎯 Project Objective
To calculate and visualize the mean annual precipitation for the year 2020 using the CHIRPS daily dataset over a selected region in Central Valley, California.

### 🔧 Steps Completed
- Defined the study area using a Polygon geometry  
- Loaded the CHIRPS daily precipitation dataset  
- Applied a temporal filter for the year 2020  
- Applied a spatial filter using the study region  
- Computed the annual mean precipitation  
- Visualized the mean precipitation map in Google Earth Engine  

### 🧠 Notes & Observations
- The selected region is entirely land, making it suitable for precipitation and agricultural analysis.  
- Choosing an appropriate color palette significantly improves map readability.  
- Using `clip(region)` is essential to focus the analysis on the study area.  

### ✅ Next Tasks
- Export the output map from Google Earth Engine  
- Add the exported image to the `outputs` folder  
- Link the image inside the project README  
