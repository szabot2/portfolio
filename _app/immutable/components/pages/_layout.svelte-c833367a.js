import{C as E,S as k,i as w,s as h,k as d,q,l as v,m as b,r as C,h as c,n as m,b as p,D as y,B as u,w as D,a as F,e as $,x as I,c as S,y as N,t as _,d as V,f,z,E as A,F as B,G,H,I as J,J as K,K as L,g as M}from"../../chunks/index-fec65403.js";import{n as O}from"../../chunks/stores-6d5abef1.js";import{c as j}from"../../chunks/shared-23917130.js";function x(n){return Math.sqrt(1- --n*n)}function P(n,{delay:t=0,duration:o=400,easing:l=E}={}){const r=+getComputedStyle(n).opacity;return{delay:t,duration:o,easing:l,css:s=>`opacity: ${s*r}`}}function Q(n){let t,o,l;return{c(){t=d("div"),o=d("a"),l=q("Főoldal"),this.h()},l(r){t=v(r,"DIV",{class:!0});var s=b(t);o=v(s,"A",{href:!0,class:!0});var e=b(o);l=C(e,"Főoldal"),e.forEach(c),s.forEach(c),this.h()},h(){m(o,"href",j||"/"),m(o,"class","bg-neutral-800 text-white w-fit rounded-full p-2 outline hover:outline-amber-600 hover:text-amber-600 transition-all duration-300 cursor-pointer"),m(t,"class","bg-[var(--background-color)] rounded-b-full p-4 px-10")},m(r,s){p(r,t,s),y(t,o),y(o,l)},p:u,i:u,o:u,d(r){r&&c(t)}}}class R extends k{constructor(t){super(),w(this,t,null,Q,h,{})}}function g(n){let t,o,l;const r=n[2].default,s=B(r,n,n[1],null);return{c(){t=d("div"),s&&s.c()},l(e){t=v(e,"DIV",{});var a=b(t);s&&s.l(a),a.forEach(c)},m(e,a){p(e,t,a),s&&s.m(t,null),l=!0},p(e,a){n=e,s&&s.p&&(!l||a&2)&&G(s,r,n,n[1],l?J(r,n[1],a,null):H(n[1]),null)},i(e){l||(f(s,e),o||K(()=>{o=L(t,P,{easing:x,duration:650}),o.start()}),l=!0)},o(e){_(s,e),l=!1},d(e){e&&c(t),s&&s.d(e)}}}function T(n){let t,o,l=n[0],r,s;t=new R({});let e=g(n);return{c(){D(t.$$.fragment),o=F(),e.c(),r=$()},l(a){I(t.$$.fragment,a),o=S(a),e.l(a),r=$()},m(a,i){N(t,a,i),p(a,o,i),e.m(a,i),p(a,r,i),s=!0},p(a,[i]){i&1&&h(l,l=a[0])?(M(),_(e,1,1,u),V(),e=g(a),e.c(),f(e,1),e.m(r.parentNode,r)):e.p(a,i)},i(a){s||(f(t.$$.fragment,a),f(e),s=!0)},o(a){_(t.$$.fragment,a),_(e),s=!1},d(a){z(t,a),a&&c(o),a&&c(r),e.d(a)}}}function U(n,t,o){let l;A(n,O,e=>o(0,l=e));let{$$slots:r={},$$scope:s}=t;return n.$$set=e=>{"$$scope"in e&&o(1,s=e.$$scope)},[l,s,r]}class Z extends k{constructor(t){super(),w(this,t,U,T,h,{})}}export{Z as default};
