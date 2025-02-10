webpackJsonp([28],{"0lTb":function(t,e){},WMU2:function(t,e){},vR4m:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{},data(){var t=this;return{loading:!1,startTime:"",endTime:"",ordKeyword:"",rangeDate:"",startDate:"",endDate:"",recordValue:"",recordType:[{value:0,label:this.$t("uc.finance.record.charge")},{value:1,label:this.$t("uc.finance.record.pickup")},{value:2,label:this.$t("uc.finance.record.transaccount")},{value:3,label:this.$t("uc.finance.record.exchange")},{value:4,label:this.$t("uc.finance.record.otcbuy")},{value:5,label:this.$t("uc.finance.record.otcsell")},{value:6,label:this.$t("uc.finance.record.activityaward")},{value:7,label:this.$t("uc.finance.record.promotionaward")},{value:8,label:this.$t("uc.finance.record.dividend")},{value:9,label:this.$t("uc.finance.record.vote")},{value:10,label:this.$t("uc.finance.record.handrecharge")},{value:11,label:this.$t("uc.finance.record.match")},{value:12,label:this.$t("uc.finance.record.activitybuy")},{value:13,label:this.$t("uc.finance.record.ctcbuy")},{value:14,label:this.$t("uc.finance.record.ctcsell")},{value:15,label:this.$t("uc.finance.record.redout")},{value:16,label:this.$t("uc.finance.record.redin")}],tableColumnsRecord:[{title:this.$t("uc.finance.trade.transactionTime"),align:"center",render:(t,e)=>t("div",{},e.row._source.transaction_time)},{title:this.$t("uc.finance.trade.exchangeOrderId"),align:"center",render:(t,e)=>t("div",{},e.row._source.exchange_order_id)},{title:this.$t("uc.finance.trade.symbol"),align:"center",render:(t,e)=>t("div",{},e.row._source.symbol)},{title:this.$t("uc.finance.trade.direction"),align:"center",render:function(e,a){let i=a.row._source.type,r=a.row._source.direction,n="",c="",s=t.$store.state.lang;return 1==i?("English"==s&&(n="market price"),"English"!=s&&(n="限价")):0==i&&("English"==s&&(n="Present price"),"English"!=s&&(n="市价")),1==r?("English"==s&&(c=" sell"),"English"!=s&&(c="卖出")):0==r&&("English"==s&&(c=" buy"),"English"!=s&&(c="买入")),e("div",n+c,"")}},{title:this.$t("uc.finance.trade.poundageAmount"),align:"center",render:(t,e)=>{let a=e.row._source.coin_id,i=this.toFloor(e.row._source.poundage_amount);return t("div",{attrs:{title:e.row._source.poundage_amount}},i+"   "+a)}},{title:this.$t("uc.finance.trade.mineAmount"),key:"mineAmount",align:"center",render:(t,e)=>{let a=this.toFloor(e.row._source.mine_amount);return t("span",{attrs:{title:e.row._source.mine_amount}},a)}}],accumulative_return:0,accumulat_return:0,pageSize:10,page:1,total:0,tableRecord:[]}},created:function(){this.init()},methods:{changedate(){this.startTime=this.dateform(this.rangeDate[0]),this.endTime=this.dateform(this.rangeDate[1])},init(){let t=0;!this.$store.getters.isLogin&&this.$router.push("/login"),this.$store.getters.isLogin&&(t=this.$store.getters.member.id);let e="",a="",i=this.api.uc.mylist;this.startTime&&(e=this.startTime),this.endTime&&(a=this.endTime);let r={memberId:t,page:this.page,limit:10,startTime:e,endTime:a};this.loading=!0,this.$http.post(this.host+i,r).then(t=>{if(0==t.body.code){let e=t.body.data;if(this.accumulative_return=e.backAmount,this.accumulat_return=e.preAmount,e.data){let t=e.data.hits;this.total=t.total,this.tableRecord=t.hits}}else this.$Message.error(t.body.message);this.loading=!1})},changePage(t){this.page=t,this.init()},dateform(t){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var r=e.getDate();r=r<10?"0"+r:r;var n=e.getHours();n=n<10?"0"+n:n;var c=e.getMinutes(),s=e.getSeconds();return a+"-"+i+"-"+r+" "+n+":"+(c=c<10?"0"+c:c)+":"+(s=s<10?"0"+s:s)},queryOrder(){if(0!=this.rangeDate.length)try{this.page=1,this.init()}catch(t){return void this.$Message.error("请选择搜索日期范围")}else this.$Message.error("请选择搜索日期范围")},updateLangData(){this.tableColumnsRecord[0].title=this.$t("uc.finance.trade.transactionTime"),this.tableColumnsRecord[1].title=this.$t("uc.finance.trade.exchangeOrderId"),this.tableColumnsRecord[2].title=this.$t("uc.finance.trade.symbol"),this.tableColumnsRecord[3].title=this.$t("uc.finance.trade.direction"),this.tableColumnsRecord[4].title=this.$t("uc.finance.trade.poundageAmount"),this.tableColumnsRecord[5].title=this.$t("uc.finance.trade.mineAmount"),this.tableColumnsRecord[6].title=this.$t("uc.finance.trade.account_date")}},computed:{lang:function(){return this.$store.state.lang}},watch:{lang:function(){this.updateLangData()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-rights"},[a("div",{staticClass:"nav-right col-xs-12 col-md-10 padding-right-clear"},[a("div",{staticClass:"bill_box rightarea padding-right-clear record"},[a("div",{staticClass:"col-xs-12 rightarea-con"},[a("div",{staticClass:"trade_accumulative"},[a("div",{staticClass:"trade_accumulative_return"},[t._v(t._s(t.$t("uc.finance.trade.accumulative_return"))+"  "+t._s(new Number(t.accumulative_return).toFixed(8)))]),t._v(" "),a("div",{staticClass:"trade_accumulat_return"},[t._v(t._s(t.$t("uc.finance.trade.accumulat_return"))+"  "+t._s(new Number(t.accumulat_return).toFixed(8)))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v("\n                        "+t._s(t.$t("uc.finance.trade.start_end"))+" ：\n                    ")]),t._v(" "),a("DatePicker",{staticStyle:{width:"200px","margin-right":"35px"},attrs:{type:"daterange",format:"yyyy-MM-dd"},on:{"on-change":t.changedate},model:{value:t.rangeDate,callback:function(e){t.rangeDate=e},expression:"rangeDate"}}),t._v(" "),a("Button",{staticStyle:{padding:"6px 30px","margin-left":"10px","background-color":"#f0a70a","border-color":"#f0a70a"},attrs:{type:"primary"},on:{click:t.queryOrder}},[t._v(t._s(t.$t("uc.finance.trade.search")))])],1),t._v(" "),a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsRecord,data:t.tableRecord,loading:t.loading}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:t.total,"page-size":t.pageSize,"show-total":"",current:t.page,id:"record_pages"},on:{"on-change":t.changePage}})],1)])],1)])])])])},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(t){a("WMU2"),a("0lTb")},"data-v-643c6540",null);e.default=n.exports}});