webpackJsonp([33],{TsBO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("qONS");var i=a("UQTY"),s=a.n(i),o=a("ESgT"),n=a("P9l9"),l=a("7t+N"),d=a.n(l),r={name:"video_study",components:{Loading:o.default},data:function(){return{events:["fullscreenchange"],specialCode:"",journalismData:[],playerOptions:[],isEmpty:!1,allLoaded:!1,topStatus:!1,queryLoading01:!1,moreLoading01:!1,allLoaded01:!1,pageSize:10,pageNum:1,pageCount:100,verDialogVisible:!0,ifFullscreen:!1,addTime:0,spendTime:0}},created:function(){this.specialCode=localStorage.getItem("dataListSpecialCode"),this.getSelectMateAndSche("down")},computed:{player:function(){return this.$refs.videoPlayer.player}},watch:{spendTime:function(e,t){this.addTime++},addTime:function(e){console.log(e),e%300==0&&this.addSelfCredits()},ifFullscreen:function(e,t){e?(screen.orientation.lock("landscape"),StatusBar.hide()):(screen.orientation.lock("portrait"),StatusBar.show())}},methods:{onpause:function(e){this.addTime--},onPlayerPlay:function(e,t){var a=this;n.a.post("findVideoDetilsById",{deflag:"0",id:t},"json",function(e,t){if(e.success)if(e.data){a.addTime++;var i=document.getElementsByTagName("video");[].forEach.call(i,function(e){e.addEventListener("play",function(){var e=this;[].forEach.call(i,function(t){t!==e&&t.pause()})}.bind(e))})}else a.$toast("该视频不存在"),a.getSelectMateAndSche("down")})},onPlayerTimeupdate:function(e){this.spendTime=parseInt(e.currentTime())},addSelfCredits:function(){},onPlayerFullScreenchange:function(e){this.ifFullscreen=e.isFullscreen()},back:function(){this.$router.back()},enterSearch:function(){localStorage.setItem("dataListSpecialCode",this.specialCode),localStorage.setItem("enterIndex",this.GLOBAL.ENTERSOURCE.videoSearch),this.$router.push({name:"search"})},loadTop:function(){this.pageNum=1,this.allLoaded=!1,s.a.open({text:"加载中...",spinnerType:"fading-circle"}),this.getSelectMateAndSche("down"),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){var e=this;this.allLoaded01?this.moreLoading01=!0:this.queryLoading01||(this.moreLoading01=!this.queryLoading01,setTimeout(function(){e.pageNum++,e.getSelectMateAndSche("up")},500))},getSelectMateAndSche:function(e){var t=this,a=this;this.queryLoading01=!1,this.moreLoading01=!1,this.allLoaded01=!1,n.a.post("selectMateAndSche",{specialCode:this.specialCode,type:"1202",pageSize:this.pageSize,pageNum:this.pageNum},"json",function(i,s){i.success?("down"===e&&(t.journalismData=[],t.playerOptions=[]),t.pageCount=i.data.total,t.forBackData(i.data.records),a.verDialogVisible=!1):(alert(i.msg),t.verDialogVisible=!1)})},forBackData:function(e){for(var t=0;t<e.length;t++){var a={autoplay:!1,controls:!0,muted:!1,language:"zh-CN",fluid:!0,aspectRatio:"16:9",preload:"auto",sources:[{type:"application/x-mpegURL",src:e[t].url}],poster:e[t].imageUrl,notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}};this.playerOptions.push(a),this.journalismData.push(e[t])}this.isEmpty=!1,this.allLoaded01=this.journalismData.length===this.pageCount||1===e.length,this.moreLoading01=this.allLoaded01,s.a.close(),0===this.journalismData.length?(d()(".empty").css("display","flex"),d()(".plan-list-page").css("display","none")):(d()(".empty").css("display","none"),d()(".plan-list-page").css("display","block"))},enterVideoDetail:function(e,t){var a=this;n.a.post("findVideoDetilsById",{deflag:"0",id:e},"json",function(i,s){i.success&&(i.data?a.$router.push({name:"video_detail",params:{id:e,specialCode:t}}):(a.$toast("该视频不存在"),a.loadTop()))})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video_study"},[i("div",{staticClass:"header"},[i("div",{staticClass:"back",on:{click:function(t){t.stopPropagation(),e.back()}}},[i("img",{attrs:{src:a("NDbq"),alt:""}})]),e._v(" "),i("div",{staticClass:"video_study_head"},[e._v("视听学习")]),e._v(" "),i("div",{staticClass:"search",on:{click:function(t){e.enterSearch()}}},[i("img",{attrs:{src:a("hDxa"),alt:""}})])]),e._v(" "),i("v-page",{staticClass:"plan-list-page",staticStyle:{"font-size":"0.3rem"}},[i("mt-loadmore",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadBottom,expression:"loadBottom"}],ref:"loadmore",staticClass:"loadmore",attrs:{"top-method":e.loadTop,"infinite-scroll-disabled":"moreLoading01","infinite-scroll-distance":"40","infinite-scroll-immediate-check":"false",autoFill:!1}},[i("div",{ref:"scrollContainer",staticClass:"activity-list"},[e._l(e.journalismData,function(t,a){return i("div",{key:t.code,staticClass:"videoStudy_item"},[i("div",{staticClass:"videoStudy_top"},[i("video-player",{ref:"videoPlayer",refInFor:!0,staticClass:"vjs-custom-skin video-player",attrs:{options:e.playerOptions[a],playsinline:!0,name:"video",events:e.events},on:{play:function(a){e.onPlayerPlay(a,t.id)},fullscreenchange:function(t){e.onPlayerFullScreenchange(t)},timeupdate:function(t){e.onPlayerTimeupdate(t)},pause:function(t){e.onpause(t)}}})],1),e._v(" "),i("div",{staticClass:"videoStudy_bottom",on:{click:function(a){a.stopPropagation(),e.enterVideoDetail(t.id,t.specialCode)}}},[i("div",{staticClass:"videoStudy_name"},[e._v("\n                            "+e._s(t.name)+"\n                        ")]),e._v(" "),i("div",{staticClass:"videoStudy_visit"},[e._v("\n                            浏览 "+e._s(t.viewNum)+"\n                        ")])])])}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.queryLoading01,expression:"!queryLoading01"}],staticClass:"more_loading",staticStyle:{height:"0.30rem","line-height":"0.30rem","text-align":"center"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.moreLoading01&&!e.allLoaded01,expression:"moreLoading01 && !allLoaded01"}],attrs:{type:"snake",color:"#00ccff",size:20}},[e._v("加载中...")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.allLoaded01,expression:"allLoaded01"}],staticStyle:{color:"#ccc"}},[e._v("---- 看到底线了 ----")])])],2)]),e._v(" "),e.isEmpty?i("div",{staticClass:"list-empty-show"},[e._v("\n            暂无数据\n        ")]):e._e()],1),e._v(" "),e._m(0),e._v(" "),i("Loading",{attrs:{dialogVisible:e.verDialogVisible}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"empty"},[t("img",{attrs:{src:a("grmO"),alt:""}}),this._v(" "),t("div",{staticClass:"emptyWord"},[this._v("空空如也~")])])}]};var u=a("VU/8")(r,c,!1,function(e){a("nWhS")},"data-v-7df52266",null);t.default=u.exports},nWhS:function(e,t){}});
//# sourceMappingURL=33.c09c351190dd1bb90dcd.js.map