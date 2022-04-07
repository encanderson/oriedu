"use strict";(self.webpackChunkoriedu=self.webpackChunkoriedu||[]).push([[728],{9728:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(2791),i=t(4807),a=t(4942),o=t(3366),c=t(7462),l=t(6086),s=t(9908),d=t(6247),u=t(1534),m=t(1754),p=t(8186),h=t(184);function x(e,n){var t=r.Children.toArray(e).filter(Boolean);return t.reduce((function(e,i,a){return e.push(i),a<t.length-1&&e.push(r.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}function g(e){var n,t=e.values,r=e.base,i=Object.keys(r);return 0===i.length?t:i.reduce((function(e,r){return e[r]="object"===typeof t?null!=t[r]?t[r]:t[n]:t,n=r,e}),{})}var f=(0,m.ZP)("div",{},{name:"Stack"})((function(e){var n=e.styleProps,t=e.theme,r=(0,c.Z)({display:"flex"},(0,l.k9)({theme:t},n.direction,(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,s.hB)(t),o=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),d=g({values:n.direction,base:o}),m=g({values:n.spacing,base:o});r=(0,u.Z)(r,(0,l.k9)({theme:t},m,(function(e,t){return{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((r=t?d[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,s.NA)(i,e))};var r})))}return r})),v=r.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiStack"}),r=(0,d.Z)(t),i=r.component,a=void 0===i?"div":i,l=r.direction,s=void 0===l?"column":l,u=r.spacing,m=void 0===u?0:u,g=r.divider,v=r.children,Z=(0,o.Z)(r,["component","direction","spacing","divider","children"]),j={direction:s,spacing:m};return(0,h.jsx)(f,(0,c.Z)({as:a,styleProps:j,ref:n},Z,{children:g?x(v,g):v}))})),Z=v,j=t(6574),y=t(9426),b=t(5477),k=t(8087),C=(0,m.ZP)("div")((function(e){var n=e.theme;return{display:"flex",backgroundColor:"dark"===n.palette.mode?n.palette.background.default:n.palette.primary.light,height:"100%",minHeight:"100vh",width:"100%",maxWidth:"calc(100% + 16px)"}})),w=t(1413),I=t(5987),W=t(6931),N=t(5789),B=["children"],S=(0,W.Z)((function(e){var n;return{card:(n={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},(0,a.Z)(n,e.breakpoints.down("sm"),{margin:"20px"}),(0,a.Z)(n,e.breakpoints.down("lg"),{maxWidth:"400px"}),n),content:(0,a.Z)({padding:e.spacing(5)+" !important"},e.breakpoints.down("lg"),{padding:e.spacing(3)+" !important"})}})),E=function(e){var n=e.children,t=(0,I.Z)(e,B),r=S();return(0,h.jsx)(N.Z,(0,w.Z)((0,w.Z)({className:r.card,contentClass:r.content},t),{},{children:n}))},O=t(5861),P=t(885),z=t(7757),A=t.n(z),H=t(6789),R=t(9271),D=t(3667),F=t(93),G=t(4872),L=t(7834),M=t(9673),T=(0,W.Z)((function(e){return{loginInput:(0,w.Z)((0,w.Z)({},e.typography.customInput),{},{"& > div > input":(0,a.Z)({padding:"16px !important",textAlign:"center"},e.breakpoints.down("sm"),{padding:"12px !important"})})}})),U=function(){var e=T(),n=(0,L.Z)().signIn,t=(0,R.UO)().token,i=(0,H.I0)(),o=r.useState({code1:"",code2:"",code3:"",code4:"",code5:"",code6:""}),c=(0,P.Z)(o,2),l=c[0],s=c[1],d=function(e,n){e.target.value.length<2&&(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&s((0,w.Z)((0,w.Z)({},l),{},(0,a.Z)({},n,e.target.value)))};function u(){return(u=(0,O.Z)(A().mark((function e(){var r,a;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.code1+l.code2+l.code3+l.code4+l.code5+l.code6,e.next=3,n(r,t);case 3:(a=e.sent)&&i({type:M.on,open:!0,message:a,variant:"alert",anchorOrigin:{vertical:"top",horizontal:"center"},alertSeverity:"error",close:!1});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)(y.Z,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:2,children:[(0,h.jsx)(y.Z,{item:!0,xs:2,children:(0,h.jsx)(D.Z,{fullWidth:!0,margin:"normal",name:"fname1",type:"text",value:l.code1,variant:"outlined",className:e.loginInput,placeholder:"9",onChange:function(e){return d(e,"code1")}})}),(0,h.jsx)(y.Z,{item:!0,xs:2,children:(0,h.jsx)(D.Z,{fullWidth:!0,margin:"normal",name:"fname2",type:"text",value:l.code2,variant:"outlined",className:e.loginInput,placeholder:"9",onChange:function(e){return d(e,"code2")}})}),(0,h.jsx)(y.Z,{item:!0,xs:2,children:(0,h.jsx)(D.Z,{fullWidth:!0,margin:"normal",name:"fname3",type:"text",value:l.code3,variant:"outlined",className:e.loginInput,placeholder:"9",onChange:function(e){return d(e,"code3")}})}),(0,h.jsx)(y.Z,{item:!0,xs:2,children:(0,h.jsx)(D.Z,{fullWidth:!0,margin:"normal",name:"fname4",type:"text",value:l.code4,variant:"outlined",className:e.loginInput,placeholder:"9",onChange:function(e){return d(e,"code4")}})}),(0,h.jsx)(y.Z,{item:!0,xs:2,children:(0,h.jsx)(D.Z,{fullWidth:!0,margin:"normal",name:"fname5",type:"text",value:l.code5,variant:"outlined",className:e.loginInput,placeholder:"9",onChange:function(e){return d(e,"code5")}})}),(0,h.jsx)(y.Z,{item:!0,xs:2,children:(0,h.jsx)(D.Z,{fullWidth:!0,margin:"normal",name:"fname6",type:"text",value:l.code6,variant:"outlined",className:e.loginInput,placeholder:"9",onChange:function(e){return d(e,"code6")}})})]}),(0,h.jsx)(F.Z,{mt:2,children:(0,h.jsx)(G.Z,{disableElevation:!0,fullWidth:!0,size:"large",type:"button",onClick:function(){return u.apply(this,arguments)},variant:"contained",color:"secondary",children:"Continuar"})})]})},V=function(){var e=(0,i.Z)(),n=(0,j.Z)(e.breakpoints.down("sm"));return(0,h.jsx)(C,{children:(0,h.jsx)(y.Z,{container:!0,justifyContent:n?"center":"space-between",alignItems:"flex-start",children:(0,h.jsx)(y.Z,{item:!0,xs:12,sx:{minHeight:"100vh",height:"100%"},children:(0,h.jsxs)(y.Z,{sx:{minHeight:"100vh",height:"100%",p:n?0:"0 80px"},container:!0,direction:"column",alignItems:n?"center":"flex-start",spacing:n?3:6,justifyContent:n?"center":"space-between",children:[(0,h.jsx)(y.Z,{item:!0}),(0,h.jsx)(y.Z,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",children:(0,h.jsx)(E,{children:(0,h.jsxs)(y.Z,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,h.jsx)(y.Z,{item:!0,xs:12,children:(0,h.jsx)(y.Z,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,h.jsx)(y.Z,{item:!0,children:(0,h.jsxs)(Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,h.jsx)(b.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Insira o C\xf3digo de Verifica\xe7\xe3o"}),(0,h.jsx)(b.Z,{variant:"subtitle1",fontSize:"1rem",children:"Enviado por Email."})]})})})}),(0,h.jsx)(y.Z,{item:!0,xs:12,children:(0,h.jsx)(U,{})}),(0,h.jsx)(y.Z,{item:!0,xs:12,children:(0,h.jsx)(k.Z,{})})]})})})]})})})})}}}]);
//# sourceMappingURL=728.e6fff2ae.chunk.js.map