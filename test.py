import os
import requests

url = "https://logo.clearbit.com/godrejindustries.com"
r = requests.get(url)
print(r.status_code)
if r.status_code == 200:
    print(len(r.content))
