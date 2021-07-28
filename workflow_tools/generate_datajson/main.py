# coding=utf-8

import datetime
import json

IBK_CITY_LIST = ["利根町","境町","五霞町","八千代町","河内町","阿見町","美浦村","大子町","東海村","城里町","大洗町","茨城町","小美玉市","つくばみらい市","鉾田市","行方市","神栖市","桜川市","かすみがうら市","稲敷市","坂東市","筑西市","那珂市","常陸大宮市","守谷市","潮来市","鹿嶋市","ひたちなか市","つくば市","牛久市","取手市","笠間市","北茨城市","高萩市","常陸太田市","常総市","下妻市","龍ケ崎市","結城市","石岡市","古河市","土浦市","日立市","水戸市"]

file_content = {
  "contacts": {
    "data": [],
    "date": "",
  },

  "patients_age": {
    "data": [
      { "age": "合計", "close": 0, "new": 0 },
      { "age": "10歳未満", "close": 0, "new": 0 },
      { "age": "10代", "close": 0, "new": 0 },
      { "age": "20代", "close": 0, "new": 0 },
      { "age": "30代", "close": 0, "new": 0 },
      { "age": "40代", "close": 0, "new": 0 },
      { "age": "50代", "close": 0, "new": 0 },
      { "age": "60代", "close": 0, "new": 0 },
      { "age": "70代", "close": 0, "new": 0 },
      { "age": "80代", "close": 0, "new": 0 },
      { "age": "90代", "close": 0, "new": 0 },
      { "age": "100歳以上", "close": 0, "new": 0 }
    ],
    "date": "",
  },

  "patients_city": {
    "data": [
      { "city": "利根町", "total": 0, "recent": 0 },
      { "city": "境町", "total": 0, "recent": 0 },
      { "city": "五霞町", "total": 0, "recent": 0 },
      { "city": "八千代町", "total": 0, "recent": 0 },
      { "city": "河内町", "total": 0, "recent": 0 },
      { "city": "阿見町", "total": 0, "recent": 0 },
      { "city": "美浦村", "total": 0, "recent": 0 },
      { "city": "大子町", "total": 0, "recent": 0 },
      { "city": "東海村", "total": 0, "recent": 0 },
      { "city": "城里町", "total": 0, "recent": 0 },
      { "city": "大洗町", "total": 0, "recent": 0 },
      { "city": "茨城町", "total": 0, "recent": 0 },
      { "city": "小美玉市", "total": 0, "recent": 0 },
      { "city": "つくばみらい市", "total": 0, "recent": 0 },
      { "city": "鉾田市", "total": 0, "recent": 0 },
      { "city": "行方市", "total": 0, "recent": 0 },
      { "city": "神栖市", "total": 0, "recent": 0 },
      { "city": "桜川市", "total": 0, "recent": 0 },
      { "city": "かすみがうら市", "total": 0, "recent": 0 },
      { "city": "稲敷市", "total": 0, "recent": 0 },
      { "city": "坂東市", "total": 0, "recent": 0 },
      { "city": "筑西市", "total": 0, "recent": 0 },
      { "city": "那珂市", "total": 0, "recent": 0 },
      { "city": "常陸大宮市", "total": 0, "recent": 0 },
      { "city": "守谷市", "total": 0, "recent": 0 },
      { "city": "潮来市", "total": 0, "recent": 0 },
      { "city": "鹿嶋市", "total": 0, "recent": 0 },
      { "city": "ひたちなか市", "total": 0, "recent": 0 },
      { "city": "つくば市", "total": 0, "recent": 0 },
      { "city": "牛久市", "total": 0, "recent": 0 },
      { "city": "取手市", "total": 0, "recent": 0 },
      { "city": "笠間市", "total": 0, "recent": 0 },
      { "city": "北茨城市", "total": 0, "recent": 0 },
      { "city": "高萩市", "total": 0, "recent": 0 },
      { "city": "常陸太田市", "total": 0, "recent": 0 },
      { "city": "常総市", "total": 0, "recent": 0 },
      { "city": "下妻市", "total": 0, "recent": 0 },
      { "city": "龍ケ崎市", "total": 0, "recent": 0 },
      { "city": "結城市", "total": 0, "recent": 0 },
      { "city": "石岡市", "total": 0, "recent": 0 },
      { "city": "古河市", "total": 0, "recent": 0 },
      { "city": "土浦市", "total": 0, "recent": 0 },
      { "city": "日立市", "total": 0, "recent": 0 },
      { "city": "水戸市", "total": 0, "recent": 0 }
    ],
    "date": ""
  },

  "patients_summary": {
    "data": [],
    "date": "",
  },

  "recovered_summary": {
    "data": [],
    "date": "",
  },

  "deaths_summary": {
    "data": [],
    "date": "",
  },

  "inspection_persons": {},

  "inspections_summary": {},

  "lastUpdate": "",

  "main_summary": {},

  "ibk_corona_next": {},

  "mutant_summary": {
    "data": [],
    "date": "",
  },

  "mutant_inspections": {
    "data": [],
    "date": "",
  },

  "vaccine_summary": []
}

with open('last_update.json', 'r', encoding="UTF-8") as f:
  lastUpdate = json.load(f)

with open('call_center.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['受付_年月日'].replace('T00:00:00','')
    day['total'] = int(day['相談件数'])
    for key in ['受付_年月日','全国地方公共団体コード','都道府県名','市区町村名','相談件数']:
      del day[key]
  file_content['contacts']['data'] = json_content
  file_content['contacts']['date'] = lastUpdate['call_center']

with open('patients.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for person in json_content:
    person['date'] = person['公表_年月日'].replace('T00:00:00','')
    person['年代'] = person['患者_年代']
    person['居住地'] = person['患者_居住地']
    person['濃厚接触者'] = '○' if int(person['患者_濃厚接触者フラグ']) == 1 else ''

    person['date'] = datetime.datetime.strptime(person['date'], '%Y-%m-%d')
    one_wk_ago = datetime.datetime.now() - datetime.timedelta(days=7)

    for key in ['No','全国地方公共団体コード','都道府県名','市区町村名','公表_年月日','発症_年月日','患者_居住地','患者_年代','患者_性別','患者_職業','患者_状態','患者_症状','患者_渡航歴の有無フラグ','患者_濃厚接触者フラグ','検査方法','備考']:
      del person[key]

    if person['居住地'] in IBK_CITY_LIST:
      city = [_ for _ in file_content['patients_city']['data'] if _["city"] == person['居住地']][0]
      city["total"] += 1
      city["recent"] += 1 if person['date'] > one_wk_ago else 0
    if person['年代'] != '不明' and person["date"] > one_wk_ago:
      age = [_ for _ in file_content['patients_age']['data'] if _["age"] == person['年代']]
      age = age[0]
      if person['濃厚接触者'] == '○':
        age['close'] += 1
        file_content['patients_age']['data'][0]['close'] += 1
      else:
        age['new'] += 1
        file_content['patients_age']['data'][0]['new'] += 1
  file_content['patients_city']['date'] = lastUpdate['patients']
  file_content['patients_age']['date'] = lastUpdate['patients']

with open('positive_number.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['陽性者数'])
    day['close'] = int(day['うち濃厚接触者'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','陽性者数','うち濃厚接触者']:
      del day[key]
  file_content['patients_summary']['data'] = json_content
  file_content['patients_summary']['date'] = lastUpdate['positive_number']

with open('mutant_positive.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['変異株陽性者数'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','変異株陽性者数','年代別','性別']:
      del day[key]
  file_content['mutant_summary']['data'] = json_content
  file_content['mutant_summary']['date'] = lastUpdate['mutant_positive']

with open('recovered_number.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['回復者数'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','回復者数']:
      del day[key]
  file_content['recovered_summary']['data'] = json_content
  file_content['recovered_summary']['date'] = lastUpdate['recovered_number']

with open('death_number.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['date'] = day['公表_年月日'].replace('T00:00:00','')
    day['total'] = int(day['死亡者数'])
    for key in ['公表_年月日','全国地方公共団体コード','都道府県名','市区町村名','死亡者数']:
      del day[key]
  file_content['deaths_summary']['data'] = json_content
  file_content['deaths_summary']['date'] = lastUpdate['death_number']

with open('test_people.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  file_content['inspection_persons'] = json_content
  file_content['inspection_persons']['date'] = lastUpdate['test_people']

with open('mutant_test_people.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  for day in json_content:
    day['from_date'] = day['実施_年月日 FROM'].replace('T00:00:00','')
    day['to_date'] = day['実施_年月日 TO'].replace('T00:00:00','')
    day['inspected'] = int(day['検査実施_人数'])
    day['positive'] = int(day['陽性者数'])
    for key in ['実施_年月日 FROM','実施_年月日 TO','全国地方公共団体コード','都道府県名','市区町村名','検査実施_人数','陽性者数']:
      del day[key]
  file_content['mutant_inspections']['data'] = json_content
  file_content['mutant_inspections']['date'] = lastUpdate['mutant_test_people']

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

with open('vaccine_data.json', 'r', encoding="UTF-8") as f:
  json_content = json.load(f)
  file_content['vaccine_summary'] = json_content

# JSON書き込み
with open('data.json', 'w', encoding="UTF-8") as f:
  json.dump(file_content, f, ensure_ascii=False, indent=0, separators=(',', ':'))

# JSON改行なくす
with open('data.json', 'r', encoding="UTF-8") as f:
  json_content = f.read()
with open('data.json', 'w', encoding="UTF-8") as f:
  f.write(json_content.replace("\n",""))
