(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{159:function(e,t,n){},197:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(11),r=n.n(s),i=(n(159),n(13)),o=n(133),l=n(15),d=n(289),j=n(135),u=n(290),b=n(286),m=n(22),h=n(16),O=n(119),x=n(120),g=n.n(x),f=n(46),p=n(138),v=n(5),y=n(273),w=n(272),N=n(269),C=n(270),k=n(271),I=n(221),S=n(125),B=n.n(S),T=n(51),M=n(2),D=Object(v.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,a=e.onClose,c=Object(p.a)(e,["children","classes","onClose"]);return Object(M.jsxs)(N.a,Object(f.a)(Object(f.a)({disableTypography:!0,className:n.root},c),{},{children:[Object(M.jsx)(T.a,{variant:"h6",children:t}),a?Object(M.jsx)(I.a,{"aria-label":"close",className:n.closeButton,onClick:a,children:Object(M.jsx)(B.a,{})}):null]}))})),E=Object(v.a)((function(e){return{root:{padding:e.spacing(2)}}}))(C.a),R=Object(v.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(k.a);function W(e){var t=e.status,n=e.setInfo,s=c.a.useState(t),r=Object(i.a)(s,2),o=r[0],l=r[1],d=function(){n(!1),l(!1)};return Object(a.useEffect)((function(){l(t)}),[t]),Object(M.jsx)("div",{children:Object(M.jsxs)(w.a,{onClose:d,"aria-labelledby":"customized-dialog-title",open:o,children:[Object(M.jsx)(D,{id:"customized-dialog-title",onClose:d,children:"Made by Crossroads Subscriber"}),Object(M.jsxs)(E,{dividers:!0,children:[Object(M.jsx)(T.a,{gutterBottom:!0,children:"Made by a Crossroads Subscriber\ud83c\udf89\ufe0f"}),Object(M.jsx)(T.a,{gutterBottom:!0,children:"For communicte Crossroads subscribers in ours chat platform. Make more opportunities. More Open source contributions. Making a huge tech community with crossroads."}),Object(M.jsx)(T.a,{gutterBottom:!0,children:"Supports Kerala tech growth. Also you can contribute to this chat app. Code available in Gtihub. Make your sign in this project by Contributing..."})]}),Object(M.jsx)(R,{children:Object(M.jsx)(y.a,{autoFocus:!0,onClick:d,color:"inherit",children:"That's nice.."})})]})})}var F=n(274),L=n(295),U=n(275),A=n(276),G=n(223),q=n(277),z=n(278),H=n(126),P=n.n(H),Y=n(128),J=n.n(Y),Z=n(279),$=n(127),_=n.n($),K=Object(F.a)({list:{width:250,padding:0}});var Q=function(e){var t=e.status,n=e.setSideDrawer,c=e.changeMode,s=Object(a.useState)(!0),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(a.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),j=Object(i.a)(d,2),u=j[0],b=j[1],m=Object(a.useState)(!1),h=Object(i.a)(m,2),O=h[0],x=h[1],g=K();return Object(a.useEffect)((function(){l(t)}),[t]),Object(a.useEffect)((function(){c(u)}),[u]),Object(M.jsxs)("div",{style:{width:"auto"},onClick:function(){n(!1),l(!1)},children:[O&&Object(M.jsx)(W,{status:O,setInfo:x}),Object(M.jsxs)(L.a,{anchor:"left",open:o,children:[Object(M.jsx)(U.a,{className:g.list,children:Object(M.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(M.jsx)("img",{src:"./logo192.png",width:"60",height:"60",alt:"CR CHAT"}),Object(M.jsx)("h3",{children:"CR CHAT"})]})}),Object(M.jsx)(A.a,{}),Object(M.jsx)(U.a,{className:g.list,children:Object(M.jsxs)(G.a,{button:!0,children:[Object(M.jsx)(q.a,{children:Object(M.jsx)(P.a,{})}),Object(M.jsx)(z.a,{primary:"Home"})]})}),Object(M.jsx)(A.a,{}),Object(M.jsx)(U.a,{className:g.list,children:Object(M.jsxs)(G.a,{button:!0,children:[Object(M.jsx)(q.a,{children:Object(M.jsx)(_.a,{})}),Object(M.jsx)(z.a,{primary:"Dark mode"}),Object(M.jsx)(Z.a,{name:"checkedB",color:"primary",onChange:function(e){b(e.target.checked)},checked:u})]})}),Object(M.jsx)(A.a,{}),Object(M.jsx)(U.a,{className:g.list,children:Object(M.jsxs)(G.a,{button:!0,onClick:function(){x(!0)},children:[Object(M.jsx)(q.a,{children:Object(M.jsx)(J.a,{})}),Object(M.jsx)(z.a,{primary:"Info"})]})}),Object(M.jsx)(A.a,{})]})]})},V=n(222),X=n(280),ee=Object(F.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff",position:"fixed",width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}}));function te(e){var t=e.reason,n=ee(),a=c.a.useState(!0),s=Object(i.a)(a,2),r=s[0];s[1];return Object(M.jsx)("div",{children:Object(M.jsxs)(V.a,{className:n.backdrop,open:r,children:[Object(M.jsx)(X.a,{color:"inherit"}),Object(M.jsx)(T.a,{style:{marginTop:"2rem"},variant:"subtitle2",children:t})]})})}n(197);var ne=n(140);function ae(e){var t=e.name,n=e.time,a=e.msg;return Object(M.jsx)("div",{className:"msg",children:Object(M.jsxs)("div",{className:"bubble",children:[Object(M.jsxs)("div",{className:"txt",children:[Object(M.jsx)("span",{className:"name",children:t}),Object(M.jsx)("span",{className:"timestamp",children:n}),Object(M.jsx)("span",{className:"message",children:a})]}),Object(M.jsx)("div",{className:"bubble-arrow"})]})})}function ce(e){var t=e.time,n=e.msg;return Object(M.jsx)("div",{className:"msg",children:Object(M.jsx)("div",{className:"bubble follow",children:Object(M.jsxs)("div",{className:"txt",children:[Object(M.jsx)("span",{className:"timestamp",children:t}),Object(M.jsx)("span",{className:"message follow",children:n})]})})})}function se(e){var t=e.name,n=e.time,a=e.msg;return Object(M.jsx)("div",{className:"msg",children:Object(M.jsxs)("div",{className:"bubble alt",children:[Object(M.jsxs)("div",{className:"txt",children:[Object(M.jsx)("span",{className:"name alt",children:t}),Object(M.jsx)("span",{className:"timestamp",children:n}),Object(M.jsx)("p",{className:"message",children:a})]}),Object(M.jsx)("div",{className:"bubble-arrow alt"})]})})}function re(e){var t=e.time,n=e.msg;return Object(M.jsx)("div",{className:"msg",children:Object(M.jsx)("div",{className:"bubble altfollow",children:Object(M.jsxs)("div",{className:"txt",children:[Object(M.jsx)("span",{className:"timestamp",children:t}),Object(M.jsx)("p",{className:"message follow",children:n})]})})})}function ie(e){var t=e.text;return Object(M.jsx)(ne.a,{style:{padding:".1rem",paddingLeft:"1rem",paddingRight:"1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",width:"45%",opacity:"0.7",marginTop:".75rem",marginBottom:".75rem"},children:t})}var oe,le=n(281),de=n(282),je=n(129),ue=n.n(je),be=n(130),me=n.n(be),he=n(131),Oe=n.n(he),xe=n(291),ge=n(137),fe=n(283),pe=Object(F.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:75,maxHeight:75,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,textAlign:"center",fontFamily:"'Bree Serif', serif"},header:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},chatBody:{zIndex:"-1",marginTop:"75px",height:"90vh",overflowY:"scroll"}}})),ve=Object(O.io)("https://crossroads-chat.herokuapp.com/");var ye=function(e){var t,n=e.logoutUser,c=e.getUserData,s=e.changeMode,r=Object(a.useState)([]),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(a.useState)(!1),u=Object(i.a)(j,2),b=u[0],O=u[1],x=Object(a.useState)(" "),f=Object(i.a)(x,2),p=f[0],v=f[1],y=Object(a.useState)(!1),w=Object(i.a)(y,2),N=w[0],C=w[1],k=Object(a.useState)(""),S=Object(i.a)(k,2),B=S[0],D=S[1],E=pe(),R=function(){C(null)};Object(a.useEffect)((function(){ve.on("connecting",(function(){v("Connecting... Get ready for your entry..!")})),ve.on("connect",(function(){v(!1)})),ve.on("reconnecting",(function(){v("Reconnecting... Get ready for your entry..!")})),ve.on("reconnect_error",(function(){v("Ooops..! Reconnecting..!")})),ve.on("reconnect",(function(){v("Done..! Reconnected to the Server..!")})),ve.on("connect_error",(function(e){v(""+e)})),ve.on("disconnect",(function(){v("Something went wrong... Reconnecting..!")}))}),[]);var W=function(e){var t=e.itm;return console.log(t),"static"===t.type&&c().userId===t.userId&&"connect"===t.reason?Object(M.jsx)(ie,{text:"You Joined"}):"static"===t.type&&"connect"===t.reason?Object(M.jsx)(ie,{text:"".concat(t.name," Joined")}):"static"===t.type&&"disconnect"===t.reason?Object(M.jsx)(ie,{text:"".concat(t.name," Left")}):"message"===t.type&&c().userId===t.userId?Object(M.jsx)(se,{name:"You",msg:t.msg,time:t.time}):"message"===t.type?Object(M.jsx)(ae,{name:t.name,msg:t.msg,time:t.time}):"secondary"===t.type&&c().userId===t.userId?Object(M.jsx)(re,{msg:t.msg,time:t.time}):"secondary"===t.type?Object(M.jsx)(ce,{msg:t.msg,time:t.time}):Object(M.jsx)(ie,{text:"Someting went wrong. You need to reload or reenter.!"})};return Object(a.useEffect)((function(){ve.on("connect",(function(){ve.emit("userConnected",c()),ve.on("userConnect",(function(e){d((function(t){return[].concat(Object(h.a)(t),[e])}))})),ve.on("userDisconnect",(function(e){d((function(t){return[].concat(Object(h.a)(t),[e])}))})),ve.on("message",(function(e){oe===e.userId?(e.type="secondary",d((function(t){return[].concat(Object(h.a)(t),[e])}))):(e.type="message",d((function(t){return[].concat(Object(h.a)(t),[e])})));var t=document.getElementById("chatBody");t.scrollTo({top:t.scrollHeight,behavior:"smooth"}),oe=e.userId}))}))}),[]),Object(M.jsxs)("div",{className:E.root,children:[p&&Object(M.jsx)(te,{reason:p}),Object(M.jsx)(Q,{status:b,changeMode:s,setSideDrawer:O}),Object(M.jsx)(le.a,{position:"fixed",color:"inherit",style:{borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"},children:Object(M.jsxs)(de.a,{className:E.toolbar,children:[Object(M.jsx)(I.a,{edge:"start",className:E.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){O(!0)},children:Object(M.jsx)(ue.a,{})}),Object(M.jsx)("div",{className:E.header,children:Object(M.jsx)(T.a,{className:E.title,variant:"h4",noWrap:!0,children:Object(M.jsx)("img",{src:"./logo192.png",width:"52",height:"52",alt:"CR CHAT"})})}),Object(M.jsx)(I.a,{onClick:function(e){C(e.currentTarget)},"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(M.jsx)(me.a,{})}),Object(M.jsx)(ge.a,{id:"simple-menu",keepMounted:!0,anchorEl:N,open:Boolean(N),onClose:R,children:Object(M.jsx)(fe.a,{onClick:function(){R(),n()},children:"Logout"})})]})}),Object(M.jsx)("div",{id:"chatBody",className:E.chatBody,children:l.map((function(e,t){return Object(M.jsx)(W,{itm:e},t)}))}),Object(M.jsxs)("div",{style:{bottom:0,position:"sticky",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(M.jsx)(xe.a,(t={id:"filled-textarea",label:"Type here...!",placeholder:"Get to know everyone.",multiline:!0,variant:"filled",fullWidth:!0,rows:"1"},Object(m.a)(t,"id","textField"),Object(m.a)(t,"rowsMax","4"),Object(m.a)(t,"color","primary"),Object(m.a)(t,"value",B),Object(m.a)(t,"onChange",(function(e){D(e.target.value)})),t)),Object(M.jsx)(I.a,{style:{borderRadius:0,padding:"1rem"},onClick:function(){if(null===B||" "===B||""===B)document.getElementById("textField").focus();else{var e=c();e.msg=B,e.time=g()().format("LT"),ve.emit("massage",e),D(""),document.getElementById("textField").focus()}},children:Object(M.jsx)(Oe.a,{})})]})]})},we=n(136),Ne=n(294),Ce=n(288),ke=n(293),Ie=n(284),Se=n(287),Be=n(292),Te=n(132),Me=n.n(Te),De=n(285);function Ee(){return Object(M.jsxs)(T.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)(Ie.a,{color:"inherit",href:"/",children:"CR Chat"})," ",(new Date).getFullYear(),"."]})}var Re=Object(F.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var We=function(e){var t=e.setUserData,n=(e.getUserData,Re()),a=Object(we.a)(),c=a.register,s=a.handleSubmit,r=a.formState.errors;return Object(M.jsxs)(De.a,{component:"main",maxWidth:"xs",children:[Object(M.jsx)(b.a,{}),Object(M.jsxs)("div",{className:n.paper,children:[Object(M.jsx)(Ne.a,{className:n.avatar,children:Object(M.jsx)(Me.a,{})}),Object(M.jsx)(T.a,{component:"h1",variant:"h5",children:"Get In"}),Object(M.jsxs)("form",{autoComplete:"off",className:n.form,onSubmit:s((function(e){t(e)})),children:[Object(M.jsx)("input",Object(f.a)({hidden:!0,value:Math.random().toString(16).slice(2),name:"userId"},c("userId"))),Object(M.jsxs)(Se.a,{container:!0,spacing:2,children:[Object(M.jsx)(Se.a,{item:!0,xs:12,children:Object(M.jsx)(xe.a,Object(f.a)({variant:"outlined",fullWidth:!0,id:"name",label:"Name",error:Boolean(r.name),helperText:r.name?r.name.message:null},c("name",{required:"User Name is required.!",minLength:{value:4,message:"Minimum 4 charecters.!"}})))}),Object(M.jsx)(Se.a,{item:!0,xs:12,children:Object(M.jsx)(xe.a,Object(f.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",error:Boolean(r.email),helperText:r.email?r.email.message:null},c("email",{required:"Email is required.!",minLength:{value:5,message:"Type a valid email address.!"},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Type a valid email address.!"}})))}),Object(M.jsx)(Se.a,{item:!0,xs:12,children:Object(M.jsx)(xe.a,Object(f.a)({variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:Boolean(r.password),helperText:r.password?r.password.message:null},c("password",{required:"Password is required.!",minLength:{value:6,message:"Minimum 6 charecters.!"}})))}),Object(M.jsx)(Se.a,{item:!0,xs:12,children:Object(M.jsx)(Ce.a,{control:Object(M.jsx)(ke.a,{required:!0,value:"true",color:"default"}),label:"I am agree that I am subscribed Crossroads youtube channel."})})]}),Object(M.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Get In"}),Object(M.jsx)(Se.a,{container:!0,justify:"flex-end",children:Object(M.jsx)(Se.a,{item:!0,children:Object(M.jsx)(Ie.a,{href:"",variant:"body2"})})})]})]}),Object(M.jsx)(Be.a,{mt:5,children:Object(M.jsx)(Ee,{})})]})},Fe=n(200),Le="cr-chat-store";var Ue=function(){var e=Object(a.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(d.a)("(prefers-color-scheme: dark)"),m=function(){return Fe.get(Le)};Object(a.useEffect)((function(){s(r)}),[Object(d.a)("(prefers-color-scheme: dark)")]);var h=c.a.useMemo((function(){return Object(j.a)({palette:{type:n?"dark":"light"}})}),[n]);return Object(M.jsx)(o.a,{children:Object(M.jsx)(l.d,{children:Object(M.jsxs)(u.a,{theme:h,children:[Object(M.jsx)(b.a,{}),Object(M.jsx)(l.b,{exact:!0,path:"/",component:ye,children:"undefined"!=typeof m()?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(ye,{changeMode:function(e){s(e)},getUserData:m,logoutUser:function(){Fe.remove(Le),window.location.reload()}})}):Object(M.jsx)(l.a,{to:"/get-in"})}),Object(M.jsx)(l.b,{path:"/get-in",component:We,children:"undefined"==typeof m()?Object(M.jsx)(We,{setUserData:function(e){Fe.set(Le,e),window.location.reload()},getUserData:m}):Object(M.jsx)(l.a,{to:"/"})})]})})})},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(Ue,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ge(t,e)}))}}(),qe()}},[[217,1,2]]]);
//# sourceMappingURL=main.80f97be6.chunk.js.map