import{S as P,i as T,s as k,e as d,k as y,J as A,c as h,d as l,n as C,a as q,b as a,D as f,f as g,E}from"../chunks/vendor-e07562cf.js";function w(i){let n,r,s,o,m,p,u,_,c,v=i[0].html+"";return document.title=r="C82 Blog - "+i[0].title,{c(){n=d("meta"),s=d("meta"),o=d("meta"),m=d("meta"),u=d("link"),_=y(),c=d("main"),this.h()},l(e){const t=A('[data-svelte="svelte-na7qlv"]',document.head);n=h(t,"META",{charset:!0}),s=h(t,"META",{name:!0,content:!0}),o=h(t,"META",{name:!0,content:!0}),m=h(t,"META",{name:!0,content:!0}),u=h(t,"LINK",{href:!0,rel:!0,type:!0}),t.forEach(l),_=C(e),c=h(e,"MAIN",{class:!0});var M=q(c);M.forEach(l),this.h()},h(){a(n,"charset","utf-8"),a(s,"name","author"),a(s,"content","Cristian Canossini"),a(o,"name","description"),a(o,"content","Un blog dove si parla di Linux, programmazione, tecnologia e tutto quello che mi passa per la testa..."),a(m,"name","keywords"),a(m,"content",p=i[0].tags),a(u,"href","/favicon.png"),a(u,"rel","icon"),a(u,"type","image/png"),a(c,"class","mx-5")},m(e,t){f(document.head,n),f(document.head,s),f(document.head,o),f(document.head,m),f(document.head,u),g(e,_,t),g(e,c,t),c.innerHTML=v},p(e,[t]){t&1&&r!==(r="C82 Blog - "+e[0].title)&&(document.title=r),t&1&&p!==(p=e[0].tags)&&a(m,"content",p),t&1&&v!==(v=e[0].html+"")&&(c.innerHTML=v)},i:E,o:E,d(e){l(n),l(s),l(o),l(m),l(u),e&&l(_),e&&l(c)}}}async function j({fetch:i}){const n=await i("./blog.json"),{posts:r}=await n.json();return{props:{lastPost:r.at(-1)}}}function L(i,n,r){let{lastPost:s}=n;return i.$$set=o=>{"lastPost"in o&&r(0,s=o.lastPost)},[s]}class B extends P{constructor(n){super();T(this,n,L,w,k,{lastPost:0})}}export{B as default,j as load};
