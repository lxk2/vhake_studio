(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"14c7":function(a,e,t){},"30c6":function(a,e,t){"use strict";var l=t("14c7"),r=t.n(l);r.a},b43d:function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("van-notice-bar",{attrs:{wrapable:"",scrollable:!1,mode:"closeable"}},[a._v(" 请根据下方表格录入项目名称、预约工资款金额、工资款到账时间、跟进业务员姓名、联系方式信息，提交即可 "),t("br"),a._v(" 如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！ ")]),t("van-field",{attrs:{"label-width":"110",label:"项目名称",placeholder:"请输入项目名称"},model:{value:a.formData.projectName,callback:function(e){a.$set(a.formData,"projectName",e)},expression:"formData.projectName"}}),t("van-field",{attrs:{"label-width":"110",type:"number",label:"预约工资款金额",placeholder:"请输入预约工资款金额"},model:{value:a.formData.reservationPrice,callback:function(e){a.$set(a.formData,"reservationPrice",e)},expression:"formData.reservationPrice"}},[t("span",{attrs:{slot:"button"},slot:"button"},[a._v("元")])]),t("van-cell",{attrs:{"title-class":"cell-t",title:"来款日期","value-class":"cell-v",value:a.formData.arrivalTime?a.formData.arrivalTime:"自到账以后三个工作日后可提取","is-link":""},on:{click:function(e){a.showFlag=!0}}}),t("van-field",{attrs:{"label-width":"110",type:"textarea",autosize:{minHeight:70},label:"备注",placeholder:"预约取款具体时间，如：2月20日上午转账或提现"},model:{value:a.formData.remark,callback:function(e){a.$set(a.formData,"remark",e)},expression:"formData.remark"}}),t("van-field",{attrs:{"label-width":"110",label:"跟进业务员姓名",placeholder:"请输入跟进业务员姓名"},model:{value:a.formData.followUpName,callback:function(e){a.$set(a.formData,"followUpName",e)},expression:"formData.followUpName"}}),t("van-field",{attrs:{"label-width":"110",label:"姓名",placeholder:"请输入申请人姓名"},model:{value:a.formData.name,callback:function(e){a.$set(a.formData,"name",e)},expression:"formData.name"}}),t("van-field",{attrs:{"label-width":"110",type:"tel",label:"联系方式",placeholder:"请输入申请人联系方式"},model:{value:a.formData.mobile,callback:function(e){a.$set(a.formData,"mobile",e)},expression:"formData.mobile"}}),t("div",{staticClass:"open-ccb-box"},[t("div",{staticClass:"open-ccb",on:{click:a.submitForm}},[a._v("提交")])]),t("van-calendar",{attrs:{title:"选择来款时间","min-date":a.minDate,"max-date":a.maxDate,"default-date":new Date},on:{confirm:a.onConfirm},model:{value:a.showFlag,callback:function(e){a.showFlag=e},expression:"showFlag"}})],1)},r=[],o=(t("96cf"),t("1da1")),n=t("2b0e"),i=t("a37c"),c=t("565f"),s=t("7744"),m=t("473d");n["a"].use(i["a"]).use(c["a"]).use(s["a"]).use(m["a"]);var f={data:function(){return{formData:{projectName:"",reservationPrice:"",applyPrice:"",arrivalTime:"",remark:"",followUpName:"",name:"",mobile:""},loading:!1,showFlag:!1,minDate:"",maxDate:""}},component:{NoticeBar:i["a"],Field:c["a"],Calendar:m["a"],Cell:s["a"]},methods:{submitForm:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.loading){e.next=3;break}return a.$toast.loading({forbidClick:!0}),e.abrupt("return",!1);case 3:return a.loading=!0,e.next=6,a.$http.post("v1.home/applyProject",a.formData);case 6:t=e.sent,a.loading=!1,a.$dialog.alert({message:t.msg}).then((function(e){1===t.code&&a.resetForm()}));case 9:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.formData={projectName:"",reservationPrice:"",applyPrice:"",arrivalTime:"",followUpName:"",name:"",mobile:""}},onConfirm:function(a){this.formData.arrivalTime=this.fermitTime(a),this.showFlag=!1},fermitTime:function(a){var e=new Date(a),t=e.getFullYear(),l=e.getMonth()+1,r=e.getDate();l<10&&(l="0"+l),r<10&&(r="0"+r);var o=t+"-"+l+"-"+r;return o},getDate:function(){var a=new Date,e=a.getFullYear(),t=a.getMonth();0===t&&(t=12,e-=1),t<10&&(t="0"+t),console.log(e,t-1,1),this.minDate=new Date(e-10,t-1,1),this.maxDate=new Date(e+10,11,31)}},created:function(){this.getDate()},mounted:function(){this.loading=!1}},u=f,d=(t("30c6"),t("2877")),p=Object(d["a"])(u,l,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=about.755f8e2a.js.map