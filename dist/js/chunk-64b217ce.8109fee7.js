(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64b217ce"],{"19b3":function(t,e,i){"use strict";var n=i("c626"),s=i.n(n);s.a},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d");function o(t,e){if(e){var i=t.indexOf(".");i>-1&&(t=t.slice(0,i+1)+t.slice(i).replace(/\./g,""))}var n=e?/[^0-9.]/g:/\D/g;return t.replace(n,"")}var r=i("a142");function l(){return!r["e"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var c=i("1325"),u=i("a8c1"),h=l();function f(){h&&Object(u["g"])(Object(u["b"])())}var d=i("d282"),m=i("ea8e"),p=i("ad06"),b=i("7744"),g=i("dfaf"),v=Object(d["a"])("field"),x=v[0],y=v[1];e["a"]=x({inheritAttrs:!1,props:Object(a["a"])({},g["a"],{error:Boolean,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(r["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(m["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.maxlength;if(Object(r["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),"number"===this.type||"digit"===this.type){var s=i,a="number"===this.type;i=o(i,a),i!==s&&(t.value=i)}if(this.formatter){var l=i;i=this.formatter(i),i!==l&&(t.value=i)}return i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),f()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(r["d"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input");if(i)return t("div",{class:y("control",this.inputAlign)},[i]);var n={ref:"input",class:y("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",s()([{},n]));var o=e;return"number"===e&&(o="text"),"digit"===e&&(l()?(o="number",n.attrs.pattern="\\d*"):o="tel"),t("input",s()([{attrs:{type:o}},n]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:y("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(p["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:y("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(p["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,i=e>=this.maxlength;return t("div",{class:y("word-limit")},[t("span",{class:y("word-num",{full:i})},[e]),"/",this.maxlength])}}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,s={icon:this.genLeftIcon};return i("label")&&(s.title=function(){return i("label")}),e(b["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[y("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:y((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:y("body")},[this.genInput(),this.showClear&&e(p["a"],{attrs:{name:"clear"},class:y("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:y("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:y("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},7744:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),a=i.n(s),o=i("d282"),r=i("a142"),l=i("ba31"),c=i("48f4"),u=i("dfaf"),h=i("ad06"),f=Object(o["a"])("cell"),d=f[0],m=f[1];function p(t,e,i,n){var s=e.icon,o=e.size,u=e.title,f=e.label,d=e.value,p=e.isLink,b=i.title||Object(r["b"])(u);function g(){var n=i.label||Object(r["b"])(f);if(n)return t("div",{class:[m("label"),e.labelClass]},[i.label?i.label():f])}function v(){if(b)return t("div",{class:[m("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[u]),g()])}function x(){var n=i.default||Object(r["b"])(d);if(n)return t("div",{class:[m("value",{alone:!b}),e.valueClass]},[i.default?i.default():t("span",[d])])}function y(){return i.icon?i.icon():s?t(h["a"],{class:m("left-icon"),attrs:{name:s}}):void 0}function w(){var n=i["right-icon"];if(n)return n();if(p){var s=e.arrowDirection;return t(h["a"],{class:m("right-icon"),attrs:{name:s?"arrow-"+s:"arrow"}})}}function C(t){Object(l["a"])(n,"click",t),Object(c["a"])(n)}var I=p||e.clickable,k={clickable:I,center:e.center,required:e.required,borderless:!e.border};return o&&(k[o]=o),t("div",a()([{class:m(k),attrs:{role:I?"button":null,tabindex:I?0:null},on:{click:C}},Object(l["b"])(n)]),[y(),v(),x(),w(),null==i.extra?void 0:i.extra()])}p.props=Object(n["a"])({},u["a"],{},c["c"]),e["a"]=d(p)},a37c:function(t,e,i){"use strict";var n=i("d282"),s=i("ad06"),a=Object(n["a"])("notice-bar"),o=a[0],r=a[1];e["a"]=o({props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:!0},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:50}},data:function(){return{wrapWidth:0,firstRound:!0,duration:0,offsetWidth:0,showNoticeBar:!0,animationClass:""}},watch:{text:{handler:function(){var t=this;this.$nextTick((function(){var e=t.$refs,i=e.wrap,n=e.content;if(i&&n){var s=i.getBoundingClientRect().width,a=n.getBoundingClientRect().width;t.scrollable&&a>s&&(t.wrapWidth=s,t.offsetWidth=a,t.duration=a/t.speed,t.animationClass=r("play"))}}))},immediate:!0}},methods:{onClickIcon:function(t){"closeable"===this.mode&&(this.showNoticeBar=!1,this.$emit("close",t))},onAnimationEnd:function(){var t=this;this.firstRound=!1,this.$nextTick((function(){t.duration=(t.offsetWidth+t.wrapWidth)/t.speed,t.animationClass=r("play--infinite")}))}},render:function(){var t=this,e=arguments[0],i=this.slots,n=this.mode,a=this.leftIcon,o=this.onClickIcon,l={color:this.color,background:this.background},c={paddingLeft:this.firstRound?0:this.wrapWidth+"px",animationDelay:(this.firstRound?this.delay:0)+"s",animationDuration:this.duration+"s"};function u(){var t=i("left-icon");return t||(a?e(s["a"],{class:r("left-icon"),attrs:{name:a}}):void 0)}function h(){var t,a=i("right-icon");return a||("closeable"===n?t="cross":"link"===n&&(t="arrow"),t?e(s["a"],{class:r("right-icon"),attrs:{name:t},on:{click:o}}):void 0)}return e("div",{attrs:{role:"alert"},directives:[{name:"show",value:this.showNoticeBar}],class:r({wrapable:this.wrapable}),style:l,on:{click:function(e){t.$emit("click",e)}}},[u(),e("div",{ref:"wrap",class:r("wrap"),attrs:{role:"marquee"}},[e("div",{ref:"content",class:[r("content"),this.animationClass,{"van-ellipsis":!this.scrollable&&!this.wrapable}],style:c,on:{animationend:this.onAnimationEnd,webkitAnimationEnd:this.onAnimationEnd}},[this.slots()||this.text])]),h()])}})},c626:function(t,e,i){},d764:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-notice-bar",{attrs:{wrapable:"",scrollable:!1,mode:"closeable"}},[t._v(" 请根据下方表格录入资料类型、资料内容、盖章份数、联系方式信息，提交即可 "),i("br"),t._v(" 提交资料，请添加客服QQ：2971480585 "),i("br"),t._v(" 如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！ ")]),i("van-cell",{attrs:{title:"资料类型",value:t.formData.type,"is-link":""},on:{click:function(e){t.showPopup=!0}}}),"其他资料"===t.formData.type?i("van-field",{attrs:{"label-width":"90",label:"资料名称",placeholder:"请输入资料名称"},model:{value:t.formData.materialName,callback:function(e){t.$set(t.formData,"materialName",e)},expression:"formData.materialName"}}):t._e(),i("van-field",{attrs:{"label-width":"90",type:"textarea",autosize:{minHeight:100},label:"资料内容",placeholder:"请输入资料内容"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}}),i("van-field",{attrs:{"label-width":"90",type:"digit",label:"盖章份数",placeholder:"请输入盖章份数"},model:{value:t.formData.servings,callback:function(e){t.$set(t.formData,"servings",e)},expression:"formData.servings"}}),i("van-field",{attrs:{"label-width":"90",label:"姓名",placeholder:"请输入签约人姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),i("van-field",{attrs:{"label-width":"90",type:"tel",label:"联系方式",placeholder:"请输入签约人联系方式"},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}}),i("div",{staticClass:"open-ccb-box"},[i("div",{staticClass:"open-ccb",on:{click:t.submitForm}},[t._v("提交")])]),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[i("van-picker",{attrs:{"value-key":"label",title:"选择资料类型",columns:t.typeList,"show-toolbar":!0},on:{confirm:t.onPickerConfirm}})],1)],1)},s=[],a=(i("96cf"),i("1da1")),o=i("2b0e"),r=i("a37c"),l=i("565f"),c=i("7744"),u=i("e41f"),h=i("f253");o["a"].use(r["a"]).use(l["a"]).use(c["a"]).use(u["a"]).use(h["a"]);var f={data:function(){return{formData:{type:"",materialName:"",content:"",servings:"",name:"",mobile:""},typeList:[{label:"情况资料",value:1},{label:"工资单",value:2},{label:"公司资质",value:3},{label:"其他资料",value:4}],showPopup:!1,loading:!1}},methods:{onPickerConfirm:function(t){var e=t.label;this.formData.type=e,this.showPopup=!1},submitForm:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=3;break}return t.$toast.loading({forbidClick:!0}),e.abrupt("return",!1);case 3:return t.loading=!0,e.next=6,t.$http.post("v1.home/otherService2",t.formData);case 6:i=e.sent,t.loading=!1,t.$dialog.alert({message:i.msg}).then((function(e){1===i.code&&t.resetForm()}));case 9:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.formData={type:"",materialName:"",content:"",servings:"",name:"",mobile:""}}},created:function(){},mounted:function(){},components:{NoticeBar:r["a"],Field:l["a"],Cell:c["a"],Popup:u["a"],Picker:h["a"]}},d=f,m=(i("19b3"),i("2877")),p=Object(m["a"])(d,n,s,!1,null,null,null);e["default"]=p.exports},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},f253:function(t,e,i){"use strict";var n=i("c31d"),s=i("d282"),a=i("1325"),o=i("b1d2"),r={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,allowHtml:{type:Boolean,default:!0},visibleItemCount:{type:[Number,String],default:5},itemHeight:{type:[Number,String],default:44},swipeDuration:{type:[Number,String],default:1e3}},l=i("543e"),c=i("2638"),u=i.n(c),h=i("1128");function f(t){return Array.isArray(t)?t.map((function(t){return f(t)})):"object"===typeof t?Object(h["a"])({},t):t}var d=i("a142"),m=i("482d"),p=i("3875"),b=200,g=300,v=15,x=Object(s["a"])("picker-column"),y=x[0],w=x[1];function C(t){var e=window.getComputedStyle(t),i=e.transform||e.webkitTransform,n=i.slice(7,i.length-1).split(", ")[5];return Number(n)}function I(t){return Object(d["d"])(t)&&t.disabled}var k=y({mixins:[p["a"]],props:{valueKey:String,allowHtml:Boolean,className:String,itemHeight:[Number,String],defaultIndex:Number,swipeDuration:[Number,String],visibleItemCount:[Number,String],initialOptions:{type:Array,default:function(){return[]}}},data:function(){return{offset:0,duration:0,options:f(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},mounted:function(){this.bindTouchEvent(this.$el)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1)},watch:{initialOptions:"setOptions",defaultIndex:function(t){this.setIndex(t)}},computed:{count:function(){return this.options.length},baseOffset:function(){return this.itemHeight*(this.visibleItemCount-1)/2}},methods:{setOptions:function(t){JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=f(t),this.setIndex(this.defaultIndex))},onTouchStart:function(t){if(this.touchStart(t),this.moving){var e=C(this.$refs.wrapper);this.offset=Math.min(0,e-this.baseOffset),this.startOffset=this.offset}else this.startOffset=this.offset;this.duration=0,this.transitionEndTrigger=null,this.touchStartTime=Date.now(),this.momentumOffset=this.startOffset},onTouchMove:function(t){this.touchMove(t),"vertical"===this.direction&&(this.moving=!0,Object(a["c"])(t,!0)),this.offset=Object(m["a"])(this.startOffset+this.deltaY,-this.count*this.itemHeight,this.itemHeight);var e=Date.now();e-this.touchStartTime>g&&(this.touchStartTime=e,this.momentumOffset=this.offset)},onTouchEnd:function(){var t=this,e=this.offset-this.momentumOffset,i=Date.now()-this.touchStartTime,n=i<g&&Math.abs(e)>v;if(n)this.momentum(e,i);else{var s=this.getIndexByOffset(this.offset);this.duration=b,this.setIndex(s,!0),setTimeout((function(){t.moving=!1}),0)}},onTransitionEnd:function(){this.stopMomentum()},onClickItem:function(t){this.moving||(this.duration=b,this.setIndex(t,!0))},adjustIndex:function(t){t=Object(m["a"])(t,0,this.count);for(var e=t;e<this.count;e++)if(!I(this.options[e]))return e;for(var i=t-1;i>=0;i--)if(!I(this.options[i]))return i},getOptionText:function(t){return Object(d["d"])(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){var i=this;t=this.adjustIndex(t)||0,this.offset=-t*this.itemHeight;var n=function(){t!==i.currentIndex&&(i.currentIndex=t,e&&i.$emit("change",t))};this.moving?this.transitionEndTrigger=n:n()},setValue:function(t){for(var e=this.options,i=0;i<e.length;i++)if(this.getOptionText(e[i])===t)return this.setIndex(i)},getValue:function(){return this.options[this.currentIndex]},getIndexByOffset:function(t){return Object(m["a"])(Math.round(-t/this.itemHeight),0,this.count-1)},momentum:function(t,e){var i=Math.abs(t/e);t=this.offset+i/.002*(t<0?-1:1);var n=this.getIndexByOffset(t);this.duration=+this.swipeDuration,this.setIndex(n,!0)},stopMomentum:function(){this.moving=!1,this.duration=0,this.transitionEndTrigger&&(this.transitionEndTrigger(),this.transitionEndTrigger=null)},genOptions:function(){var t=this,e=this.$createElement,i={height:this.itemHeight+"px"};return this.options.map((function(n,s){var a=t.getOptionText(n),o=I(n),r={style:i,attrs:{role:"button",tabindex:o?-1:0},class:["van-ellipsis",w("item",{disabled:o,selected:s===t.currentIndex})],on:{click:function(){t.onClickItem(s)}}};return t.allowHtml&&(r.domProps={innerHTML:a}),e("li",u()([{},r]),[t.allowHtml?"":a])}))}},render:function(){var t=arguments[0],e={transform:"translate3d(0, "+(this.offset+this.baseOffset)+"px, 0)",transitionDuration:this.duration+"ms",transitionProperty:this.duration?"all":"none",lineHeight:this.itemHeight+"px"};return t("div",{class:[w(),this.className]},[t("ul",{ref:"wrapper",style:e,class:w("wrapper"),on:{transitionend:this.onTransitionEnd}},[this.genOptions()])])}}),O=Object(s["a"])("picker"),S=O[0],$=O[1],T=O[2];e["a"]=S({props:Object(n["a"])({},r,{defaultIndex:{type:[Number,String],default:0},columns:{type:Array,default:function(){return[]}},toolbarPosition:{type:String,default:"top"},valueKey:{type:String,default:"text"}}),data:function(){return{children:[],formattedColumns:[]}},computed:{dataType:function(){var t=this.columns,e=t[0]||{};return e.children?"cascade":e.values?"object":"text"}},watch:{columns:{handler:"format",immediate:!0}},methods:{format:function(){var t=this.columns,e=this.dataType;"text"===e?this.formattedColumns=[{values:t}]:"cascade"===e?this.formatCascade():this.formattedColumns=t},formatCascade:function(){var t=this,e=[],i={children:this.columns};while(i&&i.children){var n=i.defaultIndex||+this.defaultIndex;e.push({values:i.children.map((function(e){return e[t.valueKey]})),className:i.className,defaultIndex:n}),i=i.children[n]}this.formattedColumns=e},emit:function(t){"text"===this.dataType?this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit(t,this.getValues(),this.getIndexes())},onCascadeChange:function(t){for(var e=this,i={children:this.columns},n=this.getIndexes(),s=0;s<=t;s++)i=i.children[n[s]];while(i.children)t++,this.setColumnValues(t,i.children.map((function(t){return t[e.valueKey]}))),i=i.children[i.defaultIndex||0]},onChange:function(t){"cascade"===this.dataType&&this.onCascadeChange(t),"text"===this.dataType?this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit("change",this,this.getValues(),t)},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var i=this.getColumn(t);i&&i.setValue(e)},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var i=this.getColumn(t);i&&i.setIndex(e)},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var i=this.children[t];i&&i.setOptions(e)},getValues:function(){return this.children.map((function(t){return t.getValue()}))},setValues:function(t){var e=this;t.forEach((function(t,i){e.setColumnValue(i,t)}))},getIndexes:function(){return this.children.map((function(t){return t.currentIndex}))},setIndexes:function(t){var e=this;t.forEach((function(t,i){e.setColumnIndex(i,t)}))},confirm:function(){this.children.forEach((function(t){return t.stopMomentum()})),this.emit("confirm")},cancel:function(){this.emit("cancel")},genTitle:function(){var t=this.$createElement,e=this.slots("title");return e||(this.title?t("div",{class:["van-ellipsis",$("title")]},[this.title]):void 0)},genToolbar:function(){var t=this.$createElement;if(this.showToolbar)return t("div",{class:[o["d"],$("toolbar")]},[this.slots()||[t("button",{attrs:{type:"button"},class:$("cancel"),on:{click:this.cancel}},[this.cancelButtonText||T("cancel")]),this.genTitle(),t("button",{attrs:{type:"button"},class:$("confirm"),on:{click:this.confirm}},[this.confirmButtonText||T("confirm")])]])},genColumns:function(){var t=this,e=this.$createElement;return this.formattedColumns.map((function(i,n){return e(k,{attrs:{valueKey:t.valueKey,allowHtml:t.allowHtml,className:i.className,itemHeight:t.itemHeight,defaultIndex:i.defaultIndex||+t.defaultIndex,swipeDuration:t.swipeDuration,visibleItemCount:t.visibleItemCount,initialOptions:i.values},on:{change:function(){t.onChange(n)}}})}))}},render:function(t){var e=+this.itemHeight,i=e*this.visibleItemCount,n={height:e+"px"},s={height:i+"px"},r={backgroundSize:"100% "+(i-e)/2+"px"};return t("div",{class:$()},["top"===this.toolbarPosition?this.genToolbar():t(),this.loading?t(l["a"],{class:$("loading")}):t(),this.slots("columns-top"),t("div",{class:$("columns"),style:s,on:{touchmove:a["c"]}},[this.genColumns(),t("div",{class:$("mask"),style:r}),t("div",{class:[o["e"],$("frame")],style:n})]),this.slots("columns-bottom"),"bottom"===this.toolbarPosition?this.genToolbar():t()])}})}}]);
//# sourceMappingURL=chunk-64b217ce.8109fee7.js.map