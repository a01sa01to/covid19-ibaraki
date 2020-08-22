# --- IMPORT --- #
import os
import glob
import json
import datetime

# --- "sitemap" ディレクトリがなければ作成 --- #
if not os.path.exists("sitemap"):
  os.mkdir("sitemap")
  print('Directory "sitemap" created')

# --- 変数定義 --- #
CHECK_DIR = ["data"]
ENCODING = "UTF-8"
JSON_FILES = ["data.json"]

if str(os.environ['MODE']) == "prod":
  HOST = "https://ibaraki.stopcovid19.jp"
else:
  HOST = "https://covid19-dev.a01sa01to.com"

data_json = {}
posRate_json = {}

# --- data.jsonを開く --- #
with open("data/data.json", encoding=ENCODING) as file:
  data_json = json.load(file)
  print('Loaded data.json')

datenow = datetime.datetime.now()

# --- パスおよび変更日時の指定 --- #
PATHS = {
  "/": data_json["lastUpdate"],
  "/cards/details-of-confirmed-cases": data_json["main_summary"]["children"][0]["date"],
  "/cards/ibaraki-city-map-table": data_json["patients"]["date"],
  "/cards/ibaraki-corona-next": data_json["ibk_corona_next"]["date"],
  "/cards/number-of-tested": data_json["inspections_summary"]["date"],
  "/cards/roller/mito": data_json["mito_roller"]["date"],
  "/cards/roller/tsukuba-amakubo": data_json["tsukuba_amakubo_roller"]["date"],
  "/about": "2020/07/24 18:10",
  "/contacts": "2020/07/24 18:10",
  "/flow": "2020/07/24 18:10",
  "/helpus": "2020/07/24 18:10",
  "/otherpref": "{} 12:00".format(datenow.strftime('%Y/%m/%d')),  # 毎日12時更新なのでこれ
}

WAVEPATHS = {
  "number-of-confirmed-cases": data_json["patients_summary"]["date"],
  "attributes-of-confirmed-cases": data_json["patients"]["date"],
  "number-of-reports-to-covid19-telephone-advisory-center": data_json["contacts"]["date"],
  "number-of-inspection-persons": data_json["inspection_persons"]["date"],
  "ibaraki-city-table": data_json["patients"]["date"],
  "number-of-recovered": data_json["recovered_summary"]["date"],
  "number-of-deaths": data_json["deaths_summary"]["date"],
  "positive-rate":data_json["positiveRate"]["date"],
  "increase-ratio-of-confirmed-cases-by-daily": data_json["patients_summary"]["date"],
  "number-of-confirmed-cases-by-age": data_json["patients_summary"]["date"],
  "untracked-rate": data_json["patients_summary"]["date"],
}

def write(result,host,path,lang,updatedAt):
  if lang == "ja":
    result.write('<url><loc>{}{}</loc>'.format(host,path))
  else:
    result.write('<url><loc>{}/{}{}</loc>'.format(host, lang, path))
  result.write('<lastmod>{}</lastmod>'.format(datetime.datetime.strptime(updatedAt, "%Y/%m/%d %H:%M").strftime("%Y-%m-%dT%H:%M+09:00")))
  result.write('<changefreq>daily</changefreq>')
  result.write('<mobile:mobile />')
  for lng in ("ja", "en"):
    if lng == "ja":
      result.write('<xhtml:link rel="alternative" hreflang="{}" href="{}{}" />'.format(lng,HOST,path))
    else:
      result.write('<xhtml:link rel="alternative" hreflang="{}" href="{}/{}{}" />'.format(lng,HOST,lng,path))
  result.write('</url>')
  print("Path: {} (Updated at {}) ...done!".format(path, updatedAt))

# --- Sitemap.xmlの作成部分 --- #
for lang in ("ja", "en", "ja-basic"):
  print('----------')
  print("Lang: {}".format(lang))
  # --- なければ作成 --- #
  if not os.path.exists("sitemap/{}".format(lang)):
    os.mkdir("sitemap/{}".format(lang))
    print('Language directory created')
  # --- なければ自動生成される。あればそれを開く --- #
  with open("sitemap/{}/sitemap.xml".format(lang), mode="a", encoding=ENCODING) as result:
    result.write('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:xhtml="http://www.w3.org/1999/xhtml">')
    for path, updatedAt in PATHS.items():
      write(result,HOST,path,lang,updatedAt)
    for wave in range(2):
      for path, updatedAt in WAVEPATHS.items():
        write(result,HOST,'/cards/wave{}/{}'.format(wave+1,path),lang,updatedAt)
    result.write('</urlset>')

print('----------')
print('All done!')