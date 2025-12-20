# ======================================================
# 1) Import required packages
# ======================================================

import rasterio
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap


# ======================================================
# 2) Read NDVI GeoTIFF file
# ======================================================
# Replace the file path with the correct relative path inside your project.
# Example: "../outputs/geotiff/ndvi_june_2023.tif"

with rasterio.open("ndvi_june_2023.tif") as src:
    ndvi = src.read(1)   # Read the first band (NDVI values)


# ======================================================
# 3) Plot colored NDVI
# ======================================================

# 3-1) Define custom colormap
colors = ['white', 'yellow', 'red', 'green', 'blue']
ndvi_cmap = LinearSegmentedColormap.from_list("ndvi_cmap", colors)


# 3-2) Plot NDVI with custom palette
plt.figure(figsize=(8, 6))
plt.imshow(ndvi, cmap=ndvi_cmap, vmin=0, vmax=0.6)
plt.colorbar(label="NDVI", fraction=0.06, pad=0.04, shrink=0.52)
plt.title("NDVI Colored Map (Golestan, June 2023)")
plt.axis('off')


# ======================================================
# 4) Save plot as PNG
# ======================================================
# Save inside your project structure, for example:
# "../outputs/figures/ndvi_june_2023_colored.png"

plt.savefig(
    "ndvi_june_2023_colored.png",
    dpi=800,
    bbox_inches='tight'
)


# ======================================================
# 5) Show plot
# ======================================================

plt.show()
