import{hd as h,s as i,r as c,U as d,kg as b,kh as w,e4 as v,a2 as z,gq as g,ki as j}from"./index-8fbc1f4a.js";let s=y();function y(){return new h(50)}function x(){s=y()}function I(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return f(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function P(e,r){if(e.type==="icon")return L(e,r);if(e.type==="object")return B(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){var t,n;if((t=e.resource)!=null&&t.href)return _(e.resource.href).then(o=>[o.width,o.height]);if((n=e.resource)!=null&&n.primitive)return c(r)?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function L(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function _(e){return d(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return S(e,r).then(t=>b(t))}async function B(e,r){const t=await f(e,r);return w(t,e)}async function S(e,r){var n;if(!e.isPrimitive){const o=v((n=e.resource)==null?void 0:n.href),u=s.get(o);if(u!==void 0)return u;const m=await z(()=>import("./objectResourceUtils-6ced698b.js").then(p=>p.o),["assets/objectResourceUtils-6ced698b.js","assets/devEnvironmentUtils-5002a058.js","assets/index-8fbc1f4a.js","assets/index-cf8603e2.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-b98edd40.js","assets/vec33-fb31525a.js","assets/DefaultMaterial_COLOR_GAMMA-cecc915b.js","assets/types-e1c0a5bf.js","assets/Version-f3a0651e.js","assets/quat-7161c3cf.js","assets/quatf64-3363c48e.js","assets/resourceUtils-71fe9113.js","assets/basicInterfaces-b7051eb1.js","assets/Indices-38c9d943.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-772ed311.js","assets/Util-7d50c41d.js","assets/sphere-27a2a4eb.js","assets/VertexAttribute-15d1866a.js","assets/OrderIndependentTransparency-bface1b8.js","assets/Texture-48a7e7ed.js","assets/VertexArrayObject-ad65279e.js","assets/InterleavedLayout-47a221a7.js","assets/vec3f32-ad1dc57f.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-43496424.js"]),a=await m.fetch(o,{disableTextures:!0});return s.put(o,a.referenceBoundingBox),a.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=g(j(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,l as computeIconLayerResourceSize,I as computeLayerResourceSize,P as computeLayerSize,f as computeObjectLayerResourceSize};
