(this.webpackJsonptolme=this.webpackJsonptolme||[]).push([[0],{166:function(e,a,t){e.exports=t(295)},295:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(35),u=t.n(s),r=(t(171),t(44)),o=t(14),c=t(136),i=t(137),h=t(155),d=t(154),m=t(302),v=t(307),b=t(308),O=t(36),f=t(303),j=t(306),p=t(296),y=[{key:1,text:"DIN ISO 2768-1",value:"2768-1"}],w=[{key:1,text:"Limits for linear measures",value:"linear"},{key:2,text:"Limit measures for radius of curvature and chamfer height",value:"radius"},{key:3,text:"Limit dimensions for angular dimensions",value:"angular"}],C=[{key:1,text:"Fine",value:"f"},{key:2,text:"Medium",value:"m"},{key:3,text:"Coarse",value:"c"},{key:4,text:"Very Coarse",value:"v"}],g={"2768-1":{linear:{valueList:[[.5,3],[3,6],[6,30],[30,120],[120,400],[400,1e3],[1e3,2e3],[2e3,4e3]],f:["0,05","0,05","0,1","0,15","0,2","0,3","0,5","-"],m:["0,1","0,1","0,2","0,3","0,5","0,8","1,2","2"],c:["0,15","0,2","0,5","0,8","1,2","2","3","4"],v:["-","0,5","1","1,5","2,5","4","6","8"]},radius:{valueList:[[.5,3],[3,6],[6,4e3]],f:["0,2","0,5","1"],m:["0,2","0,5","1"],c:["0,4","1","2"],v:["0,4","1","2"]},angular:{valueList:[[0,10],[10,50],[50,120],[120,400],[400,4e3]],f:["1\xb0","30'","20'","10'","5'"],m:["1\xb0","30'","20'","10'","5'"],c:["1\xb0 30'","1\xb0","30'","15'","10'"],v:["3\xb0","2\xb0","1\xb0","30'","20'"]}}},S=t(305),k=function(e){var a=e.name,t=e.label,l=e.standard,s=e.handleChanges,u=e.show,r=e.value;return n.a.createElement(S.a,{fluid:!0,search:!0,selection:!0,clearable:!0,selectOnBlur:!1,name:a,placeholder:"Select a ".concat(t,"... "),style:{marginBottom:"1em"},options:l,onChange:function(e,a){return s(e,a)},disabled:!u,value:r})},E=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleChanges=function(a,t){var l=t.name,n=t.value;e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},l,Object(o.a)(Object(o.a)({},e[l]),{},{value:n})))}))},e.handleValueChange=function(a){var t,l=a.target,n=l.name,s=l.value;e.setState(Object(o.a)(Object(o.a)({},e.state),{},(t={},Object(r.a)(t,n,s),Object(r.a)(t,"result",""),t)))},e.handleResult=function(){var a=e.state,t=a.checkValue,l=a.tolStandard,n=a.tolType,s=a.tolClass,u=function(e,a,t,l){var n=g[a][t].valueList.findIndex((function(a){return e>a[0]&&e<=a[1]}));return-1===n?"Value must be between 0,5 and 4000":g[a][t][l][n]}(t,l.value,n.value,s.value);e.setState(Object(o.a)(Object(o.a)({},e.state),{},{result:u}))},e.state={tolStandard:{name:"tolStandard",value:"",options:y,label:"tolerance standard",show:!0},tolType:{name:"tolType",value:"",options:w,label:"tolerance type",show:!1},tolClass:{name:"tolClass",value:"",options:C,label:"tolerance class",show:!1},checkValue:null,result:""},e}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state,a=e.tolStandard,t=e.tolType,l=e.tolClass,n=e.result;""===a.value&&t.show&&this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{tolType:Object(o.a)(Object(o.a)({},t),{},{value:"",show:!1}),result:""})})),""===a.value||t.show||this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{tolType:Object(o.a)(Object(o.a)({},t),{},{show:!0}),result:""})})),""===t.value&&l.show&&this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{tolClass:Object(o.a)(Object(o.a)({},l),{},{value:"",show:!1}),result:""})})),""===t.value||l.show||this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{tolClass:Object(o.a)(Object(o.a)({},l),{},{show:!0}),result:""})})),""===l.value&&n&&this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{result:""})}))}},{key:"render",value:function(){var e=this.state,a=e.tolStandard,t=e.tolType,l=e.tolClass,s=e.checkValue,u=e.result;return n.a.createElement(m.a,{text:!0,fluid:!0},n.a.createElement(v.a,{raised:!0,padded:"very",textAlign:"center",style:{margin:"2em"}},n.a.createElement(b.a,{as:"h1",icon:!0},n.a.createElement(O.a,{name:"sitemap"}),"Tolerance Standards",n.a.createElement(b.a.Subheader,null,"Please select a tolerance standard to start.")),n.a.createElement(m.a,{fluid:!0},n.a.createElement(k,{name:a.name,label:a.label,standard:a.options,handleChanges:this.handleChanges,show:a.show,value:a.value}),n.a.createElement(k,{name:t.name,label:t.label,standard:t.options,handleChanges:this.handleChanges,show:t.show,value:t.value}),n.a.createElement(k,{name:l.name,label:l.label,standard:l.options,handleChanges:this.handleChanges,show:l.show,value:l.value}),n.a.createElement(f.a,{fluid:!0,type:"number",name:"checkValue",disabled:""===l.value||!l.show,style:{marginBottom:"1em"},value:s||"",onChange:this.handleValueChange})),u&&"Value must be between 0,5 and 4000"!==u?n.a.createElement(j.a,null,"".concat(s,"\xb1").concat(u)):u?n.a.createElement(j.a,null,u):null,n.a.createElement(p.a,{style:{marginBottom:"1em"},disabled:""===l.value||!l.show,onClick:this.handleResult},"Calculate")))}}]),t}(n.a.Component);u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.a59e2762.chunk.js.map