import{hs as ir,hD as sr,aR as lr,am as T,an as A,ao as cr,bi as fr,c as w,b3 as ur,hE as pr,hF as Q,hG as W,hH as _,hI as yr,hJ as j,hK as gr,aE as hr,r as B,hL as mr,hM as Tr,hN as L,al as Ar,hO as q,gx as k,gw as D,hP as $r,hy as Pr,hQ as Fr,hR as dr,hS as Er,t as h,hT as C,hU as X,hV as Mr,bt as Rr,hW as xr,hX as vr}from"./index.js";import{e as Z}from"./mat3f64.js";import{e as $,o as wr}from"./mat4f64.js";import{c as M}from"./spatialReferenceEllipsoidUtils.js";import{v as S,y as _r,x as Cr}from"./quat.js";import{e as G}from"./quatf64.js";import{T as p,i as u}from"./BufferView.js";import{t as d,e as br,r as P,o as rr}from"./vec33.js";function E(r=Or){return[r[0],r[1],r[2],r[3]]}function ut(r,t,e=E()){return ir(e,r),e[3]=t,e}function pt(r,t,e=E()){return S(R,r,z(r)),S(H,t,z(t)),_r(R,H,R),Nr(e,sr(Cr(e,R)))}function yt(r){return r}function z(r){return lr(r[3])}function Nr(r,t){return r[3]=t,r}const Or=[0,0,1,0],R=G(),H=G();E();var V;let g=V=class extends fr{constructor(r){super(r),this.origin=w(),this.translation=w(),this.rotation=E(),this.scale=ur(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return S(J,this.rotation,z(this.rotation)),pr(r,J,this.translation,this.scale),r}get localMatrixInverse(){return Q($(),this.localMatrix)}applyLocal(r,t){return W(t,r,this.localMatrix)}applyLocalInverse(r,t){return W(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),c=$();return _(t,this.origin,c,l),yr(c,c,this.localMatrix),d(o,n,c),j(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;gr(a,wr)?br(o,n):d(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new hr({x:t,y:e,z:o,spatialReference:r})}equals(r){return B(r)&&this.geographic===r.geographic&&mr(this.origin,r.origin)&&Tr(this.localMatrix,r.localMatrix)}clone(){const r={origin:L(this.origin),translation:L(this.translation),rotation:E(this.rotation),scale:L(this.scale),geographic:this.geographic};return new V(r)}};T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),T([A({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),T([A()],g.prototype,"localMatrix",null),T([A()],g.prototype,"localMatrixInverse",null),g=V=T([cr("esri.geometry.support.MeshTransform")],g);const J=G(),Lr=g;function I(r,t){return r.isGeographic||r.isWebMercator&&((t==null?void 0:t.geographic)??!0)}const b=Ar.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,o,n){return O(o)?(N(m.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(b.error("Cannot convert spatial reference to PCPF"),n)}function Sr(r,t,e,o,n){return O(o)?(N(m.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(b.error("Cannot convert to spatial reference from PCPF"),n)}function zr(r,t,e){return j(r,t,0,e,M(t),0,r.length/3),e}function Vr(r,t,e){return j(r,M(e),0,t,e,0,r.length/3),t}function Yr(r,t,e){if(h(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return d(n,o,e),t}function jr(r,t,e){if(h(r))return t;C(f,e);const o=u.fromTypedArray(r),n=u.fromTypedArray(t);return P(n,o,f),X(f)||rr(n,n),t}function Gr(r,t,e){if(h(r))return t;C(f,e);const o=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(P(n,o,f),X(f)||rr(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Ir(r,t,e,o,n){if(!O(o))return b.error("Cannot convert spatial reference to PCPF"),n;N(m.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Ur(r,t,e,o,n){if(!O(o))return b.error("Cannot convert to spatial reference from PCPF"),n;N(m.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function N(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(tr(n))for(let c=0;c<i;c++)o.getVec(c,x),t.getVec(c,y),_(l,x,v,l),q(f,v),r===m.FROM_PCPF&&k(f,f),D(y,y,f),a.setVec(c,y);else for(let c=0;c<i;c++){o.getVec(c,x),t.getVec(c,y),_(l,x,v,l),q(f,v);const F=$r(e.get(c,1));let s=Math.cos(F);r===m.TO_PCPF&&(s=1/s),f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s,r===m.FROM_PCPF&&k(f,f),D(y,y,f),Pr(y,y),a.setVec(c,y)}return a}function O(r){return tr(r)||Wr(r)}function tr(r){return r.isWGS84||Fr(r)||dr(r)||Er(r)}function Wr(r){return r.isWebMercator}var m;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const x=w(),y=w(),v=$(),f=Z();function er(r,t,e){return I(t.spatialReference,e)?Dr(r,t,e):kr(r,t,e)}function qr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(h(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return er({position:Yr(o,new Float64Array(o.length),i),normal:B(n)?jr(n,new Float32Array(n.length),i):null,tangent:B(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function gt(r,t,e){if(e!=null&&e.useTransform){const{position:o,normal:n,tangent:a}=r;return{vertexAttributes:{position:o,normal:n,tangent:a},transform:new Lr({origin:[t.x,t.y,t.z??0],geographic:I(t.spatialReference,e)})}}return{vertexAttributes:er(r,t,e),transform:null}}function K(r,t,e){return I(t.spatialReference,e)?Qr(r,t,e):nr(r,t,e)}function ht(r,t,e,o){if(h(t))return K(r,e,o);const n=qr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?nr(n,e,o):K(n,e,o)}function kr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=U(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*c+a,o[s+1]=n[s+1]*c+i,o[s+2]=n[s+2]*F+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Dr(r,t,e){const o=t.spatialReference,n=or(t,e,Y),a=new Float64Array(r.position.length),i=Hr(r.position,n,o,a),l=C(ar,n);return{position:i,normal:Jr(i,a,r.normal,l,o),tangent:Kr(i,a,r.tangent,l,o)}}function Hr(r,t,e,o){d(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return Vr(o,n,e)}function Jr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);return P(u.fromTypedArray(a),u.fromTypedArray(e),o),Sr(a,r,t,n,a),a}function Kr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);P(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Ur(a,r,t,n,a),a}function nr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=U(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/c,o[s+1]=(n[s+1]-i)/c,o[s+2]=(n[s+2]-l)/F;return{position:o,normal:r.normal,tangent:r.tangent}}function Qr(r,t,e){const o=t.spatialReference;or(t,e,Y);const n=Q(tt,Y),a=new Float64Array(r.position.length),i=Xr(r.position,o,n,a),l=C(ar,n);return{position:i,normal:Zr(r.normal,r.position,a,o,l),tangent:rt(r.tangent,r.position,a,o,l)}}function or(r,t,e){_(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=U(t?t.unit:null,r.spatialReference);return Mr(e,e,[o,o,n]),e}function Xr(r,t,e,o){const n=zr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return d(l,a,e),i}function Zr(r,t,e,o,n){if(h(r))return null;const a=Br(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a);return P(i,i,n),a}function rt(r,t,e,o,n){if(h(r))return null;const a=Ir(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return P(i,i,n),a}function U(r,t){if(h(r))return et;const e=t.isGeographic?1:Rr(t),o=t.isGeographic?1:xr(t),n=vr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const Y=$(),tt=$(),ar=Z(),et={horizontal:1,vertical:1};export{Ur as L,zr as M,Vr as R,gt as _,Ir as a,K as b,E as c,z as d,ut as e,Lr as f,yt as g,Sr as h,ht as i,Br as j,qr as k,I as r,pt as v,er as x};