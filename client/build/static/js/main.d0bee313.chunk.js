(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,a){},189:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(11),s=a.n(l),c=(a(151),a(16)),n=a(128),o=a(13),h=a(263),j=a(130),d=a(265),m=a(258),b=(a(152),a(246)),u=a(270),x=a(248),O=a(249),g=a(203),p=a(250),f=a(251),v=a(121),H=a.n(v),y=a(123),w=a.n(y),N=a(252),C=a(122),k=a.n(C),I=a(2),B=Object(b.a)({list:{width:250,padding:0}});var T=function(e){var t=e.status,a=e.setSideDrawer,r=e.changeMode,l=Object(i.useState)(!0),s=Object(c.a)(l,2),n=s[0],o=s[1],h=Object(i.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),j=Object(c.a)(h,2),d=j[0],m=j[1],b=B();return Object(i.useEffect)((function(){o(t)}),[t]),Object(i.useEffect)((function(){r(d)}),[d]),Object(I.jsx)("div",{style:{width:"auto"},onClick:function(){a(!1),o(!1)},children:Object(I.jsxs)(u.a,{anchor:"left",open:n,children:[Object(I.jsx)(x.a,{className:b.list,children:Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(I.jsx)("img",{src:"./logo192.png",width:"80",height:"80",alt:"CR CHAT"}),Object(I.jsx)("h3",{children:"CR CHAT"})]})}),Object(I.jsx)(O.a,{}),Object(I.jsx)(x.a,{className:b.list,children:Object(I.jsxs)(g.a,{button:!0,children:[Object(I.jsx)(p.a,{children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(f.a,{primary:"Home"})]})}),Object(I.jsx)(O.a,{}),Object(I.jsx)(x.a,{className:b.list,children:Object(I.jsxs)(g.a,{button:!0,children:[Object(I.jsx)(p.a,{children:Object(I.jsx)(k.a,{})}),Object(I.jsx)(f.a,{primary:"Dark mode"}),Object(I.jsx)(N.a,{name:"checkedB",color:"primary",onChange:function(e){m(e.target.checked)},checked:d})]})}),Object(I.jsx)(O.a,{}),Object(I.jsx)(x.a,{className:b.list,children:Object(I.jsxs)(g.a,{button:!0,children:[Object(I.jsx)(p.a,{children:Object(I.jsx)(w.a,{})}),Object(I.jsx)(f.a,{primary:"Info"})]})}),Object(I.jsx)(O.a,{})]})})},D=(a(189),a(201));function S(e){var t=e.name,a=e.time,i=e.msg;return Object(I.jsx)("div",{className:"msg",children:Object(I.jsxs)("div",{className:"bubble",children:[Object(I.jsxs)("div",{className:"txt",children:[Object(I.jsx)("span",{className:"name",children:t}),Object(I.jsx)("span",{className:"timestamp",children:a}),Object(I.jsx)("span",{className:"message",children:i})]}),Object(I.jsx)("div",{className:"bubble-arrow"})]})})}function M(e){var t=e.time,a=e.msg;return Object(I.jsx)("div",{className:"msg",children:Object(I.jsx)("div",{className:"bubble follow",children:Object(I.jsxs)("div",{className:"txt",children:[Object(I.jsx)("span",{className:"timestamp",children:t}),Object(I.jsx)("span",{className:"message follow",children:a})]})})})}function R(e){var t=e.name,a=e.time,i=e.msg;return Object(I.jsx)("div",{className:"msg",children:Object(I.jsxs)("div",{className:"bubble alt",children:[Object(I.jsxs)("div",{className:"txt",children:[Object(I.jsx)("span",{className:"name alt",children:t}),Object(I.jsx)("span",{className:"timestamp",children:a}),Object(I.jsx)("p",{className:"message",children:i})]}),Object(I.jsx)("div",{className:"bubble-arrow alt"})]})})}function U(e){var t=e.time,a=e.msg;return Object(I.jsx)("div",{className:"msg",children:Object(I.jsx)("div",{className:"bubble altfollow",children:Object(I.jsxs)("div",{className:"txt",children:[Object(I.jsx)("span",{className:"timestamp",children:t}),Object(I.jsx)("p",{className:"message follow",children:a})]})})})}function W(e){var t=e.text;return Object(I.jsx)(D.a,{style:{padding:".1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",width:"45%",opacity:"0.7",marginTop:".75rem",marginBottom:".75rem"},children:t})}var q=a(253),A=a(254),E=a(204),L=a(58),Y=a(124),F=a.n(Y),J=a(125),G=a.n(J),P=a(126),z=a.n(P),Z=a(266),$=a(132),K=a(255),Q=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:100,maxHeight:100,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,textAlign:"center",fontFamily:"'Bree Serif', serif"},header:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},chatBody:{zIndex:"-1",marginTop:"100px",height:"80vh",overflowY:"scroll"}}}));var V=function(e){var t=e.logoutUser,a=e.getUserData,r=e.changeMode,l=Object(i.useState)(!1),s=Object(c.a)(l,2),n=s[0],o=s[1],h=Object(i.useState)(!1),j=Object(c.a)(h,2),d=j[0],m=j[1],b=Object(i.useState)([]),u=Object(c.a)(b,2),x=u[0],O=(u[1],Q()),g=function(){m(null)},p=function(e){var t=e.itm;return"static"===t.type&&a().userId===t.userId?Object(I.jsx)(W,{text:"You Joined"}):"static"===t.type?Object(I.jsx)(W,{text:"".concat(t.name," Joined")}):void 0};return Object(I.jsxs)("div",{className:O.root,children:[Object(I.jsx)(T,{status:n,changeMode:r,setSideDrawer:o}),Object(I.jsx)(q.a,{position:"fixed",color:"inherit",style:{borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"},children:Object(I.jsxs)(A.a,{className:O.toolbar,children:[Object(I.jsx)(E.a,{edge:"start",className:O.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},children:Object(I.jsx)(F.a,{})}),Object(I.jsx)("div",{className:O.header,children:Object(I.jsx)(L.a,{className:O.title,variant:"h4",noWrap:!0,children:Object(I.jsx)("img",{src:"./logo192.png",width:"80",height:"80",alt:"CR CHAT"})})}),Object(I.jsx)(E.a,{onClick:function(e){m(e.currentTarget)},"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(I.jsx)(G.a,{})}),Object(I.jsx)($.a,{id:"simple-menu",keepMounted:!0,anchorEl:d,open:Boolean(d),onClose:g,children:Object(I.jsx)(K.a,{onClick:function(){g(),t()},children:"Logout"})})]})}),Object(I.jsxs)("div",{id:"chatBody",className:O.chatBody,children:[Object(I.jsx)(R,{name:"You",time:"10:00",msg:"Hi therre! hi alll"}),Object(I.jsx)(U,{name:"You",time:"10:00",msg:"Hi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alll"}),Object(I.jsx)(S,{name:"You",time:"10:00",msg:"Hi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alll"}),Object(I.jsx)(M,{name:"You",time:"10:00",msg:"Hi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alll"}),Object(I.jsx)(W,{text:"John Joined"}),x.map((function(e){return Object(I.jsx)(p,{itm:e},e.userId)}))]}),Object(I.jsxs)("div",{style:{bottom:0,position:"sticky",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(I.jsx)(Z.a,{id:"filled-textarea",label:"Type here...!",placeholder:"Get to know everyone.",multiline:!0,variant:"filled",fullWidth:!0,rows:"1",rowsMax:"4",color:"primary"}),Object(I.jsx)(E.a,{style:{borderRadius:0,padding:"1rem"},children:Object(I.jsx)(z.a,{})})]})]})},X=a(64),_=a(131),ee=a(271),te=a(261),ae=a(260),ie=a(269),re=a(256),le=a(259),se=a(267),ce=a(127),ne=a.n(ce),oe=a(257);function he(){return Object(I.jsxs)(L.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(I.jsx)(re.a,{color:"inherit",href:"/",children:"CR Chat"})," ",(new Date).getFullYear(),"."]})}var je=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var de=function(e){var t=e.setUserData,a=(e.getUserData,je()),i=Object(_.a)(),r=i.register,l=i.handleSubmit,s=i.formState.errors;return Object(I.jsxs)(oe.a,{component:"main",maxWidth:"xs",children:[Object(I.jsx)(m.a,{}),Object(I.jsxs)("div",{className:a.paper,children:[Object(I.jsx)(ee.a,{className:a.avatar,children:Object(I.jsx)(ne.a,{})}),Object(I.jsx)(L.a,{component:"h1",variant:"h5",children:"Get In"}),Object(I.jsxs)("form",{autoComplete:"off",className:a.form,onSubmit:l((function(e){t(e)})),children:[Object(I.jsx)("input",Object(X.a)({hidden:!0,value:Math.random().toString(16).slice(2),name:"userId"},r("userId"))),Object(I.jsxs)(le.a,{container:!0,spacing:2,children:[Object(I.jsx)(le.a,{item:!0,xs:12,children:Object(I.jsx)(Z.a,Object(X.a)({variant:"outlined",fullWidth:!0,id:"name",label:"Name",error:Boolean(s.name),helperText:s.name?s.name.message:null},r("name",{required:"User Name is required.!",minLength:{value:4,message:"Minimum 4 charecters.!"}})))}),Object(I.jsx)(le.a,{item:!0,xs:12,children:Object(I.jsx)(Z.a,Object(X.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",error:Boolean(s.email),helperText:s.email?s.email.message:null},r("email",{required:"Email is required.!",minLength:{value:5,message:"Type a valid email address.!"},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Type a valid email address.!"}})))}),Object(I.jsx)(le.a,{item:!0,xs:12,children:Object(I.jsx)(Z.a,Object(X.a)({variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:Boolean(s.password),helperText:s.password?s.password.message:null},r("password",{required:"Password is required.!",minLength:{value:6,message:"Minimum 6 charecters.!"}})))}),Object(I.jsx)(le.a,{item:!0,xs:12,children:Object(I.jsx)(ae.a,{control:Object(I.jsx)(ie.a,{required:!0,value:"true",color:"default"}),label:"I am agree that I am subscribed Crossroads youtube channel."})})]}),Object(I.jsx)(te.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Get In"}),Object(I.jsx)(le.a,{container:!0,justify:"flex-end",children:Object(I.jsx)(le.a,{item:!0,children:Object(I.jsx)(re.a,{href:"",variant:"body2"})})})]})]}),Object(I.jsx)(se.a,{mt:5,children:Object(I.jsx)(he,{})})]})},me=a(264),be=a(262);var ue=function(){var e=Object(be.a)(["cr-chat-cookie"]),t=Object(c.a)(e,3),a=t[0],l=t[1],s=t[2],b=Object(i.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),u=Object(c.a)(b,2),x=u[0],O=u[1],g=Object(h.a)("(prefers-color-scheme: dark)"),p=function(){return a.userData};Object(i.useEffect)((function(){O(g)}),[Object(h.a)("(prefers-color-scheme: dark)")]);var f=r.a.useMemo((function(){return Object(j.a)({palette:{type:x?"dark":"light"}})}),[x]);return Object(I.jsx)(me.a,{children:Object(I.jsx)(n.a,{children:Object(I.jsx)(o.d,{children:Object(I.jsxs)(d.a,{theme:f,children:[Object(I.jsx)(m.a,{}),Object(I.jsx)(o.b,{exact:!0,path:"/",component:V,children:"undefined"!=typeof p()?Object(I.jsx)(V,{changeMode:function(e){O(e)},getUserData:p,logoutUser:function(){s("userData"),window.location.reload()}}):Object(I.jsx)(o.a,{to:"/get-in"})}),Object(I.jsx)(o.b,{path:"/get-in",component:de,children:"undefined"==typeof p()?Object(I.jsx)(de,{setUserData:function(e){l("userData",e,{path:"/"}),window.location.reload()},getUserData:p}):Object(I.jsx)(o.a,{to:"/"})})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,274)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),i(e),r(e),l(e),s(e)}))};s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),xe()}},[[198,1,2]]]);
//# sourceMappingURL=main.d0bee313.chunk.js.map