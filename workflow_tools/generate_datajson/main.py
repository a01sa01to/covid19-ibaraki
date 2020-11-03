import json
import datetime

file_content = {
  "// 1": "新型コロナコールセンター相談件数",
  "contacts": {
    "data": [],
    "date": "",
  },

  "// 2": "陽性患者属性",
  "patients": {
    "data": [],
    "date": "",
  },

  "// 3": "陽性患者数",
  "patients_summary": {
    "data": [],
    "date": "",
  },

  "// 4": "回復者数",
  "recovered_summary": {
    "data": [],
    "date": "",
  },

  "// 5": "死亡者数",
  "deaths_summary": {
    "data": [],
    "date": "",
  },

  "// 6": "検査実施人数",
  "inspection_persons": {},

  "// 7": "全体の検査実施件数",
  "inspections_summary": {},

  "// 8": "最終更新日時",
  "lastUpdate": "",

  "// 9": "検査陽性者の状況",
  "main_summary": {},

  "// 10": "茨城版コロナNext",
  "ibk_corona_next": {},

  "// 11": "陽性率",
  "positiveRate": {
    "data": [],
    "date": "",
  }
}

with open('last_update.json', 'r', encoding="UTF-8") as f:
  lastUpdate = json.load(f)

with open('json/call_center.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['受付_年月日'].replace('T00:00:00','')
    day['total'] = int(day['相談件数'])
    for key in ['受付_年月日','全国地方公共団体コード','都道府県名','市区町村名','相談件数']:
      del day[key]
  file_content['contacts']['data'] = json_content
  file_content['contacts']['date'] = lastUpdate['call_center']

with open('json/patients.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for person in json_content:
    person['num'] = int(person['No'])
    person['date'] = person['公表_年月日'].replace('T00:00:00','')
    person['年代'] = person['患者_年代']
    person['性別'] = person['患者_性別']
    person['居住地'] = person['患者_居住地']
    person['濃厚接触者'] = '○' if int(person['患者_濃厚接触者フラグ']) == 1 else ''
    for key in ['No','全国地方公共団体コード','都道府県名','市区町村名','公表_年月日','発症_年月日','患者_居住地','患者_年代','患者_性別','患者_職業','患者_状態','患者_症状','患者_渡航歴の有無フラグ','患者_濃厚接触者フラグ','検査方法','備考']:
      del person[key]
  file_content['patients']['data'] = json_content
  file_content['patients']['date'] = lastUpdate['patients']

with open('json/positive_number.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['陽性者数'])
    day['close'] = int(day['うち濃厚接触者'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','陽性者数','うち濃厚接触者']:
      del day[key]
  file_content['patients_summary']['data'] = json_content
  file_content['patients_summary']['date'] = lastUpdate['positive_number']

with open('json/recovered_number.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['回復者数'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','回復者数']:
      del day[key]
  file_content['recovered_summary']['data'] = json_content
  file_content['recovered_summary']['date'] = lastUpdate['recovered_number']

with open('json/death_number.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['死亡者数'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','死亡者数']:
      del day[key]
  file_content['deaths_summary']['data'] = json_content
  file_content['deaths_summary']['date'] = lastUpdate['death_number']

with open('json/test_people.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  file_content['inspection_persons'] = json_content
  file_content['inspection_persons']['date'] = lastUpdate['test_people']

with open('inspections_summary.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  file_content['inspections_summary'] = json_content
  file_content['inspections_summary']['date'] = lastUpdate['inspections_summary']

file_content['lastUpdate'] = lastUpdate['lastUpdate']

with open('main_summary.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  file_content['main_summary'] = json_content
  file_content['main_summary']['children'][0]['date'] = lastUpdate['main_summary']

with open('corona_next.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  file_content['ibk_corona_next'] = json_content
  file_content['ibk_corona_next']['date'] = lastUpdate['corona_next']

with open('json/positive_rate.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['実施_年月日'].replace('T00:00:00','')
    day['positive'] = int(day['（感染者数）'])
    day['tested'] = int(day['検査実施_人数'])
    for key in ['実施_年月日','全国地方公共団体コード','都道府県名','市区町村名','（感染者数）','検査実施_人数']:
      del day[key]
  file_content['positiveRate']['data'] = json_content
  file_content['positiveRate']['date'] = lastUpdate['test_people']

# JSON書き込み
with open('data.json', 'w', encoding="UTF-8") as f:
  for key in range(1,12):
    del file_content['// {}'.format(key)]
  json.dump(file_content, f, ensure_ascii=False, indent=0, separators=(',', ':'))

# JSON改行なくす
with open('data.json', 'r', encoding="UTF-8") as f:
  json_content = f.read()
with open('data.json', 'w', encoding="UTF-8") as f:
  f.write(json_content.replace("\n",""))