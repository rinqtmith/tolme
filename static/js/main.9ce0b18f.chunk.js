(this.webpackJsonptolme=this.webpackJsonptolme||[]).push([[0],{162:function(e,a,t){e.exports=t(291)},291:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(35),r=t.n(o),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(167);var s=t(18),u=t(45),v=t(298),d=t(303),m=t(304),h=t(36),f=t(299),b=t(302),w=t(292),g=[{key:1,text:"DIN ISO 2768-1",value:"2768-1"}],p=[{key:1,text:"Limits for linear measures",value:"linear"},{key:2,text:"Limit measures for radius of curvature and chamfer height",value:"radius"},{key:3,text:"Limit dimensions for angular dimensions",value:"angular"}],O=[{key:1,text:"Fine (f)",value:"f"},{key:2,text:"Medium (m)",value:"m"},{key:3,text:"Coarse (c)",value:"c"},{key:4,text:"Very Coarse (v)",value:"v"}],j={"2768-1":{linear:{valueList:[[.5,3],[3,6],[6,30],[30,120],[120,400],[400,1e3],[1e3,2e3],[2e3,4e3]],f:["0,05","0,05","0,1","0,15","0,2","0,3","0,5","-"],m:["0,1","0,1","0,2","0,3","0,5","0,8","1,2","2"],c:["0,15","0,2","0,5","0,8","1,2","2","3","4"],v:["-","0,5","1","1,5","2,5","4","6","8"]},radius:{valueList:[[.5,3],[3,6],[6,4e3]],f:["0,2","0,5","1"],m:["0,2","0,5","1"],c:["0,4","1","2"],v:["0,4","1","2"]},angular:{valueList:[[0,10],[10,50],[50,120],[120,400],[400,4e3]],f:["1\xb0","30'","20'","10'","5'"],m:["1\xb0","30'","20'","10'","5'"],c:["1\xb0 30'","1\xb0","30'","15'","10'"],v:["3\xb0","2\xb0","1\xb0","30'","20'"]}}},y=t(301),k=function(e){var a=e.name,t=e.label,n=e.standard,o=e.handleChanges,r=e.show,c=e.value;return l.a.createElement(y.a,{fluid:!0,search:!0,selection:!0,clearable:!0,selectOnBlur:!1,name:a,placeholder:"Select a ".concat(t,"... "),style:{marginBottom:"1em"},options:n,onChange:function(e,a){return o(e,a)},disabled:!r,value:c})},E=function(){var e=Object(n.useState)({name:"tolStandard",value:"",options:g,label:"tolerance standard",show:!0}),a=Object(u.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({name:"tolType",value:"",options:p,label:"tolerance type",show:!1}),c=Object(u.a)(r,2),i=c[0],y=c[1],E=Object(n.useState)({name:"tolClass",value:"",options:O,label:"tolerance class",show:!1}),S=Object(u.a)(E,2),C=S[0],x=S[1],L=Object(n.useState)(null),W=Object(u.a)(L,2),A=W[0],B=W[1],I=Object(n.useState)(""),T=Object(u.a)(I,2),V=T[0],N=T[1];Object(n.useEffect)((function(){t.value&&!i.show&&y(Object(s.a)(Object(s.a)({},i),{},{show:!0})),!t.value&&i.show&&(y(Object(s.a)(Object(s.a)({},i),{},{value:"",show:!1})),B(null),N("")),i.value&&!C.show&&x(Object(s.a)(Object(s.a)({},C),{},{show:!0})),!i.value&&C.show&&(x(Object(s.a)(Object(s.a)({},C),{},{value:"",show:!1})),B(null),N(""))}),[t,i,C,A]);return l.a.createElement(v.a,{text:!0,fluid:!0},l.a.createElement(d.a,{raised:!0,padded:"very",textAlign:"center",style:{margin:"2em"}},l.a.createElement(m.a,{as:"h1",icon:!0},l.a.createElement(h.a,{name:"sitemap"}),"Tolerance Standards",l.a.createElement(m.a.Subheader,null,"Please select a tolerance standard to start.")),l.a.createElement(v.a,{fluid:!0},l.a.createElement(k,{name:t.name,label:t.label,standard:t.options,handleChanges:function(e,a){var n=a.value;o(Object(s.a)(Object(s.a)({},t),{},{value:n})),B(null),N("")},show:t.show,value:t.value}),l.a.createElement(k,{name:i.name,label:i.label,standard:i.options,handleChanges:function(e,a){var t=a.value;y(Object(s.a)(Object(s.a)({},i),{},{value:t})),B(null),N("")},show:i.show,value:i.value}),l.a.createElement(k,{name:C.name,label:C.label,standard:C.options,handleChanges:function(e,a){var t=a.value;x(Object(s.a)(Object(s.a)({},C),{},{value:t})),B(null),N("")},show:C.show,value:C.value}),l.a.createElement(f.a,{fluid:!0,type:"number",name:"checkValue",disabled:""===C.value||!C.show,style:{marginBottom:"1em"},value:A||"",onChange:function(e){var a=e.target.value;B(a),N("")}})),V&&"Value must be between 0,5 and 4000"!==V?"angular"!==p.value?l.a.createElement(b.a,null,"".concat(A,"\xb1").concat(V)):l.a.createElement(b.a,null,"\xb1".concat(V)):V?l.a.createElement(b.a,null,V):null,l.a.createElement(w.a,{style:{marginBottom:"1em"},disabled:""===C.value||!C.show,onClick:function(){var e=function(e,a,t,n){var l=j[a][t].valueList.findIndex((function(a){return e>a[0]&&e<=a[1]}));return-1===l?"Value must be between 0,5 and 4000":j[a][t][n][l]}(A,t.value,i.value,C.value);N(e)}},"Calculate")))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tolme",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/tolme","/service-worker.js");c?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(a,e)}))}}()}},[[162,1,2]]]);
//# sourceMappingURL=main.9ce0b18f.chunk.js.map