(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{aSaP:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});a("/xke");var s=a("TeRw"),r=a("p0pE"),l=a.n(r),i=a("q1tI"),o=a.n(i),n=a("t3Un"),m=a("3a4m"),c=a.n(m);class d extends o.a.Component{constructor(){super(...arguments),this.state={isEmailVerify:!1,isInviteForce:!1,sendEmailVerifyTimeout:60,loading:!0}}componentDidMount(){this.props.location.query.code&&(this.refs.invite.value=this.props.location.query.code),Object(n["a"])("/passport/config").then(e=>{200===e.code&&this.setState(l()({},e.data),()=>{this.setState({loading:!1})})})}sendEmailVerify(){var e=this;function t(){setTimeout(()=>{0!==e.state.sendEmailVerifyTimeout?(e.setState({sendEmailVerifyTimeout:e.state.sendEmailVerifyTimeout-1}),t()):e.setState({sendEmailVerifyTimeout:60})},1e3)}Object(n["b"])("/passport/sendEmailVerify",{email:this.refs.email.value}).then(e=>{200===e.code&&t()})}submit(){if(this.refs.password.value!==this.refs.repassword.value)return s["a"]["error"]({message:"\u8bf7\u6c42\u9519\u8bef",description:"\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u540c",duration:1.5});Object(n["b"])("/passport/register",{email:this.refs.email.value,password:this.refs.password.value,invite_code:this.refs.invite.value,email_code:this.refs.email_code?this.refs.email_code.value:""}).then(e=>{200===e.code&&e.data&&c.a.push("/login")})}render(){return o.a.createElement("div",{id:"page-container"},o.a.createElement("main",{id:"main-container"},o.a.createElement("div",{className:"row no-gutters justify-content-center bg-body-dark"},o.a.createElement("div",{className:"hero-static col-sm-10 col-md-6 col-xl-4 d-flex align-items-center p-2"},o.a.createElement("div",{className:"block block-rounded block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-md-12 order-md-1 bg-white"},o.a.createElement("div",{className:"block-content block-content-full px-lg-4 py-md-4 py-lg-4"},o.a.createElement("div",{className:"mb-2 text-center"},o.a.createElement("a",{className:"link-fx font-w700 font-size-h1",href:"index.html"},o.a.createElement("span",{className:"text-dark"},window.v2board.title?window.v2board.title:"V2Board")),o.a.createElement("p",{className:"text-uppercase font-w700 font-size-sm text-muted"},"\u8be5\u9875\u9762\u662f\u88ab\u52a0\u5bc6\u7684")),this.state.loading?o.a.createElement("div",{className:"content content-full text-center"},o.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))):o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control form-control-alt",placeholder:"\u90ae\u7bb1",ref:"email"})),this.state.isEmailVerify?o.a.createElement("div",{className:"form-group form-row"},o.a.createElement("div",{className:"col-9"},o.a.createElement("input",{type:"text",className:"form-control form-control-alt",placeholder:"\u90ae\u7bb1\u9a8c\u8bc1\u7801",ref:"email_code"})),o.a.createElement("div",{className:"col-3"},o.a.createElement("button",{type:"submit",disabled:60!==this.state.sendEmailVerifyTimeout,className:"btn btn-block btn-primary",onClick:()=>this.sendEmailVerify()},60===this.state.sendEmailVerifyTimeout?"\u53d1\u9001":this.state.sendEmailVerifyTimeout))):"",o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",className:"form-control form-control-alt",placeholder:"\u5bc6\u7801",ref:"password"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",className:"form-control form-control-alt",placeholder:"\u5bc6\u7801",ref:"repassword"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control form-control-alt",placeholder:this.state.isInviteForce?"\u9080\u8bf7\u7801":"\u9080\u8bf7\u7801(\u9009\u586b)",ref:"invite"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{type:"submit",className:"btn btn-block btn-hero-primary",onClick:()=>this.submit()},o.a.createElement("i",{className:"fa fa-fw fa-smile mr-1"}),"\u6ce8\u518c"))),o.a.createElement("div",{className:"text-center mt-3"},o.a.createElement("a",{className:"font-w700 font-size-sm text-muted",href:"javascript:;",onClick:()=>c.a.push("/login")},"\u8fd4\u56de\u767b\u9646"))))))))))}}}}]);