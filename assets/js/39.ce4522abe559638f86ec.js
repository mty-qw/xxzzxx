webpackJsonp([39],{EejC:function(t,e){},mVej:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={components:{},data(){return{ordKeyword:"",choseBtn:0,whichItem:1,tableOrder:[],loading:!0,totalPage:0,pageSize:10,totalNum:0,currentPage:1,loginmsg:this.$t("common.logintip")}},methods:{handleListApproveHistory(){},changePage(t){t>0&&(t-=1),1==this.whichItem?this.getOrder(1,t):2==this.whichItem?this.getOrder(2,t):3==this.whichItem?this.getOrder(3,t):0==this.whichItem?this.getOrder(0,t):4==this.whichItem&&this.getOrder(4,t)},getOrder(t,e){this.loading=!0,this.tableOrder=[];let a={};a.status=t,a.pageNo=e,a.pageSize=this.pageSize,this.currentPage=e+1,this.$http.post(this.host+"/otc/order/self",a).then(t=>{var e=t.body;0==e.code&&e.data.content?(this.tableOrder=e.data.content,this.totalPage=e.data.totalPages,this.totalNum=e.data.totalElements):this.$Message.error(this.loginmsg),this.loading=!1})},init(){},handleSearch(){this.tableOrder=[];let t={};t.status=this.whichItem,t.pageNo=0,t.pageSize=this.pageSize,""!=this.ordKeyword&&(t.orderSn=this.ordKeyword),this.currentPage=1,this.$http.post(this.host+"/otc/order/self",t).then(t=>{var e=t.body;0==e.code&&e.data.content?(this.tableOrder=e.data.content,this.totalPage=e.data.totalPages,this.totalNum=e.data.totalElements):this.$Message.error(e.message),this.loading=!1})},showItem(t){"name1"==t?this.whichItem=1:"name2"==t?this.whichItem=2:"name3"==t?this.whichItem=3:"name0"==t?this.whichItem=0:"name4"==t&&(this.whichItem=4),this.changePage(0)},strpro(t){let e=t;var a=(t=t.slice(1)).replace(/[\D\d]*/g,function(t){for(var e="",a=0;a<t.length;a++)e+="*";return e});return e.slice(0,1)+a}},created(){this.changePage(0)},mounted(){},computed:{tableColumnsOrder(){let t=this,e=[];return e.push({title:this.$t("uc.otcorder.orderno"),key:"orderSn",minWidth:60,align:"center",render:function(e,a){return e("p",[e("a",{on:{click:function(){t.$router.push("/chat?tradeId="+a.row.orderSn)}}},a.row.orderSn)])}}),e.push({title:this.$t("uc.otcorder.created"),key:"createTime",minWidth:90,align:"center"}),e.push({title:this.$t("uc.otcorder.symbol"),key:"unit",align:"center"}),e.push({title:this.$t("uc.otcorder.type"),key:"type",align:"center",render:(e,a)=>{let r="";return e("div",[e("p",r=0==a.row.type?t.$t("uc.otcorder.type_buy"):t.$t("uc.otcorder.type_sell"))])}}),e.push({title:this.$t("uc.otcorder.tradename"),key:"name",ellipsis:"true",align:"center",render:function(e,a){return e("p",[e("a",{on:{click:function(){t.$router.push("/checkuser?id="+a.row.name)}}},a.row.name)])}}),e.push({title:this.$t("uc.otcorder.amount"),key:"amount",align:"center"}),e.push({title:this.$t("uc.otcorder.money"),key:"money",align:"center"}),e.push({title:this.$t("uc.otcorder.fee"),key:"commission",align:"center"}),e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-rights"},[a("div",{staticClass:"nav-right"},[a("div",{staticClass:"bill_box_order"},[a("div",{staticClass:"order_box"},[a("Tabs",{attrs:{value:"name1"},on:{"on-click":t.showItem}},[a("TabPane",{attrs:{label:t.$t("uc.otcorder.unpaid"),name:"name1"}},[a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsOrder,data:t.tableOrder,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page",staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[t.totalPage>0?a("Page",{attrs:{total:t.totalNum,current:t.currentPage,"show-total":"","page-size":t.pageSize},on:{"on-change":t.changePage}}):t._e()],1)])],1)]),t._v(" "),a("TabPane",{attrs:{label:t.$t("uc.otcorder.paided"),name:"name2"}},[a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsOrder,data:t.tableOrder,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page",staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[t.totalPage>0?a("Page",{attrs:{total:t.totalNum,current:t.currentPage,"show-total":"","page-size":t.pageSize},on:{"on-change":t.changePage}}):t._e()],1)])],1)]),t._v(" "),a("TabPane",{attrs:{label:t.$t("uc.otcorder.finished"),name:"name3"}},[a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsOrder,data:t.tableOrder,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page",staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[t.totalPage>0?a("Page",{attrs:{total:t.totalNum,current:t.currentPage,"show-total":"","page-size":t.pageSize},on:{"on-change":t.changePage}}):t._e()],1)])],1)]),t._v(" "),a("TabPane",{attrs:{label:t.$t("uc.otcorder.canceled"),name:"name0"}},[a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsOrder,data:t.tableOrder,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page",staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[t.totalPage>0?a("Page",{attrs:{total:t.totalNum,pageSize:t.pageSize,"show-total":"",current:t.currentPage},on:{"on-change":t.changePage}}):t._e()],1)])],1)]),t._v(" "),a("TabPane",{attrs:{label:t.$t("uc.otcorder.appealing"),name:"name4"}},[a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsOrder,data:t.tableOrder,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page",staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[t.totalPage>0?a("Page",{attrs:{total:t.totalNum,current:t.currentPage,"show-total":"","page-size":t.pageSize},on:{"on-change":t.changePage}}):t._e()],1)])],1)]),t._v(" "),a("Input",{staticStyle:{width:"250px","margin-right":"20px"},attrs:{slot:"extra",icon:"ios-search",placeholder:t.$t("uc.otcorder.searchtip")},on:{"on-click":t.handleSearch},slot:"extra",model:{value:t.ordKeyword,callback:function(e){t.ordKeyword=e},expression:"ordKeyword"}})],1)],1)])])])},staticRenderFns:[]};var i=a("VU/8")(r,o,!1,function(t){a("EejC"),a("wvN0")},"data-v-3142769c",null);e.default=i.exports},wvN0:function(t,e){}});