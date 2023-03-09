import{t as h,d0 as f,fH as y,Q as z}from"./index-8fbc1f4a.js";import{L as r,h as g}from"./color-0cdbba8e.js";import{l as S}from"./visualVariablesUtils-ab12c831.js";const $=8388607,v=8388608,E=254,x=255,A=0,m=1,d=e=>(e&v)>>>23,D=e=>e&$,F=e=>d(e)===m?E:x;function L(e){return d(e)===m}function U(e,s){return((s?v:0)|e)>>>0}const R=(e,s)=>e&&((...t)=>s.warn("DEBUG:",...t))||(()=>null),T=!1;function Z(e,s){if(!e||!s)return e;switch(s){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function V(e){return{value:e.value,size:f(e.size)}}function a(e){return(e??[]).map(s=>V(s))}function u(e){if(typeof e=="string"||typeof e=="number")return f(e);const s=e;return{type:"size",expression:s.expression,stops:a(s.stops)}}const c=e=>{const s=[],t=[],n=a(e),o=n.length;for(let l=0;l<6;l++){const i=n[Math.min(l,o-1)];s.push(i.value),t.push(i.size==null?y:z(i.size))}return{values:new Float32Array(s),sizes:new Float32Array(t)}};function k(e){const s=e&&e.length>0?{}:null,t=s?{}:null;if(!s||!t)return{vvFields:s,vvRanges:t};for(const n of e)if(n.field&&(s[n.type]=n.field),n.type==="size"){t.size||(t.size={});const o=n;switch(S(o)){case r.SIZE_MINMAX_VALUE:t.size.minMaxValue={minDataValue:o.minDataValue,maxDataValue:o.maxDataValue,minSize:u(o.minSize),maxSize:u(o.maxSize)};break;case r.SIZE_SCALE_STOPS:t.size.scaleStops={stops:a(o.stops)};break;case r.SIZE_FIELD_STOPS:if(o.levels){const l={};for(const i in o.levels)l[i]=c(o.levels[i]);t.size.fieldStops={type:"level-dependent",levels:l}}else t.size.fieldStops={type:"static",...c(o.stops)};break;case r.SIZE_UNIT_VALUE:t.size.unitValue={unit:o.valueUnit,valueRepresentation:o.valueRepresentation??void 0}}}else if(n.type==="color")t.color=I(n);else if(n.type==="opacity")t.opacity=_(n);else if(n.type==="rotation"){const o=n;t.rotation={type:o.rotationType}}return{vvFields:s,vvRanges:t}}function _(e){const s={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;const t=e.stops;for(let n=0;n<8;++n){const o=t[Math.min(n,t.length-1)];s.values[n]=o.value,s.opacities[n]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;for(let n=0;n<8;n++)s.values[n]=1/0,s.opacities[n]=t}}return s}function p(e,s,t){e[4*s+0]=t.r/255,e[4*s+1]=t.g/255,e[4*s+2]=t.b/255,e[4*s+3]=t.a}function I(e){if(h(e)||e.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;s.field=e.field;const t=e.stops;for(let n=0;n<8;++n){const o=t[Math.min(n,t.length-1)];s.values[n]=o.value,p(s.colors,n,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let n=0;n<8;n++)s.values[n]=1/0,p(s.colors,n,t)}}for(let t=0;t<32;t+=4)g(s.colors,t,!0);return s}export{$ as a,k as b,m as c,d as e,D as f,F as i,T as l,R as n,L as p,Z as r,U as s,A as u};
