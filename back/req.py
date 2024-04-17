import requests
import json


headers = {
    'User-Agent': 'api-test-agent'
}


response = requests.get("https://api.hh.ru/professional_roles", headers=headers)

prof_cat = response.json()['categories'][7]['roles']
with open("professional_roles.json", "w", encoding="utf-8") as json_file:
    json.dump(prof_cat, json_file, ensure_ascii=False, indent=4)

# response = requests.get("https://api.hh.ru/skills", headers=headers)
# skills = response.json()
# with open("skills.json", "w", encoding="utf-8") as json_file:
#     json.dump(skills, json_file, ensure_ascii=False, indent=4)