(function(e){function t(t){for(var n,r,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6b2dd52e","chunk-1a1e1d9d":"a0e685fe","chunk-02e233b6":"c3719489","chunk-4a08fb1a":"4a032950","chunk-3ad97d68":"e62a0b8b","chunk-6a68f7e8":"ace5680a","chunk-ae3fc0b4":"47e86121"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1,"chunk-02e233b6":1,"chunk-4a08fb1a":1,"chunk-3ad97d68":1,"chunk-6a68f7e8":1,"chunk-ae3fc0b4":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"09d6880c","chunk-1a1e1d9d":"31d6cfe0","chunk-02e233b6":"424aeac1","chunk-4a08fb1a":"424aeac1","chunk-3ad97d68":"424aeac1","chunk-6a68f7e8":"2604779c","chunk-ae3fc0b4":"d73af191"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00a3":function(e,t,a){},"07f0":function(e,t,a){e.exports=a.p+"img/02.93a1ffa6.png"},"13e9":function(e,t,a){e.exports=a.p+"img/logo22.750d9585.png"},"1ad8":function(e,t,a){e.exports=a.p+"img/01.02a01b05.png"},"2fb4":function(e,t,a){e.exports=a.p+"img/05.9968b29b.png"},"39fb":function(e,t,a){e.exports=a.p+"img/shuoming.59b637a7.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("b0c0"),a("96cf");var n=a("1da1"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("7faf"),a("2877")),c={},u=Object(s["a"])(c,o,i,!1,null,null,null),l=u.exports,f=(a("d3b7"),a("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"bg"}),n("van-tabs",{attrs:{background:"#ffffff",color:"#0095ee","title-inactive-color":"#0095ee","title-active-color":"#0095ee"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{attrs:{title:"首页"}}),n("van-tab",{attrs:{title:"公司简介"}}),n("van-tab",{attrs:{title:"业务范围"}}),n("van-tab",{attrs:{title:"公司资质"}}),n("van-tab",{attrs:{title:"更多了解"}})],1),n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},e._l(e.banners,(function(e,t){return n("van-swipe-item",{key:t,staticClass:"swipe-item"},[n("van-image",{staticClass:"img",attrs:{src:e,"lazy-load":"",fit:"cover"}})],1)})),1),n("div",{staticClass:"c-name"},[e._v(" 广州市晋拓建筑工程有限公司 ")]),n("div",{staticClass:"gird-x"},e._l(e.gridImages,(function(t,a){return n("div",{key:a,staticClass:"item"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],staticClass:"img",attrs:{src:"",alt:""},on:{click:function(t){return e.handleClick(a)}}})])})),0),n("div",{staticClass:"block"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2fb4"),expression:"require('@/assets/new/05.png')"}],staticClass:"img",attrs:{src:"",alt:""},on:{click:function(){e.$router.push({path:"/feedback"})}}})]),n("div",{staticClass:"mobile-contract"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("5bda"),expression:"require('@/assets/new/lianxi.png')"}],staticClass:"img",attrs:{src:"",alt:""}})]),n("div",{staticClass:"logo"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("13e9"),expression:"require('@/assets/new/logo22.png')"}],staticClass:"img",attrs:{src:"",alt:""}})]),n("van-popup",{staticClass:"myPop",staticStyle:{background:"transparent"},attrs:{overlay:!0,"overlay-style":{}},model:{value:e.showFlag,callback:function(t){e.showFlag=t},expression:"showFlag"}},[n("div",{staticClass:"wenan"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("39fb"),expression:"require('@/assets/new/shuoming.png')"}],staticClass:"img",attrs:{src:"",alt:""}})])]),n("van-action-sheet",{attrs:{actions:e.actions,"close-on-click-action":!0,"cancel-text":"关闭"},on:{select:e.onSelect},model:{value:e.showFlag2,callback:function(t){e.showFlag2=t},expression:"showFlag2"}})],1)},d=[],m=a("0b33"),h=a("5e46"),b=a("5596"),g=a("2bb1"),v=a("343b"),k=a("44bf"),w=a("e41f"),y=a("ab2c");r["a"].use(m["a"]).use(h["a"]).use(b["a"]).use(g["a"]).use(v["a"],{lazyComponent:!0}).use(k["a"]).use(w["a"]).use(y["a"]);var x={data:function(){return{active:0,banners:[a("78b9")],gridImages:[a("1ad8"),a("07f0"),a("6399"),a("bd57")],showFlag:!1,showFlag2:!1,actions:[{name:"预约进度款",subname:"",path:"/applyForProject"},{name:"预约票务",subname:"",path:"/bookTicket"}]}},methods:{handleClick:function(e){switch(e){case 0:this.showFlag2=!0;break;case 1:this.$router.push({path:"/signContract"});break;case 2:break;case 3:this.$router.push({path:"/otherService"});break;default:break}},onSelect:function(e){this.$router.push({path:e.path})}},created:function(){},mounted:function(){var e=this,t=sessionStorage.getItem("flag");if(!t)var a=setTimeout((function(){e.showFlag=!0,sessionStorage.setItem("flag",1),clearTimeout(a);var t=setTimeout((function(){e.showFlag=!1,clearTimeout(t)}),3e3)}),500)},components:{Tab:m["a"],Tabs:h["a"],Swipe:b["a"],SwipeItem:g["a"],Image:k["a"],Popup:w["a"],ActionSheet:y["a"]},watch:{active:function(e){switch(e){case 0:break;case 3:this.$router.push({path:"/qualification"});break;default:this.$toast("敬请期待...");break}}}},C=x,j=(a("e0d7"),Object(s["a"])(C,p,d,!1,null,"3fd141f5",null)),S=j.exports;r["a"].use(f["a"]);var P=[{path:"/",name:"home",meta:{title:"广州市晋拓建筑工程有限公司"},component:S},{path:"/applyForProject",name:"applyForProject",meta:{title:"申请工程款"},component:function(){return a.e("about").then(a.bind(null,"b43d"))}},{path:"/signContract",name:"signContract",meta:{title:"签约合同"},component:function(){return Promise.all([a.e("chunk-1a1e1d9d"),a.e("chunk-02e233b6")]).then(a.bind(null,"55dc"))}},{path:"/bookTicket",name:"bookTicket",meta:{title:"预约票务服务"},component:function(){return Promise.all([a.e("chunk-1a1e1d9d"),a.e("chunk-4a08fb1a")]).then(a.bind(null,"a68e"))}},{path:"/otherService",name:"otherService",meta:{title:"其他服务"},component:function(){return a.e("chunk-6a68f7e8").then(a.bind(null,"c516"))}},{path:"/feedback",name:"feedback",meta:{title:"投诉与建议"},component:function(){return a.e("chunk-3ad97d68").then(a.bind(null,"a7e0"))}},{path:"/qualification",name:"qualification",meta:{title:"公司资质"},component:function(){return a.e("chunk-ae3fc0b4").then(a.bind(null,"0910"))}}],T=new f["a"]({routes:P}),O=T,_=a("2f62");r["a"].use(_["a"]);var F=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=(a("499a"),a("323e")),z=a.n(E),q=(a("a5d8"),a("0fae"),a("157a"),a("00a3"),a("bc3a")),N=a.n(q),$=a("f564"),A="http://gzsapi.jtlw.com.cn",I=A+"/api",L=N.a.create({baseURL:I,timeout:7e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}});L.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),L.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return console.log("err"+e),Object($["a"])({type:"danger",message:e.message}),Promise.reject(e)}));var R=L,B=a("2241");r["a"].use(B["a"]),z.a.inc(.2),z.a.configure({easing:"ease",speed:500,showSpinner:!1}),O.beforeEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:z.a.start(),document.getElementById("title").innerText=t.meta.title,n();case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()),O.afterEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:F.dispatch("setActive",t.name,a.name),z.a.done();case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),r["a"].config.productionTip=!1,r["a"].prototype.$http=R,new r["a"]({router:O,store:F,render:function(e){return e(l)}}).$mount("#app")},"5bda":function(e,t,a){e.exports=a.p+"img/lianxi.be90bef4.png"},6399:function(e,t,a){e.exports=a.p+"img/03.90650251.png"},"78b9":function(e,t,a){e.exports=a.p+"img/mainbanner.6af00fd2.png"},"7faf":function(e,t,a){"use strict";var n=a("b8ff"),r=a.n(n);r.a},b8ff:function(e,t,a){},bd57:function(e,t,a){e.exports=a.p+"img/04.9b610332.png"},e0d7:function(e,t,a){"use strict";var n=a("f21e"),r=a.n(n);r.a},f21e:function(e,t,a){}});
//# sourceMappingURL=app.381acceb.js.map