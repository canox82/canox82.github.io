import{S as ta,i as ea,s as pa,B as Q,j as oa,m as la,o as ca,p as ia,q as W,x as ua,u as ra,v as ka,K as X,e as o,t as k,k as x,c as l,a as z,g,n as w,d as p,b as $,f,D as s,E as ga}from"../../chunks/vendor-8dfe4840.js";import ma from"./layoutBlog.svelte-c19f5483.js";function da(A){let n,r,m,b,t,u,d,S,E,h,Z=`<code class="language-javascript"><span class="token keyword">let</span> tags <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> posts<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> t <span class="token keyword">in</span> posts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>tags<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tags<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>posts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>tags<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            tags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>posts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>tags<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,q,c,j,B,N,C,H,M,L,I,P,y,aa=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-col my-5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    &#123;#each tags as tag&#125;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex m-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/tags/&#123;tag&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-initial py-1 px-2 mx-1 
                 rounded-lg bg-blue-500  hover:bg-blue-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm  text-gray-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;tag&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    &#123;/each&#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code>`,R,i,J,O,T,D,K,F,G;return{c(){n=o("p"),r=k("Come avevo detto, ho aggiunto la pagina di riepilogo degli argomenti trattati. Al momento \xE8 molto semplice, si tratta solo di un \u201Crecap\u201D dei vari tag presenti con il link che rimanda alla pagina di ricerca per i post che li contengono. Semplice ed efficace."),m=o("br"),b=x(),t=o("br"),u=k(`
In pratica creo un array tags, poi scorro il JSON dei post e per ogni post controllo se il primo tag \xE8 gi\xE0 presente nell\u2019array tags tramite la funzione `),d=o("span"),S=k(".includes()"),E=x(),h=o("pre"),q=x(),c=o("p"),j=k("se non \xE8 resente lo aggiungo con "),B=o("span"),N=k(".push()"),C=k("."),H=o("br"),M=x(),L=o("br"),I=k(`
Alla fine per visualizzare l\u2019elenco tags mi basta eseguire un ciclo con each.`),P=x(),y=o("pre"),R=x(),i=o("p"),J=k("\xA0"),O=o("br"),T=k(`
Per il futuro voglio aggiungere un contatore per ogni argomento, di modo da sapere quante volte \xE8 stato trattato. Non \xE8 di difficile realizzazione.`),D=o("br"),K=x(),F=o("br"),G=k(`
Ho anche aggiornato la pagina \u201CAbout Me\u201D, prima era troppo sintetica, ora forse \xE8 troppo prolissa ma vabb\xE8, alla prossima magari troviamo la giusta via di mezzo.`),this.h()},l(a){n=l(a,"P",{});var e=z(n);r=g(e,"Come avevo detto, ho aggiunto la pagina di riepilogo degli argomenti trattati. Al momento \xE8 molto semplice, si tratta solo di un \u201Crecap\u201D dei vari tag presenti con il link che rimanda alla pagina di ricerca per i post che li contengono. Semplice ed efficace."),m=l(e,"BR",{}),b=w(e),t=l(e,"BR",{}),u=g(e,`
In pratica creo un array tags, poi scorro il JSON dei post e per ogni post controllo se il primo tag \xE8 gi\xE0 presente nell\u2019array tags tramite la funzione `),d=l(e,"SPAN",{class:!0});var U=z(d);S=g(U,".includes()"),U.forEach(p),e.forEach(p),E=w(a),h=l(a,"PRE",{class:!0});var na=z(h);na.forEach(p),q=w(a),c=l(a,"P",{});var v=z(c);j=g(v,"se non \xE8 resente lo aggiungo con "),B=l(v,"SPAN",{class:!0});var V=z(B);N=g(V,".push()"),V.forEach(p),C=g(v,"."),H=l(v,"BR",{}),M=w(v),L=l(v,"BR",{}),I=g(v,`
Alla fine per visualizzare l\u2019elenco tags mi basta eseguire un ciclo con each.`),v.forEach(p),P=w(a),y=l(a,"PRE",{class:!0});var sa=z(y);sa.forEach(p),R=w(a),i=l(a,"P",{});var _=z(i);J=g(_,"\xA0"),O=l(_,"BR",{}),T=g(_,`
Per il futuro voglio aggiungere un contatore per ogni argomento, di modo da sapere quante volte \xE8 stato trattato. Non \xE8 di difficile realizzazione.`),D=l(_,"BR",{}),K=w(_),F=l(_,"BR",{}),G=g(_,`
Ho anche aggiornato la pagina \u201CAbout Me\u201D, prima era troppo sintetica, ora forse \xE8 troppo prolissa ma vabb\xE8, alla prossima magari troviamo la giusta via di mezzo.`),_.forEach(p),this.h()},h(){$(d,"class","italic font-bold"),$(h,"class","language-javascript"),$(B,"class","italic font-bold"),$(y,"class","language-html")},m(a,e){f(a,n,e),s(n,r),s(n,m),s(n,b),s(n,t),s(n,u),s(n,d),s(d,S),f(a,E,e),f(a,h,e),h.innerHTML=Z,f(a,q,e),f(a,c,e),s(c,j),s(c,B),s(B,N),s(c,C),s(c,H),s(c,M),s(c,L),s(c,I),f(a,P,e),f(a,y,e),y.innerHTML=aa,f(a,R,e),f(a,i,e),s(i,J),s(i,O),s(i,T),s(i,D),s(i,K),s(i,F),s(i,G)},p:ga,d(a){a&&p(n),a&&p(E),a&&p(h),a&&p(q),a&&p(c),a&&p(P),a&&p(y),a&&p(R),a&&p(i)}}}function fa(A){let n,r;const m=[A[0],Y];let b={$$slots:{default:[da]},$$scope:{ctx:A}};for(let t=0;t<m.length;t+=1)b=Q(b,m[t]);return n=new ma({props:b}),{c(){oa(n.$$.fragment)},l(t){la(n.$$.fragment,t)},m(t,u){ca(n,t,u),r=!0},p(t,[u]){const d=u&1?ia(m,[u&1&&W(t[0]),u&0&&W(Y)]):{};u&2&&(d.$$scope={dirty:u,ctx:t}),n.$set(d)},i(t){r||(ua(n.$$.fragment,t),r=!0)},o(t){ra(n.$$.fragment,t),r=!1},d(t){ka(n,t)}}}const Y={layout:"blog",title:"Aggiunta la pagina Argomenti",date:"2021/11/06 21:00",tags:["blog","sveltejs","tailwindcss"],pre:" Come promesso ho aggiunto la pagina Argomenti..."};function va(A,n,r){return A.$$set=m=>{r(0,n=Q(Q({},n),X(m)))},n=X(n),[n]}class ha extends ta{constructor(n){super();ea(this,n,va,fa,pa,{})}}export{ha as default,Y as metadata};
