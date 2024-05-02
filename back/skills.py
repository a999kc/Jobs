#брать текст со строки поиска

import requests
import json
#from file import text

headers = {
    'User-Agent': 'api-test-agent'
}

params = {
    'text' : #text
}

response = requests.get("https://api.hh.ru/suggests/skill_set", headers=headers, params=params)
skill_list=response.json()['items'] # отсюда брать текст и id
print(skill_list)