webpackJsonp([25],{HINw:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("mvHQ"),n=e.n(i),a=e("P9l9"),o=e("mtWM"),c=e.n(o),d=e("7t+N"),r=e.n(d),u=e("mw3O"),l=e.n(u),p={data:function(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,nameinput:"",typeinput:"",type:[],selectType:"",contain:"",name:"",personId:"",demandList:[],isshowerror:!1,mess:""}},created:function(){if(this.personId=localStorage.getItem("personId"),this.name=localStorage.getItem("personName"),this.getClassifyList(),JSON.parse(localStorage.getItem("demandList"))){this.demandList=JSON.parse(localStorage.getItem("demandList"));for(var t=0;t<this.demandList.length;t++)this.personId===this.demandList[t].personId&&(this.nameinput=this.demandList[t].nameinput,this.selectType=this.demandList[t].selectType,this.contain=this.demandList[t].contain,this.typeinput=this.demandList[t].typeinput)}else this.demandList=[]},mounted:function(){document.addEventListener("backbutton",this.onBackKeyDown,!1)},beforeDestroy:function(){document.removeEventListener("backbutton",this.onBackKeyDown,!1)},methods:{getClassifyList:function(){var t=this;a.a.post("getClassifyList",{dicId:this.GLOBAL.DEMAND.dicId},"json",function(s,e){s.success?s.success&&(t.type=s.data):console.log(s.msg)})},addDR:function(){var t=this;a.a.post("addDR",{requireName:this.nameinput,type:this.selectType,requireContent:this.contain},"json",function(s,e){if(s.success){if(s.success){t.$router.push({name:"demand_list",params:{show:"1"}});for(var i=0;i<t.demandList.length;i++)t.demandList[i].personId===t.personId&&(t.demandList[i].nameinput="",t.demandList[i].selectType="",t.demandList[i].contain="",t.demandList[i].typeinput="");localStorage.setItem("demandList",n()(t.demandList))}}else t.isshowerror=!0,t.mess=s.msg}),c()({url:"http://120.27.7.33:8082/double3/outerNetInterface/add",method:"post",data:{requireName:this.nameinput,type:this.selectType,requireContent:this.contain,ct:this.name},transformRequest:[function(t){return t=l.a.stringify(t)}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},back:function(){""!==this.nameinput||""!==this.selectType||""!==this.contain?r()(".bigBox").css("display","flex"):this.$router.back()},onBackKeyDown:function(){this.back()},cancel:function(){for(var t=0;t<this.demandList.length;t++)this.demandList[t].personId===this.personId&&(this.demandList[t].nameinput="",this.demandList[t].selectType="",this.demandList[t].contain="",this.demandList[t].typeinput="");localStorage.setItem("demandList",n()(this.demandList)),r()(".bigBox").css("display","none"),this.$router.back()},comfirm:function(){var t={};if(t.personId=this.personId,t.nameinput=this.nameinput,t.selectType=this.selectType,t.contain=this.contain,t.typeinput=this.typeinput,console.log(t),0===this.demandList.length)this.demandList.push(t);else for(var s=0;s<this.demandList.length;s++)this.demandList[s].personId===this.personId?(this.demandList[s].nameinput=this.nameinput,this.demandList[s].selectType=this.selectType,this.demandList[s].contain=this.contain,this.demandList[s].typeinput=this.typeinput):this.demandList.push(t);localStorage.setItem("demandList",n()(this.demandList)),r()(".bigBox").css("display","none"),this.$router.back()},getModify:function(){var t=this;a.a.post("modify",{tel:this.tel,email:this.email,id:this.personId},"json",function(s,e){s.success?t.$router.back():alert(s.msg)})},personSave:function(){"1"===r()(".save").css("opacity")&&this.addDR()}},watch:{nameinput:function(t,s){this.nameinput=this.GLOBAL.filterKG(t);var e=/[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;t.match(e)&&(this.nameinput=t.replace(e,"")),this.nameinput&&this.typeinput&&this.contain?(r()(".save").css("opacity","1"),r()(".save").css("color","#6E747E")):(r()(".save").css("opacity","0.7"),r()(".save").css("color","#C2CBD6"))},typeinput:function(t,s){for(var e=0;e<this.type.length;e++)this.typeinput===this.type[e].name&&(this.selectType=this.type[e].code);this.nameinput&&this.typeinput&&this.contain?(r()(".save").css("opacity","1"),r()(".save").css("color","#6E747E")):(r()(".save").css("opacity","0.7"),r()(".save").css("color","#C2CBD6"))},contain:function(t,s){this.contain=this.GLOBAL.filterKG(t);var e=/[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;t.match(e)&&(this.contain=t.replace(e,"")),this.nameinput&&this.typeinput&&this.contain?(r()(".save").css("opacity","1"),r()(".save").css("color","#6E747E")):(r()(".save").css("opacity","0.7"),r()(".save").css("color","#C2CBD6"))}}},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"demand_add"},[i("div",{staticClass:"header"},[i("div",{staticClass:"back",on:{click:function(s){s.stopPropagation(),t.back()}}},[i("img",{attrs:{src:e("NDbq"),alt:""}})]),t._v(" "),i("div",{staticClass:"demandHead"},[t._v("需求提报")]),t._v(" "),i("div",{staticClass:"save",on:{click:function(s){t.personSave()}}},[t._v("提交")])]),t._v(" "),i("div",{staticClass:"demandContainer"},[i("div",{staticClass:"demandName"},[i("div",{staticClass:"name"},[t._v("名称")]),t._v(" "),i("el-input",{attrs:{placeholder:"请输入",maxlength:"30",clearable:""},model:{value:t.nameinput,callback:function(s){t.nameinput=s},expression:"nameinput"}})],1),t._v(" "),i("div",{staticClass:"demandType"},[i("div",{staticClass:"type"},[t._v("类型")]),t._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.typeinput,callback:function(s){t.typeinput=s},expression:"typeinput"}},t._l(t.type,function(t){return i("el-option",{key:t.code,attrs:{value:t.name}})}))],1),t._v(" "),i("div",{staticClass:"middle"})]),t._v(" "),i("div",{staticClass:"demandContain"},[i("el-input",{attrs:{maxlength:"500",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.contain,callback:function(s){t.contain=s},expression:"contain"}})],1),t._v(" "),i("div",{staticClass:"bigBox"},[i("div",{staticClass:"smallBox"},[i("img",{attrs:{src:e("5qvR"),alt:""}}),t._v(" "),i("div",{staticClass:"boxWord"},[t._v("将此次编辑保留？")]),t._v(" "),i("div",{staticClass:"text-list-start-startText-mess-two"},[i("div",{staticClass:"text-list-start-startText-mess-two-wait",on:{click:t.cancel}},[t._v("不保留")]),t._v(" "),i("div",{staticStyle:{width:"0.021rem",height:"0.42rem",background:"rgba(231,236,244,1)","margin-top":"0.3rem"}}),t._v(" "),i("div",{staticClass:"text-list-start-startText-mess-two-go",on:{click:t.comfirm}},[t._v("保留")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshowerror,expression:"isshowerror"}],staticClass:"pwdError"},[i("img",{staticStyle:{position:"relative",width:"4.3rem",height:"0.76rem"},attrs:{src:e("LKal")}}),t._v(" "),i("div",{staticClass:"pwdError-mes"},[t._v(t._s(t.mess))])])])},staticRenderFns:[]};var h=e("VU/8")(p,m,!1,function(t){e("bxmn"),e("t/9X")},"data-v-d3f3f120",null);s.default=h.exports},bxmn:function(t,s){},"t/9X":function(t,s){}});
//# sourceMappingURL=25.8ebe2fe8459a93316cda.js.map