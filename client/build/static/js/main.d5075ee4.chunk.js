(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var a,s,r,c,i=t(3),o=t.n(i),l=t(71),d=t.n(l),b=t(24),j=t(77),u=t(108),m=t(109),h=t(107),g=t(76),p=t(31),O=t(10),x=t(41),f=t.n(x),v=t(48),y=t(40),N=t(17),w=t(113),k=t(42),S=t(110),I=Object(S.a)(a||(a=Object(k.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]))),C=Object(S.a)(s||(s=Object(k.a)(["\n  mutation signUp($name: String!, $email: String!, $password: String!, $age: Int!, $weight: Int!, $gender: String!) {\n    addUser(name: $name, email: $email, password: $password, age: $age, weight: $weight, gender: $gender) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]))),$=t(26),E=t(27),P=t(59),D=new(function(){function e(){Object($.a)(this,e)}return Object(E.a)(e,[{key:"getProfile",value:function(){return Object(P.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(P.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/dashboard")}},{key:"logout",value:function(){console.log("logging out"),localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),_=(t(68),t(2)),A=function(e){var n=Object(i.useState)({email:"",password:""}),t=Object(N.a)(n,2),a=t[0],s=t[1],r=Object(w.a)(I),c=Object(N.a)(r,2),o=c[0],l=c[1],d=l.error,j=(l.data,function(e){var n=e.target,t=n.name,r=n.value;s(Object(b.a)(Object(b.a)({},a),{},Object(y.a)({},t,r)))}),u=function(){var e=Object(v.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,o({variables:Object(b.a)({},a)});case 4:t=e.sent,r=t.data,D.login(r.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:s({email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{class:"container",children:Object(_.jsx)("div",{class:"row text-center",children:Object(_.jsxs)("form",{className:"form-signin",onSubmit:u,children:[Object(_.jsx)("img",{className:"mb-4",src:"images/dblogo-black-200.png",alt:"",width:"200"}),Object(_.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please sign in"}),d&&Object(_.jsx)("div",{className:"my-2 p-3 bg-danger text-white",children:d.message}),Object(_.jsx)("label",{for:"inputEmail",className:"sr-only",children:"Email address"}),Object(_.jsx)("input",{id:"inputEmail",className:"form-control",placeholder:"Your email",autoComplete:"email",name:"email",type:"email",value:a.email,onChange:j}),Object(_.jsx)("label",{for:"inputPassword",className:"sr-only",children:"Password"}),Object(_.jsx)("input",{id:"inputPassword",className:"form-control",placeholder:"******",autoComplete:"current-password",name:"password",type:"password",value:a.password,onChange:j}),Object(_.jsx)("button",{style:{cursor:"pointer"},type:"submit",className:"btn btn-lg btn-primary btn-block db-btn db-btn-yellow",children:"Sign in"}),Object(_.jsx)("br",{}),"or",Object(_.jsx)("br",{}),Object(_.jsx)(p.b,{to:"/signup",className:"btn btn-lg btn-secondary btn-block mt-4 db-btn",children:"Register"})]})})})},B=function(e){var n=Object(i.useState)({email:"",password:"",age:"",weight:"",name:"",gender:""}),t=Object(N.a)(n,2),a=t[0],s=t[1],r=Object(w.a)(C),c=Object(N.a)(r,2),o=c[0],l=c[1],d=l.error,j=(l.data,function(e){var n=e.target,t=n.name,r=n.value,c=r;"number"==n.type&&(c=parseInt(r)),s(Object(b.a)(Object(b.a)({},a),{},Object(y.a)({},t,c))),console.log(a)}),u=function(){var e=Object(v.a)(f.a.mark((function e(n){var t,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(a),e.prev=2,e.next=5,o({variables:Object(b.a)({},a)});case 5:t=e.sent,s=t.data,D.login(s.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{class:"container",children:Object(_.jsx)("div",{class:"row text-center",children:Object(_.jsxs)("form",{className:"form-signup",onSubmit:u,children:[Object(_.jsx)("img",{className:"mb-4",src:"images/dblogo-black-200.png",alt:"",width:"200"}),Object(_.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"REGISTER"}),d&&Object(_.jsx)("div",{className:"my-2 p-3 bg-danger text-white",children:d.message}),Object(_.jsx)("label",{for:"inputName",className:"sr-only",children:"Name"}),Object(_.jsx)("input",{id:"inputName",className:"form-control rounded-top",placeholder:"Your Name",name:"name",type:"text",value:a.name,onChange:j}),Object(_.jsx)("label",{for:"inputEmail",className:"sr-only",children:"Email address"}),Object(_.jsx)("input",{id:"inputEmail",className:"form-control rounded-0",placeholder:"Your email",name:"email",type:"email",value:a.email,onChange:j}),Object(_.jsx)("label",{for:"inputPassword",className:"sr-only",children:"Password"}),Object(_.jsx)("input",{id:"inputPassword",className:"form-control rounded-0",placeholder:"******",name:"password",type:"password",value:a.password,onChange:j}),Object(_.jsx)("label",{for:"inputAge",className:"sr-only",children:"Age"}),Object(_.jsx)("input",{id:"inputAge",className:"form-control rounded-0",placeholder:"Your Age",name:"age",type:"number",value:a.age,onChange:j}),Object(_.jsx)("label",{for:"inputWeight",className:"sr-only",children:"Weight"}),Object(_.jsx)("input",{id:"inputWeight",className:"form-control rounded-0",placeholder:"Your weight in Kgs",name:"weight",type:"number",value:a.weight,onChange:j}),Object(_.jsx)("label",{for:"gender",className:"sr-only",children:"Gender"}),Object(_.jsxs)("select",{id:"gender",name:"gender",className:"form-control mb-4 rounded-bottom",onChange:j,children:[Object(_.jsx)("option",{value:"",children:"Choose Gender"}),Object(_.jsx)("option",{value:"male",children:"male"}),Object(_.jsx)("option",{value:"female",children:"female"})]}),Object(_.jsx)("button",{style:{cursor:"pointer"},type:"submit",className:"btn btn-lg btn-primary btn-block db-btn db-btn-yellow",children:"SIGN UP"}),Object(_.jsx)("br",{}),"or",Object(_.jsx)("br",{}),Object(_.jsx)(p.b,{to:"/",className:"btn btn-lg btn-secondary btn-block mt-4 db-btn",children:"Login"})]})})})},L=t(33),T=t(32),G=function(e){Object(L.a)(t,e);var n=Object(T.a)(t);function t(){return Object($.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(_.jsx)("header",{id:"header-nav",children:Object(_.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:Object(_.jsx)("div",{className:"container-fluid",children:Object(_.jsx)("img",{src:"/images/dlogo-hor-340.png",alt:"Drinking Buddy,  your drinking companion",className:"text-center img-responsive",id:"logo"})})})})}}]),t}(i.Component),Y=function(e){Object(L.a)(t,e);var n=Object(T.a)(t);function t(){return Object($.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("div",{className:"container  text-center",children:Object(_.jsx)("span",{className:"text-muted",children:"Drinking Buddy\xa9 2021 by NKSB"})})})}}]),t}(i.Component),U=t(111),q=Object(S.a)(r||(r=Object(k.a)(["\n  query user($profile_id: ID!) {\n    user(userId: $profile_id) {\n      name\n      email\n      password\n      age\n      weight\n      gender\n    }\n  }\n"]))),W=Object(S.a)(c||(c=Object(k.a)(["\n  query GetDrinks {\n    drinks {\n      _id\n      Drink\n      Potency\n      Volume\n    }\n  }\n"]))),R=function(e){var n=D.getProfile().data._id,t=Object(U.a)(q,{variables:{profile_id:n}}),a=t.loading,s=t.data,r=t.error;if(!s)return!1;console.log("Profile",s),r&&console.error("query error",r);var c=s.user;return a?Object(_.jsx)("div",{children:"Loading..."}):(null===c||void 0===c?void 0:c.name)?Object(_.jsxs)("div",{className:"card order-info",children:[Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsx)("h4",{className:"card-title",children:c.name}),Object(_.jsx)("p",{className:"card-text",children:c.email})]}),Object(_.jsxs)("ul",{className:"collapse list-group list-group-flush",id:"profile",children:[Object(_.jsxs)("li",{className:"list-group-item",children:[Object(_.jsx)("strong",{children:"Age"})," ",c.age]}),Object(_.jsxs)("li",{className:"list-group-item",children:[Object(_.jsx)("strong",{children:"Weight"})," ",c.weight]}),Object(_.jsxs)("li",{className:"list-group-item",children:[Object(_.jsx)("strong",{children:"Gender"})," ",c.gender]})]}),Object(_.jsxs)("div",{className:"card-footer",children:[0===e.isInSession&&Object(_.jsx)("a",{href:"/",className:"card-link",children:"Edit"}),Object(_.jsx)("button",{"data-target":"#profile",className:"btn btn-sm float-right","data-toggle":"collapse","aria-expanded":"false","aria-controls":"profile-info",children:"Toggle Info"})]})]}):Object(_.jsx)("h4",{children:"You need to be logged in to see your profile page. Use the navigation links above to sign up or log in!"})},F=(t(70),t(94),t(54)),J=t.n(F),K=function(e){var n=e.cancelSession,t=o.a.useState(0),a=Object(N.a)(t,2),s=(a[0],a[1]),r=o.a.useState({}),c=Object(N.a)(r,2),l=(c[0],c[1]),d=o.a.useState(0),b=Object(N.a)(d,2),j=b[0],u=b[1],m=o.a.useState(0),h=Object(N.a)(m,2),g=(h[0],h[1],o.a.useState(0)),p=Object(N.a)(g,2),O=(p[0],p[1]),x=o.a.useState(0),f=Object(N.a)(x,2),v=f[0],y=f[1],w=Object(U.a)(W),k=w.drinksLoading,S=w.drinksError,I=w.data;Object(i.useEffect)((function(){var e=J()().startOf("day"),n=setInterval((function(){l(e.add(1,"second")),u(J.a.utc(1e3*e.seconds()).format("H:mm:ss")),O(e.seconds())}),1e3);return function(){clearInterval(n),s(0),l(0),u(0),O(0)}}),[]);return Object(_.jsxs)("div",{id:"drinking-session",className:"my-4 text-center",children:[Object(_.jsxs)("div",{id:"drinking-session",children:[Object(_.jsx)("h3",{className:"timer",children:j}),Object(_.jsx)("button",{onClick:n,className:"btn btn-danger btn-lg m-2",children:"Stop Drinking"}),Object(_.jsx)("button",{onClick:function(){y(1)},className:"btn btn-warning btn-lg m-2",children:"Add a drink"})]}),1===v&&Object(_.jsx)("div",{className:"add-drink",children:Object(_.jsxs)("form",{onSubmit:function(){},className:"form-inline justify-content-center my-5",children:[Object(_.jsxs)("select",{name:"drink",className:"form-control form-control-md w-auto my-2 mr-sm-2 rounded-left",children:[k?'<option value="" >Loading</option>':"",S?'<option value="">Error</option>':"",I?I.drinks.map((function(e){return Object(_.jsx)("option",{value:e,children:e.Drink},e)})):""]}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Add"})]})})]})},z=function(e){Object(L.a)(t,e);var n=Object(T.a)(t);function t(){var e;Object($.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=n.call.apply(n,[this].concat(s))).state={},e.displaySessionButtons=function(){return Object(_.jsxs)("div",{id:"sessions-btns",className:"w-100",children:[Object(_.jsx)("button",{onClick:e.props.inSession,className:"btn btn-primary btn-md my-2 mr-2",children:"Start new session"}),Object(_.jsx)("button",{onClick:e.props.onDelete,className:"btn btn-danger btn-md my-2 ml-2 float-right",children:"Logout"})]})},e}return Object(E.a)(t,[{key:"render",value:function(){return Object(_.jsxs)(o.a.Fragment,{children:[!this.props.isInSession&&this.displaySessionButtons(),this.props.isInSession&&Object(_.jsx)(K,{cancelSession:this.props.outSession})]})}}]),t}(i.Component),H=function(e){Object(L.a)(t,e);var n=Object(T.a)(t);function t(){var e;Object($.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=n.call.apply(n,[this].concat(s))).state={isInSession:0},e.handleLogout=function(){localStorage.clear(),window.location.href="/"},e.hNewSession=function(){e.setState({isInSession:1})},e.hCancelSession=function(){e.setState({isInSession:0})},e}return Object(E.a)(t,[{key:"render",value:function(){return Object(_.jsxs)(o.a.Fragment,{children:[Object(_.jsx)(G,{}),Object(_.jsx)("div",{id:"main-container",className:"container",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-md-12",children:Object(_.jsx)(R,{isInSession:this.state.isInSession})}),Object(_.jsx)("div",{className:"col-md-12",children:Object(_.jsx)(z,{onDelete:this.handleLogout,isInSession:this.state.isInSession,inSession:this.hNewSession,outSession:this.hCancelSession})})]})}),Object(_.jsx)(Y,{})]})}}]),t}(i.Component),M=Object(j.a)({uri:"/graphql"}),V=Object(g.a)((function(e,n){var t=n.headers,a=localStorage.getItem("id_token");return{headers:Object(b.a)(Object(b.a)({},t),{},{authorization:a?"Bearer ".concat(a):""})}})),Q=new u.a({link:V.concat(M),cache:new m.a});function X(e,n,t){V||n({pathname:"/login",state:{nextPathname:e.location.pathname}}),t()}var Z=function(){return Object(_.jsx)(h.a,{client:Q,children:Object(_.jsx)(p.a,{children:Object(_.jsxs)(O.c,{children:[Object(_.jsx)(O.a,{exact:!0,path:"/",component:A}),Object(_.jsx)(O.a,{exact:!0,path:"/signup",component:B}),Object(_.jsx)(O.a,{exact:!0,path:"/dashboard",component:H,onEnter:X})]})})})};t(96),t(97),t(98);d.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(Z,{})}),document.getElementById("root"))},68:function(e,n,t){},97:function(e,n,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.d5075ee4.chunk.js.map