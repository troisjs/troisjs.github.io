import{s as n,n as a}from"./app.d6ea9fda.js";function e(n,a){a instanceof Object&&Object.entries(a).forEach((([a,e])=>{n[a]=e}))}function t(n,a,e){a.forEach((a=>{c(n,a,e)}))}function c(t,c,o,s){s||(s=c);const f=n(t,c);f.value instanceof Object?(e(o[s],f.value),a(f,(n=>{e(o[s],n)}),{deep:!0})):(f.value&&(o[s]=t[c]),a(f,(n=>{o[s]=n})))}function o(n,a,e){return n+(a-n)*(e=(e=e<0?0:e)>1?1:e)}function s(n,a,e){n.x=o(n.x,a.x,e),n.y=o(n.y,a.y,e)}export{t as a,c as b,s as c,o as l};
