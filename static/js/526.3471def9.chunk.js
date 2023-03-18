"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{2049:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,p,c,x,i=e(168),o=e(6444),u=e(1087),s=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 30px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  list-style: none;\n\n"]))),f=o.ZP.li(a||(a=(0,i.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n    -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,\n      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,\n      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,\n      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);\n    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,\n      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,\n      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,\n      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);\n\n  }\n"]))),d=o.ZP.img(p||(p=(0,i.Z)(["\n  display: block;\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n\n"]))),l=o.ZP.h2(c||(c=(0,i.Z)(["\n  text-align: center;\n"]))),h=(0,o.ZP)(u.NavLink)(x||(x=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);\n"]))),g=e(184),m=e(1087).useLocation,v=function(n){var t=n.movies,e=m();return(0,g.jsx)("div",{children:(0,g.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path,p=n.name;return(0,g.jsx)(f,{children:(0,g.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)(d,{src:a?"https://image.tmdb.org/t/p/w500"+a:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:p,width:"250"}),(0,g.jsx)(l,{children:r})]})},t)}))})})}},3580:function(n,t,e){e.d(t,{Ai:function(){return f},Bt:function(){return s},Y5:function(){return o},wr:function(){return i},y:function(){return u}});var r=e(5861),a=e(7757),p=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var x="39cac865cd97b5021efa5cb45c64bc17",i=function(){var n=(0,r.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(x));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(p().mark((function n(t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(x,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(p().mark((function n(t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(x,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(p().mark((function n(t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(x,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(p().mark((function n(t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(x,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4526:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a=e(5861),p=e(9439),c=e(7757),x=e.n(c),i=e(6795),o=(e(5462),e(2791)),u=e(2049),s=e(3580),f=e(168),d=e(6444).ZP.h1(r||(r=(0,f.Z)(["\n  text-align: center;\n  font-size: 48px;\n  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,\n    0 -18px 40px #f00, 2px 2px 2px rgba(206, 89, 55, 0);\n"]))),l=e(184),h=function(){var n=(0,o.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],c=function(){var n=(0,a.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.wr)();case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i.Am.error("Sorry something wrong. Check the internet and try reload!",{position:i.Am.POSITION.TOP_CENTER});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();if((0,o.useEffect)((function(){e.length>0||c()}),[e]),!(e.length<0))return(0,l.jsxs)("main",{children:[(0,l.jsx)(d,{children:"Trending today"}),(0,l.jsx)(u.Z,{movies:e}),(0,l.jsx)(i.Ix,{autoClose:1500})]})}}}]);
//# sourceMappingURL=526.3471def9.chunk.js.map