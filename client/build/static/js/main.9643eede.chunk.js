(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(28),i=n.n(c),r=(n(38),n(29)),o=n(30),s=n(33),j=n(32),u=n(7),d=n(5),b=n(4),h=(n(39),n(0));function p(){var e=Object(d.f)();return Object(h.jsx)("div",{className:"NavBar",children:Object(h.jsxs)("header",{children:[Object(h.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",rel:"stylesheet"}),Object(h.jsxs)("div",{class:"btn-group",children:[Object(h.jsx)(b.a,{className:"Customer Login",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Login"),window.location.reload()},children:"Login"}),Object(h.jsx)(b.a,{className:"Customer Signup",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Signup"),window.location.reload()},children:"Sign Up"}),Object(h.jsx)(b.a,{className:"Main Page",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Main"),window.location.reload()},children:"Home"}),Object(h.jsx)(b.a,{className:"Animals",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AnimalsPage"),window.location.reload()},children:"Animals"}),Object(h.jsx)(b.a,{className:"Employee Login",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/EmployeeLogin"),window.location.reload()},children:"Employee Login"})]})]})})}n(46);function O(){return Object(h.jsxs)("div",{className:"Main",children:[Object(h.jsx)("head",{children:Object(h.jsx)("link",{rel:"stylesheet",href:"Main.css"})}),Object(h.jsxs)("body",{children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Welcome to the Group 14 Zoo"})]})]})}var m=n(2),x=(n(47),n(6)),f=n.n(x);function g(){Object(d.f)();var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),u=j[0],b=j[1],O=Object(a.useState)(""),x=Object(m.a)(O,2),g=x[0],v=x[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],N=Object(a.useState)(""),E=Object(m.a)(N,2),w=E[0],G=E[1],D=Object(a.useState)([]),B=Object(m.a)(D,2),k=(B[0],B[1]);function I(e,t,n,a,l,c){var i=e,r=t,o=n,s=a,j=l,u=c;0===i.length&&(i=""),0===r.length&&(r=""),0===o.length&&(o=""),0===s.length&&(s=""),0===j.length&&(j=""),0===u.length&&(u=""),f.a.get("/api/auth/getAnimals").then((function(e){console.log(e.data),k(e.data)}))}return Object(h.jsxs)("div",{className:"Animals",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Enter the Animal Information for Report"}),Object(h.jsxs)("form",{class:"animals",id:"animalsform",onSubmit:function(e){e.preventDefault(),I(n,r,A,u,g,w)},children:[Object(h.jsx)("label",{children:"Animal Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Identification Number",id:"Animalid",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Animal Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal's Name Here",id:"Animalname",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"date",placeholder:"12/31/2000",id:"Animaldob",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Species"}),Object(h.jsxs)("select",{id:"Animalspecies",onChange:function(e){return o(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select an Animal"}),Object(h.jsx)("option",{value:"Anteater",children:"Anteater"}),Object(h.jsx)("option",{value:"Arctic Fox",children:"Arctic Fox"}),Object(h.jsx)("option",{value:"Bald Eagle",children:"Bald Eagle"}),Object(h.jsx)("option",{value:"Beaver",children:"Beaver"}),Object(h.jsx)("option",{value:"Bison",children:"Bison"}),Object(h.jsx)("option",{value:"Camel",children:"Camel"}),Object(h.jsx)("option",{value:"Chimpanzee",children:"Chimpanzee"}),Object(h.jsx)("option",{value:"Giraffe",children:"Giraffe"}),Object(h.jsx)("option",{value:"Gorilla",children:"Gorilla"}),Object(h.jsx)("option",{value:"Grizzly Bear",children:"Grizzly Bear"}),Object(h.jsx)("option",{value:"Lemur",children:"Lemur"}),Object(h.jsx)("option",{value:"Lion",children:"Lion"}),Object(h.jsx)("option",{value:"Polar Bear",children:"Polar Bear"}),Object(h.jsx)("option",{value:"Prairie dog",children:"Prairie dog"}),Object(h.jsx)("option",{value:"Red Panda",children:"Red Panda"}),Object(h.jsx)("option",{value:"Rhinoceros",children:"Rhinoceros"}),Object(h.jsx)("option",{value:"Sloth",children:"Sloth"}),Object(h.jsx)("option",{value:"Tiger",children:"Tiger"}),Object(h.jsx)("option",{value:"Wolverine",children:"Wolverine"}),Object(h.jsx)("option",{value:"Zebra",children:"Zebra"})]}),Object(h.jsx)("label",{children:"Sex"}),Object(h.jsxs)("select",{id:"Animalgender",onChange:function(e){return v(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("label",{children:"Habitat"}),Object(h.jsxs)("select",{id:"habitat",onChange:function(e){return G(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Habitat"}),Object(h.jsx)("option",{value:"African Grasslands",children:"African Grasslands"}),Object(h.jsx)("option",{value:"American Grasslands",children:"American Grasslands"}),Object(h.jsx)("option",{value:"Arctic",children:"Arctic"}),Object(h.jsx)("option",{value:"Asian Forest",children:"Asian Forest"}),Object(h.jsx)("option",{value:"Great Apes of Harambee",children:"Great Apes of Harambee"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("title",{children:"Table"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Animal Id"}),Object(h.jsx)("th",{children:"Animal Species"}),Object(h.jsx)("th",{children:"Animal Name"}),Object(h.jsx)("th",{children:"Animal Date of Birth"}),Object(h.jsx)("th",{children:"Animal Gender"}),Object(h.jsx)("th",{children:"Animal Habitat"})]})})]})}n(66);function v(){var e=Object(d.f)();return Object(h.jsx)("div",{className:"EmployeeNavBar",children:Object(h.jsxs)("header",{children:[Object(h.jsx)(b.a,{className:"Add Animal",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AddAnimal"),window.location.reload()},children:"Add New Animal"}),Object(h.jsx)(b.a,{className:"Add Employee",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AddEmployee"),window.location.reload()},children:"Add New Employee"}),Object(h.jsx)(b.a,{className:"Add Revenue",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AddRevenue"),window.location.reload()},children:"Add New Revenue"}),Object(h.jsx)(b.a,{className:"Home",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/EmployeeMain"),window.location.reload()},children:"Home"}),Object(h.jsx)(b.a,{className:"Revenue",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Revenue"),window.location.reload()},children:"Revenue Report"}),Object(h.jsx)(b.a,{className:"Employees",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Employees"),window.location.reload()},children:"Employees Report"}),Object(h.jsx)(b.a,{className:"Animals",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AnimalsEmployee"),window.location.reload()},children:"Animals Report"}),Object(h.jsx)(b.a,{className:"Logout",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Main"),window.location.reload()},children:"Logout"})]})})}n(67);function S(){Object(d.f)();var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),u=j[0],b=j[1],p=Object(a.useState)(""),O=Object(m.a)(p,2),x=O[0],g=O[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],N=Object(a.useState)(""),E=Object(m.a)(N,2),w=E[0],G=E[1],D=Object(a.useState)([]),B=Object(m.a)(D,2),k=B[0],I=B[1];function F(e,t,n,a,l,c){var i=e,r=t,o=n,s=a,j=l,u=c;0===i.length&&(i=""),0===r.length&&(r=""),0===o.length&&(o=""),0===s.length&&(s=""),0===j.length&&(j=""),0===u.length&&(u=""),function(e,t,n,a,l,c){f.a.post("/api/auth/getAnimals",{AnimalId:e,Species:t,AnimalName:n,AnimalDOB:a,AnimalGender:l,Habitat:c}).then((function(e){I(e.data)}))}(i,r,o,s,j,u),console.log(k)}return Object(h.jsxs)("div",{className:"Animals",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter the Animal Information for Report"}),Object(h.jsxs)("form",{class:"animals",id:"animalsform",onSubmit:function(e){e.preventDefault(),F(n,r,A,u,x,w)},children:[Object(h.jsx)("label",{children:"Animal Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Identification Number",id:"Animalid",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Animal Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal's Name Here",id:"Animalname",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"date",placeholder:"12/31/2000",id:"Animaldob",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Species"}),Object(h.jsxs)("select",{id:"Animalspecies",onChange:function(e){return o(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select an Animal"}),Object(h.jsx)("option",{value:"Anteater",children:"Anteater"}),Object(h.jsx)("option",{value:"Arctic Fox",children:"Arctic Fox"}),Object(h.jsx)("option",{value:"Bald Eagle",children:"Bald Eagle"}),Object(h.jsx)("option",{value:"Beaver",children:"Beaver"}),Object(h.jsx)("option",{value:"Bison",children:"Bison"}),Object(h.jsx)("option",{value:"Camel",children:"Camel"}),Object(h.jsx)("option",{value:"Chimpanzee",children:"Chimpanzee"}),Object(h.jsx)("option",{value:"Giraffe",children:"Giraffe"}),Object(h.jsx)("option",{value:"Gorilla",children:"Gorilla"}),Object(h.jsx)("option",{value:"Grizzly Bear",children:"Grizzly Bear"}),Object(h.jsx)("option",{value:"Lemur",children:"Lemur"}),Object(h.jsx)("option",{value:"Lion",children:"Lion"}),Object(h.jsx)("option",{value:"Polar Bear",children:"Polar Bear"}),Object(h.jsx)("option",{value:"Prairie dog",children:"Prairie dog"}),Object(h.jsx)("option",{value:"Red Panda",children:"Red Panda"}),Object(h.jsx)("option",{value:"Rhinoceros",children:"Rhinoceros"}),Object(h.jsx)("option",{value:"Sloth",children:"Sloth"}),Object(h.jsx)("option",{value:"Tiger",children:"Tiger"}),Object(h.jsx)("option",{value:"Wolverine",children:"Wolverine"}),Object(h.jsx)("option",{value:"Zebra",children:"Zebra"})]}),Object(h.jsx)("label",{children:"Sex"}),Object(h.jsxs)("select",{id:"Animalgender",onChange:function(e){return g(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("label",{children:"Habitat"}),Object(h.jsxs)("select",{id:"habitat",onChange:function(e){return G(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Habitat"}),Object(h.jsx)("option",{value:"African Grasslands",children:"African Grasslands"}),Object(h.jsx)("option",{value:"American Grasslands",children:"American Grasslands"}),Object(h.jsx)("option",{value:"Arctic",children:"Arctic"}),Object(h.jsx)("option",{value:"Asian Forest",children:"Asian Forest"}),Object(h.jsx)("option",{value:"Great Apes of Harambee",children:"Great Apes of Harambee"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("title",{children:"Table"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Animal Id"}),Object(h.jsx)("th",{children:"Animal Species"}),Object(h.jsx)("th",{children:"Animal Name"}),Object(h.jsx)("th",{children:"Animal Date of Birth"}),Object(h.jsx)("th",{children:"Animal Gender"}),Object(h.jsx)("th",{children:"Animal Habitat"})]})}),k.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[e.Animal_Name," | ",e.Species," | ",e.Animal_Gender," | ",e.Animal_Habitat," | ",e.Anima_DOB]})})}))]})}n(68);function y(){Object(d.f)();var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=(t[0],t[1]),l=Object(a.useState)(""),c=Object(m.a)(l,2),i=(c[0],c[1]),r=Object(a.useState)(""),o=Object(m.a)(r,2),s=(o[0],o[1]),j=Object(a.useState)(""),u=Object(m.a)(j,2),b=(u[0],u[1]),p=Object(a.useState)(""),O=Object(m.a)(p,2),x=(O[0],O[1]),f=Object(a.useState)(""),g=Object(m.a)(f,2),S=(g[0],g[1]),y=Object(a.useState)(""),A=Object(m.a)(y,2),C=(A[0],A[1]),N=Object(a.useState)(""),E=Object(m.a)(N,2),w=(E[0],E[1]),G=Object(a.useState)(""),D=Object(m.a)(G,2),B=(D[0],D[1]),k=Object(a.useState)(""),I=Object(m.a)(k,2),F=(I[0],I[1]),P=Object(a.useState)(""),R=Object(m.a)(P,2),L=(R[0],R[1]);return Object(h.jsxs)("div",{className:"Employees",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter Employee Information"}),Object(h.jsxs)("form",{class:"employee",id:"employeesinfo",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("input",{type:"text",placeholder:"John",id:"employeeFirstName",onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Snow",id:"employeeLastName",onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"text",placeholder:"12/31/2000",id:"employeeDOB",onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("label",{children:"Gender"}),Object(h.jsxs)("select",{id:"employeeGender",onChange:function(e){return b(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"}),Object(h.jsx)("option",{value:"Other",children:"Other"})]}),Object(h.jsx)("label",{children:"Salary"}),Object(h.jsx)("input",{type:"text",placeholder:"15.00",id:"employeeSalary",onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("label",{children:"Department"}),Object(h.jsxs)("select",{id:"department",onChange:function(e){return S(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Department"}),Object(h.jsx)("option",{value:"Zoo Keeper",children:"Zoo Keeper"}),Object(h.jsx)("option",{value:"Restaraunt Staff",children:"Restaraunt Staff"}),Object(h.jsx)("option",{value:"Gift Shop Staff",children:"Gift Shop Staff"}),Object(h.jsx)("option",{value:"Food Stalls",children:"Food Stalls"}),Object(h.jsx)("option",{value:"Veterinarian",children:"Veterinarian"}),Object(h.jsx)("option",{value:"Registrar",children:"Registrar"}),Object(h.jsx)("option",{value:"Curator",children:"Curator"}),Object(h.jsx)("option",{value:"Maintenance",children:"Maintnance"}),Object(h.jsx)("option",{value:"Marketing",children:"Marketing"}),Object(h.jsx)("option",{value:"Visitor Services",children:"Visitor Services"}),Object(h.jsx)("option",{value:"Janitorial",children:"Janitorial"}),Object(h.jsx)("option",{value:"Membership Director",children:"Membership Director"}),Object(h.jsx)("option",{value:"Volunteer",children:"Volunteer"})]}),Object(h.jsx)("label",{children:"Contact Information"}),Object(h.jsx)("input",{type:"text",placeholder:"713-000-0000",id:"employeeContactInfo",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Social Security Number"}),Object(h.jsx)("input",{type:"text",placeholder:"000-00-0000",id:"employeeSSN",onChange:function(e){return w(e.target.value)}}),Object(h.jsx)("label",{children:"Supervisor ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeSupervisorId",onChange:function(e){return B(e.target.value)}}),Object(h.jsx)("label",{children:"Employee ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeid",onChange:function(e){return F(e.target.value)}}),Object(h.jsx)("label",{children:"New Employee Password"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter a Password",id:"employeepassword",onChange:function(e){return L(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("title",{children:"Employee Table"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"First Name"}),Object(h.jsx)("th",{children:"Last Name Name"}),Object(h.jsx)("th",{children:"Date of Birth"}),Object(h.jsx)("th",{children:"Gender"}),Object(h.jsx)("th",{children:"Salary"}),Object(h.jsx)("th",{children:"Department"}),Object(h.jsx)("th",{children:"Contact Information"}),Object(h.jsx)("th",{children:"SSN"}),Object(h.jsx)("th",{children:"Supervisor Id"}),Object(h.jsx)("th",{children:"Id"})]})})]})}n(69);function A(){var e,t=Object(a.useState)(""),n=Object(m.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),r=Object(m.a)(i,2),o=r[0],s=r[1],j=Object(a.useState)(""),u=Object(m.a)(j,2),b=u[0],p=u[1],O=Object(a.useState)(""),x=Object(m.a)(O,2),g=x[0],S=x[1],y=Object(a.useState)(""),A=Object(m.a)(y,2),C=A[0],N=A[1],E=Object(d.f)();return Object(h.jsxs)("div",{class:"AnimalForm",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter New Animal Information"}),Object(h.jsxs)("form",{class:"animalform",id:"animalinfo",onSubmit:function(t){t.preventDefault(),e="Rhinoceros"===o||"Lion"===o||"Zebra"===o||"Giraffe"===o||"Sloth"===o?"African Grasslands":"Wolverine"===o||"Anteater"===o||"Bison"===o||"Beaver"===o||"Grizzly Bear"===o||"Prairie dog"===o||"Bald Eagle"===o?"American Grasslands":"Arctic",l>0&&C.length>0&&10===b.length&&""!==o&&""!==g?(!function(e,t,n,a,l,c){f.a.post("/api/auth/addanimal",{AnimalId:e,Species:t,AnimalDOB:a,AnimalGender:l,AnimalName:n,Habitat:c}).then((function(e){return e.data}))}(l,o,C,b,g,e),E.push("/AnimalAdded")):0===l.length?alert("You must enter an Id!"):5!=l.length?alert("Animal Id must be 5 numbers long!"):0===C.length?alert("You must enter a name!"):0===b.length?alert("You must enter a date of birth"):""===o?alert("Select an Animal!"):""===g?alert("Select the Gender!"):alert("Make sure to fill all information for the animal!")},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Animal Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Identification",id:"AnimalID",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Animal Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Name",id:"AnimalName",onChange:function(e){return N(e.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"date",placeholder:"12/31/2000",id:"AnimalDOB",onChange:function(e){return p(e.target.value)}})]}),Object(h.jsx)("label",{children:"Species"}),Object(h.jsxs)("select",{id:"Species",onChange:function(e){return s(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select an Animal"}),Object(h.jsx)("option",{value:"Anteater",children:"Anteater"}),Object(h.jsx)("option",{value:"Arctic Fox",children:"Arctic Fox"}),Object(h.jsx)("option",{value:"Bald Eagle",children:"Bald Eagle"}),Object(h.jsx)("option",{value:"Beaver",children:"Beaver"}),Object(h.jsx)("option",{value:"Bison",children:"Bison"}),Object(h.jsx)("option",{value:"Camel",children:"Camel"}),Object(h.jsx)("option",{value:"Chimpanzee",children:"Chimpanzee"}),Object(h.jsx)("option",{value:"Giraffe",children:"Giraffe"}),Object(h.jsx)("option",{value:"Gorilla",children:"Gorilla"}),Object(h.jsx)("option",{value:"Grizzly Bear",children:"Grizzly Bear"}),Object(h.jsx)("option",{value:"Lemur",children:"Lemur"}),Object(h.jsx)("option",{value:"Lion",children:"Lion"}),Object(h.jsx)("option",{value:"Polar Bear",children:"Polar Bear"}),Object(h.jsx)("option",{value:"Prairie dog",children:"Prairie dog"}),Object(h.jsx)("option",{value:"Red Panda",children:"Red Panda"}),Object(h.jsx)("option",{value:"Rhinoceros",children:"Rhinoceros"}),Object(h.jsx)("option",{value:"Sloth",children:"Sloth"}),Object(h.jsx)("option",{value:"Tiger",children:"Tiger"}),Object(h.jsx)("option",{value:"Wolverine",children:"Wolverine"}),Object(h.jsx)("option",{value:"Zebra",children:"Zebra"})]}),Object(h.jsx)("label",{children:"Sex"}),Object(h.jsxs)("select",{id:"AnimalGender",onChange:function(e){return S(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})}n(70);function C(){return Object(h.jsxs)("div",{class:"AnimalAdded",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Animal Successfully Added"})]})}n(71);function N(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),u=j[0],b=j[1],p=Object(a.useState)(""),O=Object(m.a)(p,2),x=O[0],g=O[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],N=Object(a.useState)(""),E=Object(m.a)(N,2),w=E[0],G=E[1],D=Object(a.useState)(""),B=Object(m.a)(D,2),k=B[0],I=B[1],F=Object(a.useState)(""),P=Object(m.a)(F,2),R=P[0],L=P[1],M=Object(a.useState)(""),z=Object(m.a)(M,2),H=z[0],T=z[1],Y=Object(a.useState)(""),U=Object(m.a)(Y,2),Z=U[0],V=U[1],J=Object(a.useState)(""),W=Object(m.a)(J,2),_=W[0],K=W[1],q=Object(d.f)();return Object(h.jsxs)("div",{class:"EmployeeForm",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter New Employee Information"}),Object(h.jsxs)("form",{class:"employeeform",id:"employeeinfo",onSubmit:function(e){alert("Adding employee!"),e.preventDefault(),n.length>0&&r.length>0&&10===u.length&&""!==x&&5===A.length&&""!==w&&11===R.length&&12===k.length&&5===H.length&&0!==Z.length&&0!==_.length?(!function(e,t,n,a,l,c,i,r,o,s,j){f.a.post("/api/auth/addemployee",{EmployeeFirstName:e,EmployeeLastName:t,EmployeeDOB:n,EmployeeGender:a,EmployeeSalary:l,EmployeeDepartment:c,EmployeeContactInfo:i,EmployeeSSN:r,EmployeeSupervisorId:o,EmployeeId:s,EmployeePassword:j}).then((function(e){return e.data}))}(n,r,u,x,A,w,k,R,H,Z,_),q.push("/EmployeeAdded")):0===n.length?alert("You must enter a First name!"):0===r.length?alert("You must enter a Last name!"):0===u.length?alert("You must enter a date of birth"):!1===function(){for(var e=0,t=!1,n=0;n<u.length;n++)"/"===u[n]&&e++;return 2===e?(t=!0,Boolean(t)):(t=!1,Boolean(t))}()?alert("Date of birth has been entered incorrectly!"):10!==u.length?alert("Date of Birth has not been filled!"):""===x?alert("Select the Gender!"):""===A?alert("Salary must be filled!"):5!==A.length?alert("Salary entered wrong!"):""===w?alert("Select the Department!"):12!==k.length?alert("Contact Information entered wrong!"):""===R.length?alert("Social Security Number must be filled out!"):11!==R.length?alert("Social Security Number not filled out Correctly!"):0===H.length?alert("Supervisor ID must be filled!"):5!==H.length?alert("Supervisor ID must be Five Characters long!"):5!==Z.length?alert("Employee ID must be Five Characters long!"):0===_.length?alert("You must enter a Password!"):_.length>100&&alert("Password is too long, must be less than 100 Characters!")},children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("input",{type:"text",placeholder:"John",id:"employeeFirstName",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Snow",id:"employeeLastName",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"text",placeholder:"12/31/2000",id:"employeeDOB",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Gender"}),Object(h.jsxs)("select",{id:"employeeGender",onChange:function(e){return g(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"}),Object(h.jsx)("option",{value:"Other",children:"Other"})]}),Object(h.jsx)("label",{children:"Salary"}),Object(h.jsx)("input",{type:"text",placeholder:"15.00",id:"employeeSalary",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Department"}),Object(h.jsxs)("select",{id:"department",onChange:function(e){return G(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Department"}),Object(h.jsx)("option",{value:"Zoo Keeper",children:"Zoo Keeper"}),Object(h.jsx)("option",{value:"Restaraunt Staff",children:"Restaraunt Staff"}),Object(h.jsx)("option",{value:"Gift Shop Staff",children:"Gift Shop Staff"}),Object(h.jsx)("option",{value:"Food Stalls",children:"Food Stalls"}),Object(h.jsx)("option",{value:"Veterinarian",children:"Veterinarian"}),Object(h.jsx)("option",{value:"Registrar",children:"Registrar"}),Object(h.jsx)("option",{value:"Curator",children:"Curator"}),Object(h.jsx)("option",{value:"Maintenance",children:"Maintnance"}),Object(h.jsx)("option",{value:"Marketing",children:"Marketing"}),Object(h.jsx)("option",{value:"Visitor Services",children:"Visitor Services"}),Object(h.jsx)("option",{value:"Janitorial",children:"Janitorial"}),Object(h.jsx)("option",{value:"Membership Director",children:"Membership Director"}),Object(h.jsx)("option",{value:"Volunteer",children:"Volunteer"})]}),Object(h.jsx)("label",{children:"Contact Information"}),Object(h.jsx)("input",{type:"text",placeholder:"713-000-0000",id:"employeeContactInfo",onChange:function(e){return I(e.target.value)}}),Object(h.jsx)("label",{children:"Social Security Number"}),Object(h.jsx)("input",{type:"text",placeholder:"000-00-0000",id:"employeeSSN",onChange:function(e){return L(e.target.value)}}),Object(h.jsx)("label",{children:"Supervisor ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeSupervisorId",onChange:function(e){return T(e.target.value)}}),Object(h.jsx)("label",{children:"Employee ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeid",onChange:function(e){return V(e.target.value)}}),Object(h.jsx)("label",{children:"New Employee Password"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter a Password",id:"employeepassword",onChange:function(e){return K(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})}n(72);function E(){return Object(h.jsxs)("div",{class:"EmployeeAdded",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Employee Successfully Added"})]})}function w(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),u=j[0],O=j[1],x=Object(a.useState)(""),g=Object(m.a)(x,2),v=g[0],S=g[1],y=Object(d.f)();return Object(h.jsxs)("div",{className:"SignUp",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsxs)("form",{className:"SignupForm",id:"signupform",onSubmit:function(e){e.preventDefault(),n.length>0&&r.length>0&&u.length>0&&u===v?function(e,t,n){return f.a.post("/api/auth/signup",{Email:e,Username:t,Password:n}).then((function(e){return e.data}))}(n,r,u).then((function(){y.push("/Main"),alert("Successfully Registered!")}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();alert(t)})):0===n.length?alert("You must enter an Email!"):0===r.length?alert("You must enter a Username!"):0===u.length?alert("You must enter a Password!"):0===v.length?alert("You must reenter your Password!"):u!==v&&alert("Passwords do not match!")},children:[Object(h.jsx)("label",{children:"Enter your Email Address"}),Object(h.jsx)("input",{type:"text",placeholder:"Email Address Here",id:"email",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Enter your Username"}),Object(h.jsx)("input",{type:"text",placeholder:"Username Here",id:"username",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Enter your Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Password Here",id:"password",onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("label",{children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Enter Your Password Again Here",id:"confirmpassword",onChange:function(e){return S(e.target.value)}}),Object(h.jsx)(b.a,{className:"register",block:!0,size:"lg",type:"submit",children:"Sign Up"})]})]})}n(73);function G(){var e=Object(d.f)();return Object(h.jsx)("div",{className:"NavBar",children:Object(h.jsxs)("header",{children:[Object(h.jsx)(b.a,{className:"Main Page",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/UserMain"),window.location.reload()},children:"Home"}),Object(h.jsx)(b.a,{className:"Animals",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AnimalsPage"),window.location.reload()},children:"Animals"})]})})}function D(){return Object(h.jsxs)("div",{className:"UserMain",children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{children:"Welcome to the Group 14 Zoo"})]})}n(74);function B(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(d.f)();return Object(h.jsxs)("div",{className:"Login",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{class:"LoginForm",id:"loginform",onSubmit:function(e){e.preventDefault(),function(e,t){return f.a.post("/api/auth/login",{Username:e,Password:t}).then((function(e){return e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),localStorage.setItem("formData","No Data"),localStorage.setItem("address","No Address")),e.data}))}(n,r).then((function(){s.push("/UserMain")}),(function(e){e.response&&e.response.data&&e.response.data.message||e.message||e.toString();alert(e.response.data.message)}))},children:[Object(h.jsx)("label",{children:"Enter Username"}),Object(h.jsx)("input",{type:"text",placeholder:"Username",id:"username",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Enter Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Password",id:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(b.a,{className:"login",block:!0,size:"lg",type:"submit",disabled:!function(){return n.length>0&&r.length>0},children:"Login"})]})]})}n(75);function k(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(d.f)();return Object(h.jsxs)("div",{className:"EmployeeLogin",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{class:"EmployeeLoginForm",id:"Employeeloginform",onSubmit:function(e){e.preventDefault(),function(e,t){return f.a.post("/api/auth/employeesignin",{EmployeeID:e,EmployeePassword:t}).then((function(e){return e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),localStorage.setItem("formData","No Data"),localStorage.setItem("address","No Address")),e.data}))}(n,r).then((function(){s.push("/EmployeeMain")}),(function(e){e.response&&e.response.data&&e.response.data.message||e.message||e.toString();alert(e.response.data.message)}))},children:[Object(h.jsx)("label",{children:"Enter Employee Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Id",id:"employeeid",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Enter Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Password",id:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Login"})]})]})}function I(){return Object(h.jsxs)("div",{className:"EmployeeMain",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Employee Access for Zoo"})]})}n(76);function F(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),u=j[0],b=j[1],p=Object(a.useState)(""),O=Object(m.a)(p,2),x=O[0],g=O[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],N=Object(a.useState)(""),E=Object(m.a)(N,2),w=E[0],G=E[1],D=Object(d.f)();return Object(h.jsxs)("div",{class:"RevenueForm",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter Revenue Information"}),Object(h.jsxs)("form",{class:"revenueForm",id:"revenueinfo",onSubmit:function(e){e.preventDefault(),n.length>0&&r.length>0&&u.length>0&&x.length>0&&A.length>0?(G(function(e,t,n,a){var l=0;return l+(+e+ +t+ +n+ +a)}(n,r,u,x)),function(e,t,n,a,l,c){f.a.post("/api/auth/addrevenue",{TicketSales:e,GiftShopSales:t,RestaurantSales:n,FoodStallSales:a,Date:l,TotalSales:c}).then((function(e){return e.data}))}(n,r,u,x,A,w),D.push("/RevenueAdded")):0===n.length?alert("You must enter an amount for Ticket Sales!"):0===r.length?alert("You must enter an amount for Gift Shop Sales!"):0===u.length?alert("You must enter an amount for Restaurant Sales!"):0===x.length?alert("You must enter an amount for Food Stall Sales!"):0===A.length?alert("You must enter a Date!"):10!==A.length?alert("Date is too long, must be 10 characters!"):0===w.length&&alert("Total is Zero Dollars!")},children:[Object(h.jsx)("label",{children:"Ticket Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Ticket Sales",id:"TicketSales",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Gift Shop Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Gift Shop Sales",id:"GiftShopSales",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Restaurant Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Restaurant Sales",id:"RestaurantSales",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Food Stall Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Food Stall Sales",id:"FoodstallSales",onChange:function(e){return g(e.target.value)}}),Object(h.jsx)("label",{children:"Date"}),Object(h.jsx)("input",{type:"date",placeholder:"mm/dd/yyyy",id:"Date",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})}n(77);function P(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=(t[0],t[1],Object(a.useState)("")),l=Object(m.a)(n,2),c=(l[0],l[1],Object(a.useState)("")),i=Object(m.a)(c,2),r=(i[0],i[1],Object(a.useState)("")),o=Object(m.a)(r,2),s=(o[0],o[1],Object(a.useState)("")),j=Object(m.a)(s,2),u=(j[0],j[1],Object(a.useState)("")),d=Object(m.a)(u,2),b=(d[0],d[1],Object(a.useState)("")),p=Object(m.a)(b,2),O=(p[0],p[1]),x=Object(a.useState)(""),f=Object(m.a)(x,2),g=(f[0],f[1]);return Object(h.jsxs)("div",{className:"Revenue",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter Date for Revenue"}),Object(h.jsxs)("form",{class:"revenue",id:"revenueform",children:[Object(h.jsx)("label",{children:"Beginning Date"}),Object(h.jsx)("input",{type:"date",placeholder:"yyyy/dd/mm",id:"beginningdate",onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("label",{children:"End Date"}),Object(h.jsx)("input",{type:"date",placeholder:"yyyy/dd/mm",id:"enddate",onChange:function(e){return g(e.target.value)}}),Object(h.jsx)("button",{children:"Submit"})]})]})}n(78);function R(){return Object(h.jsxs)("div",{class:"RevenueAdded",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Revenue Successfully Added"})]})}n(79);function L(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(e,t){f.a.get("/api/auth/showAnimals").then((function(e){l(e.data)}))})),Object(h.jsxs)("div",{class:"AnimalPage",children:[Object(h.jsxs)("div",{className:"AnimalsPage",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Animals in our Zoo"})]}),n.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("h1",{children:[e.Animal_Name," "]}),Object(h.jsxs)("p",{children:[e.Species," | ",e.Animal_Gender," | ",e.Animal_Habitat," | ",e.Anima_DOB]})]})}))]})}var M=function(e){Object(s.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(u.a,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(h.jsx)(d.a,{exact:!0,path:"/Animals",component:g}),Object(h.jsx)(d.a,{exact:!0,path:"/Employees",component:y}),Object(h.jsx)(d.a,{exact:!0,path:"/AddAnimal",component:A}),Object(h.jsx)(d.a,{exact:!0,path:"/AnimalAdded",component:C}),Object(h.jsx)(d.a,{exact:!0,path:"/RevenueAdded",component:R}),Object(h.jsx)(d.a,{exact:!0,path:"/AddEmployee",component:N}),Object(h.jsx)(d.a,{exact:!0,path:"/EmployeeAdded",component:E}),Object(h.jsx)(d.a,{exact:!0,path:"/Main",component:O}),Object(h.jsx)(d.a,{exact:!0,path:"/SignUp",component:w}),Object(h.jsx)(d.a,{exact:!0,path:"/UserMain",component:D}),Object(h.jsx)(d.a,{exact:!0,path:"/Login",component:B}),Object(h.jsx)(d.a,{exact:!0,path:"/EmployeeLogin",component:k}),Object(h.jsx)(d.a,{exact:!0,path:"/EmployeeMain",component:I}),Object(h.jsx)(d.a,{exact:!0,path:"/AddRevenue",component:F}),Object(h.jsx)(d.a,{exact:!0,path:"/Revenue",component:P}),Object(h.jsx)(d.a,{exact:!0,path:"/AnimalsPage",component:L}),Object(h.jsx)(d.a,{exact:!0,path:"/AnimalsEmployee",component:S})]})})}}]),n}(a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),l(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),z()}},[[80,1,2]]]);
//# sourceMappingURL=main.9643eede.chunk.js.map