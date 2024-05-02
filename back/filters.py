#фильтры для поиска вакансий

import requests

headers = {
    'User-Agent': 'api-test-agent'
}

list = requests.get('https://api.hh.ru/dictionaries', headers=headers).json()

experience = list['experience'] # OPIT WORKING
employment = [list['employment'][0], list['employment'][1], list['employment'][4]]# stazhirovka i td
schedule = list['schedule'][:-1] # udalenka / full day

#добавить по зарплате от 0 до n-суммы
#добавить по зарплате больше меньше
# добавить по опыту работы больше меньше