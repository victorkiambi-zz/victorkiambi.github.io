(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"244358c4"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");o.type=n,o.request=i,a[1](o)}r[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"138f":function(t,e,a){t.exports=a.p+"img/laravel.3f5cef8d.png"},"33fd":function(t,e,a){"use strict";var n=a("5303"),r=a.n(n);r.a},"349d":function(t,e,a){t.exports=a.p+"img/dockerkubernetes.9bbf68fe.png"},5303:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppNavigation"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[t._l(t.items,function(e,n){return[a("v-list-tile",{key:n},[a("v-list-tile-content",[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1),a("v-divider",{key:"divider-"+n})]})],2)],1),a("v-toolbar",{staticClass:"toolbar",attrs:{app:"",color:"light-blue darken-4",dark:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer",{staticClass:"hidden-md-and-up"}),a("v-toolbar-title",{staticClass:"font-weight-regular",attrs:{head:""}},[t._v(t._s(t.appTitle))]),a("v-spacer",{staticClass:"hidden-sm-and-down"}),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{flat:"",head:""}},[t._v("About Me")]),a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{flat:"",head:""}},[t._v("Portfolio")])],1)],1)},l=[],c={name:"AppNavigation",data:function(){return{appTitle:"Victor Mwenda",drawer:!1,items:[{title:"Who am I?"},{title:"My work"}]}}},d=c,u=(a("33fd"),a("2877")),p=a("6544"),v=a.n(p),f=a("8336"),m=a("ce7e"),h=a("8860"),b=a("ba95"),g=a("5d23"),y=a("f774"),w=a("9910"),x=a("71d9"),_=a("706c"),k=a("2a7f"),V=Object(u["a"])(d,s,l,!1,null,"6257e59e",null),C=V.exports;v()(V,{VBtn:f["a"],VDivider:m["a"],VList:h["a"],VListTile:b["a"],VListTileContent:g["a"],VNavigationDrawer:y["a"],VSpacer:w["a"],VToolbar:x["a"],VToolbarSideIcon:_["a"],VToolbarTitle:k["a"]});var j={name:"App",components:{AppNavigation:C}},T=j,S=a("7496"),M=a("549c"),A=Object(u["a"])(T,i,o,!1,null,null,null),O=A.exports;v()(A,{VApp:S["a"],VContent:M["a"]});var L=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppNavigation"),a("HomeView"),a("BottomNav")],1)},P=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-container",{staticClass:"home-hero",attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-left":"",column:"","pa-5":""}},[a("div",{staticClass:"display-2 font-weight-black white--text text-sm-left stuff",attrs:{transition:"scale-transition"}},[t._v("I'm Victor Mwenda")]),a("div",{staticClass:"display-1 font-weight-black white--text text-sm-left mb-3"},[t._v("Full-Stack & DevOps Engineer")])])],1),a("v-divider",{attrs:{insent:""}}),a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}}),[a("v-container",{attrs:{id:"grid",fluid:"","grid-list-sm":"",tag:"section"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"headline",attrs:{tag:"h1"}},[t._v("About Me")]),a("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-card",[a("v-card-text",[t._v(t._s(t.lorem))])],1)],1)],1)],1)],1)],1)]],2),a("v-container",[[a("h3",{staticClass:"headline"},[t._v(" Work Experience ")]),a("v-divider",{attrs:{insent:""}}),a("v-timeline",t._l(t.years,function(e,n){return a("v-timeline-item",{key:n,attrs:{color:e.color,small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{class:"headline font-weight-bold "+e.color+"--text",domProps:{textContent:t._s(e.year)}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"py-3"},[a("h2",{class:"headline font-weight-light mb-3 "+e.color+"--text"},[t._v(t._s(e.title))]),a("div",[t._v("\n         "+t._s(e.text)+" \n        ")])])])}),1),a("v-divider",{attrs:{insent:""}})]],2),a("v-container",{attrs:{fluid:"","grid-list-sm":""}},[[a("h3",{staticClass:"headline"},[t._v(" Skills ")]),a("br"),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e,n){return a("v-flex",{key:n,attrs:{xs12:"",sm4:"",md4:""}},[a("v-card",{attrs:{height:"100%"}},[a("v-responsive",[a("img",{attrs:{height:"250px",width:"",src:e.src}})]),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))])]),a("div",[t._v(" "+t._s(t.card_text)+" ")])]),a("v-card-actions")],1)],1)}),1)]],2)],1)},N=[],I=(a("4be7"),{name:"HomeHero",data:function(){return{years:[{color:"cyan",year:"2018 - present",title:"Nano Digital",text:"Lead developer for real-time bidding advertising system. Developed the software using open source platforms. Successfully set up the back-end. Dockerized the applications and set up kubernetes clusters.Lead developer for USSD platform. Succesfully built the front and back-end."},{color:"green",year:"2017",title:"Lawsavic Investments Ltd.",text:"Development of Lawsavic Investments Limited, rental management software which is currently under the prototype stage.Ensured computers and printers are regularly updated and maintained.Trained directors and employees on digital skills and how to work with the Safaricom M-pesa portal."},{color:"pink",year:"2017",title:"Manyatta Investments Limited",text:"Succesfully developed mpm kenya rental property Website. "},{color:"amber",year:"2016",title:"Ministry of Environment and Forestry",text:"Updated, maintained and configured printers and computers. Installed, maintained and assisted in troubleshooting software related issues.Trained digital literacy skills to employees"}],items:[{src:a("65bf"),title:"Java",text:""},{src:a("138f"),title:"Laravel, Bootstrap and Vue "},{src:a("349d"),title:"Docker &kubernetes"}],card_text:"A highly motivated and hardworking individual, seeking an opportunity in the technology industry to build upon a keen scientific interest. Mechanically minded, with a methodical approach to working and an eagerness to learn and develop skills in a practical setting.",lorem:"A highly motivated and hardworking individual, seeking an opportunity in the technology industry to build upon a keen scientific interest. Mechanically minded, with a methodical approach to working and an eagerness to learn and develop skills in a practical setting."}}}),B=I,$=(a("f073"),a("b0af")),F=a("99d9"),H=a("12b2"),J=a("a523"),W=a("0e8f"),z=a("a722"),U=a("6b53"),q=a("8414"),R=a("1e06"),G=Object(u["a"])(B,D,N,!1,null,"f4a88192",null),K=G.exports;v()(G,{VCard:$["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:H["a"],VContainer:J["a"],VDivider:m["a"],VFlex:W["a"],VLayout:z["a"],VResponsive:U["a"],VTimeline:q["a"],VTimelineItem:R["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{height:"auto",color:"light-blue darken-4"}},[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._l(t.links,function(e){return a("v-btn",{key:e,attrs:{color:"white",flat:"",round:""}},[t._v("\n      "+t._s(e)+"\n    ")])}),a("v-flex",{attrs:{"light-blue":"","darken-4":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n      ©2018 — "),a("strong",[t._v("victormwenda")])])],2)],1)},X=[],Y={name:"BottomNav",data:function(){return{links:["Home","About Me","Portfolio","Contact Me"]}}},Z=Y,tt=a("553a"),et=Object(u["a"])(Z,Q,X,!1,null,null,null),at=et.exports;v()(et,{VBtn:f["a"],VFlex:W["a"],VFooter:tt["a"],VLayout:z["a"]});var nt={components:{AppNavigation:C,HomeView:K,BottomNav:at}},rt=nt,it=Object(u["a"])(rt,E,P,!1,null,null,null),ot=it.exports;v()(it,{VApp:S["a"]});var st=a("ecee"),lt=a("c074"),ct=a("ad3d");st["c"].add(lt["a"]),n["a"].component("font-awesome-icon",ct["a"]),n["a"].use(L["a"]);var dt=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),ut=a("2f62");n["a"].use(ut["a"]);var pt=new ut["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:dt,store:pt,render:function(t){return t(O)}}).$mount("#app")},"5cd9":function(t,e,a){},"65bf":function(t,e,a){t.exports=a.p+"img/javaport.49305010.png"},f073:function(t,e,a){"use strict";var n=a("5cd9"),r=a.n(n);r.a}});
//# sourceMappingURL=app.5adfe4b8.js.map