(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{347:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(82),n(235);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},373:function(t,e,n){"use strict";n.r(e);n(59),n(83),n(60);var o=n(0),r=n(343),l=n(345),c=n(344),d=o.a.extend({components:{DataView:r.default,DataViewDataSetPanel:l.default,OpenDataLink:c.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),y=n(6),m=n(32),f=n.n(m),h=n(713),component=Object(y.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"disable-sort":!0}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{DataViewDataSetPanel:n(345).default,OpenDataLink:n(344).default,DataView:n(343).default}),f()(component,{VDataTable:h.a})},383:function(t){t.exports=JSON.parse('[{"city":"利根町","Romaji":"Tone","Hiragana":"とねまち","population":15122,"area":"県南地域"},{"city":"境町","Romaji":"Sakai","Hiragana":"さかいまち","population":24098,"area":"県西地域"},{"city":"五霞町","Romaji":"Goka","Hiragana":"ごかまち","population":8176,"area":"県西地域"},{"city":"八千代町","Romaji":"Yachiyo","Hiragana":"やちよまち","population":20944,"area":"県西地域"},{"city":"河内町","Romaji":"Kawachi","Hiragana":"かわちまち","population":8316,"area":"県南地域"},{"city":"阿見町","Romaji":"Ami","Hiragana":"あみまち","population":47854,"area":"県南地域"},{"city":"美浦村","Romaji":"Miho","Hiragana":"みほむら","population":14517,"area":"県南地域"},{"city":"大子町","Romaji":"Daigo","Hiragana":"だいごむら","population":15755,"area":"県北地域"},{"city":"東海村","Romaji":"Tokai","Hiragana":"とうかいむら","population":37649,"area":"県北地域"},{"city":"城里町","Romaji":"Shirosato","Hiragana":"しろさとまち","population":18086,"area":"県央地域"},{"city":"大洗町","Romaji":"Oarai","Hiragana":"おおあらいまち","population":15847,"area":"県央地域"},{"city":"茨城町","Romaji":"Ibaraki","Hiragana":"いばらきまち","population":31539,"area":"県央地域"},{"city":"小美玉市","Romaji":"Omitama","Hiragana":"おみたまし","population":48801,"area":"県央地域"},{"city":"つくばみらい市","Romaji":"Tsukubamirai","Hiragana":"つくばみらいし","population":51026,"area":"県南地域"},{"city":"鉾田市","Romaji":"Hokota","Hiragana":"ほこたし","population":45958,"area":"鹿行地域"},{"city":"行方市","Romaji":"Namegata","Hiragana":"なめがたし","population":32065,"area":"鹿行地域"},{"city":"神栖市","Romaji":"Kamisu","Hiragana":"かみすし","population":95412,"area":"鹿行地域"},{"city":"桜川市","Romaji":"Sakuragawa","Hiragana":"さくらがわし","population":39021,"area":"県西地域"},{"city":"かすみがうら市","Romaji":"Kasumigaura","Hiragana":"かすみがうらし","population":40329,"area":"県南地域"},{"city":"稲敷市","Romaji":"Inashiki","Hiragana":"いなしきし","population":39238,"area":"県南地域"},{"city":"坂東市","Romaji":"Bando","Hiragana":"ばんどうし","population":51659,"area":"県西地域"},{"city":"筑西市","Romaji":"Chikusei","Hiragana":"ちくせいし","population":100118,"area":"県西地域"},{"city":"那珂市","Romaji":"Naka","Hiragana":"なかし","population":53127,"area":"県北地域"},{"city":"常陸大宮市","Romaji":"Hitachiomiya","Hiragana":"ひたちおおみやし","population":39209,"area":"県北地域"},{"city":"守谷市","Romaji":"Moriya","Hiragana":"もりやし","population":68615,"area":"県南地域"},{"city":"潮来市","Romaji":"Itako","Hiragana":"いたこし","population":27556,"area":"鹿行地域"},{"city":"鹿嶋市","Romaji":"Kashima","Hiragana":"かしまし","population":67177,"area":"鹿行地域"},{"city":"ひたちなか市","Romaji":"Hitachinaka","Hiragana":"ひたちなかし","population":154714,"area":"県北地域"},{"city":"つくば市","Romaji":"Tsukuba","Hiragana":"つくばし","population":243930,"area":"県南地域"},{"city":"牛久市","Romaji":"Ushiku","Hiragana":"うしくし","population":84609,"area":"県南地域"},{"city":"取手市","Romaji":"Toride","Hiragana":"とりでし","population":104251,"area":"県南地域"},{"city":"笠間市","Romaji":"Kasama","Hiragana":"かさまし","population":73781,"area":"県央地域"},{"city":"北茨城市","Romaji":"Kitaibaraki","Hiragana":"きたいばらきし","population":41713,"area":"県北地域"},{"city":"高萩市","Romaji":"Takahagi","Hiragana":"たかはぎし","population":27509,"area":"県北地域"},{"city":"常陸太田市","Romaji":"Hitachiota","Hiragana":"ひたちおおたし","population":47970,"area":"県北地域"},{"city":"常総市","Romaji":"Joso","Hiragana":"じょうそうし","population":59440,"area":"県西地域"},{"city":"下妻市","Romaji":"Shimotsuma","Hiragana":"しもつまし","population":41614,"area":"県西地域"},{"city":"龍ケ崎市","Romaji":"Ryuugasaki","Hiragana":"りゅうがさきし","population":76311,"area":"県南地域"},{"city":"結城市","Romaji":"Yuuki","Hiragana":"ゆうきし","population":50407,"area":"県西地域"},{"city":"石岡市","Romaji":"Ishioka","Hiragana":"いしおかし","population":72448,"area":"県南地域"},{"city":"古河市","Romaji":"Koga","Hiragana":"こがし","population":138516,"area":"県西地域"},{"city":"土浦市","Romaji":"Tsuchiura","Hiragana":"つちうらし","population":138099,"area":"県南地域"},{"city":"日立市","Romaji":"Hitachi","Hiragana":"ひたちし","population":174047,"area":"県北地域"},{"city":"水戸市","Romaji":"Mito","Hiragana":"みとし","population":269340,"area":"県央地域"}]')},548:function(t,e,n){"use strict";n.r(e);n(61),n(59),n(36),n(82),n(235),n(60);var o=n(10),r=n.n(o),l=n(383),c=n(123),d=n(373),y=n(347),m=Object(y.a)(),f={components:{ConfirmedCasesByMunicipalitiesTable:d.default},data:function(){var t=this,e=c.patients_city,data=e.data,n=e.date,o=r()(n).format("YYYY/MM/DD HH:mm"),d={headers:[],datasets:[]};return"ja"===this.$i18n.locale?d.headers=[{text:this.$t("地域"),value:"area"},{text:this.$t("市町村"),value:"label"},{text:this.$t("ふりがな"),value:"ruby"},{text:this.$t("陽性者数累計"),value:"count"},{text:this.$t("陽性者数（直近1週間）"),value:"countRecent"}]:d.headers=[{text:this.$t("地域"),value:"area"},{text:this.$t("市町村"),value:"label"},{text:this.$t("陽性者数累計"),value:"count"},{text:this.$t("陽性者数（直近1週間）"),value:"countRecent"}],data.forEach((function(t){t.ruby=l.filter((function(e){return t.city===e.city}))[0].Hiragana,t.area=l.filter((function(e){return t.city===e.city}))[0].area,t.population=l.filter((function(e){return t.city===e.city}))[0].population,t.rate=Number(t.recent/t.population*1e4)})),data.sort((function(a,b){return a.total===b.total?a.recent>b.recent?-1:1:a.total>b.total?-1:1})),d.datasets=data.map((function(e){var area=t.$t(e.area),label=t.$t(e.city),n=m(e.total),o=e.rate.toFixed(3);return"ja"===t.$i18n.locale?{area:area,ruby:t.$t(e.ruby),label:label,count:n,countRecent:o}:{area:area,label:label,count:n,countRecent:o}})),{date:o,municipalitiesTable:d,info:{sText:this.$t("{date}の累計",{date:this.$d(new Date(n),"dateWithoutYear")})}}}},h=n(6),H=n(32),j=n.n(H),R=n(711),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("confirmed-cases-by-municipalities-table",{attrs:{title:t.$t("陽性者数（市町村別）"),"title-id":"number-of-confirmed-cases-by-municipalities","chart-data":t.municipalitiesTable,date:t.date,info:t.info,url:"https://opendata.a01sa01to.com/covid19_ibaraki/patients"},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("「陽性者数（直近1週間）」は、各市町村の人口1万人あたりの陽性者である"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{ConfirmedCasesByMunicipalitiesTable:n(373).default}),j()(component,{VCol:R.a})}}]);