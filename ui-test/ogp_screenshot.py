import json
import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
  os.mkdir("ogp")

# cardRoutesSettings.jsonで編集。幅を959pxにした後、高さを以下のJSコードで取得。
# document.querySelector('html').style.overflow = "hidden";
# console.log(document.querySelector('.embed').offsetHeight)

f = open('assets/json/cardRoutesSettings.json', 'r')
card_data = json.load(f)

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

for lang in ("ja", "en", "ja-basic"):
    if not os.path.exists("ogp/{}".format(lang)):
        os.mkdir("ogp/{}".format(lang))
    for value in card_data:
        driver.set_window_size(*(value['ogpWidth'], value['ogpHeight']))
        path = value['path']
        driver.get(
            "http://localhost:8000{}?ogp=true".format(
                path if lang == "ja" else "/{}{}".format(lang, path)
            )
        )
        path = path.replace("/cards/", "").replace("/", "_")
        if ('heatmap' in path):
            time.sleep(20)
        driver.save_screenshot(
            "ogp/{}.png".format(
                path if lang == "ja" else "{}/{}".format(lang, path)
            )
        )
