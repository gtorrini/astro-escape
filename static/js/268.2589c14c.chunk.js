"use strict";(self.webpackChunkastro_escape=self.webpackChunkastro_escape||[]).push([[268],{6278:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2791),i=n(4554),l=n(890),s=n(8715),d=n(184);function o(e){var t=(0,r.useContext)(s.R);return(0,d.jsxs)(i.Z,{sx:{maxWidth:t<=650?"95%":"60%",mx:"auto",my:5},children:[(0,d.jsx)(l.Z,{className:"site-heading",variant:"h5",gutterBottom:!0,children:e.title}),(0,d.jsx)(l.Z,{variant:"body1",sx:{mb:e.children?3:0,textAlign:"center"},children:e.blurb}),function(){if(e.children)return e.children}()]})}},1268:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var r=n(9439),i=n(2791),l=n(4554),s=n(4512),d=n(242),o=n(5825),a=n(6278),c=n(627),h=n(8096),x=n(4989),u=n(1889),j=n(4479),b=n(765),m=n(890),Z=n(1637),g=n(5519),f=n(4518),p=n(8264),k=n(7394),C=n(6753),y=n(184),v=(0,i.memo)((function(e){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(f.Z,{"aria-label":"Previous puzzle",onClick:function(){return e.handleClick()},onKeyDown:function(t){"Enter"===t.key&&e.handleClick()},variant:"contained",children:(0,y.jsx)(k.Z,{})})})})),w=(0,i.memo)((function(e){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(f.Z,{"aria-label":"Next puzzle",disabled:e.disabled,onClick:function(){return e.handleClick()},onKeyDown:function(t){"Enter"===t.key&&e.handleClick()},variant:"contained",children:(0,y.jsx)(p.Z,{})})})})),S=(0,i.memo)((function(e){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(f.Z,{"aria-label":"Restart game",onClick:function(){return e.handleClick()},onKeyDown:function(t){"Enter"===t.key&&e.handleClick()},variant:"contained",children:(0,y.jsx)(C.Z,{})})})})),z=n(8715),A=Z.Z[50],O=g.Z[900],R=g.Z[400];function E(){var e=(0,i.useContext)(z.R);return(0,y.jsx)(l.Z,{sx:{backgroundColor:A,maxWidth:e<=650?"95%":"80%",mb:3,mx:"auto",padding:2,textAlign:"left"},children:(0,y.jsx)("p",{className:"page",children:"Black holes are not galactic vacuum cleaners; they will not indiscriminately consume everything in their path. Missions can fly calmly around both stellar-mass and supermassive black holes, as long as they keep a safe distance. Keep in mind that the bigger the black hole (and the closer you are to it), the faster the velocity required to escape."})})}function P(){var e=(0,i.useContext)(z.R);return(0,y.jsxs)(l.Z,{sx:{backgroundColor:O,border:e<=650?10:20,borderColor:R,maxWidth:e<=650?"100%":"75%",mb:3,mx:"auto",padding:2,textAlign:"left"},children:[(0,y.jsxs)("p",{className:"screen",children:[" ",(0,y.jsx)("b",{children:"INSIGHTS"})," ",(0,y.jsx)("br",{})," The black hole is 6 million times the mass of the Sun, making it ",(0,y.jsx)("em",{children:"supermassive"}),". "]}),(0,y.jsxs)("p",{className:"screen",children:[" ",(0,y.jsx)("b",{children:"LOCATION"})," ",(0,y.jsx)("br",{})," You are outside of the black hole's event horizon, or \"point of no return\" inside which not even light can escape. However, you are inside the influence radius, a region where the black hole's gravity dominates that of nearby stars."]}),(0,y.jsxs)("p",{className:"screen",children:[" ",(0,y.jsx)("b",{children:"FUELING"})," ",(0,y.jsx)("br",{})," The primary fuel tank is at 17% capacity, and only one of your reserve tanks is remaining."]})]})}function T(e){var t=(0,i.useState)(null),n=(0,r.Z)(t,2),s=n[0],d=n[1],o=(0,i.useState)(!1),a=(0,r.Z)(o,2),Z=a[0],g=a[1],f=(0,i.useState)(null),p=(0,r.Z)(f,2),k=p[0],C=p[1],z=function(e){d(e.target.value),"help"===e.target.value?(g(!0),C(null)):"halt"===e.target.value?(g(!1),C("If you keep moving closer, you might eventually enter the realm where stable orbits become impossible. Without changing your trajectory, you could spiral in!")):"leave"===e.target.value&&(g(!1),C("This could work around a stellar-mass black hole (only a couple of times the mass of the Sun), but this is a BIG one. Are you sure you have enough fuel to escape?"))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{sx:{mb:5,mx:"auto",width:"80%"},children:[(0,y.jsx)(h.Z,{sx:{mb:3},children:(0,y.jsxs)(b.Z,{value:s,onChange:function(e){z(e)},onKeyDown:function(e){"Enter"===e.key?z(e):"Escape"===e.key&&(C(null),d(null))},children:[(0,y.jsx)(x.Z,{value:"halt",control:(0,y.jsx)(j.Z,{}),label:"Do nothing"}),(0,y.jsx)(x.Z,{value:"help",control:(0,y.jsx)(j.Z,{}),label:"Send a distress signal"}),(0,y.jsx)(x.Z,{value:"leave",control:(0,y.jsx)(j.Z,{}),label:"Fly away"})]})}),null!==k&&(0,y.jsx)(c.Z,{in:!1===Z,timeout:7500,unmountOnExit:!0,children:(0,y.jsx)(m.Z,{variant:"body2",children:k})})]}),(0,y.jsxs)(u.ZP,{container:!0,children:[(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(v,{handleClick:e.back})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(S,{handleClick:e.restart})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(w,{disabled:!1===Z,handleClick:e.next})})]})]})}function N(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{}),(0,y.jsx)(P,{}),(0,y.jsx)(T,{back:e.back,next:e.next,restart:e.restart})]})}var F=n(427),B=n(9852),I=n(1258),M=n(2460),L=n(3910),U=n(4507),Y=n(4273),W=n(9877),D=n(6314),G=n(1151),V=n(1190),H=n(6235),K=n(4020),J=g.Z[900],q=g.Z[400],Q=(0,L.Z)({palette:{blue:{main:F.Z[500],border:F.Z[800]},green:{main:B.Z[500],border:B.Z[800]},orange:{main:I.Z[500],border:I.Z[800]},red:{main:M.Z[500],border:M.Z[800]},yellow:{main:Z.Z[600],border:Z.Z[800]}},components:{MuiFab:{styleOverrides:{blue:{"&:hover, &:disabled":{backgroundColor:F.Z[300]}},green:{"&:hover, &:disabled":{backgroundColor:B.Z[300]}},orange:{"&:hover, &:disabled":{backgroundColor:I.Z[300]}},red:{"&:hover, &:disabled":{backgroundColor:M.Z[300]}},yellow:{"&:hover, &:disabled":{backgroundColor:Z.Z[300]}}}}}}),X=(0,i.memo)((function(e){return(0,y.jsx)(l.Z,{sx:{backgroundColor:J,border:e.width<=650?10:20,borderColor:q,maxWidth:e.width<=650?"100%":"75%",mb:3,mx:"auto",padding:2,textAlign:"center"},children:(0,y.jsx)("p",{className:"screen",children:e.display})})}));function _(e){return(0,y.jsx)(l.Z,{sx:{backgroundColor:q,borderRadius:"20px",mx:"auto",mb:3,maxWidth:e.width<=480?"95%":"35%"},children:(0,y.jsxs)(U.Z,{theme:Q,children:[(0,y.jsx)(W.Z,{"aria-label":"electrical power",color:"yellow",disabled:e.send,onClick:function(){e.handleActivate(!1,"ELECTRICAL POWER SUBSYSTEM")},size:e.width<=480?"medium":"large",sx:{border:"4px solid",borderColor:"yellow.border",mx:1,my:2},children:(0,y.jsx)(Y.Z,{})}),(0,y.jsx)(W.Z,{"aria-label":"propulsion",color:"red",disabled:e.send,onClick:function(){e.handleActivate(!1,"PROPULSION SUBSYSTEM")},size:e.width<=480?"medium":"large",sx:{border:"4px solid",borderColor:"red.border",mx:1,my:2},children:(0,y.jsx)(D.Z,{})}),(0,y.jsx)(W.Z,{"aria-label":"attitude and orbit control",color:"blue",disabled:e.send,onClick:function(){e.handleActivate(!1,"ATTITUDE & ORBIT CONTROL SUBSYSTEM")},size:e.width<=480?"medium":"large",sx:{border:"4px solid",borderColor:"blue.border",mx:1,my:2},children:(0,y.jsx)(H.Z,{})}),(0,y.jsx)(W.Z,{"aria-label":"communications and data handling",color:"orange",disabled:e.send,onClick:function(){e.handleActivate(!0,"COMMUNICATIONS & DATA HANDLING SUBSYSTEM")},size:e.width<=480?"medium":"large",sx:{border:"4px solid",borderColor:"orange.border",mx:1,my:2},children:(0,y.jsx)(V.Z,{})}),(0,y.jsx)(W.Z,{"aria-label":"environmental control and life support",color:"green",disabled:e.send,onClick:function(){e.handleActivate(!1,"ENVIRONMENTAL CONTROL & LIFE SUPPORT SUBSYSTEM")},size:e.width<=480?"medium":"large",sx:{border:"4px solid",borderColor:"green.border",mx:1,my:2},children:(0,y.jsx)(G.Z,{})})]})})}function $(e){var t=(0,i.useState)(!1),n=(0,r.Z)(t,2),s=n[0],d=n[1],o=(0,i.useState)("WELCOME"),a=(0,r.Z)(o,2),c=a[0],h=a[1],x=(0,i.useState)(null),j=(0,r.Z)(x,2),b=j[0],m=j[1],Z=(0,i.useState)(null),g=(0,r.Z)(Z,2),p=g[0],k=g[1],C=(0,i.useState)(0),A=(0,r.Z)(C,2),O=A[0],R=A[1],E=(0,i.useState)(!1),P=(0,r.Z)(E,2),T=P[0],N=P[1],F=(0,i.useContext)(z.R),B=function(e){var t=O+1;if(R(O+1),"sos"===e.toLowerCase())k(null),N(!0);else if(1===t)k("What is the shortest message you could send?");else k("Hint: can you keep it to 3 letters?")};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(X,{display:c,width:F}),(0,y.jsx)(_,{handleActivate:function(e,t){d(e),h(t)},send:T,width:F}),(0,y.jsxs)(l.Z,{sx:{mb:5},children:[(0,y.jsx)(K.Z,{error:null!==p,disabled:!1===s,id:"distress-signal",label:"Message",inputProps:{maxLength:25},helperText:p,onChange:function(e){m(e.target.value),k(null)},onKeyDown:function(e){"Enter"===e.key&&B(b)},size:F<=480?"small":"large"}),(0,y.jsx)(f.Z,{id:"distress-submit",disabled:null===b||T,display:F<=480?"block":"inline",label:"Submit",variant:"contained",onClick:function(){B(b)},sx:{ml:F<=424?0:2,mt:F<=480?.5:1},size:F<=480?"small":"large",children:"Submit"})]}),(0,y.jsxs)(u.ZP,{container:!0,children:[(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(v,{handleClick:e.back})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(S,{handleClick:e.restart})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(w,{disabled:!1===T,handleClick:e.next})})]})]})}var ee=n(8422),te=n(7928),ne=n(5130),re=n(6934),ie=n(3400),le=n(8546),se=n(1798),de=g.Z[900],oe=g.Z[400],ae=(0,L.Z)({palette:{red:{main:M.Z[500]},orange:{main:I.Z[500]},yellow:{main:Z.Z[600]},green:{main:B.Z[500]},blue:{main:F.Z[500]},indigo:{main:le.Z[500]},violet:{main:se.Z[500]}},components:{MuiButtonGroup:{styleOverrides:{firstButton:{border:"6px solid",borderColor:M.Z[800],marginRight:"1px","&:hover, &:disabled":{backgroundColor:M.Z[300],borderRight:"6px solid "+M.Z[800]}},middleButton:{borderRight:"6px solid",marginRight:"1px","&.MuiButton-containedOrange":{borderColor:I.Z[800],"&:hover, &:disabled":{backgroundColor:I.Z[300],borderRight:"6px solid "+I.Z[800]}},"&.MuiButton-containedYellow":{borderColor:Z.Z[800],"&:hover, &:disabled":{backgroundColor:Z.Z[300],borderRight:"6px solid "+Z.Z[800]}},"&.MuiButton-containedGreen":{borderColor:B.Z[800],"&:hover, &:disabled":{backgroundColor:B.Z[300],borderRight:"6px solid "+B.Z[800]}},"&.MuiButton-containedBlue":{borderColor:F.Z[800],"&:hover, &:disabled":{backgroundColor:F.Z[300],borderRight:"6px solid "+F.Z[800]}},"&.MuiButton-containedIndigo":{borderColor:le.Z[800],"&:hover, &:disabled":{backgroundColor:le.Z[300],borderRight:"6px solid "+le.Z[800]}}},lastButton:{borderColor:se.Z[800],"&:hover, &:disabled":{backgroundColor:se.Z[300]}}}},MuiButton:{styleOverrides:{root:{border:"6px solid"}}}}}),ce=(0,re.ZP)(ie.Z)((function(){return{marginLeft:1,display:"inline-block",color:de,"&.Mui-disabled":{color:"#616161"}}})),he=(0,i.memo)((function(e){return(0,y.jsxs)(l.Z,{sx:{backgroundColor:de,border:e.width<=650?10:20,borderColor:oe,maxWidth:e.width<=650?"100%":"60%",mx:"auto",mb:3,padding:1,textAlign:e.width<=650?"left":"center"},children:[(0,y.jsx)("p",{className:"screen",children:"  MSHZO NYVVCF JVSVYZ AV HJJLWA VBY HPK  "}),(0,y.jsx)("div",{style:{overflow:"auto"},children:(0,y.jsx)("table",{className:"screen",children:(0,y.jsxs)("tbody",{children:[e.width>480&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"A"}),(0,y.jsx)("td",{children:"B"}),(0,y.jsx)("td",{children:"C"}),(0,y.jsx)("td",{children:"D"}),(0,y.jsx)("td",{children:"E"}),(0,y.jsx)("td",{children:"F"}),(0,y.jsx)("td",{children:"G"}),(0,y.jsx)("td",{children:"H"}),(0,y.jsx)("td",{children:"I"}),(0,y.jsx)("td",{children:"J"}),(0,y.jsx)("td",{children:"K"}),(0,y.jsx)("td",{children:"L"}),(0,y.jsx)("td",{children:"M"}),(0,y.jsx)("td",{children:"N"}),(0,y.jsx)("td",{children:"O"}),(0,y.jsx)("td",{children:"P"}),(0,y.jsx)("td",{children:"Q"}),(0,y.jsx)("td",{children:"R"}),(0,y.jsx)("td",{children:"S"}),(0,y.jsx)("td",{children:"T"}),(0,y.jsx)("td",{children:"U"}),(0,y.jsx)("td",{children:"V"}),(0,y.jsx)("td",{children:"W"}),(0,y.jsx)("td",{children:"X"}),(0,y.jsx)("td",{children:"Y"}),(0,y.jsx)("td",{children:"Z"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{children:"M"}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{children:"U"}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{children:"B"}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{})]})]}),e.width<=480&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"A"}),(0,y.jsx)("td",{children:"B"}),(0,y.jsx)("td",{children:"C"}),(0,y.jsx)("td",{children:"D"}),(0,y.jsx)("td",{children:"E"}),(0,y.jsx)("td",{children:"F"}),(0,y.jsx)("td",{children:"G"}),(0,y.jsx)("td",{children:"H"}),(0,y.jsx)("td",{children:"I"}),(0,y.jsx)("td",{children:"J"}),(0,y.jsx)("td",{children:"K"}),(0,y.jsx)("td",{children:"L"}),(0,y.jsx)("td",{children:"M"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{children:"M"}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"N"}),(0,y.jsx)("td",{children:"O"}),(0,y.jsx)("td",{children:"P"}),(0,y.jsx)("td",{children:"Q"}),(0,y.jsx)("td",{children:"R"}),(0,y.jsx)("td",{children:"S"}),(0,y.jsx)("td",{children:"T"}),(0,y.jsx)("td",{children:"U"}),(0,y.jsx)("td",{children:"V"}),(0,y.jsx)("td",{children:"W"}),(0,y.jsx)("td",{children:"X"}),(0,y.jsx)("td",{children:"Y"}),(0,y.jsx)("td",{children:"Z"})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"U"}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{children:"B"}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{}),(0,y.jsx)("td",{})]})]})]})})}),(0,y.jsxs)("p",{className:"screen",children:[" >>> ",e.display]})]})}));function xe(e){var t=(0,i.useState)(!1),n=(0,r.Z)(t,2),s=n[0],d=n[1],o=(0,i.useState)("INPUT COMMAND SEQUENCE"),a=(0,r.Z)(o,2),c=a[0],h=a[1],x=(0,i.useContext)(z.R),j=function(e){d("GROOVY"===e)},b=function(e,t){if(e.length<25){var n=e.concat(t);h(n),j(n)}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(he,{display:c,width:x}),(0,y.jsxs)(l.Z,{sx:{backgroundColor:oe,borderRadius:"10px",maxWidth:x<=650?"95%":"60%",mx:"auto",mb:5},children:[(0,y.jsx)(U.Z,{theme:ae,children:(0,y.jsxs)(te.Z,{"aria-label":"Color buttons",disabled:s,sx:{display:"inline-block",my:x>480?2:1},variant:"contained",children:[(0,y.jsx)(f.Z,{"aria-label":"Red",color:"red",onClick:function(){return b(c,"R")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Red"}),(0,y.jsx)(f.Z,{"aria-label":"Orange",color:"orange",onClick:function(){return b(c,"O")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Orange"}),(0,y.jsx)(f.Z,{"aria-label":"Yellow",color:"yellow",onClick:function(){return b(c,"Y")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Yellow"}),(0,y.jsx)(f.Z,{"aria-label":"Green",color:"green",onClick:function(){return b(c,"G")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Green"}),(0,y.jsx)(f.Z,{"aria-label":"Blue",color:"blue",onClick:function(){return b(c,"B")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Blue"}),(0,y.jsx)(f.Z,{"aria-label":"Indigo",color:"indigo",onClick:function(){return b(c,"I")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Indigo"}),(0,y.jsx)(f.Z,{"aria-label":"Violet",color:"violet",onClick:function(){return b(c,"V")},sx:{height:x>480?40:30,width:x>480?80:60},title:"Violet"})]})}),(0,y.jsx)(ce,{"aria-label":"Backspace command sequence",disabled:0===c.length||s,onClick:function(){return function(e){if(1===e.length)h("");else{var t=e.slice(0,-1);h(t),j(t)}}(c)},title:"Backspace",children:(0,y.jsx)(ee.Z,{fontSize:"medium"})}),(0,y.jsx)(ce,{"aria-label":"Clear command sequence",disabled:0===c.length||s,onClick:function(){h("")},title:"Clear",children:(0,y.jsx)(ne.Z,{fontSize:"large"})})]}),(0,y.jsxs)(u.ZP,{container:!0,children:[(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(v,{handleClick:e.back})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(S,{handleClick:e.restart})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(w,{disabled:!1===s,handleClick:e.next})})]})]})}var ue=n(1413);function je(e){var t=(0,i.useState)(null),n=(0,r.Z)(t,2),s=n[0],d=n[1],o=(0,i.useState)(null),a=(0,r.Z)(o,2),c=a[0],h=a[1],x=(0,i.useState)(!1),u=(0,r.Z)(x,2),j=u[0],b=u[1],Z=function(t){t.toLowerCase().includes(e.includes)?(h(null),b(!0),e.handleSolved()):h(e.hint)};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(l.Z,{sx:{mb:"1"===e.id?10:5},children:[(0,y.jsx)(m.Z,{variant:e.width<=480?"h6":"h3",sx:{padding:2},children:e.clue}),(0,y.jsxs)(l.Z,{sx:{my:3},children:[(0,y.jsx)(K.Z,{error:null!==c,helperText:c,id:"rebus-"+e.id+"-answer",label:"Answer",inputProps:{maxLength:25},onChange:function(e){d(e.target.value),h(null)},onKeyDown:function(e){"Enter"===e.key&&Z(s)},size:e.width<=480?"small":"large"}),(0,y.jsx)(f.Z,{"aria-label":"submit",disabled:null===s||j,display:window.innerWidth<=480?"block":"inline",label:"Submit",variant:"contained",onClick:function(){Z(s)},sx:{ml:e.width<424?0:2,mt:e.width<=480?.5:1},size:e.width<=480?"small":"large",children:"Submit"})]}),j&&(0,y.jsx)(l.Z,{sx:{backgroundColor:"#b71c1c",borderRadius:1,maxWidth:e.width<=480?"100%":"60%",mb:3,mx:"auto"},children:(0,y.jsx)(m.Z,{variant:"body2",sx:{padding:2,textAlign:"justify"},children:e.explanation})})]})})}function be(e){var t=(0,i.useState)(!1),n=(0,r.Z)(t,2),l=n[0],s=n[1],d=(0,i.useState)(!1),o=(0,r.Z)(d,2),a=o[0],c=o[1],h=(0,i.useContext)(z.R),x={includes:"spaghettification",clue:(0,y.jsx)(y.Fragment,{children:"\ud83c\udf5d + FI + \ud83d\udc31 + (\ud83e\udd81 - L)"}),hint:"Hint: SPAGHETTI + FI + CAT + (LION - L)",id:"1",explanation:(0,y.jsxs)(y.Fragment,{children:["The tidal forces near black holes are so intense that they can stretch out and flatten objects in a process called ",(0,y.jsx)("b",{children:"spaghettification"}),'. In fact, tidal acceleration makes travelling around stellar-mass black holes more dangerous than supermassive black holes! Since the radius of the event horizon (or "point of no return") increases with the mass of the black hole, the edge of a less massive black hole is actually closer to the infinitely dense region at its center.']}),handleSolved:function(){s(!0)}},j={includes:"radiation",clue:(0,y.jsx)(y.Fragment,{children:"(\ud83d\udcfb [O\u2192A]) + (\ud83d\udc54 - E) + (\ud83c\udf48 - MEL)"}),hint:"Hint: (RADIO [O\u2192A]) + (TIE - E) + (MELON - MEL)",id:"2",explanation:(0,y.jsxs)(y.Fragment,{children:["When a black hole's gravity pulls in stars, gas, or dust, the material begins to orbit in a rotating disk. As different streams of particles inside the disk move past each other, the friction between them produces heat and high-energy ",(0,y.jsx)("b",{children:"radiation"}),". This includes the emission of powerful X-rays, which can damage your cells!"]}),handleSolved:function(){c(!0)}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(je,(0,ue.Z)((0,ue.Z)({},x),{},{width:h})),(0,y.jsx)(je,(0,ue.Z)((0,ue.Z)({},j),{},{width:h})),(0,y.jsxs)(u.ZP,{container:!0,children:[(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(v,{handleClick:e.back})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(S,{handleClick:e.restart})}),(0,y.jsx)(u.ZP,{item:!0,xs:4,children:(0,y.jsx)(f.Z,{disabled:!1===l&&!1===a,variant:"contained",onClick:e.next,children:"Finish"})})]})]})}function me(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(a.Z,{title:"\u2726 CONGRATULATIONS \u2726",blurb:"Thanks for playing!"})})}var Ze={1:{title:"Puzzle #1",blurb:"You want to look up the protocol for flying near black holes, but you misplaced your instruction manual. Search through your personal items below to find it."},2:{title:"Puzzle #2",blurb:"Read the instructions in the mission manual. Use your discretion and reports from the monitoring panel to determine the best protocol."},3:{title:"Puzzle #3",blurb:"You need to send a distress signal, but in your panic, you spilled coffee all over the schematics in your manual. Use the control panel below to activate the correct subsystem."},4:{title:"Puzzle #4",blurb:"You received a response, but it seems to be encoded. Decode the response using the cipher below."},5:{title:"Puzzle #5",blurb:"An alien ship has offered you aid, but they do not know if they can trust you to fly responsibly throughout the cosmos. Solve the rebus puzzles below to prove you are ultimately worthy of their compassion."}};function ge(){var e=(0,i.useState)(0),t=(0,r.Z)(e,2),n=t[0],c=t[1],h=function(){c((function(e){return e+1}))},x=function(){c((function(e){return e-1}))},u=function(){c(0)};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(l.Z,{sx:{mx:2,my:2},children:[(0,y.jsxs)(d.Z,{activeStep:n,children:[(0,y.jsx)(s.Z,{children:(0,y.jsx)(o.Z,{})},"puzzle-1"),(0,y.jsx)(s.Z,{children:(0,y.jsx)(o.Z,{})},"puzzle-2"),(0,y.jsx)(s.Z,{children:(0,y.jsx)(o.Z,{})},"puzzle-3"),(0,y.jsx)(s.Z,{children:(0,y.jsx)(o.Z,{})},"puzzle-4")]}),function(){switch(n){case 0:return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{title:Ze[2].title,blurb:Ze[2].blurb}),(0,y.jsx)(N,{back:x,next:h,restart:u})]});case 1:return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{title:Ze[3].title,blurb:Ze[3].blurb}),(0,y.jsx)($,{back:x,next:h,restart:u})]});case 2:return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{title:Ze[4].title,blurb:Ze[4].blurb}),(0,y.jsx)(xe,{back:x,next:h,restart:u})]});case 3:return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{title:Ze[5].title,blurb:Ze[5].blurb}),(0,y.jsx)(be,{back:x,next:h,restart:u})]});case 4:return(0,y.jsx)(me,{})}}()]})})}}}]);
//# sourceMappingURL=268.2589c14c.chunk.js.map