import csv
import json
import sys

json_list = []
filename = str(sys.argv[1])

# CSV読み込み
with open('{}.csv'.format(filename), 'r', encoding="UTF-8") as f:
  for row in csv.DictReader(f):
    json_list.append(row)

# JSON書き込み
with open('{}.json'.format(filename), 'w', encoding="UTF-8") as f:
  json.dump(json_list, f, ensure_ascii=False, indent=2, separators=(',', ': '))
