from PIL import Image
import os
import re

img = Image.open('public/images/authorized-distributor.png')

# 400x200
# Header takes ~60px top.
# Logos are 4x2 grid roughly.

cols = [0, 100, 200, 300, 400]
rows = [60, 130, 200]

names = [
    ["National Peroxide Limited (NPL)", "Grasim Industries Limited (Aditya Birla)", "Meghmani Dyes & Intermediates", "Organic Industries"],
    ["RSPL Ltd", "GFL Ltd (Gujarat Fluorochemicals)", "Fogla", "Atul Ltd"]
]

os.makedirs('public/principals_crop', exist_ok=True)

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

for r in range(2):
    for c in range(4):
        box = (cols[c], rows[r], cols[c+1], rows[r+1])
        crop_img = img.crop(box)
        slug = slugify(names[r][c])
        crop_img.save(f"public/principals_crop/{slug}.png")

print("Cropped successfully!")
