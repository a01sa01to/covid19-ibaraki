import json
import os

from requests_oauthlib import OAuth1Session

consumer_key = os.environ['API_KEY']
consumer_secret = os.environ['API_SECRET']
access_token = os.environ['ACCESS_TOKEN']
access_secret = os.environ['ACCESS_SECRET']

CHECK_DIR = ["data"]
ENCODING = "UTF-8"
JSON_FILES = ["data.json"]
lastUpdate = ""

with open(os.path.join("data/patients_summary.json"), encoding=ENCODING) as file:
    patients_summary = json.load(file)

with open(os.path.join("data/deaths_summary.json"), encoding=ENCODING) as file:
    deaths_summary = json.load(file)

with open(os.path.join("data/data.json"), encoding=ENCODING) as file:
    # jsonを読み込み
    json_content = json.load(file)
    # 入院関連
    hospitalized = 0
    hosp = json_content["main_summary"]["children"][0]["children"][0]["children"]
    hospitalized += hosp[0]["value"]
    hospitalized += hosp[1]["value"]
    hospitalized += hosp[2]["value"]

status = f"""
#茨城県 版 #新型コロナウイルス 対策サイトを更新しました。
{json_content["lastUpdate"]}更新

https://ibaraki.stopcovid19.jp/
"""

print("TWEET MESSAGE\n----------\n"+status+"\n----------")

# Tweet as @covid19_ibaraki
twitter_cov19 = OAuth1Session(
    consumer_key, consumer_secret, access_token, access_secret)
param = {"text": status}
req_tweet = twitter_cov19.post(
    "https://api.twitter.com/2/tweets", json=param).json()

print(req_tweet)
