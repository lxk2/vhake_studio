(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03937734"],{"175f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-notice-bar",{attrs:{wrapable:"",scrollable:!1,mode:"closeable"}},[t._v(" 请根据下方表格录入安全培训、安全警示教育、预计培训时间、具体时间、联系方式信息，提交即可 "),n("br"),t._v(" 如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！ ")]),n("van-cell",{attrs:{title:"服务类型",value:t.formData.serviceType,"is-link":""},on:{click:function(e){t.showPopup2=!0,t.showPopup=!1}}}),"其他服务"===t.formData.serviceType?n("van-field",{attrs:{"label-width":"90",label:"服务名称",placeholder:"请输入服务名称"},model:{value:t.formData.serviceName,callback:function(e){t.$set(t.formData,"serviceName",e)},expression:"formData.serviceName"}}):t._e(),n("van-field",{attrs:{"label-width":"90",type:"textarea",autosize:{minHeight:100},label:"内容详情",placeholder:"请输入内容详情"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}}),n("van-field",{attrs:{"label-width":"90",label:"所在项目",placeholder:"请输入所在项目"},model:{value:t.formData.projectName,callback:function(e){t.$set(t.formData,"projectName",e)},expression:"formData.projectName"}}),n("van-field",{attrs:{"label-width":"90",type:"textarea",autosize:{minHeight:100},label:"安全培训",placeholder:"请输入安全培训"},model:{value:t.formData.safetyTraining,callback:function(e){t.$set(t.formData,"safetyTraining",e)},expression:"formData.safetyTraining"}}),n("van-field",{attrs:{"label-width":"90",type:"textarea",autosize:{minHeight:100},label:"安全警示教育",placeholder:"请输入安全警示教育"},model:{value:t.formData.warningEducation,callback:function(e){t.$set(t.formData,"warningEducation",e)},expression:"formData.warningEducation"}}),n("van-cell",{attrs:{title:"预计培训时间",value:t.formData.trainingTime,"is-link":""},on:{click:function(e){t.showFlag=!0}}}),n("van-cell",{attrs:{title:"具体时间",value:t.formData.specificTime,"is-link":""},on:{click:function(e){t.showPopup=!0,t.showPopup2=!1}}}),n("van-field",{attrs:{"label-width":"90",label:"姓名",placeholder:"请输入姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),n("van-field",{attrs:{"label-width":"90",type:"tel",label:"联系方式",placeholder:"请输入联系方式"},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}}),n("div",{staticClass:"open-ccb-box"},[n("div",{staticClass:"open-ccb",on:{click:t.submitForm}},[t._v("提交")])]),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[n("van-picker",{attrs:{"value-key":"label",title:"选择具体时间",columns:t.specificTimeList,"show-toolbar":!0},on:{confirm:t.onPickerConfirm}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPopup2,callback:function(e){t.showPopup2=e},expression:"showPopup2"}},[n("van-picker",{attrs:{"value-key":"label",title:"选择服务类型",columns:t.serviceTypeList,"show-toolbar":!0},on:{confirm:t.onPickerConfirm2}})],1),n("van-calendar",{attrs:{title:"选择预计培训时间"},on:{confirm:t.onConfirm},model:{value:t.showFlag,callback:function(e){t.showFlag=e},expression:"showFlag"}})],1)},a=[],o=(n("96cf"),n("1da1")),s=n("2b0e"),r=n("a37c"),l=n("565f"),u=n("7744"),c=n("e41f"),h=n("f253"),f=n("473d");s["a"].use(r["a"]).use(l["a"]).use(u["a"]).use(c["a"]).use(h["a"]).use(f["a"]);var m={data:function(){return{formData:{serviceType:"",serviceName:"",content:"",projectName:"",safetyTraining:"",warningEducation:"",trainingTime:"",specificTime:"",name:"",mobile:""},specificTimeList:[{label:"上午",value:1},{label:"下午",value:2}],serviceTypeList:[{label:"安全教育",value:1},{label:"安全视频讲座",value:2},{label:"长期驻场服务",value:3},{label:"其他服务",value:4}],loading:!1,showFlag:!1,showPopup:!1,showPopup2:!1}},methods:{onPickerConfirm:function(t){this.formData.specificTime=t.label,this.showPopup=!1},onPickerConfirm2:function(t){this.formData.serviceType=t.label,this.showPopup2=!1},onConfirm:function(t){this.formData.trainingTime=this.fermitTime(t),this.showFlag=!1},fermitTime:function(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a);var o=n+"-"+i+"-"+a;return o},submitForm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=3;break}return t.$toast.loading({forbidClick:!0}),e.abrupt("return",!1);case 3:return t.loading=!0,e.next=6,t.$http.post("v1.home/onSiteTraining",t.formData);case 6:n=e.sent,t.loading=!1,t.$dialog.alert({message:n.msg}).then((function(e){1===n.code&&t.resetForm()}));case 9:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.formData={safetyTraining:"",warningEducation:"",trainingTime:"",specificTime:"",name:"",mobile:""}}},created:function(){},mounted:function(){},components:{NoticeBar:r["a"],Field:l["a"],Cell:u["a"],Popup:c["a"],Calendar:f["a"],Picker:h["a"]}},d=m,p=(n("5835"),n("2877")),g=Object(p["a"])(d,i,a,!1,null,null,null);e["default"]=g.exports},5835:function(t,e,n){"use strict";var i=n("647e"),a=n.n(i);a.a},"647e":function(t,e,n){},f253:function(t,e,n){"use strict";var i=n("c31d"),a=n("d282"),o=n("1325"),s=n("b1d2"),r={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,allowHtml:{type:Boolean,default:!0},visibleItemCount:{type:[Number,String],default:5},itemHeight:{type:[Number,String],default:44},swipeDuration:{type:[Number,String],default:1e3}},l=n("543e"),u=n("2638"),c=n.n(u),h=n("1128");function f(t){return Array.isArray(t)?t.map((function(t){return f(t)})):"object"===typeof t?Object(h["a"])({},t):t}var m=n("a142"),d=n("482d"),p=n("3875"),g=200,v=300,b=15,x=Object(a["a"])("picker-column"),w=x[0],T=x[1];function y(t){var e=window.getComputedStyle(t),n=e.transform||e.webkitTransform,i=n.slice(7,n.length-1).split(", ")[5];return Number(i)}function C(t){return Object(m["d"])(t)&&t.disabled}var I=w({mixins:[p["a"]],props:{valueKey:String,allowHtml:Boolean,className:String,itemHeight:[Number,String],defaultIndex:Number,swipeDuration:[Number,String],visibleItemCount:[Number,String],initialOptions:{type:Array,default:function(){return[]}}},data:function(){return{offset:0,duration:0,options:f(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},mounted:function(){this.bindTouchEvent(this.$el)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1)},watch:{initialOptions:"setOptions",defaultIndex:function(t){this.setIndex(t)}},computed:{count:function(){return this.options.length},baseOffset:function(){return this.itemHeight*(this.visibleItemCount-1)/2}},methods:{setOptions:function(t){JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=f(t),this.setIndex(this.defaultIndex))},onTouchStart:function(t){if(this.touchStart(t),this.moving){var e=y(this.$refs.wrapper);this.offset=Math.min(0,e-this.baseOffset),this.startOffset=this.offset}else this.startOffset=this.offset;this.duration=0,this.transitionEndTrigger=null,this.touchStartTime=Date.now(),this.momentumOffset=this.startOffset},onTouchMove:function(t){this.touchMove(t),"vertical"===this.direction&&(this.moving=!0,Object(o["c"])(t,!0)),this.offset=Object(d["a"])(this.startOffset+this.deltaY,-this.count*this.itemHeight,this.itemHeight);var e=Date.now();e-this.touchStartTime>v&&(this.touchStartTime=e,this.momentumOffset=this.offset)},onTouchEnd:function(){var t=this,e=this.offset-this.momentumOffset,n=Date.now()-this.touchStartTime,i=n<v&&Math.abs(e)>b;if(i)this.momentum(e,n);else{var a=this.getIndexByOffset(this.offset);this.duration=g,this.setIndex(a,!0),setTimeout((function(){t.moving=!1}),0)}},onTransitionEnd:function(){this.stopMomentum()},onClickItem:function(t){this.moving||(this.duration=g,this.setIndex(t,!0))},adjustIndex:function(t){t=Object(d["a"])(t,0,this.count);for(var e=t;e<this.count;e++)if(!C(this.options[e]))return e;for(var n=t-1;n>=0;n--)if(!C(this.options[n]))return n},getOptionText:function(t){return Object(m["d"])(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){var n=this;t=this.adjustIndex(t)||0,this.offset=-t*this.itemHeight;var i=function(){t!==n.currentIndex&&(n.currentIndex=t,e&&n.$emit("change",t))};this.moving?this.transitionEndTrigger=i:i()},setValue:function(t){for(var e=this.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n)},getValue:function(){return this.options[this.currentIndex]},getIndexByOffset:function(t){return Object(d["a"])(Math.round(-t/this.itemHeight),0,this.count-1)},momentum:function(t,e){var n=Math.abs(t/e);t=this.offset+n/.002*(t<0?-1:1);var i=this.getIndexByOffset(t);this.duration=+this.swipeDuration,this.setIndex(i,!0)},stopMomentum:function(){this.moving=!1,this.duration=0,this.transitionEndTrigger&&(this.transitionEndTrigger(),this.transitionEndTrigger=null)},genOptions:function(){var t=this,e=this.$createElement,n={height:this.itemHeight+"px"};return this.options.map((function(i,a){var o=t.getOptionText(i),s=C(i),r={style:n,attrs:{role:"button",tabindex:s?-1:0},class:["van-ellipsis",T("item",{disabled:s,selected:a===t.currentIndex})],on:{click:function(){t.onClickItem(a)}}};return t.allowHtml&&(r.domProps={innerHTML:o}),e("li",c()([{},r]),[t.allowHtml?"":o])}))}},render:function(){var t=arguments[0],e={transform:"translate3d(0, "+(this.offset+this.baseOffset)+"px, 0)",transitionDuration:this.duration+"ms",transitionProperty:this.duration?"all":"none",lineHeight:this.itemHeight+"px"};return t("div",{class:[T(),this.className]},[t("ul",{ref:"wrapper",style:e,class:T("wrapper"),on:{transitionend:this.onTransitionEnd}},[this.genOptions()])])}}),k=Object(a["a"])("picker"),D=k[0],O=k[1],N=k[2];e["a"]=D({props:Object(i["a"])({},r,{defaultIndex:{type:[Number,String],default:0},columns:{type:Array,default:function(){return[]}},toolbarPosition:{type:String,default:"top"},valueKey:{type:String,default:"text"}}),data:function(){return{children:[],formattedColumns:[]}},computed:{dataType:function(){var t=this.columns,e=t[0]||{};return e.children?"cascade":e.values?"object":"text"}},watch:{columns:{handler:"format",immediate:!0}},methods:{format:function(){var t=this.columns,e=this.dataType;"text"===e?this.formattedColumns=[{values:t}]:"cascade"===e?this.formatCascade():this.formattedColumns=t},formatCascade:function(){var t=this,e=[],n={children:this.columns};while(n&&n.children){var i=n.defaultIndex||+this.defaultIndex;e.push({values:n.children.map((function(e){return e[t.valueKey]})),className:n.className,defaultIndex:i}),n=n.children[i]}this.formattedColumns=e},emit:function(t){"text"===this.dataType?this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit(t,this.getValues(),this.getIndexes())},onCascadeChange:function(t){for(var e=this,n={children:this.columns},i=this.getIndexes(),a=0;a<=t;a++)n=n.children[i[a]];while(n.children)t++,this.setColumnValues(t,n.children.map((function(t){return t[e.valueKey]}))),n=n.children[n.defaultIndex||0]},onChange:function(t){"cascade"===this.dataType&&this.onCascadeChange(t),"text"===this.dataType?this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit("change",this,this.getValues(),t)},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var n=this.getColumn(t);n&&n.setValue(e)},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var n=this.getColumn(t);n&&n.setIndex(e)},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var n=this.children[t];n&&n.setOptions(e)},getValues:function(){return this.children.map((function(t){return t.getValue()}))},setValues:function(t){var e=this;t.forEach((function(t,n){e.setColumnValue(n,t)}))},getIndexes:function(){return this.children.map((function(t){return t.currentIndex}))},setIndexes:function(t){var e=this;t.forEach((function(t,n){e.setColumnIndex(n,t)}))},confirm:function(){this.children.forEach((function(t){return t.stopMomentum()})),this.emit("confirm")},cancel:function(){this.emit("cancel")},genTitle:function(){var t=this.$createElement,e=this.slots("title");return e||(this.title?t("div",{class:["van-ellipsis",O("title")]},[this.title]):void 0)},genToolbar:function(){var t=this.$createElement;if(this.showToolbar)return t("div",{class:[s["d"],O("toolbar")]},[this.slots()||[t("button",{attrs:{type:"button"},class:O("cancel"),on:{click:this.cancel}},[this.cancelButtonText||N("cancel")]),this.genTitle(),t("button",{attrs:{type:"button"},class:O("confirm"),on:{click:this.confirm}},[this.confirmButtonText||N("confirm")])]])},genColumns:function(){var t=this,e=this.$createElement;return this.formattedColumns.map((function(n,i){return e(I,{attrs:{valueKey:t.valueKey,allowHtml:t.allowHtml,className:n.className,itemHeight:t.itemHeight,defaultIndex:n.defaultIndex||+t.defaultIndex,swipeDuration:t.swipeDuration,visibleItemCount:t.visibleItemCount,initialOptions:n.values},on:{change:function(){t.onChange(i)}}})}))}},render:function(t){var e=+this.itemHeight,n=e*this.visibleItemCount,i={height:e+"px"},a={height:n+"px"},r={backgroundSize:"100% "+(n-e)/2+"px"};return t("div",{class:O()},["top"===this.toolbarPosition?this.genToolbar():t(),this.loading?t(l["a"],{class:O("loading")}):t(),this.slots("columns-top"),t("div",{class:O("columns"),style:a,on:{touchmove:o["c"]}},[this.genColumns(),t("div",{class:O("mask"),style:r}),t("div",{class:[s["e"],O("frame")],style:i})]),this.slots("columns-bottom"),"bottom"===this.toolbarPosition?this.genToolbar():t()])}})}}]);
//# sourceMappingURL=chunk-03937734.d984a1c3.js.map