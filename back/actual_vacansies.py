import requests
import json
from datetime import date, timedelta

yestd = str(date.today() - timedelta(days=1))

headers = {
    'User-Agent': 'api-test-agent'
}

params = {
    'area' : '113',
    'professional_role' : '96',
    'date_from' : yestd
}
response = requests.get("https://api.hh.ru/vacancies", headers=headers, params=params)
actual_vac = response.json()
with open('actual_vacancies.json', 'w', encoding="utf-8") as json_file:
    json.dump(actual_vac, json_file, ensure_ascii=False, indent=4)