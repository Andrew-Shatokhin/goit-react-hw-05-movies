"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{580:function(e,n,r){r.d(n,{Ai:function(){return d},Bt:function(){return p},Y5:function(){return o},wr:function(){return i},y:function(){return l}});var t=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="39cac865cd97b5021efa5cb45c64bc17",i=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},847:function(e,n,r){r.r(n);var t=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),i=r(689),o=r(580),l=r(87),p=r(184);n.default=function(){var e,n,r,c,d=(0,u.useState)({}),f=(0,a.Z)(d,2),v=f[0],h=f[1],x=(0,i.UO)().movieId;console.log(x);var g=(0,i.TH)(),m=(0,u.useRef)(null!==(e=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,u.useEffect)((function(){(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Y5)(x);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(Error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[x]),(0,p.jsxs)("div",{children:[(0,p.jsx)(l.Link,{to:m.current,children:(0,p.jsx)("button",{type:"button",children:"Go back"})}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(v.poster_path),alt:""}),(0,p.jsxs)("h2",{children:[v.title," ",(0,p.jsxs)("span",{children:["(",null===(r=v.release_date)||void 0===r?void 0:r.slice(0,4),")"]})]}),(0,p.jsxs)("p",{children:["User score: ",Math.round(10*v.vote_average),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:v.overview}),(0,p.jsx)("h4",{children:"Gengers"}),(0,p.jsx)("p",{children:null===(c=v.genres)||void 0===c?void 0:c.map((function(e){return e.name})).join(", ")}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("p",{children:"Additional information"}),(0,p.jsx)("li",{children:(0,p.jsx)(l.Link,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.Link,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading subpage..."}),children:(0,p.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=847.f76d37ea.chunk.js.map