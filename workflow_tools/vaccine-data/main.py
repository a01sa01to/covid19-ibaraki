import json

file_content = []

with open('vaccine_data.ndjson', 'r', encoding="UTF-8") as f:
  for row in f.readlines():
    rowJson = json.loads(row.replace('\n',''))
    if rowJson['prefecture'] == '08':
      del rowJson['prefecture']
      if not rowJson['medical_worker']:
        del rowJson['medical_worker']
      file_content.append(rowJson)

new_file_content = []
i = 0
while i < len(file_content):
  new_content = {
    'date': file_content[i]['date'],
    'count': file_content[i]['count'],
    'status_1': file_content[i]['count'] if file_content[i]['status']==1 else 0,
    'status_2': file_content[i]['count'] if file_content[i]['status']==2 else 0,
  }
  for j in range(1,len(file_content)-i):
    print(i, j);
    if file_content[i]['date'] == file_content[i+j]['date']:
      new_content['count'] += file_content[i+j]['count']
      if file_content[i+j]['status'] == 1:
        new_content['status_1'] += file_content[i+j]['count']
      else:
        new_content['status_2'] += file_content[i+j]['count']
    else:
      i += j-1
      break
    if i+j+1 == len(file_content):
      i += j
  new_file_content.append(new_content)
  i += 1


with open('vaccine_data.json', 'w', encoding="UTF-8") as f:
  json.dump(new_file_content, f, ensure_ascii=False,indent=2,separators=(',',': '))
