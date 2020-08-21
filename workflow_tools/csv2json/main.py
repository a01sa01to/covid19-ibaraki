import json
import csv
import os

json_list = []
filename = str(os.environ['FILE'])

# CSV読み込み
with open('{}.csv'.format(filename), 'r', encoding="UTF-8") as f:
  for row in csv.DictReader(f):
    json_list.append(row)

# JSON書き込み
with open('{}.json'.format(filename), 'w', encoding="UTF-8") as f:
  json.dump(json_list, f, ensure_ascii=False, indent=2)
