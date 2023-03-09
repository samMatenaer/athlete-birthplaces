import{ad as L,s as w,g9 as u,dZ as l}from"./index-8fbc1f4a.js";import{a as I}from"./lazyLayerLoader-9233d8ca.js";import{getNumLayersAndTables as m,preprocessFSItemData as S,getSubtypeGroupLayerIds as g,getFirstLayerOrTableId as T}from"./layersLoader-2298502f.js";import{t as i}from"./fetchService-adb26909.js";async function q(e){!e.portalItem||e.portalItem instanceof L||(e={...e,portalItem:new L(e.portalItem)});const a=await v(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function v(e){return await e.load(),G(await F(e))}async function F(e){switch(e.type){case"Map Service":return M(e);case"Feature Service":return $(e);case"Feature Collection":return b(e);case"Scene Service":return h(e);case"Image Service":return C(e);case"Stream Service":return V();case"Vector Tile Service":return j();case"GeoJson":return W();case"CSV":return D();case"KML":return K();case"WFS":return O();case"WMTS":return x();case"WMS":return k();case"Feed":return A();default:throw new w("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function G(e){const a=I[e.className];return{constructor:await a(),properties:e.properties}}async function M(e){return await R(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function $(e){if(u(e,"Oriented Imagery Layer"))return J(e);const a=await N(e);if(typeof a=="object"){const r={};return a.id!=null&&(r.layerId=a.id),{className:a.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}async function h(e){var r,t;const a=await N(e);if(typeof a=="object"){const s={};let c;if(a.id!=null?(s.layerId=a.id,c=`${e.url}/layers/${a.id}`):c=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const o of Object.keys(l))if(e.typeKeywords.includes(o))return{className:l[o]}}const n=await i(c);return{className:l[n==null?void 0:n.layerType]||"SceneLayer",properties:s}}return a===!1?((t=await i(e.url))==null?void 0:t.layerType)==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}:{className:"GroupLayer"}}async function b(e){await e.load();const a=u(e,"Map Notes"),r=u(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(u(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return m(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function C(e){var n,o,p,f;await e.load();const a=((n=e.typeKeywords)==null?void 0:n.map(d=>d.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=(o=await e.fetchData())==null?void 0:o.layerType;if(r==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(r==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const t=await i(e.url),s=(p=t.cacheType)==null?void 0:p.toLowerCase(),c=(f=t.capabilities)==null?void 0:f.toLowerCase().includes("tilesonly");return s==="map"||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function V(){return{className:"StreamLayer"}}function j(){return{className:"VectorTileLayer"}}function W(){return{className:"GeoJSONLayer"}}function D(){return{className:"CSVLayer"}}function K(){return{className:"KMLLayer"}}function O(){return{className:"WFSLayer"}}function k(){return{className:"WMSLayer"}}function x(){return{className:"WMTSLayer"}}function A(){return{className:"StreamLayer"}}async function J(e){await e.load();const a=await e.fetchData();return a.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:a}}async function R(e){return(await i(e.url)).tileInfo}async function N(e){const a=e.url;if(!a||a.match(/\/\d+$/))return{};await e.load();const r=await e.fetchData();if(e.type==="Feature Service"){const t=y(await S(r,a));if(typeof t=="object"){const s=g(r);t.className=t.id!=null&&s.includes(t.id)?"SubtypeGroupLayer":"FeatureLayer"}return t}return m(r)>0?y(r):y(await i(a))}function y(e){return m(e)===1&&{id:T(e)}}export{q as fromItem,F as selectLayerClassPath};
