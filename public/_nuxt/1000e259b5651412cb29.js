(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(s,e,t){"use strict";t.d(e,"a",function(){return n});var a=t(301);t(302),t(303),t(304);a.apps.length||a.initializeApp({apiKey:"AIzaSyDHRV643GlgRPO8XORc0uJ6WJ6NE4xP9Dw",authDomain:"super-league-7c6d4.firebaseapp.com",databaseURL:"https://super-league-7c6d4.firebaseio.com",projectId:"super-league-7c6d4",storageBucket:"super-league-7c6d4.appspot.com",messagingSenderId:"55504288873"});var r=a.firestore();r.settings({timestampsInSnapshots:!0});a.auth();var n=r},299:function(s,e,t){"use strict";t.d(e,"a",function(){return n}),t.d(e,"b",function(){return j});var a=t(173),r=t.n(a),n=function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(t,a){if(!t.hasOwnProperty(s)||!a.hasOwnProperty(s))return 0;var r="string"==typeof t[s]?t[s].toUpperCase():t[s],n="string"==typeof a[s]?a[s].toUpperCase():a[s],j=0;return r>n?j=1:r<n&&(j=-1),"desc"==e?-1*j:j}},j=function(s){var e=new Date(1e3*s.seconds);return r()(e).format("YYYY-MM-DD hh:mm A")}},305:function(s,e,t){var a={"./af":174,"./af.js":174,"./ar":175,"./ar-dz":176,"./ar-dz.js":176,"./ar-kw":177,"./ar-kw.js":177,"./ar-ly":178,"./ar-ly.js":178,"./ar-ma":179,"./ar-ma.js":179,"./ar-sa":180,"./ar-sa.js":180,"./ar-tn":181,"./ar-tn.js":181,"./ar.js":175,"./az":182,"./az.js":182,"./be":183,"./be.js":183,"./bg":184,"./bg.js":184,"./bm":185,"./bm.js":185,"./bn":186,"./bn.js":186,"./bo":187,"./bo.js":187,"./br":188,"./br.js":188,"./bs":189,"./bs.js":189,"./ca":190,"./ca.js":190,"./cs":191,"./cs.js":191,"./cv":192,"./cv.js":192,"./cy":193,"./cy.js":193,"./da":194,"./da.js":194,"./de":195,"./de-at":196,"./de-at.js":196,"./de-ch":197,"./de-ch.js":197,"./de.js":195,"./dv":198,"./dv.js":198,"./el":199,"./el.js":199,"./en-au":200,"./en-au.js":200,"./en-ca":201,"./en-ca.js":201,"./en-gb":202,"./en-gb.js":202,"./en-ie":203,"./en-ie.js":203,"./en-il":204,"./en-il.js":204,"./en-nz":205,"./en-nz.js":205,"./eo":206,"./eo.js":206,"./es":207,"./es-do":208,"./es-do.js":208,"./es-us":209,"./es-us.js":209,"./es.js":207,"./et":210,"./et.js":210,"./eu":211,"./eu.js":211,"./fa":212,"./fa.js":212,"./fi":213,"./fi.js":213,"./fo":214,"./fo.js":214,"./fr":215,"./fr-ca":216,"./fr-ca.js":216,"./fr-ch":217,"./fr-ch.js":217,"./fr.js":215,"./fy":218,"./fy.js":218,"./gd":219,"./gd.js":219,"./gl":220,"./gl.js":220,"./gom-latn":221,"./gom-latn.js":221,"./gu":222,"./gu.js":222,"./he":223,"./he.js":223,"./hi":224,"./hi.js":224,"./hr":225,"./hr.js":225,"./hu":226,"./hu.js":226,"./hy-am":227,"./hy-am.js":227,"./id":228,"./id.js":228,"./is":229,"./is.js":229,"./it":230,"./it.js":230,"./ja":231,"./ja.js":231,"./jv":232,"./jv.js":232,"./ka":233,"./ka.js":233,"./kk":234,"./kk.js":234,"./km":235,"./km.js":235,"./kn":236,"./kn.js":236,"./ko":237,"./ko.js":237,"./ku":238,"./ku.js":238,"./ky":239,"./ky.js":239,"./lb":240,"./lb.js":240,"./lo":241,"./lo.js":241,"./lt":242,"./lt.js":242,"./lv":243,"./lv.js":243,"./me":244,"./me.js":244,"./mi":245,"./mi.js":245,"./mk":246,"./mk.js":246,"./ml":247,"./ml.js":247,"./mn":248,"./mn.js":248,"./mr":249,"./mr.js":249,"./ms":250,"./ms-my":251,"./ms-my.js":251,"./ms.js":250,"./mt":252,"./mt.js":252,"./my":253,"./my.js":253,"./nb":254,"./nb.js":254,"./ne":255,"./ne.js":255,"./nl":256,"./nl-be":257,"./nl-be.js":257,"./nl.js":256,"./nn":258,"./nn.js":258,"./pa-in":259,"./pa-in.js":259,"./pl":260,"./pl.js":260,"./pt":261,"./pt-br":262,"./pt-br.js":262,"./pt.js":261,"./ro":263,"./ro.js":263,"./ru":264,"./ru.js":264,"./sd":265,"./sd.js":265,"./se":266,"./se.js":266,"./si":267,"./si.js":267,"./sk":268,"./sk.js":268,"./sl":269,"./sl.js":269,"./sq":270,"./sq.js":270,"./sr":271,"./sr-cyrl":272,"./sr-cyrl.js":272,"./sr.js":271,"./ss":273,"./ss.js":273,"./sv":274,"./sv.js":274,"./sw":275,"./sw.js":275,"./ta":276,"./ta.js":276,"./te":277,"./te.js":277,"./tet":278,"./tet.js":278,"./tg":279,"./tg.js":279,"./th":280,"./th.js":280,"./tl-ph":281,"./tl-ph.js":281,"./tlh":282,"./tlh.js":282,"./tr":283,"./tr.js":283,"./tzl":284,"./tzl.js":284,"./tzm":285,"./tzm-latn":286,"./tzm-latn.js":286,"./tzm.js":285,"./ug-cn":287,"./ug-cn.js":287,"./uk":288,"./uk.js":288,"./ur":289,"./ur.js":289,"./uz":290,"./uz-latn":291,"./uz-latn.js":291,"./uz.js":290,"./vi":292,"./vi.js":292,"./x-pseudo":293,"./x-pseudo.js":293,"./yo":294,"./yo.js":294,"./zh-cn":295,"./zh-cn.js":295,"./zh-hk":296,"./zh-hk.js":296,"./zh-tw":297,"./zh-tw.js":297};function r(s){var e=n(s);return t(e)}function n(s){var e=a[s];if(!(e+1)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e}r.keys=function(){return Object.keys(a)},r.resolve=n,s.exports=r,r.id=305},325:function(s,e,t){"use strict";t.r(e);t(18),t(46);var a=t(6),r=t.n(a),n=t(298),j={methods:{formatTimestamp:t(299).b},asyncData:function(){var s=r()(regeneratorRuntime.mark(function s(e){var t,a,r;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e.app,e.params,e.error,t=n.a.collection("games").where("is_completed","==",!0),r=[],s.prev=3,s.next=6,t.get();case 6:(a=s.sent).size>0&&a.forEach(function(s){r.push(s.data())}),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(3),console.error(s.t0);case 13:return s.abrupt("return",{games:r});case 14:case"end":return s.stop()}},s,this,[[3,10]])}));return function(e){return s.apply(this,arguments)}}()},i=t(17),o=Object(i.a)(j,function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("v-layout",{attrs:{column:"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md10:"",lg10:""}},[t("div",{staticClass:"text-xs-center"}),s._v(" "),t("v-expansion-panel",{staticClass:"xs12 sm8 md10 lg10",attrs:{popout:""}},s._l(s.games,function(e,a){return t("v-expansion-panel-content",{key:a},[t("div",{attrs:{slot:"header"},slot:"header"},[t("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[t("v-flex",{staticClass:"text-xs-right",attrs:{xs4:"",sm4:"",md4:"",lg4:""}},[s._v(s._s(e.home.name))]),s._v(" "),t("v-flex",{staticClass:"text-xs-center",attrs:{xs4:"",sm4:"",md4:"",lg4:""}},[s._v(s._s(s.formatTimestamp(e.start)))]),s._v(" "),t("v-flex",{staticClass:"text-xs-left",attrs:{xs4:"",sm4:"",md4:"",lg4:""}},[s._v(s._s(e.away.name))])],1)],1),s._v(" "),t("v-card",[t("v-card-text",[s._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])],1)],1)}),1)],1)],1)},[],!1,null,null,null);o.options.__file="result.vue";e.default=o.exports}}]);