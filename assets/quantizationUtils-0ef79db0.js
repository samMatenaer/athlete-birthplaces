import{cx as w,cu as P,cd as L,cy as M,cv as v,r as g,t as A}from"./index-fc217036.js";const f=(r,n,t)=>[n,t],c=(r,n,t)=>[n,t,r[2]],m=(r,n,t)=>[n,t,r[2],r[3]];function U(r){return r?{originPosition:r.originPosition==="upper-left"?"upperLeft":r.originPosition==="lower-left"?"lowerLeft":r.originPosition,scale:r.tolerance?[r.tolerance,r.tolerance]:[1,1],translate:g(r.extent)?[r.extent.xmin,r.extent.ymax]:[0,0]}:null}function h({scale:r,translate:n},t){return Math.round((t-n[0])/r[0])}function x({scale:r,translate:n},t){return Math.round((n[1]-t)/r[1])}function p(r,n,t){const u=[];let o,i,l,e;for(let a=0;a<t.length;a++){const s=t[a];a>0?(l=h(r,s[0]),e=x(r,s[1]),l===o&&e===i||(u.push(n(s,l-o,e-i)),o=l,i=e)):(o=h(r,s[0]),i=x(r,s[1]),u.push(n(s,o,i)))}return u.length>0?u:null}function b(r,n,t,u){return p(r,t?u?m:c:u?c:f,n)}function q(r,n,t,u){const o=[],i=t?u?m:c:u?c:f;for(let l=0;l<n.length;l++){const e=p(r,i,n[l]);e&&e.length>=3&&o.push(e)}return o.length?o:null}function B(r,n,t,u){const o=[],i=t?u?m:c:u?c:f;for(let l=0;l<n.length;l++){const e=p(r,i,n[l]);e&&e.length>=2&&o.push(e)}return o.length?o:null}function y({scale:r,translate:n},t){return t*r[0]+n[0]}function z({scale:r,translate:n},t){return n[1]-t*r[1]}function $(r,n,t){const u=new Array(t.length);if(!t.length)return u;const[o,i]=r.scale;let l=y(r,t[0][0]),e=z(r,t[0][1]);u[0]=n(t[0],l,e);for(let a=1;a<t.length;a++){const s=t[a];l+=s[0]*o,e-=s[1]*i,u[a]=n(s,l,e)}return u}function d(r,n,t){const u=new Array(t.length);for(let o=0;o<t.length;o++)u[o]=$(r,n,t[o]);return u}function C(r,n,t,u){return $(r,t?u?m:c:u?c:f,n)}function E(r,n,t,u){return d(r,t?u?m:c:u?c:f,n)}function F(r,n,t,u){return d(r,t?u?m:c:u?c:f,n)}function G(r,n,t,u,o){return n.xmin=h(r,t.xmin),n.ymin=x(r,t.ymin),n.xmax=h(r,t.xmax),n.ymax=x(r,t.ymax),n!==t&&(u&&(n.zmin=t.zmin,n.zmax=t.zmax),o&&(n.mmin=t.mmin,n.mmax=t.mmax)),n}function I(r,n,t,u,o){return n.points=b(r,t.points,u,o)??[],n}function N(r,n,t,u,o){return n.x=h(r,t.x),n.y=x(r,t.y),n!==t&&(u&&(n.z=t.z),o&&(n.m=t.m)),n}function O(r,n,t,u,o){const i=q(r,t.rings,u,o);return i?(n.rings=i,n):null}function S(r,n,t,u,o){const i=B(r,t.paths,u,o);return i?(n.paths=i,n):null}function V(r,n){return r&&n?w(n)?N(r,{},n,!1,!1):P(n)?S(r,{},n,!1,!1):L(n)?O(r,{},n,!1,!1):M(n)?I(r,{},n,!1,!1):v(n)?G(r,{},n,!1,!1):null:null}function j(r,n,t,u,o){return g(t)&&(n.points=C(r,t.points,u,o)),n}function k(r,n,t,u,o){return A(t)||(n.x=y(r,t.x),n.y=z(r,t.y),n!==t&&(u&&(n.z=t.z),o&&(n.m=t.m))),n}function D(r,n,t,u,o){return g(t)&&(n.rings=F(r,t.rings,u,o)),n}function H(r,n,t,u,o){return g(t)&&(n.paths=E(r,t.paths,u,o)),n}export{D as B,H as C,N as O,V as U,j as q,U as s,k as v};
//# sourceMappingURL=quantizationUtils-0ef79db0.js.map
