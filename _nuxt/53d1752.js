(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{351:function(t,e,o){o(4)({target:"Math",stat:!0},{sign:o(234)})},354:function(t,e,o){"use strict";o(53);var d=o(21);function l(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var n={inserted:function(t,e){var o=e.modifiers||{},n=e.value,c="object"===Object(d.a)(n)?n:{handler:n,options:{}},r=c.handler,h=c.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;if(t._observe){if(r&&(!o.quiet||t._observe.init)){var n=Boolean(e.find((function(t){return t.isIntersecting})));r(e,d,n)}t._observe.init&&o.once?l(t):t._observe.init=!0}}),h);t._observe={init:!1,observer:v},v.observe(t)},unbind:l};e.a=n},358:function(t){t.exports=JSON.parse('{"contacts":{"date":"2020/05/05 23:59","data":[{"date":"2020-01-31","total":114},{"date":"2020-02-03","total":136},{"date":"2020-02-04","total":107},{"date":"2020-02-05","total":85},{"date":"2020-02-06","total":75},{"date":"2020-02-07","total":72},{"date":"2020-02-10","total":76},{"date":"2020-02-12","total":55},{"date":"2020-02-13","total":77},{"date":"2020-02-14","total":154},{"date":"2020-02-17","total":295},{"date":"2020-02-18","total":307},{"date":"2020-02-19","total":256},{"date":"2020-02-20","total":230},{"date":"2020-02-21","total":281},{"date":"2020-02-25","total":505},{"date":"2020-02-26","total":451},{"date":"2020-02-27","total":456},{"date":"2020-02-28","total":396},{"date":"2020-03-02","total":585},{"date":"2020-03-03","total":440},{"date":"2020-03-04","total":422},{"date":"2020-03-05","total":369},{"date":"2020-03-06","total":396},{"date":"2020-03-09","total":514},{"date":"2020-03-10","total":387},{"date":"2020-03-11","total":303},{"date":"2020-03-12","total":319},{"date":"2020-03-13","total":325},{"date":"2020-03-16","total":442},{"date":"2020-03-17","total":593},{"date":"2020-03-18","total":809},{"date":"2020-03-19","total":1058},{"date":"2020-03-20","total":204},{"date":"2020-03-21","total":125},{"date":"2020-03-22","total":192},{"date":"2020-03-23","total":688},{"date":"2020-03-24","total":603},{"date":"2020-03-25","total":681},{"date":"2020-03-26","total":768},{"date":"2020-03-27","total":803},{"date":"2020-03-28","total":260},{"date":"2020-03-29","total":259},{"date":"2020-03-30","total":1234},{"date":"2020-03-31","total":1006},{"date":"2020-04-01","total":1199},{"date":"2020-04-02","total":1368},{"date":"2020-04-03","total":1389},{"date":"2020-04-04","total":265},{"date":"2020-04-05","total":278},{"date":"2020-04-06","total":1722},{"date":"2020-04-07","total":1638},{"date":"2020-04-08","total":1485},{"date":"2020-04-09","total":1441},{"date":"2020-04-10","total":1313},{"date":"2020-04-11","total":169},{"date":"2020-04-12","total":257},{"date":"2020-04-13","total":1804},{"date":"2020-04-14","total":1316},{"date":"2020-04-15","total":1357},{"date":"2020-04-16","total":1396},{"date":"2020-04-17","total":1350},{"date":"2020-04-18","total":251},{"date":"2020-04-19","total":245},{"date":"2020-04-20","total":1739},{"date":"2020-04-21","total":1375},{"date":"2020-04-22","total":1261},{"date":"2020-04-23","total":1032},{"date":"2020-04-24","total":1219},{"date":"2020-04-25","total":278},{"date":"2020-04-26","total":264},{"date":"2020-04-27","total":1205},{"date":"2020-04-28","total":872},{"date":"2020-04-29","total":294},{"date":"2020-04-30","total":1092},{"date":"2020-05-01","total":850},{"date":"2020-05-02","total":287},{"date":"2020-05-03","total":237},{"date":"2020-05-04","total":298},{"date":"2020-05-05","total":256}]},"patients_age":{"data":[{"age":"10歳未満","close":2,"new":0},{"age":"10代","close":4,"new":1},{"age":"20代","close":21,"new":12},{"age":"30代","close":13,"new":13},{"age":"40代","close":18,"new":8},{"age":"50代","close":14,"new":7},{"age":"60代","close":9,"new":7},{"age":"70代","close":9,"new":6},{"age":"80代","close":14,"new":1},{"age":"90代","close":9,"new":0},{"age":"100歳以上","close":0,"new":0}],"date":"2020/05/05 23:59"},"patients_city":{"data":[{"city":"利根町","total":0},{"city":"境町","total":13},{"city":"五霞町","total":0},{"city":"八千代町","total":0},{"city":"河内町","total":0},{"city":"阿見町","total":3},{"city":"美浦村","total":1},{"city":"大子町","total":0},{"city":"東海村","total":0},{"city":"城里町","total":0},{"city":"大洗町","total":0},{"city":"茨城町","total":0},{"city":"小美玉市","total":1},{"city":"つくばみらい市","total":9},{"city":"鉾田市","total":0},{"city":"行方市","total":0},{"city":"神栖市","total":21},{"city":"桜川市","total":3},{"city":"かすみがうら市","total":0},{"city":"稲敷市","total":0},{"city":"坂東市","total":1},{"city":"筑西市","total":2},{"city":"那珂市","total":5},{"city":"常陸大宮市","total":0},{"city":"守谷市","total":7},{"city":"潮来市","total":0},{"city":"鹿嶋市","total":1},{"city":"ひたちなか市","total":3},{"city":"つくば市","total":27},{"city":"牛久市","total":5},{"city":"取手市","total":9},{"city":"笠間市","total":0},{"city":"北茨城市","total":0},{"city":"高萩市","total":0},{"city":"常陸太田市","total":2},{"city":"常総市","total":1},{"city":"下妻市","total":0},{"city":"龍ケ崎市","total":8},{"city":"結城市","total":3},{"city":"石岡市","total":0},{"city":"古河市","total":15},{"city":"土浦市","total":6},{"city":"日立市","total":1},{"city":"水戸市","total":10}],"date":"2020/05/05 23:59"},"patients_summary":{"date":"2020/05/05 23:59","data":[{"date":"2020-03-16","total":0,"close":0},{"date":"2020-03-17","total":1,"close":0},{"date":"2020-03-18","total":1,"close":0},{"date":"2020-03-19","total":1,"close":0},{"date":"2020-03-20","total":0,"close":0},{"date":"2020-03-21","total":0,"close":0},{"date":"2020-03-22","total":0,"close":0},{"date":"2020-03-23","total":2,"close":1},{"date":"2020-03-24","total":5,"close":4},{"date":"2020-03-25","total":0,"close":0},{"date":"2020-03-26","total":0,"close":0},{"date":"2020-03-27","total":3,"close":2},{"date":"2020-03-28","total":3,"close":2},{"date":"2020-03-29","total":0,"close":0},{"date":"2020-03-30","total":4,"close":4},{"date":"2020-03-31","total":4,"close":3},{"date":"2020-04-01","total":18,"close":17},{"date":"2020-04-02","total":2,"close":0},{"date":"2020-04-03","total":10,"close":8},{"date":"2020-04-04","total":5,"close":2},{"date":"2020-04-05","total":5,"close":4},{"date":"2020-04-06","total":7,"close":6},{"date":"2020-04-07","total":6,"close":1},{"date":"2020-04-08","total":0,"close":0},{"date":"2020-04-09","total":4,"close":2},{"date":"2020-04-10","total":10,"close":3},{"date":"2020-04-11","total":10,"close":8},{"date":"2020-04-12","total":8,"close":7},{"date":"2020-04-13","total":1,"close":1},{"date":"2020-04-14","total":6,"close":3},{"date":"2020-04-15","total":3,"close":1},{"date":"2020-04-16","total":4,"close":4},{"date":"2020-04-17","total":8,"close":7},{"date":"2020-04-18","total":4,"close":3},{"date":"2020-04-19","total":4,"close":3},{"date":"2020-04-20","total":4,"close":3},{"date":"2020-04-21","total":3,"close":2},{"date":"2020-04-22","total":5,"close":2},{"date":"2020-04-23","total":2,"close":1},{"date":"2020-04-24","total":4,"close":4},{"date":"2020-04-25","total":3,"close":1},{"date":"2020-04-26","total":1,"close":1},{"date":"2020-04-27","total":0,"close":0},{"date":"2020-04-28","total":1,"close":1},{"date":"2020-04-29","total":1,"close":0},{"date":"2020-04-30","total":0,"close":0},{"date":"2020-05-01","total":2,"close":0},{"date":"2020-05-02","total":0,"close":0},{"date":"2020-05-03","total":0,"close":0},{"date":"2020-05-04","total":2,"close":1},{"date":"2020-05-05","total":1,"close":1}]},"recovered_summary":{"date":"2020/05/05 23:59","data":[{"date":"2020-04-01","total":0},{"date":"2020-04-02","total":1},{"date":"2020-04-03","total":0},{"date":"2020-04-04","total":1},{"date":"2020-04-05","total":0},{"date":"2020-04-06","total":0},{"date":"2020-04-07","total":2},{"date":"2020-04-08","total":2},{"date":"2020-04-09","total":2},{"date":"2020-04-10","total":0},{"date":"2020-04-11","total":1},{"date":"2020-04-12","total":1},{"date":"2020-04-13","total":0},{"date":"2020-04-14","total":0},{"date":"2020-04-15","total":2},{"date":"2020-04-16","total":0},{"date":"2020-04-17","total":2},{"date":"2020-04-18","total":2},{"date":"2020-04-19","total":0},{"date":"2020-04-20","total":0},{"date":"2020-04-21","total":3},{"date":"2020-04-22","total":2},{"date":"2020-04-23","total":4},{"date":"2020-04-24","total":0},{"date":"2020-04-25","total":4},{"date":"2020-04-26","total":2},{"date":"2020-04-27","total":1},{"date":"2020-04-28","total":1},{"date":"2020-04-29","total":1},{"date":"2020-04-30","total":11},{"date":"2020-05-01","total":6},{"date":"2020-05-02","total":9},{"date":"2020-05-03","total":5},{"date":"2020-05-04","total":4},{"date":"2020-05-05","total":2}]},"deaths_summary":{"date":"2020/05/05 23:59","data":[{"date":"2020-04-01","total":2},{"date":"2020-04-02","total":0},{"date":"2020-04-03","total":0},{"date":"2020-04-04","total":0},{"date":"2020-04-05","total":0},{"date":"2020-04-06","total":0},{"date":"2020-04-07","total":0},{"date":"2020-04-08","total":0},{"date":"2020-04-09","total":0},{"date":"2020-04-10","total":1},{"date":"2020-04-11","total":2},{"date":"2020-04-12","total":0},{"date":"2020-04-13","total":0},{"date":"2020-04-14","total":0},{"date":"2020-04-15","total":0},{"date":"2020-04-16","total":0},{"date":"2020-04-17","total":0},{"date":"2020-04-18","total":0},{"date":"2020-04-19","total":0},{"date":"2020-04-20","total":1},{"date":"2020-04-21","total":0},{"date":"2020-04-22","total":0},{"date":"2020-04-23","total":0},{"date":"2020-04-24","total":0},{"date":"2020-04-25","total":0},{"date":"2020-04-26","total":0},{"date":"2020-04-27","total":0},{"date":"2020-04-28","total":0},{"date":"2020-04-29","total":0},{"date":"2020-04-30","total":1},{"date":"2020-05-01","total":1},{"date":"2020-05-02","total":0},{"date":"2020-05-03","total":0},{"date":"2020-05-04","total":1},{"date":"2020-05-05","total":0}]},"inspection_persons":{"date":"2020/05/05 23:59","labels":["2020-01-26","2020-01-27","2020-01-28","2020-01-29","2020-01-30","2020-01-31","2020-02-01","2020-02-02","2020-02-03","2020-02-04","2020-02-05","2020-02-06","2020-02-07","2020-02-08","2020-02-09","2020-02-10","2020-02-11","2020-02-12","2020-02-13","2020-02-14","2020-02-15","2020-02-16","2020-02-17","2020-02-18","2020-02-19","2020-02-20","2020-02-21","2020-02-22","2020-02-23","2020-02-24","2020-02-25","2020-02-26","2020-02-27","2020-02-28","2020-02-29","2020-03-01","2020-03-02","2020-03-03","2020-03-04","2020-03-05","2020-03-06","2020-03-07","2020-03-08","2020-03-09","2020-03-10","2020-03-11","2020-03-12","2020-03-13","2020-03-14","2020-03-15","2020-03-16","2020-03-17","2020-03-18","2020-03-19","2020-03-20","2020-03-21","2020-03-22","2020-03-23","2020-03-24","2020-03-25","2020-03-26","2020-03-27","2020-03-28","2020-03-29","2020-03-30","2020-03-31","2020-04-01","2020-04-02","2020-04-03","2020-04-04","2020-04-05","2020-04-06","2020-04-07","2020-04-08","2020-04-09","2020-04-10","2020-04-11","2020-04-12","2020-04-13","2020-04-14","2020-04-15","2020-04-16","2020-04-17","2020-04-18","2020-04-19","2020-04-20","2020-04-21","2020-04-22","2020-04-23","2020-04-24","2020-04-25","2020-04-26","2020-04-27","2020-04-28","2020-04-29","2020-04-30","2020-05-01","2020-05-02","2020-05-03","2020-05-04","2020-05-05"],"datasets":[{"label":"検査実施人数","data":[1,1,1,2,1,3,1,0,0,3,1,1,1,0,0,1,0,0,1,5,5,6,14,6,6,13,14,10,5,3,14,16,27,29,27,9,18,19,29,21,31,23,12,13,31,25,22,28,16,5,12,18,24,32,26,13,9,15,71,27,56,51,69,40,40,112,125,104,124,123,44,126,132,97,117,85,160,32,44,122,113,157,85,91,53,67,119,88,108,78,115,46,32,83,107,59,92,84,56,39,38]}]},"positiveRate":{"date":"2020/05/05 23:59","data":[{"date":"2020-03-01","positive":0,"tested":9},{"date":"2020-03-02","positive":0,"tested":18},{"date":"2020-03-03","positive":0,"tested":19},{"date":"2020-03-04","positive":0,"tested":29},{"date":"2020-03-05","positive":0,"tested":21},{"date":"2020-03-06","positive":0,"tested":31},{"date":"2020-03-07","positive":0,"tested":23},{"date":"2020-03-08","positive":0,"tested":12},{"date":"2020-03-09","positive":0,"tested":13},{"date":"2020-03-10","positive":0,"tested":31},{"date":"2020-03-11","positive":0,"tested":25},{"date":"2020-03-12","positive":0,"tested":22},{"date":"2020-03-13","positive":0,"tested":28},{"date":"2020-03-14","positive":0,"tested":16},{"date":"2020-03-15","positive":0,"tested":5},{"date":"2020-03-16","positive":0,"tested":12},{"date":"2020-03-17","positive":1,"tested":18},{"date":"2020-03-18","positive":2,"tested":24},{"date":"2020-03-19","positive":0,"tested":32},{"date":"2020-03-20","positive":0,"tested":26},{"date":"2020-03-21","positive":0,"tested":13},{"date":"2020-03-22","positive":2,"tested":9},{"date":"2020-03-23","positive":5,"tested":15},{"date":"2020-03-24","positive":0,"tested":71},{"date":"2020-03-25","positive":0,"tested":27},{"date":"2020-03-26","positive":0,"tested":56},{"date":"2020-03-27","positive":3,"tested":51},{"date":"2020-03-28","positive":3,"tested":69},{"date":"2020-03-29","positive":0,"tested":40},{"date":"2020-03-30","positive":4,"tested":40},{"date":"2020-03-31","positive":4,"tested":112},{"date":"2020-04-01","positive":18,"tested":125},{"date":"2020-04-02","positive":2,"tested":104},{"date":"2020-04-03","positive":10,"tested":124},{"date":"2020-04-04","positive":5,"tested":123},{"date":"2020-04-05","positive":5,"tested":44},{"date":"2020-04-06","positive":7,"tested":126},{"date":"2020-04-07","positive":6,"tested":132},{"date":"2020-04-08","positive":0,"tested":97},{"date":"2020-04-09","positive":5,"tested":117},{"date":"2020-04-10","positive":9,"tested":85},{"date":"2020-04-11","positive":10,"tested":160},{"date":"2020-04-12","positive":8,"tested":32},{"date":"2020-04-13","positive":1,"tested":44},{"date":"2020-04-14","positive":6,"tested":122},{"date":"2020-04-15","positive":3,"tested":113},{"date":"2020-04-16","positive":4,"tested":157},{"date":"2020-04-17","positive":8,"tested":85},{"date":"2020-04-18","positive":4,"tested":91},{"date":"2020-04-19","positive":4,"tested":53},{"date":"2020-04-20","positive":4,"tested":67},{"date":"2020-04-21","positive":3,"tested":119},{"date":"2020-04-22","positive":5,"tested":88},{"date":"2020-04-23","positive":2,"tested":108},{"date":"2020-04-24","positive":4,"tested":78},{"date":"2020-04-25","positive":3,"tested":115},{"date":"2020-04-26","positive":1,"tested":46},{"date":"2020-04-27","positive":0,"tested":32},{"date":"2020-04-28","positive":1,"tested":83},{"date":"2020-04-29","positive":1,"tested":107},{"date":"2020-04-30","positive":0,"tested":59},{"date":"2020-05-01","positive":2,"tested":92},{"date":"2020-05-02","positive":0,"tested":84},{"date":"2020-05-03","positive":0,"tested":56},{"date":"2020-05-04","positive":2,"tested":39},{"date":"2020-05-05","positive":1,"tested":38}]}}')},384:function(t,e,o){t.exports=function(){"use strict";var s,t,i=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,e=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,o={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},d=function(s){return s instanceof u},l=function(s,t,i){return new u(s,i,t.$l)},n=function(s){return t.p(s)+"s"},u=function(){function u(s,t,i){var d=this;if(this.$d={},this.$l=i,t)return l(s*o[n(t)],this);if("number"==typeof s)return this.$ms=s,this.parseFromMilliseconds(),this;if("object"==typeof s)return Object.keys(s).forEach((function(t){d.$d[n(t)]=s[t]})),this.calMilliseconds(),this;if("string"==typeof s){var u=s.match(e);if(u)return this.$d.years=u[2],this.$d.months=u[3],this.$d.weeks=u[4],this.$d.days=u[5],this.$d.hours=u[6],this.$d.minutes=u[7],this.$d.seconds=u[8],this.calMilliseconds(),this}return this}var c=u.prototype;return c.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(s.$d[i]||0)*o[i]}),0)},c.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=Math.floor(s/31536e6),s%=31536e6,this.$d.months=Math.floor(s/2592e6),s%=2592e6,this.$d.days=Math.floor(s/864e5),s%=864e5,this.$d.hours=Math.floor(s/36e5),s%=36e5,this.$d.minutes=Math.floor(s/6e4),s%=6e4,this.$d.seconds=Math.floor(s/1e3),s%=1e3,this.$d.milliseconds=s},c.toISOString=function(){var s=this.$d.years?this.$d.years+"Y":"",t=this.$d.months?this.$d.months+"M":"",i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var e=i?i+"D":"",o=this.$d.hours?this.$d.hours+"H":"",d=this.$d.minutes?this.$d.minutes+"M":"",l=this.$d.seconds||0;this.$d.milliseconds&&(l+=this.$d.milliseconds/1e3);var n=l?l+"S":"",u="P"+s+t+e+(o||d||n?"T":"")+o+d+n;return"P"===u?"P0D":u},c.toJSON=function(){return this.toISOString()},c.format=function(s){var e=s||"YYYY-MM-DDTHH:mm:ss",o={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return e.replace(i,(function(s,t){return t||String(o[s])}))},c.as=function(s){return this.$ms/o[n(s)]},c.get=function(s){var t=this.$ms,i=n(s);return"milliseconds"===i?t%=1e3:t="weeks"===i?Math.floor(t/o[i]):this.$d[i],t},c.add=function(s,t,i){var e;return e=t?s*o[n(t)]:d(s)?s.$ms:l(s,this).$ms,l(this.$ms+e*(i?-1:1),this)},c.subtract=function(s,t){return this.add(s,t,!0)},c.locale=function(s){var t=this.clone();return t.$l=s,t},c.clone=function(){return l(this.$ms,this)},c.humanize=function(t){return s().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},u}();return function(i,e,o){s=o,t=o().$utils(),o.duration=function(s,t){var i=o.locale();return l(s,{$l:i},t)},o.isDuration=d;var n=e.prototype.add,u=e.prototype.subtract;e.prototype.add=function(s,t){return d(s)&&(s=s.asMilliseconds()),n.bind(this)(s,t)},e.prototype.subtract=function(s,t){return d(s)&&(s=s.asMilliseconds()),u.bind(this)(s,t)}}}()},583:function(t,e,o){"use strict";o.r(e);o(36);var d=o(10),l=o.n(d),n=o(384),c=o.n(n),r=o(381),h=o(358),v=o(347);l.a.extend(c.a);var f={components:{PositiveRateMixedChart:r.default},data:function(){for(var t=h.positiveRate,data=t.data,e=t.date,o=[],d=[],l=[],n=[],c=[],i=0;i<data.length;i++){for(var r=i<7?i+1:7,f=0,y=0,$=0;$<r;$++)f+=data[i-$].tested,y+=data[i-$].positive;var m=f/r,_=y/r;o.push(data[i].positive),l.push(_/m*100);var w=data[i].tested-data[i].positive;d.push(w<0?0:w),n.push(data[i].date),c.push(m)}var M=[o,d,c,l],S=[this.$t("陽性者数"),this.$t("陰性者数"),this.$t("検査人数（週平均）"),this.$t("陽性率")],k=S.map((function(t){return t}));return{date:e,positiveRateGraph:M,positiveRateLabels:n,positiveRateDataLabels:S,positiveRateTableLabels:k,getFormatter:function(t){return 2===t?Object(v.a)(1):3===t?Object(v.b)(1):Object(v.c)()}}}},y=o(6),$=o(32),m=o.n($),_=o(711),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[o("client-only",[o("positive-rate-mixed-chart",{attrs:{title:t.$t("検査の陽性率（第1波）"),"title-id":"wave1/positive-rate","info-titles":[t.$t("検査の陽性率"),t.$t("検査人数")],"chart-id":"wave1-positive-rate-chart","chart-data":t.positiveRateGraph,"get-formatter":t.getFormatter,date:t.date,labels:t.positiveRateLabels,unit:"%","option-unit":t.$t("人"),"data-labels":t.positiveRateDataLabels,"table-labels":t.positiveRateTableLabels},scopedSlots:t._u([{key:"description",fn:function(){return[o("ul",[o("li",[t._v("\n            "+t._s(t.$t("陽性率：陽性判明数の移動平均／（陽性判明数＋陰性判明数）の移動平均"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値をもとに算出し、折れ線グラフで示す（例えば、5月7日の陽性率は、5月1日から5月7日までの実績平均を用いて算出）"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("県が公表しておらず、検査実施人数が不明な日は、陽性者・陰性者ともに0名と表示される"))+"\n          ")]),t._v(" "),o("li",[t._v("\n            "+t._s(t.$t("民間検査機関、帰国者・接触者外来設置等医療機関、その他の検査機関による検査は含まれていない"))+"\n          ")])])]},proxy:!0},{key:"additionalDescription",fn:function(){return[o("ul",[o("li",[t._v("\n            "+t._s(t.$t("凡例をクリックすることにより、グラフを非表示にすることができます。もう一度クリックすると再表示します。"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{PositiveRateMixedChart:o(381).default}),m()(component,{VCol:_.a})}}]);