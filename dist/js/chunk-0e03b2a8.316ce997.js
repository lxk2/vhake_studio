(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e03b2a8"],{"1dde":function(t,e,i){var s=i("d039"),n=i("b622"),a=i("2d00"),r=n("species");t.exports=function(t){return a>=51||!s((function(){var e=[],i=e.constructor={};return i[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,i){var s=i("861d"),n=i("e8b5"),a=i("b622"),r=a("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?s(i)&&(i=i[r],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"7c64":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-tabs",{attrs:{background:"#ffffff",color:"#0095ee","title-inactive-color":"#0095ee","title-active-color":"#0095ee"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"首页"}}),i("van-tab",{attrs:{title:"新闻资讯"}}),i("van-tab",{attrs:{title:"公司简介"}}),i("van-tab",{attrs:{title:"业务范围"}}),i("van-tab",{attrs:{title:"公司资质"}}),i("van-tab",{attrs:{title:"更多了解"}})],1),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshFlag,callback:function(e){t.refreshFlag=e},expression:"refreshFlag"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"new-list"},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"new-item",on:{click:function(i){return t.toDetail(e.id)}}},[i("div",{staticClass:"left"},[i("div",{staticClass:"new-title"},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"new-time"},[t._v(" "+t._s(e.create_time)+" ")])]),i("div",{staticClass:"right"},[i("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:e.pic}})],1)])})),0)])],1)],1)},n=[],a=(i("99af"),i("96cf"),i("1da1")),r=i("2b0e"),o=i("d282"),c=i("02de"),h=i("a8c1"),u=i("5fbe"),l=i("543e"),d=Object(o["a"])("list"),f=d[0],g=d[1],p=d[2],v=f({mixins:[Object(u["a"])((function(t){this.scroller||(this.scroller=Object(h["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,s=t.scroller,n=t.offset,a=t.direction;e=s.getBoundingClientRect?s.getBoundingClientRect():{top:0,bottom:s.innerHeight};var r=e.bottom-e.top;if(!r||Object(c["a"])(i))return!1;var o=!1,h=t.$refs.placeholder.getBoundingClientRect();o="up"===a?e.top-h.top<=n:h.bottom-e.bottom<=n,o&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:g("loading"),key:"loading"},[this.slots("loading")||t(l["a"],{attrs:{size:"16"}},[this.loadingText||p("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:g("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:g("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:g("placeholder")});return t("div",{class:g(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}}),b=i("1325"),m=i("3875"),x=Object(o["a"])("pull-refresh"),k=x[0],S=x[1],T=x[2],w=50,y=["pulling","loosing","success"],$=k({mixins:[m["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:w}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==w)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(h["d"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(h["c"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(b["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+this.headHeight;return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var i;i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},genStatus:function(){var t=this.$createElement,e=this.status,i=this.distance,s=this.slots(e,{distance:i});if(s)return s;var n=[],a=this[e+"Text"]||T(e);return-1!==y.indexOf(e)&&n.push(t("div",{class:S("text")},[a])),"loading"===e&&n.push(t(l["a"],{attrs:{size:"16"}},[a])),n},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:S()},[t("div",{ref:"track",class:S("track"),style:e},[t("div",{class:S("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}}),L=i("0b33"),E=i("5e46");r["a"].use(v).use($).use(L["a"]).use(E["a"]);var C={data:function(){return{list:[],refreshFlag:!1,page:1,list_rows:15,loading:!1,finished:!1,active:1}},methods:{onRefresh:function(){this.page=1,this.list=[],this.loading=!1,this.finished=!1,this.getPageList()},getPageList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return",!1);case 2:return t.loading=!0,e.next=5,t.$http.post("v1.home/getNewsList",{page:t.page,list_rows:t.list_rows});case 5:i=e.sent,t.refreshFlag=!1,t.loading=!1,1===i.code&&(1===t.page?t.list=i.data.list:t.list=t.list.concat(i.data.list),t.finished=i.data.finished);case 9:case"end":return e.stop()}}),e)})))()},onLoad:function(){this.page++,this.getPageList()},toDetail:function(t){this.$router.push({path:"/newsDetail",query:{id:t}})}},components:{List:v,PullRefresh:$,Tab:L["a"],Tabs:E["a"]},created:function(){this.getPageList()},mounted:function(){},watch:{active:function(t){switch(t){case 0:this.$router.push({path:"/"});break;case 1:break;case 2:this.$router.push({path:"/companyProfile"});break;case 3:this.$router.push({path:"/businessScope"});break;case 4:this.$router.push({path:"/qualification"});break;case 5:this.$router.push({path:"/learnMore"});break;default:this.$toast("敬请期待...");break}}}},O=C,_=(i("b542"),i("2877")),j=Object(_["a"])(O,s,n,!1,null,"9883809c",null);e["default"]=j.exports},8418:function(t,e,i){"use strict";var s=i("c04e"),n=i("9bf2"),a=i("5c6c");t.exports=function(t,e,i){var r=s(e);r in t?n.f(t,r,a(0,i)):t[r]=i}},"99af":function(t,e,i){"use strict";var s=i("23e7"),n=i("d039"),a=i("e8b5"),r=i("861d"),o=i("7b0b"),c=i("50c4"),h=i("8418"),u=i("65f0"),l=i("1dde"),d=i("b622"),f=i("2d00"),g=d("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",b=f>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=l("concat"),x=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},k=!b||!m;s({target:"Array",proto:!0,forced:k},{concat:function(t){var e,i,s,n,a,r=o(this),l=u(r,0),d=0;for(e=-1,s=arguments.length;e<s;e++)if(a=-1===e?r:arguments[e],x(a)){if(n=c(a.length),d+n>p)throw TypeError(v);for(i=0;i<n;i++,d++)i in a&&h(l,d,a[i])}else{if(d>=p)throw TypeError(v);h(l,d++,a)}return l.length=d,l}})},b542:function(t,e,i){"use strict";var s=i("fbb0"),n=i.n(s);n.a},e8b5:function(t,e,i){var s=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},fbb0:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0e03b2a8.316ce997.js.map