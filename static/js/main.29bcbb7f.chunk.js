(this["webpackJsonpmanage-system"]=this["webpackJsonpmanage-system"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),l=n.n(i),c=(n(15),n(5)),d=n(7),u=n(3),s=n(10),m=(n(16),n(9)),h=n(0),j=function(e){var t=e.contact,n=e.handleEditClick,a=e.handleDeleteClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.fullName}),Object(h.jsx)("td",{children:t.address}),Object(h.jsx)("td",{children:t.phoneNumber}),Object(h.jsx)("td",{children:t.email}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"button",onClick:function(e){return n(e,t)},children:"Edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return a(t.id)},children:"Delete"})]})]})},o=function(e){var t=e.editFormData,n=e.handleEditFormChange,a=e.handleCancelClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"Enter a name...",name:"fullName",value:t.fullName,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"Enter an address...",name:"address",value:t.address,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"Enter a phone number...",name:"phoneNumber",value:t.phoneNumber,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"email",required:"required",placeholder:"Enter an email...",name:"email",value:t.email,onChange:n})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"submit",children:"Save"}),Object(h.jsx)("button",{type:"button",onClick:a,children:"Cancel"})]})]})},b=(n(18),function(){var e=Object(a.useState)(m),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({fullName:"",address:"",phoneNumber:"",email:""}),l=Object(u.a)(i,2),b=l[0],p=l[1],O=Object(a.useState)({fullName:"",address:"",phoneNumber:"",email:""}),x=Object(u.a)(O,2),f=x[0],N=x[1],g=Object(a.useState)(null),v=Object(u.a)(g,2),C=v[0],y=v[1],q=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(d.a)({},b);a[t]=n,p(a)},E=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(d.a)({},f);a[t]=n,N(a)},D=function(e,t){e.preventDefault(),y(t.id);var n={fullName:t.fullName,address:t.address,phoneNumber:t.phoneNumber,email:t.email};N(n)},S=function(){y(null)},k=function(e){var t=Object(c.a)(n),a=n.findIndex((function(t){return t.id===e}));t.splice(a,1),r(t)};return Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)("h1",{children:"Management System"}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:C,fullName:f.fullName,address:f.address,phoneNumber:f.phoneNumber,email:f.email},a=Object(c.a)(n);a[n.findIndex((function(e){return e.id===C}))]=t,r(a),y(null)},children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Address"}),Object(h.jsx)("th",{children:"Phone Number"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsx)(a.Fragment,{children:C===e.id?Object(h.jsx)(o,{editFormData:f,handleEditFormChange:E,handleCancelClick:S}):Object(h.jsx)(j,{contact:e,handleEditClick:D,handleDeleteClick:k})})}))})]})}),Object(h.jsx)("h2",{children:"Add a Contact"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(s.a)(),fullName:b.fullName,address:b.address,phoneNumber:b.phoneNumber,email:b.email},a=[].concat(Object(c.a)(n),[t]);r(a)},children:[Object(h.jsx)("input",{type:"text",name:"fullName",required:"required",placeholder:"Enter a name...",onChange:q}),Object(h.jsx)("input",{type:"text",name:"address",required:"required",placeholder:"Enter an address...",onChange:q}),Object(h.jsx)("input",{type:"text",name:"phoneNumber",required:"required",placeholder:"Enter a phone number...",onChange:q}),Object(h.jsx)("input",{type:"email",name:"email",required:"required",placeholder:"Enter an email...",onChange:q}),Object(h.jsx)("button",{type:"submit",children:"Add"})]})]})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),i(e),l(e)}))};l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()},9:function(e){e.exports=JSON.parse('[{"id":1,"fullName":"Ayushi Agarwal","address":"Jhansi","phoneNumber":"333-962-7516","email":"agarwal@gmail.com"},{"id":2,"fullName":"Nipun Khare","address":"Pune","phoneNumber":"011-211-7516","email":"nipun@email.com"},{"id":3,"fullName":"Neha Singh","address":"Delhi","phoneNumber":"788-962-7516","email":"Singh@email.com"},{"id":4,"fullName":"Divya Prakash","address":"Noida","phoneNumber":"011-962-111","email":"divya113@email.com"},{"id":5,"fullName":"Ayushi Agarwal","address":"Indore","phoneNumber":"3231-962-7516","email":"ayushi.edwards@email.com"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.29bcbb7f.chunk.js.map