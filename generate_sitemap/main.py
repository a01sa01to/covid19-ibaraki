# coding=utf-8

import datetime
import json

with open('data/data.json','r',encoding="UTF-8") as f:
  lastUpdate = json.load(f)

PAGES = [
  ['',lastUpdate["lastUpdate"]],
  ['/about',lastUpdate["lastUpdate"]],
  ['/contacts',lastUpdate["lastUpdate"]],
  ['/emergency-measures',lastUpdate["lastUpdate"]],
  ['/otherpref',lastUpdate["lastUpdate"]],
  ['/sitemap',lastUpdate["lastUpdate"]],

  ['/cards/infection-medical-care-provision-status',lastUpdate["lastUpdate"]],
  ['/cards/details-of-confirmed-cases',lastUpdate["lastUpdate"]],
  ['/cards/number-of-confirmed-cases',lastUpdate["patients_summary"]["date"]],
  ['/cards/attributes-of-confirmed-cases',lastUpdate["patients_summary"]["date"]],
  ['/cards/number-of-confirmed-cases-by-municipalities',lastUpdate["patients_city"]["date"]],
  ['/cards/ibaraki-graphical-map',lastUpdate["patients_city"]["date"]],
  ['/cards/number-of-recovered',lastUpdate["recovered_summary"]["date"]],
  ['/cards/number-of-deaths',lastUpdate["deaths_summary"]["date"]],
  ['/cards/ibaraki-corona-next',lastUpdate["ibk_corona_next"]["date"]],
  ['/cards/number-of-confirmed-cases-by-age',lastUpdate["patients_age"]["date"]],
  ['/cards/untracked-rate',lastUpdate["patients_summary"]["date"]],
  ['/cards/infection-status-by-national-index',lastUpdate["ibk_corona_next"]["date"]],
  ['/cards/number-of-mutant-confirmed-cases',lastUpdate["mutant_summary"]["date"]],

  ['/cards/number-of-inspection-persons',lastUpdate["lastUpdate"]],
  ['/cards/number-of-tested',lastUpdate["inspections_summary"]["date"]],
  ['/cards/number-of-reports-to-covid19-telephone-advisory-center',lastUpdate["contacts"]["date"]],
  ['/cards/number-of-mutant-inspection-persons',lastUpdate["mutant_inspections"]["date"]],

  ['/cards/vaccination-1st',lastUpdate["lastUpdate"]],
  ['/cards/vaccination-2nd',lastUpdate["lastUpdate"]],
]

sitemapContent = '''
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
   xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
   xmlns:xhtml="http://www.w3.org/1999/xhtml"
   xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
   xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
   xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
'''

for page in PAGES:
  formattedDate = datetime.datetime.strptime(page[1], '%Y/%m/%d %H:%M').strftime("%Y-%m-%dT%H:%M:%S+09:00")
  pagePath = page[0]
  sitemapContent += '''
  <url>
    <loc>https://ibaraki.stopcovid19.jp{}/</loc>
    <lastmod>{}</lastmod>
    <changefreq>daily</changefreq>
    <xhtml:link rel="alternate" hreflang="en" href="https://ibaraki.stopcovid19.jp/en{}/" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://ibaraki.stopcovid19.jp{}/" />
    <xhtml:link rel="alternate" hreflang="ja-basic" href="https://ibaraki.stopcovid19.jp/ja-basic{}/" />
  </url>
  <url>
    <loc>https://ibaraki.stopcovid19.jp/en{}/</loc>
    <lastmod>{}</lastmod>
    <changefreq>daily</changefreq>
    <xhtml:link rel="alternate" hreflang="en" href="https://ibaraki.stopcovid19.jp/en{}/" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://ibaraki.stopcovid19.jp{}/" />
    <xhtml:link rel="alternate" hreflang="ja-basic" href="https://ibaraki.stopcovid19.jp/ja-basic{}/" />
  </url>
  <url>
    <loc>https://ibaraki.stopcovid19.jp/ja-basic{}/</loc>
    <lastmod>{}</lastmod>
    <changefreq>daily</changefreq>
    <xhtml:link rel="alternate" hreflang="en" href="https://ibaraki.stopcovid19.jp/en{}/" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://ibaraki.stopcovid19.jp{}/" />
    <xhtml:link rel="alternate" hreflang="ja-basic" href="https://ibaraki.stopcovid19.jp/ja-basic{}/" />
  </url>
  '''.format(*([pagePath,formattedDate,pagePath,pagePath,pagePath] * 3))

sitemapContent += '</urlset>'

sitemapContent = sitemapContent.replace("  ","").replace("\n","")

with open('dist/sitemap.xml','w',encoding="UTF-8") as f:
  f.write(sitemapContent)
