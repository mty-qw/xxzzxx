webpackJsonp([48],{GsDg:function(e,t){},TInI:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),i=s("f3u+"),r=s.n(i);a.default.use(r.a);var o={components:{VueQriously:r.a},inject:["reload"],data:()=>({modal1:!1,modal2:!1,withdrawCode:"",fundpwd:"",accountType:0,memoCode:"",minRechargeAmount:"0.001",isShowGetAddress:!1,isShowEwm:!1,dataCount:0,loading:!0,qrcode:{value:"",size:220,coinName:"",unit:""},coinType:"",coinList:[],tableRecharge:[],allTableRecharge:[],withdrawCodeInfo:{coin:{unit:""}}}),methods:{changePage(e){this.getList(e)},getCurrentCoinRecharge(){if(""!=this.coinType){for(var e=[],t=0;t<this.allTableRecharge.length;t++)this.allTableRecharge[t].symbol==this.coinType&&e.push(this.allTableRecharge[t]);this.tableRecharge=e}else this.tableRecharge=this.allTableRecharge},showEwm(){this.isShowEwm=!this.isShowEwm},onCopy(e){this.$Message.success(this.$t("uc.finance.recharge.copysuccess")+e.text)},onError(e){this.$Message.error(this.$t("uc.finance.recharge.copysuccess"))},changeCoin(e){for(var t=0;t<this.coinList.length;t++)this.coinList[t].coin.unit==e&&(this.qrcode.value=this.coinList[t].address,this.qrcode.coinName=this.coinList[t].coin.name.toLowerCase(),this.qrcode.unit=this.coinList[t].coin.unit,this.minRechargeAmount=this.coinList[t].coin.minRechargeAmount,1==this.coinList[t].coin.accountType?(this.qrcode.value=this.coinList[t].coin.depositAddress,this.memoCode=this.coinList[t].memo,this.accountType=1):this.accountType=0,""==this.qrcode.value||null==this.qrcode.value||void 0==this.qrcode.value?this.isShowGetAddress=!0:this.isShowGetAddress=!1);this.getCurrentCoinRecharge()},openCodeModal(){this.modal1=!0,this.withdrawCode=""},getCodeInfo(){if(""==this.withdrawCode)return void this.$Message.warning(this.$t("uc.finance.recharge.coderechargetip"));let e={};e.withdrawCode=this.withdrawCode,this.$http.post(this.host+"/uc/withdrawcode/apply/info",e).then(e=>{var t=e.body;0==t.code?(this.withdrawCodeInfo=t.data,this.modal1=!1):this.$Message.error(t.message)}),this.modal1=!1,this.modal2=!0},submitCode(){if(""==this.withdrawCode)return void this.$Message.warning(this.$t("uc.finance.recharge.coderechargetip"));let e={};e.withdrawCode=this.withdrawCode,this.$http.post(this.host+"/uc/withdrawcode/apply/recharge",e).then(e=>{var t=e.body;0==t.code?(this.$Message.success(this.$t("uc.finance.recharge.rechargesuccess")),this.modal1=!1):this.$Message.error(t.message)}),this.modal2=!1},resetAddress(){var e=this;if(""==this.qrcode.value||null==this.qrcode.value||void 0==this.qrcode.value){this.$Spin.show({render:e=>e("div",[e("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),e("div",{style:{fontSize:"12px",marginTop:"8px"}},this.$t("uc.finance.recharge.gettingaddress"))])});let t={};t.unit=this.qrcode.unit,this.$http.post(this.host+"/uc/asset/wallet/reset-address",t).then(t=>{var s=t.body;0==s.code?setTimeout(function(){e.reload(),e.$Spin.hide()},3e3):(this.$Message.error(s.message),e.$Spin.hide())})}},getMoney(){this.$http.post(this.host+this.api.uc.wallet).then(e=>{var t=e.body;if(0==t.code){for(let e=0;e<t.data.length;e++){var s=t.data[e];1==s.coin.canRecharge&&(this.coinList.push(s),console.log(s))}this.changeCoin(this.coinType)}else this.$Message.error(t.message)})},getList(e){let t=0;!this.$store.getters.isLogin&&this.$router.push("/login"),this.$store.getters.isLogin&&(t=this.$store.getters.member.id);let s={memberId:t,pageNo:e,pageSize:10,type:0};this.$http.post(this.host+"/uc/asset/transaction/all",s).then(e=>{var t=e.body;if(0==t.code){if(t.data){let e=t.data;this.allTableRecharge=e.content||[],this.dataCount=e.totalElements||0,this.getCurrentCoinRecharge()}this.loading=!1}else this.$Message.error(t.message)})},getMember(){let e=this;this.$http.post(this.host+"/uc/approve/security/setting").then(t=>{var s=t.body;0==s.code?null==s.data.realName||""==s.data.realName?(this.$Message.success(this.$t("otc.publishad.submittip1")),e.$router.push("/uc/safe")):0==s.data.phoneVerified?(this.$Message.success(this.$t("otc.publishad.submittip2")),e.$router.push("/uc/safe")):0==s.data.fundsVerified&&(this.$Message.success(this.$t("otc.publishad.submittip3")),e.$router.push("/uc/safe")):this.$Message.error(s.message)})}},created(){this.coinType=this.$route.query.name||"",this.getMoney(),this.getList(1)},computed:{tableColumnsRecharge(){let e=[];return e.push({title:this.$t("uc.finance.recharge.time"),align:"center",width:200,render:(e,t)=>{return e("div",{},t.row.createTime)}}),e.push({title:this.$t("uc.finance.recharge.symbol"),align:"center",width:120,render:(e,t)=>{return e("div",{},t.row.symbol)}}),e.push({title:this.$t("uc.finance.recharge.address"),align:"center",render:(e,t)=>{return e("div",{},t.row.address)}}),e.push({title:this.$t("uc.finance.recharge.amount"),align:"center",width:100,render:(e,t)=>{return e("div",{},t.row.amount)}}),e}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-rights"},[s("div",{staticClass:"nav-right"},[s("div",{staticClass:"bill_box"},[s("section",[s("div",{staticClass:"table-inner action-box open"},[s("div",{staticClass:"action-inner"},[s("div",{staticClass:"inner-left"},[s("p",{staticClass:"describe"},[e._v(e._s(e.$t("uc.finance.recharge.symbol")))]),e._v(" "),s("Select",{staticStyle:{width:"100px","margin-top":"23px"},attrs:{placeholder:e.$t("common.pleaseselect")},on:{"on-change":e.changeCoin},model:{value:e.coinType,callback:function(t){e.coinType=t},expression:"coinType"}},e._l(e.coinList,function(t){return s("Option",{key:t.coin.unit,attrs:{value:t.coin.unit}},[e._v(e._s(t.coin.unit))])}),1)],1),e._v(" "),s("div",{staticClass:"inner-box deposit-address"},[s("p",{staticClass:"describe"},[e._v(e._s(e.$t("uc.finance.recharge.address")))]),e._v(" "),s("div",{staticClass:"title"},[s("Input",{staticStyle:{width:"400px",color:"#8c979f"},attrs:{readonly:""},model:{value:e.qrcode.value,callback:function(t){e.$set(e.qrcode,"value",t)},expression:"qrcode.value"}}),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:e.isShowGetAddress,expression:"isShowGetAddress"}],staticClass:"link-copy",on:{click:e.resetAddress}},[e._v(e._s(e.$t("uc.finance.recharge.getaddress")))]),e._v(" "),s("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.qrcode.value,expression:"qrcode.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"link-copy",attrs:{href:"javascript:;",id:"copyBtn"}},[e._v(e._s(e.$t("uc.finance.recharge.copy")))]),e._v(" "),s("a",{staticClass:"link-qrcode",attrs:{id:"showQRcode",href:"javascript:;"},on:{click:e.showEwm}},[e._v(" "+e._s(e.$t("uc.finance.recharge.qrcode"))+"\n                  "),s("Modal",{attrs:{width:"280"},model:{value:e.isShowEwm,callback:function(t){e.isShowEwm=t},expression:"isShowEwm"}},[s("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("uc.finance.recharge.qrcodeaddress")))]),e._v(" "),s("div",{staticClass:"show-qrcode",staticStyle:{"text-align":"center",padding:"15px 10px","border-radius":"10px",background:"#FFF"}},[s("qriously",{attrs:{value:e.qrcode.value,size:e.qrcode.size,foreground:"#000"}})],1),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"})])],1)],1),e._v(" "),0!=e.accountType?s("p",{staticStyle:{"margin-top":"10px","font-size":"12px",color:"#828ea1"}},[e._v("Memo："),s("span",{staticStyle:{"font-size":"20px",color:"#F90","font-weight":"bold"}},[e._v(e._s(e.memoCode))])]):e._e(),e._v(" "),0!=e.accountType?s("p",{staticStyle:{"margin-top":"10px","font-size":"12px",color:"#828ea1"}},[e._v("\n                "+e._s(e.$t("uc.finance.recharge.memotips"))+"\n                "),s("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.memoCode,expression:"memoCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"link-copy",staticStyle:{color:"#f0a70a"},attrs:{href:"javascript:;",id:"copyBtn"}},[e._v(e._s(e.$t("uc.finance.recharge.copy"))+" Memo")])]):e._e()]),e._v(" "),s("div",{staticClass:"inner-right"},[s("p",{staticClass:"describe"},[s("a",{staticClass:"withdrawcoderecharge",on:{click:e.openCodeModal}},[e._v(e._s(e.$t("uc.finance.recharge.withdrawrecharge")))])])])]),e._v(" "),s("div",{staticClass:"action-content"},[s("div",{staticClass:"action-body"},[s("p",{staticClass:"acb-p1"},[e._v(e._s(e.$t("common.tip")))]),e._v(" "),s("p",{staticClass:"acb-p2"},[e._v("• "+e._s(e.$t("uc.finance.recharge.msg3"))+e._s(e.minRechargeAmount)+e._s(e.coinType)+e._s(e.$t("uc.finance.recharge.msg3_1"))),s("br"),e._v("• "+e._s(e.$t("uc.finance.recharge.msg1"))),s("br"),e._v("• "+e._s(e.$t("uc.finance.recharge.msg2"))),s("br"),e._v("• "+e._s(e.$t("uc.finance.recharge.msg4"))),s("br"),e._v("• "+e._s(e.$t("uc.finance.recharge.msg5")))])])]),e._v(" "),s("div",{staticClass:"action-content"},[s("div",{staticClass:"action-body"},[s("p",{staticClass:"acb-p1"},[e._v(e._s(e.$t("uc.finance.recharge.record")))]),e._v(" "),s("div",{staticClass:"order-table"},[s("Table",{attrs:{columns:e.tableColumnsRecharge,data:e.tableRecharge,loading:e.loading,"no-data-text":e.$t("common.nodata")}}),e._v(" "),s("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[s("div",{staticStyle:{float:"right"}},[s("Page",{staticClass:"recharge_btn",attrs:{total:e.dataCount,current:1},on:{"on-change":e.changePage}})],1)])],1)])])])])])]),e._v(" "),s("Modal",{attrs:{width:"360"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[s("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[s("Icon",{attrs:{type:"ios-mail",size:"20",color:"#00b5f6;"}}),e._v(" "),s("span",[e._v(e._s(e.$t("uc.finance.recharge.coderechargetip")))])],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("Form",{ref:"formValidate",attrs:{"label-width":0}},[s("FormItem",[s("Input",{attrs:{placeholder:e.$t("uc.finance.recharge.coderechargetip")},model:{value:e.withdrawCode,callback:function(t){e.withdrawCode=t},expression:"withdrawCode"}})],1)],1)],1),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:e.getCodeInfo}},[e._v(e._s(e.$t("uc.finance.withdraw.submit")))])],1)]),e._v(" "),s("Modal",{attrs:{width:"360"},model:{value:e.modal2,callback:function(t){e.modal2=t},expression:"modal2"}},[s("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[s("Icon",{attrs:{type:"ios-mail",size:"20",color:"#00b5f6;"}}),e._v(" "),s("span",[e._v(e._s(e.$t("uc.finance.recharge.rechargeconfirm")))])],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("p",[s("span",[e._v(e._s(e.$t("uc.finance.recharge.symbol"))+": ")]),s("span",[e._v(e._s(e.withdrawCodeInfo.coin.unit))])]),e._v(" "),s("p",[s("span",[e._v(e._s(e.$t("uc.finance.recharge.amount"))+": ")]),s("span",[e._v(e._s(e.withdrawCodeInfo.withdrawAmount))])])]),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:e.submitCode}},[e._v(e._s(e.$t("uc.finance.withdraw.submit")))])],1)])],1)},staticRenderFns:[]};var n=s("VU/8")(o,c,!1,function(e){s("GsDg")},"data-v-b5c1ecd4",null);t.default=n.exports}});