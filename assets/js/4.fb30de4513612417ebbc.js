webpackJsonp([4],{"6iZX":function(t,e){},"7Mql":function(t,e){},"7qpr":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("GnUe");var i=s("7t+N"),o=s.n(i),n={data(){return{country:"+86",captchaObj:null,_captchaResult:null,formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:this.$t("uc.login.loginvalidate"),trigger:"blur"}],password:[{required:!0,message:this.$t("uc.login.pwdvalidate1"),trigger:"blur"},{type:"string",min:6,message:this.$t("uc.login.pwdvalidate2"),trigger:"blur"}]}}},created:function(){this.init()},computed:{isLogin:function(){return this.$store.getters.isLogin}},methods:{init(){this.$store.commit("navigate","nav-other"),this.$store.state.HeaderActiveName="0",this.isLogin?this.$router.push("/uc/safe"):this.initGtCaptcha()},onKeyup(t){13==t.keyCode&&o()(".login_btn").click()},initGtCaptcha(){this.$http.get(this.host+this.api.uc.captcha).then(function(t){window.initGeetest({gt:t.body.gt,challenge:t.body.challenge,offline:!t.body.success,new_captcha:t.body.new_captcha,product:"bind",width:"100%"},this.handler)})},handler(t){t.onReady(()=>{o()("#wait").hide()}).onSuccess(()=>{(this._captchaResult=t.getValidate())?this.handleSubmit("formInline"):this.$Message.error("请完成验证")}),o()(".login_btn").click(()=>{let t=this.formInline.user.length>=4,e=this.formInline.password.length>=6;(!t||!e)&&this.$Message.error(this.$t("common.fillComplete")),this.handleSubmit("formInline")})},logout(){this.$http.post(this.host+"/uc/logout",{}).then(t=>{0==t.body.code&&(localStorage.setItem("MEMBER",JSON.stringify(null)),localStorage.setItem("TOKEN",null),localStorage.removeItem("USERKEY",null))})},handleSubmit(t){this.$refs[t].validate(t=>{if(t){var e={};e.username=this.formInline.user,e.password=this.formInline.password,this.$http.post(this.host+this.api.uc.login,e).then(t=>{var e=t.body;0==e.code?(this.$Message.success(this.$t("uc.login.success")),this.$store.commit("setMember",t.body.data),null!=this.$route.query.key&&""!=this.$route.query.key&&localStorage.setItem("USERKEY",this.$route.query.key),console.log(2313),this.$router.push("/uc/safe")):this.$Message.error(e.message)})}}),this._captchaResult?this.$refs[t].validate(t=>{if(t){var e={};e.username=this.formInline.user,e.password=this.formInline.password,this.$http.post(this.host+this.api.uc.login,e).then(t=>{var e=t.body;0==e.code?(this.$Message.success(this.$t("uc.login.success")),this.$store.commit("setMember",t.body.data),null!=this.$route.query.key&&""!=this.$route.query.key&&localStorage.setItem("USERKEY",this.$route.query.key),console.log(222),this.$router.push("/uc/safe")):this.$Message.error(e.message)})}}):(o()("#notice").show(),setTimeout(function(){o()("#notice").hide()},2e3))}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_form"},[s("div",{staticClass:"login_right"},[s("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[s("div",{staticClass:"login_title"},[t._v(t._s(t.$t("uc.login.login")))]),t._v(" "),s("FormItem",{attrs:{prop:"user"}},[s("Input",{staticClass:"user",attrs:{name:"user",type:"text",placeholder:t.$t("uc.login.usertip")},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),t._v(" "),s("FormItem",{staticClass:"password",attrs:{prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:t.$t("uc.login.pwdtip")},on:{"on-keyup":t.onKeyup},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),t._v(" "),s("p",{staticClass:"hide",attrs:{id:"notice"}},[t._v(t._s(t.$t("uc.login.validatemsg")))]),t._v(" "),s("p",{staticStyle:{height:"30px"}},[s("router-link",{staticStyle:{color:"#979797",float:"right","padding-right":"10px","font-size":"12px"},attrs:{to:"/findPwd"}},[t._v("\n          "+t._s(t.$t("uc.login.forget"))+"\n        ")])],1),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"15px"}},[s("Button",{staticClass:"login_btn"},[t._v(t._s(t.$t("uc.login.login")))])],1),t._v(" "),s("div",{staticClass:"to_register"},[s("span",[t._v(t._s(t.$t("uc.login.noaccount")))]),t._v(" "),s("router-link",{attrs:{to:"/register"}},[t._v(t._s(t.$t("uc.login.goregister")))])],1)],1)],1)])},staticRenderFns:[]};var a=s("VU/8")(n,r,!1,function(t){s("yB/s"),s("6iZX"),s("7Mql")},"data-v-650682fc",null);e.default=a.exports},"yB/s":function(t,e){}});