webpackJsonp([37],{QssK:function(t,e){},jDKi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},data(){let t=this;return{loginmsg:this.$t("common.logintip"),dataCount:0,tableAdv:[],loading:!0,tableColumnsAdv:[{title:t.$t("otc.myad.no"),key:"id",width:55,align:"center"},{title:t.$t("otc.myad.type"),key:"advertiseType",width:90,align:"center",render:(e,a)=>{let s="";return 0==a.row.advertiseType?s=t.$t("otc.myad.buy"):1==a.row.advertiseType&&(s=t.$t("otc.myad.sell")),e("div",[e("p",s)])}},{title:t.$t("otc.myad.limit"),key:"limit",width:100,align:"center",render:(t,e)=>t("div",[t("p",e.row.minLimit+"~"+e.row.maxLimit)])},{title:t.$t("otc.myad.remain"),key:"remainAmount",width:90,align:"center"},{title:t.$t("otc.myad.coin"),key:"coinUnit",width:100,align:"center"},{title:t.$t("otc.myad.created"),key:"createTime",width:160,align:"center"},{title:t.$t("otc.myad.operate"),key:"buyBtn",width:180,align:"center",render:function(e,a){return e("p",[e("a",{on:{click:function(){0==a.row.status?t.$Message.error(t.$t("otc.myad.errmsg")):t.$router.push("/uc/ad/update?id="+a.row.id)}}},[e("Button",{props:{size:"small"},style:{marginRight:"8px"}},t.$t("otc.myad.update"))]),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"8px"},on:{click:()=>{if(1==a.row.status){let e={};e.id=a.row.id,t.$http.post(t.host+"/otc/advertise/on/shelves",e).then(e=>{var a=e.body;0==a.code?(t.$Message.success(a.message),t.getAd()):t.$Message.error(a.message)})}else if(0==a.row.status){let e={};e.id=a.row.id,t.$http.post(t.host+"/otc/advertise/off/shelves",e).then(e=>{var a=e.body;0==a.code?(t.$Message.success(a.message),t.getAd()):t.$Message.error(a.message)})}}}},0==a.row.status?t.$t("otc.myad.dropoff"):t.$t("otc.myad.shelf")),e("Button",{props:{type:"error",size:"small"},on:{click:()=>{let e={};e.id=a.row.id,1==a.row.status?t.$Modal.confirm({title:t.$t("common.tip"),content:"<p>"+t.$t("common.delete")+"</p>",onOk:()=>{t.$http.post(t.host+"/otc/advertise/delete",e).then(e=>{var s=e.body;0==s.code?(t.$Message.success(s.message),t.remove(a.index)):t.$Message.error(s.message)})}}):t.$Message.error("下架广告后才可以删除！")}}},t.$t("otc.myad.delete"))])}}],totalPage:0,pageNumber:10,currentPage:1}},methods:{updateLangData(){this.tableColumnsAdv[0].title=this.$t("otc.myad.no"),this.tableColumnsAdv[1].title=this.$t("otc.myad.type"),this.tableColumnsAdv[2].title=this.$t("otc.myad.limit"),this.tableColumnsAdv[3].title=this.$t("otc.myad.remain"),this.tableColumnsAdv[4].title=this.$t("otc.myad.coin"),this.tableColumnsAdv[5].title=this.$t("otc.myad.created"),this.tableColumnsAdv[6].title=this.$t("otc.myad.operate")},remove(t){this.tableAdv.splice(t,1)},changePage(){},getAd(){this.$http.post(this.host+"/otc/advertise/all").then(t=>{var e=t.body;if(0==e.code){this.tableAdv=e.data.content;for(var a=0;a<this.tableAdv.length;a++)this.tableAdv[a].coinUnit=this.tableAdv[a].coin.unit;this.loading=!1,this.totalPage=e.data.totalElements}else this.$Message.error(this.loginmsg)})},publish(){this.$router.push(this.api.otc.createAd)}},computed:{lang:function(){return this.$store.state.lang}},watch:{lang:function(){this.updateLangData()}},created(){this.getAd()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-rights"},[a("div",{staticClass:"my_ad_box"},[a("div",{staticClass:"add_ad"},[a("Button",{attrs:{icon:"plus-round"},on:{click:t.publish}},[t._v(t._s(t.$t("otc.myad.post")))])],1),t._v(" "),a("Alert",[t._v(t._s(t.$t("otc.myad.alert")))]),t._v(" "),a("div",{staticClass:"order-table"},[a("Table",{staticClass:"tables",attrs:{columns:t.tableColumnsAdv,data:t.tableAdv,"no-data-text":t.$t("common.nodata"),loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"},attrs:{id:"pages"}},[a("div",{staticStyle:{float:"right"}},[t.totalPage>0?a("Page",{attrs:{pageSize:t.pageNumber,total:t.totalPage,current:t.currentPage},on:{"on-change":t.changePage}}):t._e()],1)])],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(t){a("x7rN"),a("QssK")},"data-v-36bcb0ab",null);e.default=o.exports},x7rN:function(t,e){}});