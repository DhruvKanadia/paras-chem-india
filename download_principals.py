import os
import requests
import re

principals = [
    {"name": "National Peroxide Limited (NPL)", "domain": "nplindia.com"},
    {"name": "Grasim Industries Limited (Aditya Birla)", "domain": "grasim.com"},
    {"name": "GACL Ltd", "domain": "gacl.com"},
    {"name": "GFL Ltd (Gujarat Fluorochemicals)", "domain": "gfl.co.in"},
    {"name": "RSPL Ltd", "domain": "rsplgroup.com"},
    {"name": "Atul Ltd", "domain": "atul.co.in"},
    {"name": "Fogla", "domain": "foglacorp.com"},
    {"name": "Organic Industries", "domain": "organic.com"},
    {"name": "Meghmani Dyes & Intermediates", "domain": "meghmani.com"}
]

os.makedirs('public/principals', exist_ok=True)

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

for p in principals:
    slug = slugify(p['name'])
    path = f"public/principals/{slug}.png"
    
    try:
        url = f"https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://{p['domain']}&size=128"
        r = requests.get(url, timeout=5)
        if r.status_code == 200 and len(r.content) > 1000:
            with open(path, 'wb') as f:
                f.write(r.content)
            print(f"Downloaded logo for {p['name']}")
        else:
            raise Exception("Too small or failed")
    except Exception as e:
        # Fallback to UI Avatars
        short_name = p['name'].split()[0]
        fb_url = f"https://ui-avatars.com/api/?name={requests.utils.quote(short_name)}&background=random&color=fff&size=128&bold=true"
        r_fb = requests.get(fb_url)
        with open(path, 'wb') as f:
            f.write(r_fb.content)
        print(f"Downloaded fallback for {p['name']}")
