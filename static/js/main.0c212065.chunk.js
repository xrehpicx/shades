(this.webpackJsonpshades=this.webpackJsonpshades||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},143:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),i=n.n(a),o=n(15),r=n.n(o),s=(n(111),n(11)),l=n(66),u=(n(112),n(73)),d=n(17),j=n.n(d),p=n(29),f=n(10),b=n(179),h=n(174),v=n(180),m=n(175),O=n(176),g=n(99),x=n.n(g),y=n(173),w=n(39),k=n(92),S=n.n(k),I=n(93),N=n.n(I),C=Object(a.createContext)({});function W(e){var t=e.children,n=Object(a.useState)([]),i=Object(s.a)(n,2),o=i[0],r=i[1];return Object(a.useEffect)((function(){(function(){return E.apply(this,arguments)})().then((function(e){e&&r(e)}))}),[]),Object(c.jsx)(C.Provider,{value:{videos:o},children:t})}var F=S.a.createInstance({name:"debugstore"});function E(){return(E=Object(p.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyBlqsRM4RuYF5Xe13wySA11TWn84TJiSN8",t="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLp1LthaVYwB1qNCOeTXJL2TIP0q-oQcoW&key=".concat("AIzaSyBlqsRM4RuYF5Xe13wySA11TWn84TJiSN8"),e.next=5,N.a.get(t);case 5:if(!(n=e.sent.data)){e.next=8;break}return e.abrupt("return",n.items);case 8:return e.abrupt("return",[]);case 9:return e.next=11,F.getItem("videos");case 11:if(!(c=e.sent)){e.next=14;break}return e.abrupt("return",c.items);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=n(177),L=n(67);n(143);function P(){var e=i.a.useState(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(w.a)(),l=Object(y.a)(r.breakpoints.down("sm")),u=Object(f.d)(),d=Object(f.e)(),O=Object(a.useState)(),g=Object(s.a)(O,2),k=g[0],S=g[1],I=Object(a.useState)(!0),N=Object(s.a)(I,2),W=N[0],F=N[1],E=Object(a.useContext)(C).videos;Object(a.useEffect)((function(){n&&E&&S(E.filter((function(e){return e.snippet.resourceId.videoId===n}))[0])}),[E,n]);var T=function(){o(""),F(!0),u.push("/")};Object(a.useEffect)((function(){var e=new URLSearchParams(d.search).get("videoId");o(e||"")}),[d]);var P=Object(a.useState)(!1),R=Object(s.a)(P,2),M=R[0],q=R[1];function J(){return(J=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(window.location.href),q(!0),navigator.share({title:null===k||void 0===k?void 0:k.snippet.title,text:null===k||void 0===k?void 0:k.snippet.title,url:window.location.href}).then((function(){return console.log("Share was successful.")})).catch((function(e){return console.log("Sharing failed",e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)(b.a,{fullScreen:l,open:!!n,scroll:"body",onClose:T,PaperProps:{style:{background:"var(--background)"}},"aria-labelledby":"responsive-dialog-title",children:[Object(c.jsxs)(h.a,{children:[Object(c.jsx)(v.a,{style:{color:"white"},onClick:T,children:"close"}),Object(c.jsx)(v.a,{onClick:function(){return J.apply(this,arguments)},children:Object(c.jsx)(x.a,{color:"primary"})})]}),Object(c.jsx)(A,{open:M,set:q}),W?Object(c.jsx)(m.a,{}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("div",{className:"player",children:Object(c.jsx)("div",{className:"youtube",children:Object(c.jsx)(L.a,{onReady:function(){F(!1)},containerClassName:"iframeContainer",videoId:null===k||void 0===k?void 0:k.snippet.resourceId.videoId})})}),Object(c.jsxs)("div",{className:"video-details",children:[Object(c.jsx)("p",{className:"title",children:null===k||void 0===k?void 0:k.snippet.title}),Object(c.jsx)("div",{className:"subtitle",children:null===k||void 0===k?void 0:k.snippet.description.split("\n").map((function(e,t){return Object(c.jsx)("p",{children:e},t)}))})]})]})}function A(e){var t=e.set,n=e.open;return Object(a.useEffect)((function(){n&&setTimeout((function(){t(!1)}),2e3)}),[n]),Object(c.jsx)(O.a,{in:n,children:Object(c.jsx)("span",{style:{display:"block",color:"var(--accent)",textAlign:"right",padding:"10px"},className:"alert-text",children:"Copied link"})})}function R(e){var t=e.fadeIn;return Object(c.jsxs)(T.animated.div,{style:t,className:"works",children:[Object(c.jsx)("p",{className:"work-title",children:"My Works"}),Object(c.jsx)(M,{})]})}function M(){var e=Object(a.useContext)(C).videos;return Object(c.jsx)("div",{className:"work-videos",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(c.jsx)(J,{index:t,video:e},t)}))})}function q(e){return{mq:"http://img.youtube.com/vi/".concat(e.snippet.resourceId.videoId,"/mqdefault.jpg"),maxhd:"http://img.youtube.com/vi/".concat(e.snippet.resourceId.videoId,"/maxresdefault.jpg"),sd:"http://img.youtube.com/vi/".concat(e.snippet.resourceId.videoId,"/sddefault.jpg")}}function J(e){var t=e.video,n=e.index,i=Object(a.useState)("idel"),o=Object(s.a)(i,2),r=o[0],l=(o[1],Object(a.useState)(!1)),d=Object(s.a)(l,2),j=d[0],p=d[1],b=Object(T.useSpring)((function(){return{opacity:0,y:100}})),h=Object(s.a)(b,2),v=h[0],m=h[1];Object(a.useEffect)((function(){m({opacity:1,y:0,delay:1500+100*n})}),[m,n]);var O=Object(f.d)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(T.animated.div,{style:Object(u.a)(Object(u.a)({},v),{},{position:0===n?"relative":""}),className:"work-video",onClick:function(){O.push("/?videoId="+t.snippet.resourceId.videoId)},onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},children:[t&&r?Object(c.jsx)("img",{src:q(t).maxhd,alt:"",className:"thumbnail"}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("div",{className:"details",style:{opacity:Number(j)},children:Object(c.jsx)("p",{className:"title",children:t.snippet.title})})]})})}var B=function(){var e=Object(T.useSpring)({config:{mass:1,friction:10,damping:1,frequency:.6},from:{top:window.innerHeight/2-40,left:window.innerWidth/2-40,transform:"translate(-50%, -50%)",fontSize:"3rem"},top:0,left:0,transform:"translate(0,0)",fontSize:"2rem",delay:1e3}),t=Object(T.useSpring)({from:{opacity:0},opacity:1,delay:1500});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P,{}),Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)(T.animated.p,{style:e,className:"name",children:"Jai Mangal Sharma"}),Object(c.jsx)(T.animated.span,{style:t,className:"subtitle",children:"FILM MAKER"})]})}),Object(c.jsx)(R,{fadeIn:t})]})]})};function z(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+n)}catch(c){console.log("Oops, unable to copy")}document.body.removeChild(t)}var U=n(101),X=n(178);var Y=function(){var e=Object(a.useState)(Object(U.a)({typography:{h1:{fontFamily:"'Josefin Sans', sans-serif",fontWeight:400}}})),t=Object(s.a)(e,2),n=t[0];return t[1],Object(c.jsx)(l.a,{children:Object(c.jsx)(W,{children:Object(c.jsx)(X.a,{theme:n,children:Object(c.jsx)(B,{})})})})},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(Y,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shades",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shades","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),K()}},[[148,1,2]]]);
//# sourceMappingURL=main.0c212065.chunk.js.map