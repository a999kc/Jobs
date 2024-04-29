import requests
import json

headers = {
    'User-Agent': 'api-test-agent'
}

params = {
    'text' : 'php'
}

#1114

response = requests.get("https://api.hh.ru/suggests/skill_set", headers=headers, params=params)
skill_list=response.json()
print(skill_list)