(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(11),i=n.n(r),l=(n(20),n(21),n(12)),a=n(13),o=n(15),j=n(14),d=n(9),h=n(34),m=n(29),p=n(30),u=n(33),y=n(31),b=n(32),O=(n(22),n(5)),x=function(e){var t=e.employee,n=e.onEmployeeDelete;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.id}),Object(O.jsx)("td",{children:t.name}),Object(O.jsx)("td",{children:t.role}),Object(O.jsx)("td",{children:Object(O.jsx)(h.a,{variant:"danger",onClick:n,value:t.id,children:"Delete"})})]})},f=function(e){var t=e.colSpan,n=e.jsxElement;return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:t,children:n})})},v=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).getEmployees=function(){setTimeout((function(){s.setState({employees:d.employees,isEmployeeLoading:!1})}),1500)},s.handleSearchEvent=function(e){var t=e.target.value,n=[];n=t.trim()?s.state.employees.filter((function(e){return e.name.includes(t)||e.id.includes(t)})):d.employees,s.setState({employeeFilter:t,employees:n})},s.onDeleteEmployee=function(e){s.setState({employees:s.state.employees.filter((function(t){return t.id!==e.target.value}))})},s.state={employeeFilter:"",employees:[],isEmployeeLoading:!0},s}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)("h1",{children:"Employees"}),Object(O.jsx)(u.a.Group,{children:Object(O.jsx)(u.a.Control,{size:"lg",type:"text",placeholder:"Search by name or id",value:this.state.employeeFilter,onChange:this.handleSearchEvent})}),Object(O.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Role"}),Object(O.jsx)("th",{children:"Options"})]})}),Object(O.jsx)("tbody",{children:this.state.employees.length?this.state.employees.map((function(t){return Object(O.jsx)(x,{employee:t,onEmployeeDelete:e.onDeleteEmployee},t.id)})):Object(O.jsx)(f,{colSpan:4,jsxElement:this.state.isEmployeeLoading?Object(O.jsx)(b.a,{animation:"border"}):Object(O.jsx)("span",{children:"No matching employees !"})})})]})]})})})}}]),n}(s.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),S()},9:function(e,t){e.exports={employees:[{id:"LS1229",name:"ajayachathru",role:"Senior systems analyst"},{id:"LS1220",name:"Krishnakumar",role:"Senior systems analyst"},{id:"LS1210",name:"Suresh",role:"systems analyst"},{id:"LS1211",name:"Shyam",role:"Technical Lead"}]}}},[[27,1,2]]]);
//# sourceMappingURL=main.546a561f.chunk.js.map