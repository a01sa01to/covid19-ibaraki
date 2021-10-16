import csv
import json

json_list = {"labels":[],"datasets":[{"label":"検査実施人数","data":[]}]}
filename = "test_people"

# CSV読み込み
with open('{}.csv'.format(filename), 'r', encoding="UTF-8") as f:
  for row in csv.DictReader(f):
    json_list['labels'].append(row['実施_年月日'].replace('T00:00:00',''))
    json_list['datasets'][0]['data'].append(int(row['検査実施_人数']))

# JSON書き込み
with open('{}.json'.format(filename), 'w', encoding="UTF-8") as f:
  json.dump(json_list, f, ensure_ascii=False, indent=0, separators=(',',':'))

# JSON改行なくす
with open('{}.json'.format(filename), 'r', encoding="UTF-8") as f:
  json_content = f.read()
with open('{}.json'.format(filename), 'w', encoding="UTF-8") as f:
  f.write(json_content.replace("\n",""))
