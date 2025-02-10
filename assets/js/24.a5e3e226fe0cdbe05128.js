webpackJsonp([24],{VBPj:function(t,e){},m2Vq:function(t,e){},mg8I:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("d5Yy"),r=a("PJh5"),o={components:{expandRow:n.a},data(){const t=this;return{loading:!1,pageSize:10,pageNo:1,total:10,symbol:[],formItem:{symbol:"",type:"",direction:"",date:""},columns:[{type:"index",width:30,render:(t,e)=>t(n.a,{props:{skin:e.row.skin,rows:e.row.detail}})},{title:t.$t("exchange.time"),key:"time",minWidth:55,render:(e,a)=>e("span",{},t.dateFormat(a.row.time))},{title:t.$t("uc.finance.trade.symbol"),width:130,key:"symbol"},{title:t.$t("uc.finance.trade.type"),width:70,render:(e,a)=>e("span","LIMIT_PRICE"===a.row.type?t.$t("exchange.limited_price"):t.$t("exchange.market_price"))},{title:t.$t("exchange.direction"),key:"direction",width:90,render:(e,a)=>{const n=a.row;return e("span",{attrs:{class:n.direction.toLowerCase()}},"BUY"==n.direction?t.$t("exchange.buyin"):t.$t("exchange.sellout"))}},{title:t.$t("exchange.price"),key:"price",render:(e,a)=>e("span",{attrs:{title:a.row.price}},t.toFloor(a.row.price))},{title:t.$t("exchange.num"),key:"amount",render:(e,a)=>e("span",{attrs:{title:a.row.amount}},t.toFloor(a.row.amount))},{title:t.$t("exchange.done"),key:"tradedAmount",render:(e,a)=>e("span",{attrs:{title:a.row.tradedAmount}},t.toFloor(a.row.tradedAmount))},{title:t.$t("uc.finance.trade.turnover"),key:"turnover",render:(e,a)=>e("span",{attrs:{title:a.row.turnover}},t.toFloor(a.row.turnover))},{title:t.$t("exchange.status"),key:"status",width:80,render:(e,a)=>{const n=a.row.status;return"COMPLETED"==n?e("span",{style:{color:"#f0a70a"}},t.$t("exchange.finished")):"CANCELED"==n?e("span",{style:{color:"#f0a70a"}},t.$t("exchange.canceled")):e("span",{},"--")}}],orders:[]}},computed:{lang:function(){return this.$store.state.lang}},watch:{lang:function(){this.updateLangData()}},created(){this.getHistoryOrder(),this.getSymbol()},methods:{dateFormat:function(t){return r(t).format("YYYY-MM-DD HH:mm:ss")},loadDataPage(t){this.pageNo=t,this.getHistoryOrder()},handleSubmit(){this.pageNo=1,this.getHistoryOrder()},handleClear(){this.formItem={symbol:"",type:"",direction:"",date:""}},getHistoryOrder(){this.loading=!0;const{symbol:t,type:e,direction:a,date:n}=this.formItem,r=new Date(n[0]).getTime()||"",o=new Date(n[1]).getTime()||"";let i={};t&&(i.symbol=t),a&&(i.direction=a),e&&(i.type=e),r&&(i.startTime=r),o&&(i.endTime=o),i.pageNo=this.pageNo,i.pageSize=this.pageSize;var s=this;this.orders=[],this.$http.post(this.host+"/exchange/order/personal/history",i).then(t=>{var e=t.body;let a=[];if(e.content.length>0){this.total=e.totalElements;for(var n=0;n<e.content.length;n++){var r=e.content[n];r.price="MARKET_PRICE"==r.type?s.$t("exchange.marketprice"):r.price,a.push(r)}this.orders=a}this.loading=!1})},getSymbol(){this.$http.post(this.host+this.api.market.thumb,{}).then(t=>{var e=t.body;e.length>0&&(this.symbol=e)})},updateLangData(){this.columns[1].title=this.$t("exchange.time"),this.columns[2].title=this.$t("uc.finance.trade.symbol"),this.columns[3].title=this.$t("uc.finance.trade.type"),this.columns[4].title=this.$t("exchange.direction"),this.columns[5].title=this.$t("exchange.price"),this.columns[6].title=this.$t("exchange.num"),this.columns[7].title=this.$t("exchange.traded"),this.columns[8].title=this.$t("uc.finance.trade.turnover"),this.columns[9].title=this.$t("exchange.status")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"entrusthistory"},[a("Form",{staticClass:"form",attrs:{model:t.formItem,"label-width":75,inline:""}},[a("FormItem",{attrs:{label:t.$t("uc.finance.trade.start_end")}},[a("DatePicker",{staticStyle:{width:"180px"},attrs:{type:"daterange"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1),t._v(" "),a("FormItem",{attrs:{label:t.$t("uc.finance.trade.symbol")}},[a("Select",{staticStyle:{width:"100px"},attrs:{placeholder:t.$t("common.pleaseselect")},model:{value:t.formItem.symbol,callback:function(e){t.$set(t.formItem,"symbol",e)},expression:"formItem.symbol"}},t._l(t.symbol,function(e,n){return a("Option",{key:n,attrs:{value:e.symbol}},[t._v(t._s(e.symbol))])}),1)],1),t._v(" "),a("FormItem",{attrs:{label:t.$t("uc.finance.trade.type")}},[a("Select",{staticStyle:{width:"70px"},attrs:{placeholder:t.$t("common.pleaseselect")},model:{value:t.formItem.type,callback:function(e){t.$set(t.formItem,"type",e)},expression:"formItem.type"}},[a("Option",{attrs:{value:"LIMIT_PRICE"}},[t._v(t._s(t.$t("uc.finance.trade.limit")))]),t._v(" "),a("Option",{attrs:{value:"MARKET_PRICE"}},[t._v(t._s(t.$t("uc.finance.trade.market")))])],1)],1),t._v(" "),a("FormItem",{attrs:{label:t.$t("uc.finance.trade.direction")}},[a("Select",{staticStyle:{width:"70px"},attrs:{placeholder:t.$t("common.pleaseselect")},model:{value:t.formItem.direction,callback:function(e){t.$set(t.formItem,"direction",e)},expression:"formItem.direction"}},[a("Option",{attrs:{value:"0"}},[t._v(t._s(t.$t("uc.finance.trade.buy")))]),t._v(" "),a("Option",{attrs:{value:"1"}},[t._v(t._s(t.$t("uc.finance.trade.sell")))])],1)],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"warning"},on:{click:t.handleSubmit}},[t._v(t._s(t.$t("uc.finance.trade.search")))]),t._v(" "),a("Button",{staticClass:"clear_btn",staticStyle:{"margin-left":"8px"},on:{click:t.handleClear}},[t._v(t._s(t.$t("uc.finance.trade.clear")))])],1)],1),t._v(" "),a("div",{staticClass:"table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.columns,data:t.orders,loading:t.loading}}),t._v(" "),a("div",{staticClass:"page"},[a("Page",{attrs:{total:t.total,pageSize:t.pageSize,current:t.pageNo},on:{"on-change":t.loadDataPage}})],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,i,!1,function(t){a("m2Vq"),a("VBPj")},"data-v-92c841b0",null);e.default=s.exports}});