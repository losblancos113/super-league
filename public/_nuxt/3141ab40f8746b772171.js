(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(s,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"c",function(){return j}),e.d(t,"b",function(){return o});var n=e(192),r=e.n(n),a=function(s){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(e,n){if(!e.hasOwnProperty(s)||!n.hasOwnProperty(s))return 0;var r="string"==typeof e[s]?e[s].toUpperCase():e[s],a="string"==typeof n[s]?n[s].toUpperCase():n[s],j=0;return r>a?j=1:r<a&&(j=-1),"desc"==t?-1*j:j}},j=function(s){var t=new Date(1e3*s.seconds);return r()(t).format("YYYY-MM-DD hh:mm A")},o=function(s){return r()(s).format("YYYY-MM-DD hh:mm A")}},324:function(s,t,e){var n={"./af":194,"./af.js":194,"./ar":195,"./ar-dz":196,"./ar-dz.js":196,"./ar-kw":197,"./ar-kw.js":197,"./ar-ly":198,"./ar-ly.js":198,"./ar-ma":199,"./ar-ma.js":199,"./ar-sa":200,"./ar-sa.js":200,"./ar-tn":201,"./ar-tn.js":201,"./ar.js":195,"./az":202,"./az.js":202,"./be":203,"./be.js":203,"./bg":204,"./bg.js":204,"./bm":205,"./bm.js":205,"./bn":206,"./bn.js":206,"./bo":207,"./bo.js":207,"./br":208,"./br.js":208,"./bs":209,"./bs.js":209,"./ca":210,"./ca.js":210,"./cs":211,"./cs.js":211,"./cv":212,"./cv.js":212,"./cy":213,"./cy.js":213,"./da":214,"./da.js":214,"./de":215,"./de-at":216,"./de-at.js":216,"./de-ch":217,"./de-ch.js":217,"./de.js":215,"./dv":218,"./dv.js":218,"./el":219,"./el.js":219,"./en-SG":220,"./en-SG.js":220,"./en-au":221,"./en-au.js":221,"./en-ca":222,"./en-ca.js":222,"./en-gb":223,"./en-gb.js":223,"./en-ie":224,"./en-ie.js":224,"./en-il":225,"./en-il.js":225,"./en-nz":226,"./en-nz.js":226,"./eo":227,"./eo.js":227,"./es":228,"./es-do":229,"./es-do.js":229,"./es-us":230,"./es-us.js":230,"./es.js":228,"./et":231,"./et.js":231,"./eu":232,"./eu.js":232,"./fa":233,"./fa.js":233,"./fi":234,"./fi.js":234,"./fo":235,"./fo.js":235,"./fr":236,"./fr-ca":237,"./fr-ca.js":237,"./fr-ch":238,"./fr-ch.js":238,"./fr.js":236,"./fy":239,"./fy.js":239,"./ga":240,"./ga.js":240,"./gd":241,"./gd.js":241,"./gl":242,"./gl.js":242,"./gom-latn":243,"./gom-latn.js":243,"./gu":244,"./gu.js":244,"./he":245,"./he.js":245,"./hi":246,"./hi.js":246,"./hr":247,"./hr.js":247,"./hu":248,"./hu.js":248,"./hy-am":249,"./hy-am.js":249,"./id":250,"./id.js":250,"./is":251,"./is.js":251,"./it":252,"./it-ch":253,"./it-ch.js":253,"./it.js":252,"./ja":254,"./ja.js":254,"./jv":255,"./jv.js":255,"./ka":256,"./ka.js":256,"./kk":257,"./kk.js":257,"./km":258,"./km.js":258,"./kn":259,"./kn.js":259,"./ko":260,"./ko.js":260,"./ku":261,"./ku.js":261,"./ky":262,"./ky.js":262,"./lb":263,"./lb.js":263,"./lo":264,"./lo.js":264,"./lt":265,"./lt.js":265,"./lv":266,"./lv.js":266,"./me":267,"./me.js":267,"./mi":268,"./mi.js":268,"./mk":269,"./mk.js":269,"./ml":270,"./ml.js":270,"./mn":271,"./mn.js":271,"./mr":272,"./mr.js":272,"./ms":273,"./ms-my":274,"./ms-my.js":274,"./ms.js":273,"./mt":275,"./mt.js":275,"./my":276,"./my.js":276,"./nb":277,"./nb.js":277,"./ne":278,"./ne.js":278,"./nl":279,"./nl-be":280,"./nl-be.js":280,"./nl.js":279,"./nn":281,"./nn.js":281,"./pa-in":282,"./pa-in.js":282,"./pl":283,"./pl.js":283,"./pt":284,"./pt-br":285,"./pt-br.js":285,"./pt.js":284,"./ro":286,"./ro.js":286,"./ru":287,"./ru.js":287,"./sd":288,"./sd.js":288,"./se":289,"./se.js":289,"./si":290,"./si.js":290,"./sk":291,"./sk.js":291,"./sl":292,"./sl.js":292,"./sq":293,"./sq.js":293,"./sr":294,"./sr-cyrl":295,"./sr-cyrl.js":295,"./sr.js":294,"./ss":296,"./ss.js":296,"./sv":297,"./sv.js":297,"./sw":298,"./sw.js":298,"./ta":299,"./ta.js":299,"./te":300,"./te.js":300,"./tet":301,"./tet.js":301,"./tg":302,"./tg.js":302,"./th":303,"./th.js":303,"./tl-ph":304,"./tl-ph.js":304,"./tlh":305,"./tlh.js":305,"./tr":306,"./tr.js":306,"./tzl":307,"./tzl.js":307,"./tzm":308,"./tzm-latn":309,"./tzm-latn.js":309,"./tzm.js":308,"./ug-cn":310,"./ug-cn.js":310,"./uk":311,"./uk.js":311,"./ur":312,"./ur.js":312,"./uz":313,"./uz-latn":314,"./uz-latn.js":314,"./uz.js":313,"./vi":315,"./vi.js":315,"./x-pseudo":316,"./x-pseudo.js":316,"./yo":317,"./yo.js":317,"./zh-cn":318,"./zh-cn.js":318,"./zh-hk":319,"./zh-hk.js":319,"./zh-tw":320,"./zh-tw.js":320};function r(s){var t=a(s);return e(t)}function a(s){var t=n[s];if(!(t+1)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t}r.keys=function(){return Object.keys(n)},r.resolve=a,s.exports=r,r.id=324},346:function(s,t,e){"use strict";e.r(t);e(22),e(50);var n=e(5),r=e.n(n),a=e(14),j={methods:{formatTimestamp:e(321).c},asyncData:function(){var s=r()(regeneratorRuntime.mark(function s(t){var e,n,r;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.app,t.params,t.error,e=a.a.collection("games").where("is_completed","==",!1),r=[],s.prev=3,s.next=6,e.get();case 6:(n=s.sent).size>0&&n.forEach(function(s){r.push(s.data())}),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(3),console.error(s.t0);case 13:return s.abrupt("return",{games:r});case 14:case"end":return s.stop()}},s,this,[[3,10]])}));return function(t){return s.apply(this,arguments)}}()},o=e(21),i=Object(o.a)(j,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("v-layout",{attrs:{column:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md10:"",lg10:""}},[e("div",{staticClass:"text-xs-center"}),s._v(" "),e("v-expansion-panel",{staticClass:"xs12 sm8 md10 lg10",attrs:{popout:""}},s._l(s.games,function(t,n){return e("v-expansion-panel-content",{key:n},[e("div",{attrs:{slot:"header"},slot:"header"},[e("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[e("v-flex",{staticClass:"text-xs-right",attrs:{xs4:"",sm4:"",md4:"",lg4:""}},[s._v(s._s(t.home.name))]),s._v(" "),e("v-flex",{staticClass:"text-xs-center",attrs:{xs4:"",sm4:"",md4:"",lg4:""}},[s._v(s._s(s.formatTimestamp(t.start)))]),s._v(" "),e("v-flex",{staticClass:"text-xs-left",attrs:{xs4:"",sm4:"",md4:"",lg4:""}},[s._v(s._s(t.away.name))])],1)],1),s._v(" "),e("v-card",[e("v-card-text",[s._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])],1)],1)}),1)],1)],1)},[],!1,null,null,null);i.options.__file="fixtures.vue";t.default=i.exports}}]);