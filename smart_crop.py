from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

img = Image.open('public/images/authorized-distributor.png').convert('RGB')

# roughly chunk them into 8 boxes, then trim whitespace!
cols = [0, 110, 220, 345, 400]
rows = [60, 132, 200]

names = [
    ["national-peroxide-limited-npl-", "grasim-industries-limited-aditya-birla-", "meghmani-dyes-intermediates", "organic-industries"],
    ["rspl-ltd", "gfl-ltd-gujarat-fluorochemicals-", "fogla", "atul-ltd"]
]

import os
os.makedirs('public/principals_crop2', exist_ok=True)

for r in range(2):
    for c in range(4):
        # We give it generous bounds, then auto-trim!
        # Meghmani overlaps with Grasim? Let's be careful.
        
        if c == 0:
            left, right = 0, 120
        elif c == 1:
            left, right = 120, 220
        elif c == 2:
            left, right = 220, 350
        elif c == 3:
            left, right = 350, 400

        top = 60 if r == 0 else 130
        bottom = 135 if r == 0 else 200
        
        box = (left, top, right, bottom)
        chunk = img.crop(box)
        
        # trim whitespace
        trimmed = trim(chunk)
        
        slug = names[r][c]
        trimmed.save(f"public/principals_crop2/{slug}.png")

print("Done smart crop")
