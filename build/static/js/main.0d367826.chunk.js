(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"register_container__1A3rk",link:"register_link__3-TzA",heading:"register_heading___UfBi",item:"register_item__1RghG",button:"register_button__T5v6n",input:"register_input__3UYL9"}},18:function(e,t,n){e.exports={home:"homepage_home__38LQx",register:"homepage_register__3v4-v",login:"homepage_login__2__eW",link:"homepage_link__rMiOG",activeLink:"homepage_activeLink__2vPJD",contacts:"homepage_contacts__2tJJz"}},20:function(e,t,n){e.exports={link:"login_link__3T3DG",container:"login_container__3BRg7",item:"login_item__2P58p",button:"login_button__sfHJd",input:"login_input__13oWI"}},26:function(e,t,n){e.exports={form:"ContactForm_form__2RzbR",button:"ContactForm_button__2gUMT",input:"ContactForm_input__3z9Ym"}},32:function(e,t,n){e.exports={heading:"userMenu_heading__18jVO",container:"userMenu_container__1X4bh",button:"userMenu_button__B4jWl"}},33:function(e,t,n){e.exports={list:"ContactList_list__24KCm",item:"ContactList_item__3xc_E",button:"ContactList_button__3pFXl"}},34:function(e,t,n){e.exports={heading:"Filter_heading__2_K-E",input:"Filter_input__3JF4J",label:"Filter_label__kU8eM"}},35:function(e,t,n){e.exports={heading:"App_heading__17zJv",link:"App_link__3Hte5"}},39:function(e,t,n){e.exports={heading:"welcome_heading__3aBp0",underline:"welcome_underline__2OMjK"}},56:function(e,t,n){e.exports={loader:"loader_loader__3r-sv"}},91:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(29),c=n.n(r),s=n(4),i=n(12),o=n(5),u=n(40),l=n(7),j=n.n(l),d=n(19),b=n(6),h=n(15),O=n.n(h);O.a.defaults.baseURL="https://connections-api.herokuapp.com";var p=Object(b.c)("contact/addContact",function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/contacts",t).catch((function(e){return console.log(e)}));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(b.c)("contact/getContact",Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/contacts").catch((function(e){return console.log(e)}));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),m=Object(b.c)("contact/deleteContact",function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("/contacts/".concat(t)).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=n(21),x=n(51),_=n.n(x),v=Object(b.b)("contactsFilter");O.a.defaults.baseURL="https://connections-api.herokuapp.com";var k,C,N,w=function(e){O.a.defaults.headers.common.Authorization="Bearer ".concat(e)},y=function(){O.a.defaults.headers.common.Authorization=""},L=Object(b.c)("auth/register",function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,w(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),e.abrupt("return",e.t0.rejectWithValue());case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),I=Object(b.c)("auth/login",function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/users/login",t);case 3:return n=e.sent,a=n.data,w(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),e.abrupt("return",e.t0.rejectWithValue());case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),A=Object(b.c)("auth/logout",Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/users/logout");case 3:y(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),F=Object(b.c)("auth/refresh",function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(r=a.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",n.rejectWithValue());case 5:return w(r),e.prev=6,e.next=9,O.a.get("/users/current");case 9:return c=e.sent,s=c.data,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()),z={register:L,logIn:I,logOut:A,fetchCurrentUser:F},T=Object(b.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(k={},Object(o.a)(k,z.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(o.a)(k,z.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(o.a)(k,z.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(o.a)(k,z.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0})),k)}).reducer,S=Object(b.d)([],(C={},Object(o.a)(C,f.fulfilled,(function(e,t){return t.payload})),Object(o.a)(C,p.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(u.a)(e),[n])})),Object(o.a)(C,m.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),C)),U=Object(b.d)("",Object(o.a)({},v,(function(e,t){return t.payload}))),J=Object(b.d)(!1,(N={},Object(o.a)(N,f.pending,(function(){return!0})),Object(o.a)(N,f.fulfilled,(function(){return!1})),Object(o.a)(N,f.rejected,(function(){return!1})),Object(o.a)(N,p.pending,(function(){return!0})),Object(o.a)(N,p.fulfilled,(function(){return!1})),Object(o.a)(N,p.rejected,(function(){return!1})),Object(o.a)(N,m.pending,(function(){return!0})),Object(o.a)(N,m.fulfilled,(function(){return!1})),Object(o.a)(N,m.rejected,(function(){return!1})),N)),M={key:"auth",storage:_.a,whitelist:["token"]},B=Object(u.a)(Object(b.f)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})),H=Object(b.a)({reducer:{contacts:S,filter:U,loader:J,auth:Object(g.g)(M,T)},middleware:B,devTools:!1}),R=Object(g.h)(H),W=n(52),E=n(3),Z=n(17),D=n(16),V=n.n(D),q=n(0);function G(){var e=Object(a.useState)(""),t=Object(Z.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(Z.a)(c,2),u=o[0],l=o[1],j=Object(a.useState)(""),d=Object(Z.a)(j,2),b=d[0],h=d[1],O=Object(s.c)();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(i.b,{to:"/",className:V.a.link,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(q.jsxs)("div",{className:V.a.container,children:[Object(q.jsx)("h3",{className:V.a.heading,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(q.jsx)("div",{className:V.a.form,children:Object(q.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(z.register({name:n,email:u,password:b})),l(""),r(""),h("")},onChange:function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return r(a);case"email":return l(a);case"password":return h(a);default:return}},children:Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{className:V.a.item,children:Object(q.jsx)("input",{name:"name",placeholder:"\u0418\u043c\u044f",value:n,className:V.a.input})}),Object(q.jsx)("li",{className:V.a.item,children:Object(q.jsx)("input",{name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",value:u,className:V.a.input})}),Object(q.jsx)("li",{className:V.a.item,children:Object(q.jsx)("input",{name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:b,className:V.a.input})}),Object(q.jsx)("li",{className:V.a.item,children:Object(q.jsx)("button",{type:"submit",className:V.a.button,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})})})]})]})}var K=n(20),P=n.n(K);function X(){var e=Object(a.useState)(""),t=Object(Z.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(Z.a)(c,2),u=o[0],l=o[1],j=Object(s.c)();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(i.b,{to:"/",className:P.a.link,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(q.jsx)("div",{className:P.a.container,children:Object(q.jsx)("form",{onChange:function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return r(a);case"password":return l(a);default:return}},onSubmit:function(e){e.preventDefault(),j(z.logIn({email:n,password:u})),r(""),l("")},children:Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{className:P.a.item,children:Object(q.jsx)("input",{placeholder:"\u041f\u043e\u0447\u0442\u0430",name:"email",value:n,className:P.a.input})}),Object(q.jsx)("li",{className:P.a.item,children:Object(q.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",value:u,className:P.a.input})}),Object(q.jsx)("li",{className:P.a.item,children:Object(q.jsx)("button",{type:"submit",className:P.a.button,children:"\u0412\u043e\u0439\u0442\u0438"})})]})})})]})}var Y={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserEmail:function(e){return e.auth.user.email}},$=n(32),Q=n.n($);function ee(){var e=Object(s.d)(Y.getUserEmail),t=Object(s.c)();return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:Q.a.container,children:[Object(q.jsxs)("h2",{className:Q.a.heading,children:["Welcome,",e]}),Object(q.jsx)("button",{type:"button",onClick:function(){return t(z.logOut())},className:Q.a.button,children:"\u0412\u044b\u0439\u0442\u0438"})]})})}var te=n(39),ne=n.n(te);function ae(){return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("h2",{className:ne.a.heading,children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",Object(q.jsx)("span",{className:ne.a.underline,children:"\u041d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446"})," !!!"]})})}function re(){var e=Object(s.d)(Y.getIsLoggedIn);return Object(q.jsx)(q.Fragment,{children:e?Object(q.jsx)(ee,{}):Object(q.jsx)(ae,{})})}var ce=n(18),se=n.n(ce);function ie(){var e=Object(s.d)(Y.getIsLoggedIn);return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:se.a.home,children:[Object(q.jsx)(i.b,{to:"/register",exact:!0,className:se.a.link,children:Object(q.jsx)("p",{className:se.a.register,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(q.jsx)(i.b,{to:"/login",exact:!0,className:se.a.link,activeClassName:se.a.activeLink,children:Object(q.jsx)("p",{className:se.a.login,children:"\u041b\u043e\u0433\u0438\u043d"})}),e&&Object(q.jsx)(i.b,{to:"/contacts",className:se.a.link,activeClassName:se.a.activeLink,children:Object(q.jsx)("p",{className:se.a.contacts,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})})}var oe=n(23),ue=n(31),le=["redirectTo","children"];function je(e){var t=e.redirectTo,n=void 0===t?"/":t,a=e.children,r=Object(ue.a)(e,le),c=Object(s.d)(Y.getIsLoggedIn);return Object(q.jsx)(E.b,Object(oe.a)(Object(oe.a)({},r),{},{children:c?a:Object(q.jsx)(E.a,{to:n})}))}var de=n(54),be=n(55),he=n(58),Oe=n(57),pe=n(26),fe=n.n(pe),me=function(e){Object(he.a)(n,e);var t=Object(Oe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(be.a)(n,[{key:"render",value:function(){return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("form",{className:fe.a.form,children:[Object(q.jsxs)("label",{children:[Object(q.jsx)("h3",{children:"Name"}),Object(q.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.onChangeInputHandler,className:fe.a.input})]}),Object(q.jsxs)("label",{children:[Object(q.jsx)("h3",{children:"Tel. number "}),Object(q.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.props.onChangeInputHandler,className:fe.a.input})]}),Object(q.jsx)("button",{type:"button",className:fe.a.button,onClick:this.props.addContactHandler,children:"Add Contact"})]})})}}]),n}(a.Component),ge=n(33),xe=n.n(ge);var _e=function(e){var t=e.filteredContacts,n=e.deleteContact;return Object(q.jsx)("ul",{className:xe.a.list,children:t.map((function(e){return Object(q.jsxs)("li",{className:xe.a.item,children:[e.name," : ",e.number,Object(q.jsx)("button",{onClick:function(){return n(e.id)},className:xe.a.button,children:" Delete "})]},e.id)}))})},ve=n(34),ke=n.n(ve);var Ce=Object(s.b)(null,(function(e){return{contactsFilter:function(t){return e(v(t.target.value))}}}))((function(e){e.value;var t=e.contactsFilter;return Object(q.jsxs)("label",{className:ke.a.label,children:[Object(q.jsx)("h3",{className:ke.a.heading,children:"Find contacts by name"}),Object(q.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",onChange:t,className:ke.a.input})]})})),Ne=n(35),we=n.n(Ne),ye=function(e){return e.contacts},Le=function(e){return e.filter},Ie=function(e){return e.loader},Ae=n(56),Fe=n.n(Ae);function ze(){return Object(q.jsx)("div",{className:Fe.a.loader,children:Object(q.jsx)("h2",{children:"Loading..."})})}var Te=Object(s.b)((function(e){return{contactsArr:ye(e),filter:Le(e),loader:Ie(e)}}),(function(e){return{getContact:function(){return e(f())},onAddContact:function(t,n){return e(p({name:t,number:n}))},deleteContact:function(t){return e(m(t))}}}))((function(e){var t=e.onAddContact,n=e.deleteContact,r=e.contactsArr,c=e.filter,o=e.getContact,u=e.loader;Object(a.useEffect)((function(){return o()}),[o]);var l=Object(a.useState)(""),j=Object(Z.a)(l,2),d=j[0],b=j[1],h=Object(a.useState)(""),O=Object(Z.a)(h,2),p=O[0],f=O[1],m=(Object(s.c)(),function(e){if(r.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts")),!0}),g=r.length>0?r.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})):[];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(i.b,{to:"/",className:we.a.link,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(q.jsx)("h1",{className:we.a.heading,children:"PhoneBook"}),Object(q.jsx)(me,{onChangeInputHandler:function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":b(a);break;case"number":f(a);break;default:return}},addContactHandler:function(e){m(d)||t(d,p)}}),Object(q.jsx)("h3",{className:we.a.heading,children:"Contacts"}),Object(q.jsx)(Ce,{}),u&&Object(q.jsx)(ze,{}),Object(q.jsx)(_e,{filteredContacts:g,deleteContact:n})]})})),Se=["redirectTo","restricted","children"];function Ue(e){var t=e.redirectTo,n=e.restricted,a=void 0!==n&&n,r=e.children,c=Object(ue.a)(e,Se),i=Object(s.d)(Y.getIsLoggedIn)&&a;return Object(q.jsx)(E.b,Object(oe.a)(Object(oe.a)({},c),{},{children:i?Object(q.jsx)(E.a,{to:t}):r}))}function Je(){var e=Object(s.c)();return Object(a.useEffect)((function(){e(z.fetchCurrentUser())}),[e]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(re,{}),Object(q.jsxs)(E.d,{children:[Object(q.jsx)(Ue,{path:"/",exact:!0,children:Object(q.jsx)(ie,{})}),Object(q.jsx)(Ue,{exact:!0,path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(q.jsx)(G,{})}),Object(q.jsx)(Ue,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(q.jsx)(X,{})}),Object(q.jsx)(je,{path:"/contacts",redirectTo:"/login",children:Object(q.jsx)(Te,{})})]})]})}c.a.render(Object(q.jsx)(s.a,{store:H,children:Object(q.jsx)(W.a,{loading:null,persistor:R,children:Object(q.jsx)(i.a,{children:Object(q.jsx)(Je,{})})})}),document.querySelector("#root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.0d367826.chunk.js.map