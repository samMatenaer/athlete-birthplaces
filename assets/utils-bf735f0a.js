import{a as x,d as D}from"./generateRendererUtils-1f8868c2.js";const z="<Null>",I="equal-interval",N=1,S=5,M=10,C=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,g=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),k=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function b(t){return t==null||typeof t=="string"&&!t?z:t}function $(t){const e=t.normalizationField!=null||t.normalizationType!=null,l=t.minValue!=null||t.maxValue!=null,n=!!t.sqlExpression&&t.supportsSQLExpression;return!e&&!l&&!n}function Y(t){const e=t.returnDistinct?[...new Set(t.values)]:t.values,l=e.filter(r=>r!=null).length,n={count:l};return t.supportsNullCount&&(n.nullcount=e.length-l),t.percentileParams&&(n.median=F(e,t.percentileParams)),n}function w(t){const{values:e,useSampleStdDev:l,supportsNullCount:n}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,a=null,u=null,o=null,f=null,s=0;const d=t.minValue==null?-1/0:t.minValue,c=t.maxValue==null?1/0:t.maxValue;for(const m of e)Number.isFinite(m)?m>=d&&m<=c&&(a=a===null?m:a+m,r=Math.min(r,m),i=Math.max(i,m),s++):typeof m=="string"&&s++;if(s&&a!=null){u=a/s;let m=0;for(const v of e)Number.isFinite(v)&&v>=d&&v<=c&&(m+=(v-u)**2);f=l?s>1?m/(s-1):0:s>0?m/s:0,o=Math.sqrt(f)}else r=null,i=null;const p={avg:u,count:s,max:i,min:r,stddev:o,sum:a,variance:f};return n&&(p.nullcount=e.length-s),t.percentileParams&&(p.median=F(e,t.percentileParams)),p}function F(t,e){const{fieldType:l,value:n,orderBy:r,isDiscrete:i}=e,a=E(l,r==="desc");if((t=[...t].filter(p=>p!=null).sort((p,m)=>a(p,m))).length===0)return null;if(n<=0)return t[0];if(n>=1)return t[t.length-1];const u=(t.length-1)*n,o=Math.floor(u),f=o+1,s=u%1,d=t[o],c=t[f];return f>=t.length||i||typeof d=="string"||typeof c=="string"?d:d*(1-s)+c*s}function E(t,e){const l=e?1:-1,n=q(e),r=T(e);if(!(t&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...g].includes(t)))return(i,a)=>typeof i=="number"&&typeof a=="number"?n(i,a):typeof i=="string"&&typeof a=="string"?r(i,a):l;if(t==="esriFieldTypeDate")return(i,a)=>{const u=new Date(i).getTime(),o=new Date(a).getTime();return isNaN(u)||isNaN(o)?l:n(u,o)};if(g.has(t))return(i,a)=>n(i,a);if(t==="esriFieldTypeString")return(i,a)=>r(i,a);if(t==="esriFieldTypeGUID"||t==="esriFieldTypeGlobalID"){const i=T(e);return(a,u)=>i(y(a),y(u))}return e?(i,a)=>1:(i,a)=>-1}function h(t,e,l){if(l){if(t==null)return e==null?0:1;if(e==null)return-1}else{if(t==null)return e==null?0:-1;if(e==null)return 1}return null}function T(t){return t?(e,l)=>{const n=h(e,l,!0);return n??((e=e.toUpperCase())>(l=l.toUpperCase())?-1:e<l?1:0)}:(e,l)=>{const n=h(e,l,!1);return n??((e=e.toUpperCase())<(l=l.toUpperCase())?-1:e>l?1:0)}}function q(t){return t?(e,l)=>{const n=h(e,l,!0);return n??l-e}:(e,l)=>{const n=h(e,l,!1);return n??e-l}}function y(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function _(t,e){let l;for(l in t)k.includes(l)&&(Number.isFinite(t[l])||(t[l]=null));return e&&["avg","stddev","variance"].forEach(n=>{t[n]!=null&&(t[n]=Math.ceil(t[n]))}),t}function Q(t){const e={};for(let l of t)(l==null||typeof l=="string"&&l.trim()==="")&&(l=null),e[l]==null?e[l]={count:1,data:l}:e[l].count++;return{count:e}}function V(t){return(t==null?void 0:t.type)!=="coded-value"?[]:t.codedValues.map(e=>e.code)}function j(t,e,l,n){const r=t.count,i=[];if(l&&e){const a=[],u=V(e[0]);for(const o of u)if(e[1]){const f=V(e[1]);for(const s of f)if(e[2]){const d=V(e[2]);for(const c of d)a.push(`${b(o)}${n}${b(s)}${n}${b(c)}`)}else a.push(`${b(o)}${n}${b(s)}`)}else a.push(o);for(const o of a)r.hasOwnProperty(o)||(r[o]={data:o,count:0})}for(const a in r){const u=r[a];i.push({value:u.data,count:u.count,label:u.label})}return{uniqueValueInfos:i}}function H(t,e,l,n){let r=null;switch(e){case"log":t!==0&&(r=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(n)&&n!==0&&(r=t/n*100);break;case"field":Number.isFinite(l)&&l!==0&&(r=t/l);break;case"natural-log":t>0&&(r=Math.log(t));break;case"square-root":t>0&&(r=t**.5)}return r}function G(t,e){const l=U({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||S});return t=P(t,e.minValue,e.maxValue),x({definition:l,values:t,normalizationTotal:e.normalizationTotal})}function P(t,e,l){const n=e??-1/0,r=l??1/0;return t.filter(i=>Number.isFinite(i)&&i>=n&&i<=r)}function U(t){const{breakCount:e,field:l,normalizationField:n,normalizationType:r}=t,i=t.classificationMethod||I,a=i==="standard-deviation"?t.standardDeviationInterval||N:void 0;return new D({breakCount:e,classificationField:l,classificationMethod:i,normalizationField:r==="field"?n:void 0,normalizationType:r,standardDeviationInterval:a})}function J(t,e){let l=t.classBreaks;const n=l.length,r=l[0].minValue,i=l[n-1].maxValue,a=e==="standard-deviation",u=C;return l=l.map(o=>{var d;const f=o.label,s={minValue:o.minValue,maxValue:o.maxValue,label:f};if(a&&f){const c=((d=f.match(u))==null?void 0:d.map(p=>+p.trim()))??[];c.length===2?(s.minStdDev=c[0],s.maxStdDev=c[1],c[0]<0&&c[1]>0&&(s.hasAvg=!0)):c.length===1&&(f.includes("<")?(s.minStdDev=null,s.maxStdDev=c[0]):f.includes(">")&&(s.minStdDev=c[0],s.maxStdDev=null))}return s}),{minValue:r,maxValue:i,classBreakInfos:l,normalizationTotal:t.normalizationTotal}}function K(t,e){const l=B(t,e),n=l.intervals,r=l.min??0,i=l.max??0,a=n.map((u,o)=>({minValue:n[o][0],maxValue:n[o][1],count:0}));for(const u of t)if(u!=null&&u>=r&&u<=i){const o=O(n,u);o>-1&&a[o].count++}return{bins:a,minValue:r,maxValue:i,normalizationTotal:e.normalizationTotal}}function B(t,e){const{field:l,classificationMethod:n,standardDeviationInterval:r,normalizationType:i,normalizationField:a,normalizationTotal:u,minValue:o,maxValue:f}=e,s=e.numBins||M;let d=null,c=null,p=null;if((!n||n==="equal-interval")&&!i){if(o!=null&&f!=null)d=o,c=f;else{const m=w({values:t,minValue:o,maxValue:f,useSampleStdDev:!i,supportsNullCount:$({normalizationType:i,normalizationField:a,minValue:o,maxValue:f})});d=m.min??null,c=m.max??null}p=A(d??0,c??0,s)}else{const{classBreaks:m}=G(t,{field:l,normalizationType:i,normalizationField:a,normalizationTotal:u,classificationMethod:n,standardDeviationInterval:r,minValue:o,maxValue:f,numClasses:s});d=m[0].minValue,c=m[m.length-1].maxValue,p=m.map(v=>[v.minValue,v.maxValue])}return{min:d,max:c,intervals:p}}function O(t,e){let l=-1;for(let n=t.length-1;n>=0;n--)if(e>=t[n][0]){l=n;break}return l}function A(t,e,l){const n=(e-t)/l,r=[];let i,a=t;for(let u=1;u<=l;u++)i=a+n,i=Number(i.toFixed(16)),r.push([a,u===l?e:i]),a=i;return r}export{H as D,K as M,J as S,_ as T,b as c,w as d,Y as f,$ as m,F as p,E as v,j as x,Q as y,G as z};
//# sourceMappingURL=utils-bf735f0a.js.map
