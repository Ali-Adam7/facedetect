(this.webpackJsonpfacedetect=this.webpackJsonpfacedetect||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},423:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(48),r=a(1),i=a(13),b=a(19),l=a(24),o=(a(127),a(128),a(129),a(121)),d=a(11),j=function(){return Object(d.jsx)("div",{className:"ma4 mt0 tc",children:Object(d.jsx)(o.a,{className:"Tilt br shadow-3",options:{max:55},style:{height:"250px",width:"250px"},children:Object(d.jsxs)("div",{className:"Tilt-inner pa5",style:{textAlign:"center"},children:[Object(d.jsx)("img",{src:"https://img.icons8.com/ios/192/000000/brain--v2.png"}),"      "]})})})},u=function(e){var t=e.onInputChange,a=e.onSubmit,s=e.name;return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h3",{style:{color:"white"},children:"Detect Face"!=s?"The person detected is: "+s.toUpperCase():s}),Object(d.jsxs)("div",{className:"pa4 shadow-5 br3",children:[Object(d.jsx)("input",{className:"f4 pa2 ",type:"text",onChange:t,placeholder:"Paste image link here"}),Object(d.jsx)("button",{onClick:a,className:" grow f4 link ph3 pv2 dib white bg-light-purple",children:"Detect"})]})]})},p=a(122),m=a.n(p),h=a(123),O=a.n(h),f=function(e){var t=e.image,a=e.box;return Object(d.jsx)("div",{className:"face",children:Object(d.jsxs)("div",{className:" absolute mt 2 ",children:[Object(d.jsx)("img",{id:"inputimg",src:t,width:"500px",height:"auto",className:"grow"}),Object(d.jsx)("div",{className:"box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})]})})},x=a(65),v=a(32),g=Object(x.a)({apiKey:"AIzaSyBOwhdU8WFKoCGi8UGGmWVa8NPa3tva1Aw",authDomain:"facedetect-cd7b4.firebaseapp.com",projectId:"facedetect-cd7b4",storageBucket:"facedetect-cd7b4.appspot.com",messagingSenderId:"78088889240",appId:"1:78088889240:web:a7ea2eb724be51c92a81ed"}),w=function(e){var t=Object(b.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1],o=Object(b.useState)(""),j=Object(i.a)(o,2),u=j[0],p=j[1],m=Object(b.useState)(""),h=Object(i.a)(m,2),O=h[0],f=h[1],x=e.setUser,w=Object(v.b)(g),y=e.setUserData,N=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.a)(w,s,u);case 3:return t=e.sent,Object(v.c)(t.user),e.next=7,w.currentUser.reload();case 7:return a={Name:O,Email:s,Faces:[]},n=Object(l.d)(g),e.next=11,Object(l.f)(Object(l.b)(n,"Users",w.currentUser.uid),a);case 11:y(a),x(w.currentUser),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:50},children:" "}),Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0 tc",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:function(e){f(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return n(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return p(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"mt3 tc",children:Object(d.jsx)("input",{onClick:N,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Log in"})})]})})})]})},y=function(e){var t=Object(b.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1],o=Object(b.useState)(""),j=Object(i.a)(o,2),u=j[0],p=j[1],m=e.setUser,h=e.setUserData,O=Object(v.b)(g),f=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(l.d)(g),e.next=4,Object(v.d)(O,s,u);case 4:return a=Object(l.a)(t,"Users"),n=Object(l.e)(a,Object(l.h)("Email","==",s)),e.next=8,Object(l.c)(n);case 8:return r=e.sent,h(r.docs[0].data()),e.next=12,O.currentUser.reload();case 12:m(O.currentUser),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:50},children:" "}),Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0 tc",children:"Login"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return n(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return p(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"mt3 tc",children:Object(d.jsx)("input",{onClick:f,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Log in"})})]})})})]})},N=function(e){var t=e.setSkip,a=e.setUser,s=e.setUserData,c=Object(b.useState)(""),n=Object(i.a)(c,2),r=n[0];n[1];return Object(d.jsx)("div",{children:"register"==r?Object(d.jsx)(w,{setUser:a,setUserData:s}):"login"==r?Object(d.jsx)(y,{setUserData:s,setUser:a}):Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsx)("div",{className:"mt3 tc",children:Object(d.jsx)("input",{onClick:function(){t(!0)},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Start"})})})})})},k=Object(x.a)({apiKey:"AIzaSyBOwhdU8WFKoCGi8UGGmWVa8NPa3tva1Aw",authDomain:"facedetect-cd7b4.firebaseapp.com",projectId:"facedetect-cd7b4",storageBucket:"facedetect-cd7b4.appspot.com",messagingSenderId:"78088889240",appId:"1:78088889240:web:a7ea2eb724be51c92a81ed"}),S=Object(v.b)(),C=(new O.a.App({apiKey:"0676ebddd5d6413ebdaa101570295a39"}),function(){var e=Object(b.useState)("Detect Face"),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(b.useState)(""),p=Object(i.a)(o,2),h=p[0],O=p[1],x=Object(b.useState)(""),v=Object(i.a)(x,2),g=v[0],w=v[1],y=Object(b.useState)({}),C=Object(i.a)(y,2),U=C[0],_=C[1],F=Object(b.useState)(!1),D=Object(i.a)(F,2),I=D[0],A=D[1],P=Object(b.useState)({}),z=Object(i.a)(P,2),B=z[0],E=(z[1],Object(b.useState)()),G=Object(i.a)(E,2),K=G[0],T=G[1],J=Object(b.useState)({}),L=Object(i.a)(J,2),R=L[0],W=L[1],V=function(e){var t=(e=JSON.parse(e)).outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimg"),s=Number(a.width),c=Number(a.height);return{leftCol:t.left_col*s,topRow:t.top_row*c,rightCol:s-t.right_col*s,bottomRow:c-t.bottom_row*c}},Y=function(e){_(e)},X=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,r,i,b,o,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(t),a=t.outputs[0].data.regions[0].data.concepts[0].name,s(a),!K){e.next=15;break}return r=Object(l.d)(k),(i=R.Faces).push(a),W((function(e){return Object(n.a)(Object(n.a)({},e),{},{Faces:i})})),b=Object(l.a)(r,"Users"),o=Object(l.e)(b,Object(l.h)("Email","==",K.email)),e.next=12,Object(l.c)(o);case 12:return d=e.sent,e.next=15,Object(l.g)(d.docs[0].ref,{Faces:i});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){O(e.target.value)},H=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,s,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(h),t=JSON.stringify({user_app_id:{user_id:"clarifai",app_id:"main"},inputs:[{data:{image:{url:h}}}]}),a={method:"POST",headers:{Accept:"application/json",Authorization:"Key beb7f200cfa7481c8963231c1cf454e4"},body:t},e.next=5,fetch("https://api.clarifai.com/v2/models/celebrity-face-detection/versions/2ba4d0b0e53043f38dbbed49e03917b6/outputs",a);case 5:return s=e.sent,e.next=8,s.text();case 8:return n=e.sent,e.next=11,X(n);case 11:Y(V(n));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){return Object(d.jsxs)("div",{children:[K&&Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h3",{style:{color:"white"},children:"Welcome: "+R.Name}),Object(d.jsx)("h3",{style:{color:"white"},children:"You have detected "+R.Faces.length+" Faces"})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(d.jsx)(u,{onSubmit:H,onInputChange:q,name:a})," "]}),Object(d.jsx)(f,{image:g,box:U})]})};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m.a,{className:"particles",param:{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,random:!0,direction:"none",bounce:!0,out_mode:"bounce",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"center",margin:50},children:[Object(d.jsx)(j,{name:"u",entries:B})," "]}),S.currentUser||I?Object(d.jsx)(M,{userData:R}):Object(d.jsx)(N,{setUserData:W,setUser:T,setSkip:A})]})}),U=a(124),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,424)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};a.n(U).a.render(Object(d.jsx)(C,{}),document.getElementById("root")),_()}},[[423,1,2]]]);
//# sourceMappingURL=main.8e774a42.chunk.js.map