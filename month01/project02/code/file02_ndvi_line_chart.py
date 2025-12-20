# ======================================================
# 1) Import required packages
# ======================================================

import pandas as pd
import matplotlib.pyplot as plt


# ======================================================
# 2) Read NDVI Excel file
# ======================================================
# Replace the file path with the correct relative path inside your project.
# Example: "../outputs/results/ndvi_monthly_golestan_2023.xlsx"

ndvi_data = pd.read_excel("NDVI_Monthly_Table_2023.xlsx")

# Set the 'Date' column as index (if exists)
# If your file uses 'month' instead of 'Date', adjust accordingly.
ndvi_data.set_index('Date', inplace=True)


# ======================================================
# 3) Plot NDVI line chart
# ======================================================

plt.figure(figsize=(12, 9))
plt.plot(ndvi_data.index, ndvi_data['ndvi'], color='green', linewidth=2)

plt.title("Monthly NDVI Trend (Golestan, 2023)", fontsize=14)
plt.xlabel("Month")
plt.ylabel("NDVI")
plt.grid(True)


# ======================================================
# 4) Save plot as PNG
# ======================================================
# Save inside your project structure, for example:
# "../outputs/figures/ndvi_monthly_golestan_2023_line_chart.png"

plt.savefig(
    "ndvi_monthly_golestan_2023_line_chart.png",
    dpi=600,
    bbox_inches='tight'
)
