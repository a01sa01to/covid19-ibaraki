import os
import glob
import json
import datetime

if not os.path.exists("sitemap"):
  os.mkdir("sitemap")

CHECK_DIR = ["data"]
ENCODING = "UTF-8"
JSON_FILES = ["data.json"]
lastUpdate = ""
data_json = {}


for cdir in CHECK_DIR:
  cdir = os.path.join(os.pardir, os.pardir, cdir)

  json_files = glob.glob(cdir + os.sep + "**" + os.sep + "*.json", recursive=True)
  # 各jsonファイルについて処理
  for path in json_files:
    file_name = os.path.basename(path)
    # jsonファイルが調べるべきjsonであるか
    if file_name in JSON_FILES:
      with open(path, encoding=ENCODING) as file:
        # jsonを読み込み
        json_content = json.load(file)
        # タグリストを生成
        if file_name == JSON_FILES[0]:  # data.jsonの場合
          data_json = json_content

HOSTS = [
  "https://ibaraki.stopcovid19.jp",
  "https://covid19-ibk-dev.netlify.app"
]

PATHS = {
  "/": data_json.lastUpdate,
  "/cards/details-of-confirmed-cases": data_json.main_summary.children[0].date,
  "/cards/number-of-confirmed-cases": data_json.patients.date,
  "/cards/attributes-of-confirmed-cases": data_json.patients.date,
  "/cards/number-of-reports-to-covid19-telephone-advisory-center": data_json.contacts.date,
  "/cards/number-of-inspection-persons": data_json.inspection_persons.date,
  "/cards/ibaraki-city-table": data_json.patients.date,
  "/cards/ibaraki-city-map-table": data_json.patients.date,
  "/cards/number-of-recovered": data_json.recovered_summary.date,
  "/cards/number-of-deaths": data_json.deaths_summary.date,
  "/about": "2020/05/15 18:00",
  "/contacts": "2020/05/15 18:00",
  "/flow": "2020/05/15 18:00",
  "/helpus": "2020/05/15 18:00",
  "/otherpref": "2020/05/15 18:00",
  "/parent": "2020/05/15 18:00",
  "/worker": "2020/05/15 18:00"
}

for lang in ("ja", "en", "ja-basic"):
  if not os.path.exists("sitemap/{}".format(lang)):
    os.mkdir("sitemap/{}".format(lang))
  with open("sitemap/{}/sitemap.xml".format(lang), mode="a", encoding=ENCODING) as result:
    result.write('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:xhtml="http://www.w3.org/1999/xhtml">')
    for path, updatedAt in PATHS.items():
      if lang == "ja":
        result.write('<url><loc>https://ibaraki.stopcovid19.jp{}</loc>'.format(path))
      else:
        result.write('<url><loc>https://ibaraki.stopcovid19.jp/{}{}</loc>'.format(lang, path))
      result.write('<lastmod>{}</lastmod>'.format(datetime.datetime.strptime(updatedAt, "%Y/%m/%d %H:%M").strftime("%Y-%m-%d")))
      result.write('<changefreq>daily</changefreq>')
      result.write('<mobile:mobile />')
      result.write('</url>')
    result.write('</urlset>')