(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(29),i=n.n(c),r=(n(39),n(30)),o=n(31),s=n(34),j=n(33),d=n(7),u=n(4),b=n(5),h=(n(40),n(0));function p(){var e=Object(u.f)();return Object(h.jsx)("div",{className:"NavBar",children:Object(h.jsxs)("header",{children:[Object(h.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",rel:"stylesheet"}),Object(h.jsxs)("div",{class:"btn-group",children:[Object(h.jsx)(b.a,{className:"Customer Login",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Login"),window.location.reload()},children:"Login"}),Object(h.jsx)(b.a,{className:"Customer Signup",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Signup"),window.location.reload()},children:"Sign Up"}),Object(h.jsx)(b.a,{className:"Main Page",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Main"),window.location.reload()},children:"Home"}),Object(h.jsx)(b.a,{className:"Animals",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AnimalsPage"),window.location.reload()},children:"Animals"}),Object(h.jsx)(b.a,{className:"Employee Login",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/EmployeeLogin"),window.location.reload()},children:"Employee Login"})]})]})})}n(47);function O(){return Object(h.jsxs)("div",{className:"Main",children:[Object(h.jsx)("head",{children:Object(h.jsx)("link",{rel:"stylesheet",href:"Main.css"})}),Object(h.jsxs)("body",{children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Welcome to the Group 14 Zoo"})]})]})}var m=n(2),x=(n(48),n(6)),g=n.n(x);function f(){Object(u.f)();var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),d=j[0],b=j[1],O=Object(a.useState)(""),x=Object(m.a)(O,2),f=x[0],v=x[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],E=Object(a.useState)(""),N=Object(m.a)(E,2),w=N[0],G=N[1],B=Object(a.useState)([]),D=Object(m.a)(B,2),P=(D[0],D[1]);function F(e,t,n,a,l,c){var i=e,r=t,o=n,s=a,j=l,d=c;0===i.length&&(i=""),0===r.length&&(r=""),0===o.length&&(o=""),0===s.length&&(s=""),0===j.length&&(j=""),0===d.length&&(d=""),g.a.get("/api/auth/getAnimals").then((function(e){console.log(e.data),P(e.data)}))}return Object(h.jsxs)("div",{className:"Animals",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Enter the Animal Information for Report"}),Object(h.jsxs)("form",{class:"animals",id:"animalsform",onSubmit:function(e){e.preventDefault(),F(n,r,A,d,f,w)},children:[Object(h.jsx)("label",{children:"Animal Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Identification Number",id:"Animalid",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Animal Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal's Name Here",id:"Animalname",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"date",placeholder:"12/31/2000",id:"Animaldob",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Species"}),Object(h.jsxs)("select",{id:"Animalspecies",onChange:function(e){return o(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select an Animal"}),Object(h.jsx)("option",{value:"Anteater",children:"Anteater"}),Object(h.jsx)("option",{value:"Arctic Fox",children:"Arctic Fox"}),Object(h.jsx)("option",{value:"Bald Eagle",children:"Bald Eagle"}),Object(h.jsx)("option",{value:"Beaver",children:"Beaver"}),Object(h.jsx)("option",{value:"Bison",children:"Bison"}),Object(h.jsx)("option",{value:"Camel",children:"Camel"}),Object(h.jsx)("option",{value:"Chimpanzee",children:"Chimpanzee"}),Object(h.jsx)("option",{value:"Giraffe",children:"Giraffe"}),Object(h.jsx)("option",{value:"Gorilla",children:"Gorilla"}),Object(h.jsx)("option",{value:"Grizzly Bear",children:"Grizzly Bear"}),Object(h.jsx)("option",{value:"Lemur",children:"Lemur"}),Object(h.jsx)("option",{value:"Lion",children:"Lion"}),Object(h.jsx)("option",{value:"Polar Bear",children:"Polar Bear"}),Object(h.jsx)("option",{value:"Prairie dog",children:"Prairie dog"}),Object(h.jsx)("option",{value:"Red Panda",children:"Red Panda"}),Object(h.jsx)("option",{value:"Rhinoceros",children:"Rhinoceros"}),Object(h.jsx)("option",{value:"Sloth",children:"Sloth"}),Object(h.jsx)("option",{value:"Tiger",children:"Tiger"}),Object(h.jsx)("option",{value:"Wolverine",children:"Wolverine"}),Object(h.jsx)("option",{value:"Zebra",children:"Zebra"})]}),Object(h.jsx)("label",{children:"Sex"}),Object(h.jsxs)("select",{id:"Animalgender",onChange:function(e){return v(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("label",{children:"Habitat"}),Object(h.jsxs)("select",{id:"habitat",onChange:function(e){return G(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Habitat"}),Object(h.jsx)("option",{value:"African Grasslands",children:"African Grasslands"}),Object(h.jsx)("option",{value:"American Grasslands",children:"American Grasslands"}),Object(h.jsx)("option",{value:"Arctic",children:"Arctic"}),Object(h.jsx)("option",{value:"Asian Forest",children:"Asian Forest"}),Object(h.jsx)("option",{value:"Great Apes of Harambee",children:"Great Apes of Harambee"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("title",{children:"Table"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Animal Id"}),Object(h.jsx)("th",{children:"Animal Species"}),Object(h.jsx)("th",{children:"Animal Name"}),Object(h.jsx)("th",{children:"Animal Date of Birth"}),Object(h.jsx)("th",{children:"Animal Gender"}),Object(h.jsx)("th",{children:"Animal Habitat"})]})})]})}n(67);function v(){var e=Object(u.f)();return Object(h.jsx)("div",{className:"EmployeeNavBar",children:Object(h.jsxs)("header",{children:[Object(h.jsx)(b.a,{className:"Home",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/EmployeeMain"),window.location.reload()},children:"Home"}),Object(h.jsx)(b.a,{className:"Add Animal",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AddAnimal"),window.location.reload()},children:"Add New Animal"}),Object(h.jsx)(b.a,{className:"Add Employee",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AddEmployee"),window.location.reload()},children:"Add New Employee"}),Object(h.jsx)(b.a,{className:"Add Revenue",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AddRevenue"),window.location.reload()},children:"Add New Revenue"}),Object(h.jsx)(b.a,{className:"Animals",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AnimalsEmployee"),window.location.reload()},children:"Animals Report"}),Object(h.jsx)(b.a,{className:"Employees",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/Employees"),window.location.reload()},children:"Employees"})]})})}n(68);function S(){Object(u.f)();var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),d=j[0],b=j[1],p=Object(a.useState)(""),O=Object(m.a)(p,2),x=O[0],f=O[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],E=Object(a.useState)(""),N=Object(m.a)(E,2),w=N[0],G=N[1],B=Object(a.useState)([]),D=Object(m.a)(B,2),P=D[0];D[1];function F(e,t,n,a,l,c){var i=e,r=t,o=n,s=a,j=l,d=c;0===i.length&&(i=""),0===r.length&&(r=""),0===o.length&&(o=""),0===s.length&&(s=""),0===j.length&&(j=""),0===d.length&&(d=""),g.a.get("/api/auth/getAnimals").then((function(e){return console.log(e)})),console.log(P)}return Object(h.jsxs)("div",{className:"Animals",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter the Animal Information for Report"}),Object(h.jsxs)("form",{class:"animals",id:"animalsform",onSubmit:function(e){e.preventDefault(),F(n,r,A,d,x,w)},children:[Object(h.jsx)("label",{children:"Animal Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Identification Number",id:"Animalid",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Animal Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal's Name Here",id:"Animalname",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"date",placeholder:"12/31/2000",id:"Animaldob",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Species"}),Object(h.jsxs)("select",{id:"Animalspecies",onChange:function(e){return o(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select an Animal"}),Object(h.jsx)("option",{value:"Anteater",children:"Anteater"}),Object(h.jsx)("option",{value:"Arctic Fox",children:"Arctic Fox"}),Object(h.jsx)("option",{value:"Bald Eagle",children:"Bald Eagle"}),Object(h.jsx)("option",{value:"Beaver",children:"Beaver"}),Object(h.jsx)("option",{value:"Bison",children:"Bison"}),Object(h.jsx)("option",{value:"Camel",children:"Camel"}),Object(h.jsx)("option",{value:"Chimpanzee",children:"Chimpanzee"}),Object(h.jsx)("option",{value:"Giraffe",children:"Giraffe"}),Object(h.jsx)("option",{value:"Gorilla",children:"Gorilla"}),Object(h.jsx)("option",{value:"Grizzly Bear",children:"Grizzly Bear"}),Object(h.jsx)("option",{value:"Lemur",children:"Lemur"}),Object(h.jsx)("option",{value:"Lion",children:"Lion"}),Object(h.jsx)("option",{value:"Polar Bear",children:"Polar Bear"}),Object(h.jsx)("option",{value:"Prairie dog",children:"Prairie dog"}),Object(h.jsx)("option",{value:"Red Panda",children:"Red Panda"}),Object(h.jsx)("option",{value:"Rhinoceros",children:"Rhinoceros"}),Object(h.jsx)("option",{value:"Sloth",children:"Sloth"}),Object(h.jsx)("option",{value:"Tiger",children:"Tiger"}),Object(h.jsx)("option",{value:"Wolverine",children:"Wolverine"}),Object(h.jsx)("option",{value:"Zebra",children:"Zebra"})]}),Object(h.jsx)("label",{children:"Sex"}),Object(h.jsxs)("select",{id:"Animalgender",onChange:function(e){return f(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("label",{children:"Habitat"}),Object(h.jsxs)("select",{id:"habitat",onChange:function(e){return G(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Habitat"}),Object(h.jsx)("option",{value:"African Grasslands",children:"African Grasslands"}),Object(h.jsx)("option",{value:"American Grasslands",children:"American Grasslands"}),Object(h.jsx)("option",{value:"Arctic",children:"Arctic"}),Object(h.jsx)("option",{value:"Asian Forest",children:"Asian Forest"}),Object(h.jsx)("option",{value:"Great Apes of Harambee",children:"Great Apes of Harambee"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("title",{children:"Table"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Animal Id"}),Object(h.jsx)("th",{children:"Animal Species"}),Object(h.jsx)("th",{children:"Animal Name"}),Object(h.jsx)("th",{children:"Animal Date of Birth"}),Object(h.jsx)("th",{children:"Animal Gender"}),Object(h.jsx)("th",{children:"Animal Habitat"})]})})]})}n(69);function y(){Object(u.f)();var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=(t[0],t[1]),l=Object(a.useState)(""),c=Object(m.a)(l,2),i=(c[0],c[1]),r=Object(a.useState)(""),o=Object(m.a)(r,2),s=(o[0],o[1]),j=Object(a.useState)(""),d=Object(m.a)(j,2),b=(d[0],d[1]),p=Object(a.useState)(""),O=Object(m.a)(p,2),x=(O[0],O[1]),g=Object(a.useState)(""),f=Object(m.a)(g,2),S=(f[0],f[1]),y=Object(a.useState)(""),A=Object(m.a)(y,2),C=(A[0],A[1]),E=Object(a.useState)(""),N=Object(m.a)(E,2),w=(N[0],N[1]),G=Object(a.useState)(""),B=Object(m.a)(G,2),D=(B[0],B[1]),P=Object(a.useState)(""),F=Object(m.a)(P,2),I=(F[0],F[1]),k=Object(a.useState)(""),R=Object(m.a)(k,2),M=(R[0],R[1]);return Object(h.jsxs)("div",{className:"Employees",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter Employee Information"}),Object(h.jsxs)("form",{class:"employee",id:"employeesinfo",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("input",{type:"text",placeholder:"John",id:"employeeFirstName",onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Snow",id:"employeeLastName",onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"text",placeholder:"12/31/2000",id:"employeeDOB",onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("label",{children:"Gender"}),Object(h.jsxs)("select",{id:"employeeGender",onChange:function(e){return b(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"}),Object(h.jsx)("option",{value:"Other",children:"Other"})]}),Object(h.jsx)("label",{children:"Salary"}),Object(h.jsx)("input",{type:"text",placeholder:"15.00",id:"employeeSalary",onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("label",{children:"Department"}),Object(h.jsxs)("select",{id:"department",onChange:function(e){return S(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Department"}),Object(h.jsx)("option",{value:"Zoo Keeper",children:"Zoo Keeper"}),Object(h.jsx)("option",{value:"Restaraunt Staff",children:"Restaraunt Staff"}),Object(h.jsx)("option",{value:"Gift Shop Staff",children:"Gift Shop Staff"}),Object(h.jsx)("option",{value:"Food Stalls",children:"Food Stalls"}),Object(h.jsx)("option",{value:"Veterinarian",children:"Veterinarian"}),Object(h.jsx)("option",{value:"Registrar",children:"Registrar"}),Object(h.jsx)("option",{value:"Curator",children:"Curator"}),Object(h.jsx)("option",{value:"Maintenance",children:"Maintnance"}),Object(h.jsx)("option",{value:"Marketing",children:"Marketing"}),Object(h.jsx)("option",{value:"Visitor Services",children:"Visitor Services"}),Object(h.jsx)("option",{value:"Janitorial",children:"Janitorial"}),Object(h.jsx)("option",{value:"Membership Director",children:"Membership Director"}),Object(h.jsx)("option",{value:"Volunteer",children:"Volunteer"})]}),Object(h.jsx)("label",{children:"Contact Information"}),Object(h.jsx)("input",{type:"text",placeholder:"713-000-0000",id:"employeeContactInfo",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Social Security Number"}),Object(h.jsx)("input",{type:"text",placeholder:"000-00-0000",id:"employeeSSN",onChange:function(e){return w(e.target.value)}}),Object(h.jsx)("label",{children:"Supervisor ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeSupervisorId",onChange:function(e){return D(e.target.value)}}),Object(h.jsx)("label",{children:"Employee ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeid",onChange:function(e){return I(e.target.value)}}),Object(h.jsx)("label",{children:"New Employee Password"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter a Password",id:"employeepassword",onChange:function(e){return M(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("title",{children:"Employee Table"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"First Name"}),Object(h.jsx)("th",{children:"Last Name Name"}),Object(h.jsx)("th",{children:"Date of Birth"}),Object(h.jsx)("th",{children:"Gender"}),Object(h.jsx)("th",{children:"Salary"}),Object(h.jsx)("th",{children:"Department"}),Object(h.jsx)("th",{children:"Contact Information"}),Object(h.jsx)("th",{children:"SSN"}),Object(h.jsx)("th",{children:"Supervisor Id"}),Object(h.jsx)("th",{children:"Id"})]})})]})}n(70);function A(){var e,t=Object(a.useState)(""),n=Object(m.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),r=Object(m.a)(i,2),o=r[0],s=r[1],j=Object(a.useState)(""),d=Object(m.a)(j,2),b=d[0],p=d[1],O=Object(a.useState)(""),x=Object(m.a)(O,2),f=x[0],S=x[1],y=Object(a.useState)(""),A=Object(m.a)(y,2),C=A[0],E=A[1],N=Object(u.f)();return Object(h.jsxs)("div",{class:"AnimalForm",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter New Animal Information"}),Object(h.jsxs)("form",{class:"animalform",id:"animalinfo",onSubmit:function(t){t.preventDefault(),e="Rhinoceros"===o||"Lion"===o||"Zebra"===o||"Giraffe"===o||"Sloth"===o?"African Grasslands":"Wolverine"===o||"Anteater"===o||"Bison"===o||"Beaver"===o||"Grizzly Bear"===o||"Prairie dog"===o||"Bald Eagle"===o?"American Grasslands":"Arctic",l>0&&C.length>0&&10===b.length&&""!==o&&""!==f?(!function(e,t,n,a,l,c){g.a.post("/api/auth/addanimal",{AnimalId:e,Species:t,AnimalDOB:a,AnimalGender:l,AnimalName:n,Habitat:c}).then((function(e){return e.data}))}(l,o,C,b,f,e),N.push("/AnimalAdded")):0===l.length?alert("You must enter an Id!"):5!=l.length?alert("Animal Id must be 5 numbers long!"):0===C.length?alert("You must enter a name!"):0===b.length?alert("You must enter a date of birth"):""===o?alert("Select an Animal!"):""===f?alert("Select the Gender!"):alert("Make sure to fill all information for the animal!")},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Animal Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Identification",id:"AnimalID",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Animal Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Animal Name",id:"AnimalName",onChange:function(e){return E(e.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"date",placeholder:"12/31/2000",id:"AnimalDOB",onChange:function(e){return p(e.target.value)}})]}),Object(h.jsx)("label",{children:"Species"}),Object(h.jsxs)("select",{id:"Species",onChange:function(e){return s(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select an Animal"}),Object(h.jsx)("option",{value:"Anteater",children:"Anteater"}),Object(h.jsx)("option",{value:"Arctic Fox",children:"Arctic Fox"}),Object(h.jsx)("option",{value:"Bald Eagle",children:"Bald Eagle"}),Object(h.jsx)("option",{value:"Beaver",children:"Beaver"}),Object(h.jsx)("option",{value:"Bison",children:"Bison"}),Object(h.jsx)("option",{value:"Camel",children:"Camel"}),Object(h.jsx)("option",{value:"Chimpanzee",children:"Chimpanzee"}),Object(h.jsx)("option",{value:"Giraffe",children:"Giraffe"}),Object(h.jsx)("option",{value:"Gorilla",children:"Gorilla"}),Object(h.jsx)("option",{value:"Grizzly Bear",children:"Grizzly Bear"}),Object(h.jsx)("option",{value:"Lemur",children:"Lemur"}),Object(h.jsx)("option",{value:"Lion",children:"Lion"}),Object(h.jsx)("option",{value:"Polar Bear",children:"Polar Bear"}),Object(h.jsx)("option",{value:"Prairie dog",children:"Prairie dog"}),Object(h.jsx)("option",{value:"Red Panda",children:"Red Panda"}),Object(h.jsx)("option",{value:"Rhinoceros",children:"Rhinoceros"}),Object(h.jsx)("option",{value:"Sloth",children:"Sloth"}),Object(h.jsx)("option",{value:"Tiger",children:"Tiger"}),Object(h.jsx)("option",{value:"Wolverine",children:"Wolverine"}),Object(h.jsx)("option",{value:"Zebra",children:"Zebra"})]}),Object(h.jsx)("label",{children:"Sex"}),Object(h.jsxs)("select",{id:"AnimalGender",onChange:function(e){return S(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})}n(71);function C(){return Object(h.jsxs)("div",{class:"AnimalAdded",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Animal Successfully Added"})]})}n(72);function E(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),d=j[0],b=j[1],p=Object(a.useState)(""),O=Object(m.a)(p,2),x=O[0],f=O[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],E=Object(a.useState)(""),N=Object(m.a)(E,2),w=N[0],G=N[1],B=Object(a.useState)(""),D=Object(m.a)(B,2),P=D[0],F=D[1],I=Object(a.useState)(""),k=Object(m.a)(I,2),R=k[0],M=k[1],L=Object(a.useState)(""),z=Object(m.a)(L,2),H=z[0],T=z[1],Y=Object(a.useState)(""),Z=Object(m.a)(Y,2),U=Z[0],V=Z[1],J=Object(a.useState)(""),W=Object(m.a)(J,2),K=W[0],q=W[1],Q=Object(u.f)();return Object(h.jsxs)("div",{class:"EmployeeForm",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter New Employee Information"}),Object(h.jsxs)("form",{class:"employeeform",id:"employeeinfo",onSubmit:function(e){alert("Adding employee!"),e.preventDefault(),n.length>0&&r.length>0&&10===d.length&&""!==x&&5===A.length&&""!==w&&11===R.length&&12===P.length&&5===H.length&&0!==U.length&&0!==K.length?(!function(e,t,n,a,l,c,i,r,o,s,j){g.a.post("/api/auth/addemployee",{EmployeeFirstName:e,EmployeeLastName:t,EmployeeDOB:n,EmployeeGender:a,EmployeeSalary:l,EmployeeDepartment:c,EmployeeContactInfo:i,EmployeeSSN:r,EmployeeSupervisorId:o,EmployeeId:s,EmployeePassword:j}).then((function(e){return e.data}))}(n,r,d,x,A,w,P,R,H,U,K),Q.push("/EmployeeAdded")):0===n.length?alert("You must enter a First name!"):0===r.length?alert("You must enter a Last name!"):0===d.length?alert("You must enter a date of birth"):!1===function(){for(var e=0,t=!1,n=0;n<d.length;n++)"/"===d[n]&&e++;return 2===e?(t=!0,Boolean(t)):(t=!1,Boolean(t))}()?alert("Date of birth has been entered incorrectly!"):10!==d.length?alert("Date of Birth has not been filled!"):""===x?alert("Select the Gender!"):""===A?alert("Salary must be filled!"):5!==A.length?alert("Salary entered wrong!"):""===w?alert("Select the Department!"):12!==P.length?alert("Contact Information entered wrong!"):""===R.length?alert("Social Security Number must be filled out!"):11!==R.length?alert("Social Security Number not filled out Correctly!"):0===H.length?alert("Supervisor ID must be filled!"):5!==H.length?alert("Supervisor ID must be Five Characters long!"):5!==U.length?alert("Employee ID must be Five Characters long!"):0===K.length?alert("You must enter a Password!"):K.length>100&&alert("Password is too long, must be less than 100 Characters!")},children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("input",{type:"text",placeholder:"John",id:"employeeFirstName",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Snow",id:"employeeLastName",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Date of Birth"}),Object(h.jsx)("input",{type:"text",placeholder:"12/31/2000",id:"employeeDOB",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Gender"}),Object(h.jsxs)("select",{id:"employeeGender",onChange:function(e){return f(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"}),Object(h.jsx)("option",{value:"Other",children:"Other"})]}),Object(h.jsx)("label",{children:"Salary"}),Object(h.jsx)("input",{type:"text",placeholder:"15.00",id:"employeeSalary",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("label",{children:"Department"}),Object(h.jsxs)("select",{id:"department",onChange:function(e){return G(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Select Department"}),Object(h.jsx)("option",{value:"Zoo Keeper",children:"Zoo Keeper"}),Object(h.jsx)("option",{value:"Restaraunt Staff",children:"Restaraunt Staff"}),Object(h.jsx)("option",{value:"Gift Shop Staff",children:"Gift Shop Staff"}),Object(h.jsx)("option",{value:"Food Stalls",children:"Food Stalls"}),Object(h.jsx)("option",{value:"Veterinarian",children:"Veterinarian"}),Object(h.jsx)("option",{value:"Registrar",children:"Registrar"}),Object(h.jsx)("option",{value:"Curator",children:"Curator"}),Object(h.jsx)("option",{value:"Maintenance",children:"Maintnance"}),Object(h.jsx)("option",{value:"Marketing",children:"Marketing"}),Object(h.jsx)("option",{value:"Visitor Services",children:"Visitor Services"}),Object(h.jsx)("option",{value:"Janitorial",children:"Janitorial"}),Object(h.jsx)("option",{value:"Membership Director",children:"Membership Director"}),Object(h.jsx)("option",{value:"Volunteer",children:"Volunteer"})]}),Object(h.jsx)("label",{children:"Contact Information"}),Object(h.jsx)("input",{type:"text",placeholder:"713-000-0000",id:"employeeContactInfo",onChange:function(e){return F(e.target.value)}}),Object(h.jsx)("label",{children:"Social Security Number"}),Object(h.jsx)("input",{type:"text",placeholder:"000-00-0000",id:"employeeSSN",onChange:function(e){return M(e.target.value)}}),Object(h.jsx)("label",{children:"Supervisor ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeSupervisorId",onChange:function(e){return T(e.target.value)}}),Object(h.jsx)("label",{children:"Employee ID"}),Object(h.jsx)("input",{type:"text",placeholder:"12345",id:"employeeid",onChange:function(e){return V(e.target.value)}}),Object(h.jsx)("label",{children:"New Employee Password"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter a Password",id:"employeepassword",onChange:function(e){return q(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})}n(73);function N(){return Object(h.jsxs)("div",{class:"EmployeeAdded",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Employee Successfully Added"})]})}function w(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),d=j[0],O=j[1],x=Object(a.useState)(""),f=Object(m.a)(x,2),v=f[0],S=f[1],y=Object(u.f)();return Object(h.jsxs)("div",{className:"SignUp",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsxs)("form",{className:"SignupForm",id:"signupform",onSubmit:function(e){e.preventDefault(),n.length>0&&r.length>0&&d.length>0&&d===v?function(e,t,n){return g.a.post("/api/auth/signup",{Email:e,Username:t,Password:n}).then((function(e){return e.data}))}(n,r,d).then((function(){y.push("/Main"),alert("Successfully Registered!")}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();alert(t)})):0===n.length?alert("You must enter an Email!"):0===r.length?alert("You must enter a Username!"):0===d.length?alert("You must enter a Password!"):0===v.length?alert("You must reenter your Password!"):d!==v&&alert("Passwords do not match!")},children:[Object(h.jsx)("label",{children:"Enter your Email Address"}),Object(h.jsx)("input",{type:"text",placeholder:"Email Address Here",id:"email",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Enter your Username"}),Object(h.jsx)("input",{type:"text",placeholder:"Username Here",id:"username",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Enter your Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Password Here",id:"password",onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("label",{children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Enter Your Password Again Here",id:"confirmpassword",onChange:function(e){return S(e.target.value)}}),Object(h.jsx)(b.a,{className:"register",block:!0,size:"lg",type:"submit",children:"Sign Up"})]})]})}n(74);function G(){var e=Object(u.f)();return Object(h.jsx)("div",{className:"NavBar",children:Object(h.jsxs)("header",{children:[Object(h.jsx)(b.a,{className:"Main Page",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/UserMain"),window.location.reload()},children:"Home"}),Object(h.jsx)(b.a,{className:"Animals",block:!0,size:"lg",type:"submit",onClick:function(t){e.push("/AnimalsPage"),window.location.reload()},children:"Animals"})]})})}function B(){return Object(h.jsxs)("div",{className:"UserMain",children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{children:"Welcome to the Group 14 Zoo"})]})}n(75);function D(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(u.f)();return Object(h.jsxs)("div",{className:"Login",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{class:"LoginForm",id:"loginform",onSubmit:function(e){e.preventDefault(),function(e,t){return g.a.post("/api/auth/login",{Username:e,Password:t}).then((function(e){return e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),localStorage.setItem("formData","No Data"),localStorage.setItem("address","No Address")),e.data}))}(n,r).then((function(){s.push("/UserMain")}),(function(e){e.response&&e.response.data&&e.response.data.message||e.message||e.toString();alert(e.response.data.message)}))},children:[Object(h.jsx)("label",{children:"Enter Username"}),Object(h.jsx)("input",{type:"text",placeholder:"Username",id:"username",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Enter Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Password",id:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(b.a,{className:"login",block:!0,size:"lg",type:"submit",disabled:!function(){return n.length>0&&r.length>0},children:"Login"})]})]})}n(76);function P(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(u.f)();return Object(h.jsxs)("div",{className:"EmployeeLogin",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{class:"EmployeeLoginForm",id:"Employeeloginform",onSubmit:function(e){e.preventDefault(),function(e,t){return g.a.post("/api/auth/employeesignin",{EmployeeID:e,EmployeePassword:t}).then((function(e){return e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),localStorage.setItem("formData","No Data"),localStorage.setItem("address","No Address")),e.data}))}(n,r).then((function(){s.push("/EmployeeMain")}),(function(e){e.response&&e.response.data&&e.response.data.message||e.message||e.toString();alert(e.response.data.message)}))},children:[Object(h.jsx)("label",{children:"Enter Employee Id"}),Object(h.jsx)("input",{type:"text",placeholder:"Id",id:"employeeid",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Enter Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Password",id:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Login"})]})]})}function F(){return Object(h.jsxs)("div",{className:"EmployeeMain",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Employee Access for Zoo"})]})}n(77);function I(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(""),j=Object(m.a)(s,2),d=j[0],b=j[1],p=Object(a.useState)(""),O=Object(m.a)(p,2),x=O[0],f=O[1],S=Object(a.useState)(""),y=Object(m.a)(S,2),A=y[0],C=y[1],E=Object(a.useState)(""),N=Object(m.a)(E,2),w=N[0],G=N[1],B=Object(u.f)();return Object(h.jsxs)("div",{class:"RevenueForm",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Enter Revenue Information"}),Object(h.jsxs)("form",{class:"revenueForm",id:"revenueinfo",onSubmit:function(e){e.preventDefault(),n.length>0&&r.length>0&&d.length>0&&x.length>0&&A.length>0?(G(function(e,t,n,a){var l=0;return l+(+e+ +t+ +n+ +a)}(n,r,d,x)),function(e,t,n,a,l,c){g.a.post("/api/auth/addrevenue",{TicketSales:e,GiftShopSales:t,RestaurantSales:n,FoodStallSales:a,Date:l,TotalSales:c}).then((function(e){return e.data}))}(n,r,d,x,A,w),B.push("/RevenueAdded")):0===n.length?alert("You must enter an amount for Ticket Sales!"):0===r.length?alert("You must enter an amount for Gift Shop Sales!"):0===d.length?alert("You must enter an amount for Restaurant Sales!"):0===x.length?alert("You must enter an amount for Food Stall Sales!"):0===A.length?alert("You must enter a Date!"):10!==A.length?alert("Date is too long, must be 10 characters!"):0===w.length&&alert("Total is Zero Dollars!")},children:[Object(h.jsx)("label",{children:"Ticket Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Ticket Sales",id:"TicketSales",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("label",{children:"Gift Shop Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Gift Shop Sales",id:"GiftShopSales",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Restaurant Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Restaurant Sales",id:"RestaurantSales",onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{children:"Food Stall Sales"}),Object(h.jsx)("input",{type:"number",step:"0.01",min:"0",placeholder:"Food Stall Sales",id:"FoodstallSales",onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("label",{children:"Date"}),Object(h.jsx)("input",{type:"date",placeholder:"mm/dd/yyyy",id:"Date",onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})}n(78);function k(){return Object(h.jsxs)("div",{class:"RevenueAdded",children:[Object(h.jsx)(v,{}),Object(h.jsx)("h1",{children:"Revenue Successfully Added"})]})}n(28);function R(){return Object(h.jsxs)("div",{class:"AnimalPage",children:[Object(h.jsxs)("div",{className:"AnimalsPage",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Animals in our Zoo"})]}),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("var",{children:"Elephant"})}),Object(h.jsx)("p",{children:Object(h.jsx)("var",{children:"Big boy"})})]})]})}function M(){return Object(h.jsxs)("div",{class:"TheEmployeePage",children:[Object(h.jsxs)("div",{className:"EmployeePage",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{children:"Employees"})]}),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("var",{children:"John Doe"})}),Object(h.jsx)("p",{children:Object(h.jsx)("var",{children:"Zookeeper"})})]})]})}var L=function(e){Object(s.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(d.a,{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:O}),Object(h.jsx)(u.a,{exact:!0,path:"/Animals",component:f}),Object(h.jsx)(u.a,{exact:!0,path:"/Employees",component:y}),Object(h.jsx)(u.a,{exact:!0,path:"/AddAnimal",component:A}),Object(h.jsx)(u.a,{exact:!0,path:"/AnimalAdded",component:C}),Object(h.jsx)(u.a,{exact:!0,path:"/RevenueAdded",component:k}),Object(h.jsx)(u.a,{exact:!0,path:"/AddEmployee",component:E}),Object(h.jsx)(u.a,{exact:!0,path:"/EmployeeAdded",component:N}),Object(h.jsx)(u.a,{exact:!0,path:"/Main",component:O}),Object(h.jsx)(u.a,{exact:!0,path:"/SignUp",component:w}),Object(h.jsx)(u.a,{exact:!0,path:"/UserMain",component:B}),Object(h.jsx)(u.a,{exact:!0,path:"/Login",component:D}),Object(h.jsx)(u.a,{exact:!0,path:"/EmployeeLogin",component:P}),Object(h.jsx)(u.a,{exact:!0,path:"/EmployeeMain",component:F}),Object(h.jsx)(u.a,{exact:!0,path:"/AddRevenue",component:I}),Object(h.jsx)(u.a,{exact:!0,path:"/AnimalsPage",component:R}),Object(h.jsx)(u.a,{exact:!0,path:"/EmployeePage",component:M}),Object(h.jsx)(u.a,{exact:!0,path:"/AnimalsEmployee",component:S})]})})}}]),n}(a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),l(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),z()}},[[79,1,2]]]);
//# sourceMappingURL=main.6207e5b1.chunk.js.map