(this["webpackJsonpclever-to-do-list"]=this["webpackJsonpclever-to-do-list"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(28),s=n.n(a),r=(n(47),n(48),n(20)),o=n.n(r),i=n(21),l=n(3),u=n(22);n(37),n(39);n(51).config();var d=u.a.initializeApp({apiKey:"AIzaSyDsMq2U6gbqwrNtplpyv4LrNkg7vGWpznY",authDomain:"clever-to-do-list-6868a.firebaseapp.com",databaseURL:"https://clever-to-do-list-6868a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"clever-to-do-list-6868a",storageBucket:"clever-to-do-list-6868a.appspot.com",messagingSenderId:"571787972835",appId:"1:571787972835:web:e75a8b7d8f5d22012535d6"}),j=u.a.auth(),b=u.a.firestore(),O=d.firestore(),h=n(34),p=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,b.doc("users/".concat(t)).get();case 5:return n=e.sent,e.abrupt("return",Object(h.a)({uid:t},n.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(o.a.mark((function e(t,n){var c,a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=b.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=16;break}return a=t.email,s=t.displayName,r=t.photoURL,e.prev=8,e.next=11,c.set(Object(h.a)({displayName:s,email:a,photoURL:r},n));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",p(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,n){return e.apply(this,arguments)}}(),x=n(1),v=Object(c.createContext)({user:null}),g=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){j.onAuthStateChanged(function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(x.jsx)(v.Provider,{value:a,children:e.children})},f=(n(55),n(11)),k=n(70),C=n(71),N=n(72),w=u.a.auth(),y=new u.a.auth.GoogleAuthProvider,S=function(){w.signInWithPopup(y)},P=n(13),T=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],i=r[1],u=Object(c.useState)(null),d=Object(l.a)(u,2)[1],b=Object(c.useState)(null),O=Object(l.a)(b,2)[1],h=function(e){var t=e.currentTarget,n=t.name,c=t.value;"userEmail"===n?a(c):"userPassword"===n&&i(c)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k.a,{children:Object(x.jsx)(C.a,{children:Object(x.jsxs)(N.a,{className:"auth-wrapper",xs:12,children:[Object(x.jsx)("div",{className:"icon",children:"login"}),Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)("input",{type:"email",className:"input",name:"userEmail",value:n,placeholder:"Email",id:"userEmail",onChange:function(e){return h(e)}}),Object(x.jsx)("input",{type:"password",className:"input",name:"userPassword",value:o,placeholder:"Password",id:"userPassword",onChange:function(e){return h(e)}}),Object(x.jsx)(P.b,{to:"password-reset",className:"link",children:"Forgot Password?"}),Object(x.jsx)("button",{className:"button primary-button",onClick:function(e){!function(e,t,n){e.preventDefault(),j.signInWithEmailAndPassword(t,n).then((function(){O(f.b.success("You are logged in!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(){d(f.b.error("Invalid credentials!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}(e,n,o)},children:"Sign In"})]}),Object(x.jsxs)("button",{className:"button google-button",onClick:function(){S()},children:[" ","Sign in with Google"]}),Object(x.jsxs)("p",{children:["Don`t have an account?"," ",Object(x.jsx)(P.b,{to:"sign-up",className:"link",children:"Sign up"})," "]})]})})})})},E=n(10),D=function(){var e=Object(E.g)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),u=Object(l.a)(r,2),d=u[0],b=u[1],O=Object(c.useState)(""),h=Object(l.a)(O,2),p=h[0],v=h[1],g=Object(c.useState)(null),w=Object(l.a)(g,2)[1],y=Object(c.useState)(null),T=Object(l.a)(y,2)[1],D=Object(c.useState)(null),M=Object(l.a)(D,2)[1],I=function(){var t=Object(i.a)(o.a.mark((function t(n,c,a){var r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,j.createUserWithEmailAndPassword(c,a);case 4:r=t.sent,i=r.user,m(i,{displayName:p}),T(f.b.success("Account has been created!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),M(f.b.success("You are logged in!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),w(f.b.error("Invalid credentials!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 14:s(""),b(""),v(""),e.push("/");case 18:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n,c){return t.apply(this,arguments)}}(),B=function(e){var t=e.currentTarget,n=t.name,c=t.value;"userEmail"===n?s(c):"userPassword"===n?b(c):"displayName"===n&&v(c)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k.a,{children:Object(x.jsx)(C.a,{children:Object(x.jsxs)(N.a,{className:"auth-wrapper",xs:12,children:[Object(x.jsx)("div",{className:"icon",children:"how_to_reg"}),Object(x.jsx)("h1",{children:"Sign Up"}),Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)("input",{type:"text",className:"input",name:"displayName",value:p,placeholder:"Your Name",id:"displayName",onChange:function(e){return B(e)}}),Object(x.jsx)("input",{type:"email",className:"input",name:"userEmail",value:a,placeholder:"Email",id:"userEmail",onChange:function(e){return B(e)}}),Object(x.jsx)("input",{type:"password",className:"input",name:"userPassword",value:d,placeholder:"Password",id:"userPassword",onChange:function(e){return B(e)}}),Object(x.jsx)("button",{className:"button primary-button",onClick:function(e){I(e,a,d)},children:"Sign Up"})]}),Object(x.jsx)("button",{onClick:function(){try{S()}catch(t){console.error("Error signing in with Google",t)}e.push("/")},className:"button google-button",children:"Sign In with Google"}),Object(x.jsxs)("p",{children:["Already have an account?"," ",Object(x.jsx)(P.b,{to:"/",className:"link",children:"Sign in here"})," "]})]})})})})},M=(n(60),n(41)),I=n(73),B=n(78);var F=function(e){var t=e.currentMonth,n=e.setCurrentMonth;return Object(x.jsxs)("div",{className:"month-wrapper",children:[Object(x.jsx)("div",{className:"arrow",children:Object(x.jsx)("div",{className:"icon",onClick:function(){n(Object(I.a)(t,1))},children:"chevron_left"})}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{children:Object(B.a)(t,"MMMM yyyy")})}),Object(x.jsx)("div",{className:"arrow",onClick:function(){n(Object(M.a)(t,1))},children:Object(x.jsx)("div",{className:"icon",children:"chevron_right"})})]})},A=(n(61),n(79)),H=n(74),_=n(75),q=n(76),U=n(77),L=n(42),G=n.n(L),R=Object(c.createContext)(),V=Object(c.createContext)(),Y=Object(B.a)(new Date,"dd MMMM yyyy"),W=function(e){var t=Object(c.useState)(Y),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),i=o[0],u=o[1];return Object(x.jsx)(V.Provider,{value:[a,s],children:Object(x.jsx)(R.Provider,{value:[i,u],children:e.children})})};var z=function(e){var t=e.currentMonth,n=Object(c.useContext)(V),a=Object(l.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(new Date),i=Object(l.a)(o,2),u=i[0],d=i[1];return Object(c.useEffect)((function(){document.querySelector(".selected").scrollIntoView({behavior:"smooth"})}),[]),Object(A.a)(new Date(s),u)||null===s||d(new Date(s)),Object(x.jsx)(G.a,{alignCenter:!1,scrollToSelected:!0,data:function(){for(var e=Object(H.a)(t),n=Object(H.a)(e),c=Object(_.a)(Object(q.a)(t)),a=[],s=n,o="",i=function(e){o=Object(B.a)(s,"d");var t=s;a.push(Object(x.jsxs)("div",{className:"day ".concat(Object(A.a)(s,u)?"selected":""),onClick:function(){return function(e){d(e),r(Object(B.a)(e,"dd MMMM yyyy"))}(t)},children:[Object(x.jsx)("span",{className:"number",children:o}),Object(x.jsx)("div",{className:"days",children:Object(B.a)(s,"eee")})]},s)),s=Object(U.a)(s,1)},l=0;l<c;l++)i();return a}(),menuStyle:!1})};n(62);var J=function(){var e=Object(c.useState)(new Date),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("div",{className:"calendar",children:[Object(x.jsx)(F,{currentMonth:n,setCurrentMonth:a}),Object(x.jsx)(z,{currentMonth:n})]})},K=(n(63),function(){var e=Object(c.useContext)(V),t=Object(l.a)(e,1)[0],n=Object(c.useState)([]),a=Object(l.a)(n,2),s=a[0],r=a[1],o=Object(c.useContext)(R),i=Object(l.a)(o,2)[1],u=Object(c.useContext)(v);Object(c.useEffect)((function(){var e=b.collection("todos").where("userId","==",u.uid).where("date","==",t).onSnapshot((function(e){r(e.docs.map((function(e){return{date:t,id:e.id,title:e.data().title,todo:e.data().todo,status:e.data().status}})))}));return function(){e()}}),[t]);var d=function(e){O.collection("todos").doc(e.id).update({status:!e.status})};return Object(x.jsx)(x.Fragment,{children:s.length>0?Object(x.jsx)("div",{className:"todo-list-wrapper",children:Object(x.jsx)("div",{className:"todo-list",children:s.map((function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"todo",children:[Object(x.jsx)("div",{className:"status-wrapper",children:!1===e.status?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"icon status-unchecked",onClick:function(){d(e)},children:"radio_button_unchecked"})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"icon status-checked",onClick:function(){d(e)},children:"check_circle"})})}),!1===e.status?Object(x.jsx)(P.b,{className:"todo-link",to:"/todo",onClick:function(){i(e)},children:e.title},e.id):Object(x.jsx)(P.b,{className:"todo-link todo-link-done",to:"/todo",onClick:function(){i(e)},children:e.title},e.id)]})})}))})}):Object(x.jsx)("div",{className:"empty-list",children:Object(x.jsx)("h2",{children:"Task list is empty"})})})});n(64);var Q=function(){var e=Object(E.g)(),t=Object(c.useState)(null),n=Object(l.a)(t,2)[1];return Object(x.jsxs)("div",{className:"todo-list-footer",children:[Object(x.jsxs)("button",{className:"button",onClick:function(){e.push("create-todo")},children:[Object(x.jsx)("p",{className:"icon",children:"add_circle"})," Add a New Task"]}),Object(x.jsxs)("button",{className:"button sign-out",onClick:function(){j.signOut().then((function(){n(f.b.success("You are logged off!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},children:[Object(x.jsx)("p",{className:"icon",children:"logout"}),"Sign out"]})]})};var X=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k.a,{children:Object(x.jsx)(C.a,{children:Object(x.jsxs)(N.a,{xs:12,children:[Object(x.jsx)(J,{}),Object(x.jsx)(K,{}),Object(x.jsx)(Q,{})]})})})})},Z=(n(65),function(){var e=Object(E.g)(),t=Object(c.useContext)(V),n=Object(l.a)(t,1)[0],a=Object(c.useState)(""),s=Object(l.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),d=u[0],j=u[1],b=Object(c.useState)(null),h=Object(l.a)(b,2)[1],p=Object(c.useContext)(v);return Object(x.jsxs)("div",{className:"add-todo-wrapper",children:[Object(x.jsx)("h1",{children:"Create a Task"}),Object(x.jsxs)("form",{noValidate:!0,children:[Object(x.jsx)("input",{id:"todoTitle",label:"ToDo Title",placeholder:"ToDo Title",name:"todoTitle",required:!0,value:r,onChange:function(e){return o(e.target.value)}}),Object(x.jsx)("textarea",{margin:"normal",required:!0,id:"todo",label:"ToDo",placeholder:"ToDo",name:"todo",value:d,onChange:function(e){return j(e.target.value)}}),Object(x.jsx)("button",{className:"button",type:"submit",onClick:function(e){e.preventDefault(),O.collection("todos").add({userId:p.uid,date:n,title:r,todo:d,status:!1}),o(""),j(""),h(f.b.success("Task was created!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},disabled:!d||!r,children:"Add Todo"}),Object(x.jsx)("button",{className:"button back-button",onClick:function(){return e.push("/")},children:"Back"})]})]})});var $=function(){var e=Object(c.useContext)(R),t=Object(l.a)(e,1)[0];return console.log(t),Object(x.jsx)("div",{className:"todo-wrapper",children:Object(x.jsx)(Z,{})})},ee=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2)[1],o=Object(c.useState)(null),i=Object(l.a)(o,2)[1];return Object(x.jsx)("div",{className:"auth-wrapper",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"icon",children:"autorenew"}),Object(x.jsx)("h1",{children:"Reset your Password"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)("input",{type:"email",name:"userEmail",id:"userEmail",value:n,placeholder:"Input your email",onChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;"userEmail"===n&&a(c)},className:"input"}),Object(x.jsx)("button",{className:"button primary-button fp-button",onClick:function(e){!function(e){e.preventDefault(),j.sendPasswordResetEmail(n).then((function(){r(f.b.success("Email has been sent!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){r(null)}),5e3)})).catch((function(){i(f.b.error("Invalid credentials"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}(e)},children:"Send me a reset link"})]}),Object(x.jsx)(P.b,{to:"/",className:"link",children:"\u2190 back to sign in page"})]})]})})};n(66);var te=function(){var e=Object(E.g)(),t=Object(c.useContext)(R),n=Object(l.a)(t,1)[0],a=Object(c.useState)(null),s=Object(l.a)(a,2)[1];return null==n&&e.push("/"),n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"status-wrapper-todo",children:n.status?Object(x.jsx)("div",{className:"icon status-checked",children:"check_circle "}):Object(x.jsx)("div",{className:"icon status-unchecked",children:"radio_button_unchecked"})}),Object(x.jsxs)("div",{className:"todo-wrapper",children:[Object(x.jsx)("h2",{children:n.title}),Object(x.jsx)("textarea",{rows:"5",disabled:!0,value:n.todo}),Object(x.jsx)("button",{className:"button",onClick:function(){e.push("/edit-todo")},children:"Edit Task"}),Object(x.jsx)("button",{className:"button",onClick:function(){var t;t=n.id,b.collection("todos").doc(t).delete().then((function(){s(f.b.success("Task was deleted!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})),e.push("/")},children:"Delete Task"}),Object(x.jsx)("button",{className:"button",type:"submit",onClick:function(){e.push("/")},children:"Back"})]})]}):null};n(67);var ne=function(){var e=Object(E.g)(),t=Object(c.useContext)(R),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(a?a.title:""),o=Object(l.a)(r,2),i=o[0],u=o[1],d=Object(c.useState)(a?a.todo:""),j=Object(l.a)(d,2),b=j[0],h=j[1],p=Object(c.useState)(null),m=Object(l.a)(p,2)[1];return null==a&&e.push("/todo"),a?Object(x.jsxs)("div",{className:"todo-wrapper",children:[Object(x.jsx)("h1",{children:"Edit a Task"}),Object(x.jsxs)("form",{noValidate:!0,children:[Object(x.jsx)("input",{id:"todoTitle",label:"ToDo Title",name:"todoTitle",required:!0,defaultValue:i,onChange:function(e){return u(e.target.value)}}),Object(x.jsx)("textarea",{margin:"normal",required:!0,id:"todo",label:"ToDo",placeholder:"ToDo",name:"todo",defaultValue:b,onChange:function(e){return h(e.target.value)}}),Object(x.jsx)("button",{className:"button",type:"submit",onClick:function(t){t.preventDefault(),O.collection("todos").doc(a.id).update({title:i,todo:b}),O.collection("todos").doc(a.id).get().then((function(e){e.exists?s({date:e.day,id:e.id,title:e.data().title,todo:e.data().todo}):console.log("No such document!")})),e.push("/todo"),u(""),h(""),m((f.b.success("Task was updated!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))},disabled:!b&&!i,children:"Save Changes"}),Object(x.jsx)("button",{className:"button",type:"submit",onClick:function(){e.push("/todo")},children:"Back"})]})]}):null};var ce=function(){return Object(c.useContext)(v)?Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(W,{children:Object(x.jsx)(P.a,{children:Object(x.jsxs)(E.d,{children:[Object(x.jsx)(E.b,{path:"/edit-todo",component:ne}),Object(x.jsx)(E.b,{path:"/todo",component:te}),Object(x.jsx)(E.b,{path:"/create-todo",component:$}),Object(x.jsx)(E.b,{path:"/",component:X})]})})})}):Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(P.a,{children:Object(x.jsxs)(E.d,{children:[Object(x.jsx)(E.b,{path:"/sign-in",component:T}),Object(x.jsx)(E.b,{path:"/sign-up",component:D}),Object(x.jsx)(E.b,{path:"/password-reset",component:ee}),Object(x.jsx)(E.a,{from:"/",to:"/sign-in"})]})})})};n(68);var ae=function(){return Object(x.jsxs)(g,{children:[Object(x.jsx)(f.a,{}),Object(x.jsx)(ce,{})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};s.a.render(Object(x.jsx)(ae,{}),document.getElementById("root")),se()}},[[69,1,2]]]);
//# sourceMappingURL=main.198554f2.chunk.js.map