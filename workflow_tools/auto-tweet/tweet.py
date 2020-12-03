import twitter
import os
import glob
import json

auth = twitter.OAuth(consumer_key=os.environ['API_KEY'],
consumer_secret=os.environ['API_SECRET'],
token=os.environ['ACCESS_TOKEN'],
token_secret=os.environ['ACCESS_SECRET'])

CHECK_DIR = ["data"]
ENCODING = "UTF-8"
JSON_FILES = ["data.json"]
lastUpdate = ""

t = twitter.Twitter(auth=auth)

with open(os.path.join("data/data.json"), encoding=ENCODING) as file:
  # jsonを読み込み
  json_content = json.load(file)
  # タグリストを生成
  lastUpdate = json_content["lastUpdate"]
  print("更新日時: "+lastUpdate+"\n")

status="#茨城県 版 #新型コロナウイルス 対策サイトを更新しました。\n{}更新\nhttps://ibaraki.stopcovid19.jp/\n\n※反映には少し時間がかかります。".format(lastUpdate)

print("TWEET MESSAGE\n----------\n"+status+"\n----------")

t.statuses.update(status=status)