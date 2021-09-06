(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{83:function(e,t,a){"use strict";a.r(t);var n,r,c=a(2),o=a.n(c),i=a(61),s=a.n(i),l=a(22),u=a(69),d=a(94),j=a(95),p=a(93),m=a(67),b=a(35),g=a(9),h=a(32),O=a.n(h),v=a(40),x=a(31),f=a(34),w=a(97),k=a(50),y=a(96),S=Object(y.a)(n||(n=Object(k.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]))),$=Object(y.a)(r||(r=Object(k.a)(["\n  mutation Mutation($addUserName: String!, $addUserEmail: String!, $addUserPassword: String!, $addUserAge: Int!, $addUserWeight: Int!, $addUserGender: String) {\n    addUser(name: $addUserName, email: $addUserEmail, password: $addUserPassword, age: $addUserAge, weight: $addUserWeight, gender: $addUserGender) {\n      token\n      user {\n        name\n      }\n    }\n  }"]))),U=a(62),N=a(63),C=a(51),I=new(function(){function e(){Object(U.a)(this,e)}return Object(N.a)(e,[{key:"getProfile",value:function(){return Object(C.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(C.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),E=a(4),_=function(e){var t=Object(c.useState)({email:"",password:""}),a=Object(f.a)(t,2),n=a[0],r=a[1],o=Object(w.a)(S),i=Object(f.a)(o,2),s=i[0],u=i[1],d=(u.error,u.data,function(e){var t=e.target,a=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},n),{},Object(x.a)({},a,c)))}),j=function(){var e=Object(v.a)(O.a.mark((function e(t){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:Object(l.a)({},n)});case 4:a=e.sent,c=a.data,I.login(c.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:r({email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{children:Object(E.jsxs)("form",{onSubmit:j,children:[Object(E.jsx)("input",{className:"form-input",placeholder:"Your email",autoComplete:"email",name:"email",type:"email",value:n.email,onChange:d}),Object(E.jsx)("input",{className:"form-input",placeholder:"******",autoComplete:"current-password",name:"password",type:"password",value:n.password,onChange:d}),Object(E.jsx)("button",{style:{cursor:"pointer"},type:"submit",children:"Submit"})]})})},T=function(e){var t=Object(c.useState)({email:"",password:"",age:"",weight:"",name:"",gender:""}),a=Object(f.a)(t,2),n=a[0],r=a[1],o=Object(w.a)($),i=Object(f.a)(o,2),s=i[0],u=i[1],d=(u.error,u.data,function(e){var t=e.target,a=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},n),{},Object(x.a)({},a,c)))}),j=function(){var e=Object(v.a)(O.a.mark((function e(t){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,s({variables:Object(l.a)({},n)});case 5:a=e.sent,c=a.data,I.login(c.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0.message);case 13:r({email:"",password:"",age:"",weight:"",name:"",gender:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{children:Object(E.jsxs)("form",{onSubmit:j,children:[Object(E.jsx)("input",{className:"form-input",placeholder:"Your Name",name:"name",type:"text",value:n.name,onChange:d}),Object(E.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:d}),Object(E.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:d}),Object(E.jsx)("input",{className:"form-input",placeholder:"Your Age",name:"age",type:"number",value:n.age,onChange:d}),Object(E.jsx)("input",{className:"form-input",placeholder:"Your weight in Kgs",name:"weight",type:"number",value:n.weight,onChange:d}),Object(E.jsxs)("select",{id:"gender",children:[Object(E.jsx)("option",{value:"male",children:"male"}),Object(E.jsx)("option",{value:"female",children:"female"})]}),Object(E.jsx)("button",{style:{cursor:"pointer"},type:"submit",children:"Submit"})]})})},Y=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:"Name: "}),Object(E.jsx)("p",{children:"Email: "}),Object(E.jsx)("p",{children:"Age: "}),Object(E.jsx)("p",{children:"Weight: "}),Object(E.jsx)("p",{children:"Gender: "})]})},A=Object(u.a)({uri:"/graphql"}),D=Object(m.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),G=new d.a({link:D.concat(A),cache:new j.a});var P=function(){return Object(E.jsx)(p.a,{client:G,children:Object(E.jsx)(b.a,{children:Object(E.jsxs)(g.c,{children:[Object(E.jsx)(g.a,{exact:!0,path:"/",component:_}),Object(E.jsx)(g.a,{exact:!0,path:"/signup",component:T}),Object(E.jsx)(g.a,{exact:!0,path:"/profile",component:Y})]})})})};s.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(P,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.83c3f6d2.chunk.js.map