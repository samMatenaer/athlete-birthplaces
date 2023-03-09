import{iz as p,iA as y,iy as g,he as w,iB as I,f2 as d,t as h,a2 as _}from"./index-8fbc1f4a.js";class b{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function f(e){return new v(e)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function j(e){return new q(e)}const l=new Set;function z(e,t,n,m=!1,u){l.clear();for(const r in n){const i=e.get(r);if(!i)continue;const a=n[r],s=P(i,a);if(s!==a&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:a,sanitizedValue:s}}),l.add(i.name),i&&(m||i.editable)){const c=p(i,s);if(c)return f(y(c,i,s));t[i.name]=s}}for(const r of(e==null?void 0:e.requiredFields)??[])if(!l.has(r.name))return f(`missing required field "${r.name}"`);return null}function P(e,t){let n=t;return typeof t=="string"&&g(e)?n=parseFloat(t):t!=null&&w(e)&&typeof t!="string"&&(n=String(t)),I(n)}let o;function A(e,t){if(!e||!d(t))return e;if("rings"in e||"paths"in e){if(h(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function E(){return h(o)&&(o=await _(()=>import("./geometryEngineJSON-1e940afe.js"),["assets/geometryEngineJSON-1e940afe.js","assets/geometryEngineBase-e1a33b0a.js","assets/geometryEngineJSON-3f330436.js","assets/json-48e3ea08.js"])),o}async function F(e,t){!d(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await E()}export{f as a,j as f,A as g,z as m,F as w};
