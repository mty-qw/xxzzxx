webpackJsonp([12],{"9uWJ":function(t,e){},RW23:function(t,e){},WRM1:function(t,e){},pJNN:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("7t+N");var i={data(){return{country:"中国",codedisabled:!1,sendcodeValue:this.$t("uc.regist.sendcode"),isRegister:!1,ticket:"",randStr:"",registing:!1,captchaObj:null,modal1:!1,_captchaResult:null,agree:!0,allowRegister:!0,buttonLists:[{text:this.$t("uc.regist.telregist")},{text:this.$t("uc.regist.emailregist")}],areas:[],changeActive:0,showCode:!0,countdown:60,formInline:{username:"",user:"",code:"",areaCode:"",password:"",repassword:"",promotion:""},ruleInline:{user:[{validator:(t,e,s)=>{if(0==this.changeActive)""==e?s(new Error(this.$t("uc.regist.teltip"))):s();else{var i=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;i=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,""==e?s(new Error(this.$t("uc.regist.emailtip"))):i.test(this.formInline.user)?s():s(new Error(this.$t("uc.regist.emailerr")))}},trigger:"blur"}],code:[{required:!0,message:this.$t("uc.regist.smscodetip"),trigger:"blur"}],password:[{required:!0,message:this.$t("uc.regist.pwdtip"),trigger:"blur"},{type:"string",min:6,message:this.$t("uc.regist.pwdmsg"),trigger:"blur"}],repassword:[{validator:(t,e,s)=>{""===e?s(new Error(this.$t("uc.regist.confirmpwdtip"))):e!==this.formInline.password?s(new Error(this.$t("uc.regist.confirmpwderr"))):s()},trigger:"blur"}]},key:"",code:""}},watch:{changeActive:function(t){this.$refs.formInline.resetFields()},lang:function(){this.updateLangData()}},computed:{lang:function(){return this.$store.state.lang},isLogin:function(){return this.$store.getters.isLogin}},created:function(){window.scrollTo(0,0),this.init(),this.actives(this.changeActive),void 0!=this.$route.query.code&&""!=this.$route.query.code&&null!=this.$route.query.code?this.formInline.promotion=this.$route.query.code:this.formInline.promotion=""},methods:{updateLangData(){this.buttonLists=[{text:this.$t("uc.regist.telregist")},{text:this.$t("uc.regist.emailregist")}],0==this.changeActive?this.key=this.$t("uc.regist.telno"):this.key=this.$t("uc.regist.email")},init(){this.$store.commit("navigate","nav-other"),this.$store.state.HeaderActiveName="0",this.isLogin&&this.$router.push("/"),window.document.title=("zh_CN"==this.lang?"新用户注册 - ":"New Register - ")+"BZEX | Global digital currency trading platform"},initGtCaptcha(){var t=this;new TencentCaptcha("2031827463",function(e){0==e.ret&&(t.isRegister=!0)&&(t.ticket=e.ticket)&&(t.randStr=e.randstr)&&t.success()}).show()},onAreaChange(t){for(var e=0;e<this.areas.length;e++)this.areas[e].zhName==t&&(this.formInline.areaCode=this.areas[e].areaCode)},getAreas(){this.$http.post(this.host+this.api.common.area).then(t=>{var e=t.body;this.areas=e.data,this.formInline.country=this.areas[0].zhName,this.formInline.areaCode=this.areas[0].areaCode})},actives:function(t){this.changeActive=t,0==this.changeActive?(this.showCode=!0,this.key=this.$t("uc.regist.telno"),this.ruleInline.code=[{required:!0,message:this.$t("uc.regist.smscodetip"),trigger:"blur"}]):(this.showCode=!1,this.key=this.$t("uc.regist.email"),this.ruleInline.code=[])},handleSubmit(t){this.$refs[t].validate(t=>{if(t)if(1==this.agree)if(1==this.changeActive)this.openValidateModal();else if(this.isRegister){this.registing=!0;var e={};e.phone=this.formInline.user,e.username=this.formInline.username+this.formInline.user,e.password=this.formInline.password,e.promotion=this.formInline.promotion,e.code=this.formInline.code,e.country=this.country,e.superPartner="",e.ticket=this.ticket,e.randStr=this.randStr,this.$http.post(this.host+"/uc/register/phone",e).then(t=>{this.registing=!1;var e=t.body;if(0==e.code)if("1"==this.formInline.superType||"2"==this.formInline.superType){this.$Notice.success({title:this.$t("common.tip"),desc:"已注册成功"});var s=this;setTimeout(()=>{s.$router.push("/app")},3e3)}else{this.$Notice.success({title:this.$t("common.tip"),desc:e.message});s=this;setTimeout(()=>{s.$router.push("/app")},3e3)}else this.$Notice.error({title:this.$t("common.tip"),desc:e.message})})}else this.$Notice.error({title:this.$t("common.tip"),desc:"请输入正确的验证码"});else this.$Notice.error({title:this.$t("common.tip"),desc:this.$t("uc.regist.agreementtip")});else console.log("999")})},settime(){this.sendcodeValue=this.$t("uc.regist.resendcode")+this.countdown+")",this.codedisabled=!0;var t=this;let e=setInterval(()=>{t.countdown--,t.sendcodeValue=t.$t("uc.regist.resendcode")+t.countdown+")",this.countdown<=0&&(clearInterval(e),t.codedisabled=!1,t.sendcodeValue=t.$t("uc.regist.sendcode"),t.countdown=60)},1e3)},sendCode(){""!=this.formInline.user?this.initGtCaptcha():this.$Message.error(this.$t("uc.regist.teltip"))},success(){var t={};t.phone=this.formInline.user,t.country="中国";this.$http.post(this.host+"/uc/mobile/code",t).then(t=>{var e=t.body;0==e.code&&this.$Notice.success({title:this.$t("common.tip"),desc:e.message}),0==e.code&&this.settime(),0!=e.code&&this.$Notice.error({title:this.$t("common.tip"),desc:e.message})})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_form mob-login"},[i("div",{staticClass:"login_right"},[i("div",{staticStyle:{color:"#F90","margin-bottom":"60px","margin-top":"60px"}},[i("h1",{staticStyle:{"border-left":"5px solid #F90","padding-left":"10px","letter-spacing":"2px","line-height":"30px",height:"30px"}},[t._v("BIZZAN.PRO")]),t._v(" "),i("p",{staticStyle:{"padding-left":"15px","letter-spacing":"6px"}},[t._v(t._s(t.$t("footer.gsmc")))]),t._v(" "),i("div",{staticStyle:{"margin-left":"5px","letter-spacing":"2px","margin-top":"10px",color:"rgb(226, 226, 227)","font-size":"13px",padding:"5px 10px"}},[t._v("安全 ● 诚实 ● 公平 ● 热情 ● 开放")])]),t._v(" "),t.allowRegister?i("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[i("FormItem",{staticStyle:{display:"none"},attrs:{prop:"username"}},[i("Input",{attrs:{type:"text",placeholder:t.$t("uc.regist.username")},model:{value:t.formInline.username,callback:function(e){t.$set(t.formInline,"username",e)},expression:"formInline.username"}})],1),t._v(" "),i("FormItem",{attrs:{prop:"user"}},[i("Input",{attrs:{type:"text",placeholder:t.key},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}},[i("Select",{staticStyle:{width:"65px","border-bottom":"1px solid #27313e"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},[i("Option",{attrs:{value:"中国",label:"+86"}},[i("span",[t._v("+86")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v("中国")])]),t._v(" "),i("Option",{attrs:{value:"新加坡",label:"+65"}},[i("span",[t._v("+65")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.singapore")))])]),t._v(" "),i("Option",{attrs:{value:"韩国",label:"+82"}},[i("span",[t._v("+82")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.korea")))])]),t._v(" "),i("Option",{attrs:{value:"日本",label:"+81"}},[i("span",[t._v("+81")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.japan")))])]),t._v(" "),i("Option",{attrs:{value:"泰国",label:"+66"}},[i("span",[t._v("+66")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.thailand")))])]),t._v(" "),i("Option",{attrs:{value:"俄罗斯",label:"+7"}},[i("span",[t._v("+7")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.russia")))])]),t._v(" "),i("Option",{attrs:{value:"英国",label:"+44"}},[i("span",[t._v("+44")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.uk")))])]),t._v(" "),i("Option",{attrs:{value:"越南",label:"+84"}},[i("span",[t._v("+84")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.vietnam")))])]),t._v(" "),i("Option",{attrs:{value:"印度",label:"+91"}},[i("span",[t._v("+91")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.india")))])]),t._v(" "),i("Option",{attrs:{value:"意大利",label:"+39"}},[i("span",[t._v("+39")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.italy")))])]),t._v(" "),i("Option",{attrs:{value:"香港",label:"+852"}},[i("span",[t._v("+852")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.hk")))])]),t._v(" "),i("Option",{attrs:{value:"马来西亚",label:"+60"}},[i("span",[t._v("+60")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.malaysia")))])]),t._v(" "),i("Option",{attrs:{value:"台湾省",label:"+886"}},[i("span",[t._v("+886")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.taiwan")))])]),t._v(" "),i("Option",{attrs:{value:"土耳其",label:"+90"}},[i("span",[t._v("+90")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.turkey")))])]),t._v(" "),i("Option",{attrs:{value:"德国",label:"+49"}},[i("span",[t._v("+49")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.germany")))])]),t._v(" "),i("Option",{attrs:{value:"法国",label:"+33"}},[i("span",[t._v("+33")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.france")))])]),t._v(" "),i("Option",{attrs:{value:"西班牙",label:"+34"}},[i("span",[t._v("+34")]),i("span",{staticStyle:{"margin-left":"10px",color:"#ccc"}},[t._v(t._s(t.$t("uc.regist.spain")))])])],1)],1)],1),t._v(" "),i("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],attrs:{prop:"code"}},[i("Input",{attrs:{type:"text",placeholder:t.$t("uc.regist.smscode")},model:{value:t.formInline.code,callback:function(e){t.$set(t.formInline,"code",e)},expression:"formInline.code"}}),t._v(" "),i("input",{attrs:{id:"sendCode",type:"Button",shape:"circle",disabled:t.codedisabled},domProps:{value:t.sendcodeValue},on:{click:function(e){return t.sendCode()}}})],1),t._v(" "),i("FormItem",{staticClass:"password",attrs:{prop:"password"}},[i("Input",{attrs:{type:"password",placeholder:t.$t("uc.regist.pwd")},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),t._v(" "),i("FormItem",{staticClass:"password",attrs:{prop:"repassword"}},[i("Input",{attrs:{type:"password",placeholder:t.$t("uc.regist.repwd")},model:{value:t.formInline.repassword,callback:function(e){t.$set(t.formInline,"repassword",e)},expression:"formInline.repassword"}})],1),t._v(" "),i("FormItem",{attrs:{prop:"promotion"}},[i("Input",{attrs:{type:"text"},model:{value:t.formInline.promotion,callback:function(e){t.$set(t.formInline,"promotion",e)},expression:"formInline.promotion"}},[i("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$t("uc.regist.promotion"))+" :")])])],1),t._v(" "),i("div",{staticClass:"check-agree"},[i("label",[i("Checkbox",{model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[t._v(t._s(t.$t("uc.regist.agreement")))])],1),t._v(" "),"zh_CN"==t.lang?i("a",{attrs:{href:"/helpdetail?cate=1&id=5&cateTitle=常见问题",target:"_blank"}},[t._v("《"+t._s(t.$t("uc.regist.userprotocol"))+"》")]):t._e(),t._v(" "),"zh_CN"==t.lang?i("a",{attrs:{href:"/helpdetail?cate=1&id=35&cateTitle=Privacy Policy",target:"_blank"}},[t._v("《"+t._s(t.$t("uc.regist.userprotocol"))+"》")]):t._e()]),t._v(" "),i("FormItem",[i("Button",{staticClass:"register_btn",attrs:{disabled:t.registing},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v(t._s(t.$t("uc.regist.regist")))])],1)],1):t._e()],1),t._v(" "),i("div",{staticClass:"section",attrs:{id:"page4"}},[i("ul",[i("li",[t._m(0),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title1")))]),t._v(" "),i("p",[t._v(t._s(t.$t("description.message1")))])]),t._v(" "),i("li",[t._m(1),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title2")))]),t._v(" "),i("p",[t._v(t._s(t.$t("description.message2")))])]),t._v(" "),i("li",[t._m(2),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title3")))]),t._v(" "),i("p",[t._v(t._s(t.$t("description.message3")))])]),t._v(" "),i("li",[t._m(3),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title4")))]),t._v(" "),i("p",[t._v(t._s(t.$t("description.message4")))])])])]),t._v(" "),i("div",{staticClass:"app_bottom_reg"},[i("div",{staticClass:"left_logo"},[i("img",{staticStyle:{float:"left"},attrs:{src:s("Rvcu")}}),t._v(" "),i("div",{staticStyle:{float:"left",height:"40px","line-height":"40px",color:"#000"}},[t._v(t._s(t.$t("cms.downloadslogan")))])]),t._v(" "),i("div",{staticClass:"right_btn_wrap"},[i("router-link",{staticClass:"right_btn",attrs:{to:"/app"}},[t._v(t._s(t.$t("cms.download")))])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:s("VvE/"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:s("2KGX"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:s("hOmv"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:s("LLQx"),alt:""}})])}]};var a=s("VU/8")(i,r,!1,function(t){s("WRM1"),s("RW23"),s("9uWJ")},"data-v-effdcc02",null);e.default=a.exports}});