from PIL import Image
import os

img = Image.open('public/images/authorized-distributor.png')
os.makedirs('scratch/crops', exist_ok=True)

# Try refined boxes
# NPL: x: 10-100, y: 65-132
# Grasim: x: 130-220, y: 65-132
# Meghmani: x: 220-330, y: 70-125
# Organic: x: 340-390, y: 60-125
# RSPL: x: 10-100, y: 135-195
# GFL: x: 120-220, y: 130-195
# Fogla: x: 230-300, y: 135-195
# Atul: x: 310-390, y: 135-195

boxes = [
    (20, 60, 110, 125), # NPL
    (135, 60, 210, 125), # Grasim
    (220, 75, 345, 125), # Meghmani
    (350, 50, 400, 125), # Organic
    (10, 135, 110, 195), # RSPL
    (125, 130, 230, 195), # GFL
    (235, 135, 310, 195), # Fogla
    (320, 135, 395, 195) # Atul
]

names = ["npl", "grasim", "meghmani", "organic", "rspl", "gfl", "fogla", "atul"]

for i, box in enumerate(boxes):
    c = img.crop(box)
    c.save(f"scratch/crops/{names[i]}.png")

print("Done")
