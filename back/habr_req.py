import requests

params = {
    'type' : 'all'
}

response = requests.get("https://career.habr.com/vacancies?type=all")

print(response.json())