import{_ as v}from"../chunks/preload-helper-eaf481c8.js";import{S as M,i as q,s as w,e as f,t as D,k as x,c as p,a as j,g as V,d as u,n as P,b as d,f as I,D as h,h as S,J as U,E as y,K as z}from"../chunks/vendor-e07562cf.js";function O(m,e,a){const l=m.slice();return l[1]=e[a],l}function R(m){let e,a,l,r,n=m[1]+"",g,b,E;return{c(){e=f("li"),a=f("a"),l=f("div"),r=f("p"),g=D(n),E=x(),this.h()},l(i){e=p(i,"LI",{class:!0});var c=j(e);a=p(c,"A",{href:!0});var o=j(a);l=p(o,"DIV",{class:!0});var t=j(l);r=p(t,"P",{class:!0});var _=j(r);g=V(_,n),_.forEach(u),t.forEach(u),o.forEach(u),E=P(c),c.forEach(u),this.h()},h(){d(r,"class","text-sm text-gray-100"),d(l,"class","flex-initial py-1 px-2 mx-1 rounded-lg bg-blue-500 hover:bg-blue-700"),d(a,"href",b="/tags/"+m[1]),d(e,"class","flex m-1")},m(i,c){I(i,e,c),h(e,a),h(a,l),h(l,r),h(r,g),h(e,E)},p(i,c){c&1&&n!==(n=i[1]+"")&&S(g,n),c&1&&b!==(b="/tags/"+i[1])&&d(a,"href",b)},d(i){i&&u(e)}}}function B(m){let e,a,l,r,n,g,b,E,i,c=m[0],o=[];for(let t=0;t<c.length;t+=1)o[t]=R(O(m,c,t));return{c(){e=f("meta"),a=f("meta"),l=f("meta"),r=x(),n=f("main"),g=f("p"),b=D("Argomenti trattati:"),E=x(),i=f("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){const _=U('[data-svelte="svelte-1pbvl7r"]',document.head);e=p(_,"META",{name:!0,content:!0}),a=p(_,"META",{name:!0,content:!0}),l=p(_,"META",{name:!0,content:!0}),_.forEach(u),r=P(t),n=p(t,"MAIN",{class:!0});var s=j(n);g=p(s,"P",{class:!0});var A=j(g);b=V(A,"Argomenti trattati:"),A.forEach(u),E=P(s),i=p(s,"UL",{class:!0});var L=j(i);for(let T=0;T<o.length;T+=1)o[T].l(L);L.forEach(u),s.forEach(u),this.h()},h(){document.title="C82 Blog - Argomenti",d(e,"name","author"),d(e,"content","Cristian Canossini"),d(a,"name","description"),d(a,"content","Un blog dove si parla di Linux, programmazione, tecnologia e tutto quello che mi passa per la testa..."),d(l,"name","keywords"),d(l,"content",m[0]),d(g,"class","text-center text-blue-800 text-2xl"),d(i,"class","flex flex-col my-5"),d(n,"class","mx-5")},m(t,_){h(document.head,e),h(document.head,a),h(document.head,l),I(t,r,_),I(t,n,_),h(n,g),h(g,b),h(n,E),h(n,i);for(let s=0;s<o.length;s+=1)o[s].m(i,null)},p(t,[_]){if(_&1&&d(l,"content",t[0]),_&1){c=t[0];let s;for(s=0;s<c.length;s+=1){const A=O(t,c,s);o[s]?o[s].p(A,_):(o[s]=R(A),o[s].c(),o[s].m(i,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=c.length}},i:y,o:y,d(t){u(e),u(a),u(l),t&&u(r),t&&u(n),z(o,t)}}}const k={"./blog/20211102.md":()=>v(()=>import("./blog/20211102.md-75e66d63.js"),["pages/blog/20211102.md-75e66d63.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"]),"./blog/20211103.md":()=>v(()=>import("./blog/20211103.md-663f9f9a.js"),["pages/blog/20211103.md-663f9f9a.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"]),"./blog/20211104.md":()=>v(()=>import("./blog/20211104.md-2c9cc07e.js"),["pages/blog/20211104.md-2c9cc07e.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"]),"./blog/20211106.md":()=>v(()=>import("./blog/20211106.md-164a2b97.js"),["pages/blog/20211106.md-164a2b97.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"]),"./blog/20211108.md":()=>v(()=>import("./blog/20211108.md-79ad8d08.js"),["pages/blog/20211108.md-79ad8d08.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"]),"./blog/20211110.md":()=>v(()=>import("./blog/20211110.md-19ed93ec.js"),["pages/blog/20211110.md-19ed93ec.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"]),"./blog/20211117.md":()=>v(()=>import("./blog/20211117.md-8d997aef.js"),["pages/blog/20211117.md-8d997aef.js","chunks/vendor-e07562cf.js","chunks/_layoutBlog-75fac0b8.js"])};let C=[];for(let m in k)C.push(k[m]().then(({metadata:e})=>({path:m,metadata:e})));const F=async({page:m})=>{const e=await Promise.all(C);let a=[];for(let r in e)for(let n in e[r].metadata.tags)a.includes(e[r].metadata.tags[n])||a.push(e[r].metadata.tags[n]);return{props:{sortedTags:a.sort()}}};function J(m,e,a){let{sortedTags:l}=e;return m.$$set=r=>{"sortedTags"in r&&a(0,l=r.sortedTags)},[l]}class G extends M{constructor(e){super();q(this,e,J,B,w,{sortedTags:0})}}export{G as default,F as load};
