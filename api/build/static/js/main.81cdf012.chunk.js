(this.webpackJsonparikudo=this.webpackJsonparikudo||[]).push([[0],{38:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(30),r=s.n(n),i=s(7),l=s(4),o=s(20),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},u=s(0),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},p=Object(a.createContext)(b),d=function(e){var t=e.children,s=Object(a.useReducer)(j,b),c=Object(l.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(p.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};s(38);function O(){var e=Object(a.useContext)(p),t=e.user,s=e.dispatch,c=function(){window.open("https://www.twitch.tv/ariverie")};return Object(u.jsxs)("div",{className:"top",children:[Object(u.jsxs)("div",{className:"topLeft",children:[Object(u.jsx)("i",{className:"topIcon2 fab fa-twitch",onClick:c}),Object(u.jsx)("li",{className:"topIcon1",onClick:c,children:"www.twitch.tv/ariverie"})]}),Object(u.jsx)("div",{className:"topCenter",children:Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/",children:"HOME"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/write",children:"WRITE"})}),Object(u.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(u.jsx)("div",{className:"topRight",children:t?Object(u.jsx)(i.b,{to:"/settings",children:Object(u.jsx)("img",{className:"topImg",src:"http://34.125.174.42:5000/images/"+t.profilePic,alt:""})}):Object(u.jsx)("ul",{className:"topList",children:Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/login",children:"LOGIN"})})})})]})}var h=s(3),m=s.n(h),x=s(8),f=(s(45),s.p+"static/media/header.840c53df.jpeg");function g(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleSm",children:"Happy birthday to our very special"}),Object(u.jsx)("span",{className:"headerTitleLg",children:"Ariverie"})]}),Object(u.jsx)("img",{className:"headerImg",src:f,alt:""})]})}s(46);function v(e){var t=e.post;return Object(u.jsxs)("div",{className:"post",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:"http://34.125.174.42:5000/images/"+t.photo,alt:""}),Object(u.jsxs)("div",{className:"postInfo",children:[Object(u.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(u.jsx)("span",{className:"postCat",children:e.name})}))}),Object(u.jsx)(i.b,{to:"/post/".concat(t._id),className:"link",children:Object(u.jsx)("span",{className:"postTitle",children:t.title})}),Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(u.jsx)("p",{className:"postDesc",children:t.desc})]})}s(47);function N(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(v,{post:e})}))})}var w=s(6),y=s.n(w);s(66);function I(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"ABOUT ARI"}),Object(u.jsx)("img",{src:"https://ariverie.carrd.co/assets/images/image01.png?v=81eb9102",alt:""}),Object(u.jsx)("p",{children:"\u2698my name is ari and i love coffee & comfy games \u0295\xb7\u1d25\xb7\u0294\u2698"})]}),Object(u.jsx)("div",{className:"sidebarItem",children:Object(u.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(u.jsx)(i.b,{to:"/?cat=".concat(e.name),className:"link",children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"Creator of the site"}),Object(u.jsx)("div",{className:"sidebarSocial",children:Object(u.jsx)("p",{children:"Ej (Parsecs)"})}),Object(u.jsx)("div",{className:"sidebarSocial",children:Object(u.jsx)("p",{children:"Full-stack development - written in JavaScript, React(frontend), Express(backend), MongoDB(Database), restAPI"})})]})]})}s(67);var S=s(2);function k(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(S.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{}),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(N,{posts:s}),Object(u.jsx)(I,{})]})]})}s(68);function P(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),d=b[0],O=b[1],h=Object(a.useState)(!1),f=Object(l.a)(h,2),g=f[0],v=f[1],N=Object(a.useContext)(p),w=N.user,S=N.dispatch,k=function(){var e=Object(x.a)(m.a.mark((function e(t){var a,c,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),S({type:"UPDATE_START"}),a={userId:w._id,username:i,password:d},!s){e.next=16;break}return c=new FormData,n=Date.now()+s.name,c.append("name",n),c.append("file",s),a.profilePic=n,e.prev=9,e.next=12,y.a.post("/upload",c);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,y.a.put("/users/"+w._id,a);case 19:r=e.sent,v(!0),S({type:"UPDATE_SUCCESS",payload:r.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),S({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"settingsWrapper",children:[Object(u.jsxs)("div",{className:"settingsTitle",children:[Object(u.jsx)("span",{className:"settingsUpdateTitle",children:"Update Your Account"}),Object(u.jsx)("span",{className:"settingsDeleteTitle",children:"Delete Account"})]}),Object(u.jsxs)("form",{className:"settingsForm",onSubmit:k,children:[Object(u.jsx)("label",{children:"Profile Picture"}),Object(u.jsxs)("div",{className:"settingsPP",children:[Object(u.jsx)("img",{src:s?URL.createObjectURL(s):"http://34.125.174.42:5000/images/"+w.profilePic,alt:""}),Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",placeholder:w.username,onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"}),g&&Object(u.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(u.jsx)(I,{})]})}s(69);function T(){var e=Object(S.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(l.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(p).user,o=Object(a.useState)(""),j=Object(l.a)(o,2),b=j[0],d=j[1],O=Object(a.useState)(""),h=Object(l.a)(O,2),f=h[0],g=h[1],v=Object(a.useState)(!1),N=Object(l.a)(v,2),w=N[0],I=N[1];Object(a.useEffect)((function(){(function(){var t=Object(x.a)(m.a.mark((function t(){var s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("/posts/"+e);case 2:s=t.sent,n(s.data),d(s.data.title),g(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var k=function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("/posts/".concat(c._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.put("/posts/".concat(c._id),{username:r.username,title:b,desc:f});case 3:I(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlePost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(u.jsx)("img",{src:"http://34.125.174.42:5000/images/"+c.photo,alt:"",className:"singlePostImg"}),w?Object(u.jsx)("input",{type:"text",value:b,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return d(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[b,c.username===(null===r||void 0===r?void 0:r.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return I(!0)}}),Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:k})]})]}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(u.jsx)(i.b,{to:"/?user=".concat(c.username),className:"link",children:Object(u.jsxs)("b",{children:[" ",c.username]})})]}),Object(u.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),w?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:f,onChange:function(e){return g(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:f}),w&&Object(u.jsx)("button",{className:"singlePostButton",onClick:P,children:"Update"})]})})}s(70);function C(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(T,{}),Object(u.jsx)(I,{})]})}s(71);function L(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(null),b=Object(l.a)(j,2),d=b[0],O=b[1],h=Object(a.useContext)(p).user,f=function(){var e=Object(x.a)(m.a.mark((function e(t){var a,c,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:h.username,title:s,desc:i},!d){e.next=15;break}return c=new FormData,n=Date.now()+d.name,c.append("name",n),c.append("file",d),a.photo=n,e.prev=8,e.next=11,y.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,y.a.post("/posts",a);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[d&&Object(u.jsx)("img",{className:"writeImg",src:URL.createObjectURL(d),alt:""}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:f,children:[Object(u.jsxs)("div",{className:"writeFormGroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"writeIcon fas fa-upload"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return O(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsx)("div",{className:"writeFormGroup",children:Object(u.jsx)("textarea",{placeholder:"Write down you birthday wish to Ari...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})}),Object(u.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}s(72);function F(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(p),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(x.a)(m.a.mark((function s(a){var n;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,y.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("span",{className:"loginTitle",children:"Login"}),Object(u.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(u.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]})]})}s(73);function U(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],j=r[1],b=Object(a.useState)(!1),p=Object(l.a)(b,2),d=p[0],O=p[1],h=function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!1),e.prev=2,e.next=5,y.a.post("/auth/register",{username:s,password:o});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("span",{className:"registerTitle",children:"Register"}),Object(u.jsxs)("form",{className:"registerForm",onSubmit:h,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(u.jsx)("button",{className:"registerLoginButton",children:Object(u.jsx)(i.b,{className:"link",to:"/login",children:"Login"})}),d&&Object(u.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}var E=function(){var e=Object(a.useContext)(p).user;return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{exact:!0,path:"/",children:Object(u.jsx)(k,{})}),Object(u.jsx)(S.a,{path:"/register",children:e?Object(u.jsx)(k,{}):Object(u.jsx)(U,{})}),Object(u.jsx)(S.a,{path:"/login",children:e?Object(u.jsx)(k,{}):Object(u.jsx)(F,{})}),Object(u.jsx)(S.a,{path:"/write",children:e?Object(u.jsx)(L,{}):Object(u.jsx)(U,{})}),Object(u.jsx)(S.a,{path:"/settings",children:e?Object(u.jsx)(P,{}):Object(u.jsx)(U,{})}),Object(u.jsx)(S.a,{path:"/post/:postId",children:Object(u.jsx)(C,{})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{children:Object(u.jsx)(E,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.81cdf012.chunk.js.map