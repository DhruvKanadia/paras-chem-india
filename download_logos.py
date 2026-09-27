import os
import requests
import re

clients = [
    {"name": "Aarti Industries", "domain": "aarti-industries.com"},
    {"name": "Aarti Drugs", "domain": "aartidrugs.com"},
    {"name": "Aarti Surfactants", "domain": "aarti-surfactants.com"},
    {"name": "Aquapharm", "domain": "aquapharm.net"},
    {"name": "Clean Science", "domain": "cleanscience.co.in"},
    {"name": "Evonik", "domain": "evonik.com"},
    {"name": "Fineotex", "domain": "fineotex.com"},
    {"name": "Gharda Chemicals", "domain": "gharda.com"},
    {"name": "Lupin Ltd", "domain": "lupin.com"},
    {"name": "Godrej Inds", "domain": "godrejindustries.com"},
    {"name": "Galaxy Surfactants", "domain": "galaxysurfactants.com"},
    {"name": "Vedanta Ltd", "domain": "vedantalimited.com"},
    {"name": "Fine Organics", "domain": "fineorganics.com"},
    {"name": "ONGC", "domain": "ongcindia.com"},
    {"name": "NTPC", "domain": "ntpc.co.in"},
    {"name": "NHPC", "domain": "nhpcindia.com"},
    {"name": "BPCL", "domain": "bharatpetroleum.in"},
    {"name": "IOCL", "domain": "iocl.com"},
    {"name": "GAIL INDIA", "domain": "gailonline.com"},
    {"name": "BARC", "domain": "barc.gov.in"}
]

os.makedirs('public/clients', exist_ok=True)

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

for client in clients:
    slug = slugify(client['name'])
    path = f"public/clients/{slug}.png"
    
    try:
        url = f"https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://{client['domain']}&size=128"
        r = requests.get(url, timeout=5)
        if r.status_code == 200 and len(r.content) > 1000: # Ensure it's not a tiny default pixel
            with open(path, 'wb') as f:
                f.write(r.content)
            print(f"Downloaded logo for {client['name']}")
        else:
            print(f"Failed or too small for {client['name']}")
    except Exception as e:
        print(f"Error {client['name']}")
