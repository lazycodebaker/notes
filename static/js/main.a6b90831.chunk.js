(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),r=n.n(o),l=(n(14),n(2)),i=(n(15),n(0));var s=function(e){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h3",{children:"Notes App"})})},j=n(3),b=n(6),u=n(9),d=(n(17),n(4));var O=function(e){var t=Object(c.useState)({}),n=Object(l.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(),s=Object(l.a)(r,2),O=s[0],g=s[1],h=Object(c.useState)(!1),p=Object(l.a)(h,2),x=p[0],f=p[1];function m(e){e.preventDefault();var t=e.target,n=t.name,c=t.value,a=new Date;"bgcolor"===e.target.name&&g(e.target.value),o((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({id:Object(u.a)(),date:a.toLocaleDateString()},n,c))}))}return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{children:[x&&Object(i.jsx)("input",{type:"text",name:"title",value:a.title,placeholder:"Create a Title ..",onChange:m}),Object(i.jsx)("p",{children:Object(i.jsx)("textarea",{name:"content",value:a.content,placeholder:"Create a Note ..",onChange:m,onClick:function(e){f(!0)}})}),Object(i.jsx)("input",{className:"colorpicker",onChange:m,name:"bgcolor",value:O||"#FFF5B3",type:"color"}),Object(i.jsx)("button",{onClick:function(e){localStorage.setItem(a.id,JSON.stringify(a))},children:Object(i.jsx)("p",{children:Object(i.jsx)(d.a,{})})})]})})};n(18);var g=function(e){return Object(i.jsxs)("div",{className:"note",style:{backgroundColor:e.bgcolor},children:[Object(i.jsx)("h1",{className:"title",children:e.title}),Object(i.jsx)("p",{className:"content",children:e.content}),Object(i.jsx)("p",{className:"date",children:e.date}),Object(i.jsx)("input",{type:"color",className:"note-color-changer",onChange:function(t){var n=t.target.value,c=JSON.parse(localStorage.getItem(e.noteid));c.bgcolor=n,localStorage.setItem(e.noteid,JSON.stringify(c)),window.location.reload(!0)}}),Object(i.jsx)("span",{className:e.id,onClick:function(t){return e.deleteNote(e.noteid)},children:Object(i.jsx)(d.b,{})})]})};n(19);var h=function(e){for(var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],o=(n[1],0);o<localStorage.length;o++)a.push(JSON.parse(localStorage.getItem(localStorage.key(o))));var r=function(e){window.location.reload(!0),localStorage.removeItem(e)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(O,{}),a.map((function(e,t){return e?Object(i.jsx)(g,{noteid:e.id,title:e.title,content:e.content,date:e.date,bgcolor:e.bgcolor,deleteNote:r},t):Object(i.jsx)("p",{})}))]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},x=n(8);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),p(),Object(x.a)()}],[[20,1,2]]]);
//# sourceMappingURL=main.a6b90831.chunk.js.map