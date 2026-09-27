import os
import requests
import re

clients = [
    "Aquapharm", "Fineotex", "Lupin Ltd", "Godrej Inds", "ONGC", "NTPC", "GAIL INDIA"
]

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

for client in clients:
    slug = slugify(client)
    path = f"public/clients/{slug}.png"
    url = f"https://ui-avatars.com/api/?name={requests.utils.quote(client)}&background=random&color=fff&size=128&bold=true"
    r = requests.get(url)
    if r.status_code == 200:
        with open(path, 'wb') as f:
            f.write(r.content)
        print(f"Downloaded fallback for {client}")
