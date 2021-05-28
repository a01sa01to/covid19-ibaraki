import datetime
import json
import os

from requests_oauthlib import OAuth1Session

consumer_key = os.environ['API_KEY']
consumer_secret = os.environ['API_SECRET']
access_token = os.environ['ACCESS_TOKEN']
access_secret = os.environ['ACCESS_SECRET']
access_token_asa = os.environ['ACCESS_TOKEN_ASA']
access_secret_asa = os.environ['ACCESS_SECRET_ASA']

CHECK_DIR = ["data"]
ENCODING = "UTF-8"
JSON_FILES = ["data.json"]
lastUpdate = ""

with open(os.path.join("data/data.json"), encoding=ENCODING) as file:
  # jsonを読み込み
  json_content = json.load(file)
  # タグリストを生成
  lastUpdate = json_content["lastUpdate"]
  print("更新日時: "+lastUpdate+"\n")

status="#茨城県 版 #新型コロナウイルス 対策サイトを更新しました。\n{}更新\nhttps://ibaraki.stopcovid19.jp/\n\n※反映には少し時間がかかります。".format(lastUpdate)

print("TWEET MESSAGE\n----------\n"+status+"\n----------")

# Tweet as @covid19_ibaraki
twitter_cov19 = OAuth1Session(consumer_key,consumer_secret,access_token,access_secret)
param = {"status": status}
req_tweet = twitter_cov19.post("https://api.twitter.com/1.1/statuses/update.json",params=param).json()

print("TWEET ID: {}".format(req_tweet['id']))

# Retweet as @a01sa01to
twitter_asa = OAuth1Session(consumer_key,consumer_secret,access_token_asa,access_secret_asa)
req_retweet = twitter_asa.post("https://api.twitter.com/1.1/statuses/retweet/{}.json".format(req_tweet['id'])).json()

