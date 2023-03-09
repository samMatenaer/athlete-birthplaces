import{t as o,e as l}from"./executionError-fb3f283a.js";import{u as S,B as F,r as p,G as i,am as w}from"./arcadeUtils-0d5afada.js";import{e as c,c as h}from"./SpatialFilter-27b1de0f.js";import{dl as u}from"./index-fc217036.js";import{R as I,m as A,S as P,x as g,O as C,p as O,h as R}from"./geometryEngineAsync-bdb50792.js";import"./arcadeTimeUtils-f7f66cb8.js";import"./number-363920d6.js";import"./WhereClause-20e4b0c9.js";function f(r){return r instanceof u}function s(r,t,a,d){return d(r,t,async(y,e,n)=>{if(n.length<2)throw new o(r,l.WrongNumberOfParameters,t);if((n=S(n))[0]===null&&n[1]===null)return!1;if(i(n[0])){if(n[1]instanceof u)return new h({parentfeatureset:n[0],relation:a,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new o(r,l.InvalidParameter,t)}if(f(n[0])){if(f(n[1])){switch(a){case"esriSpatialRelEnvelopeIntersects":return R(w(n[0]),w(n[1]));case"esriSpatialRelIntersects":return R(n[0],n[1]);case"esriSpatialRelContains":return O(n[0],n[1]);case"esriSpatialRelOverlaps":return C(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return P(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new o(r,l.InvalidParameter,t)}if(i(n[1]))return new h({parentfeatureset:n[1],relation:a,relationGeom:n[0]});if(n[1]===null)return!1;throw new o(r,l.InvalidParameter,t)}if(n[0]!==null)throw new o(r,l.InvalidParameter,t);return i(n[1])?new c({parentfeatureset:n[1]}):!(n[1]instanceof u||n[1]===null)&&void 0})}function j(r){r.mode==="async"&&(r.functions.intersects=function(t,a){return s(t,a,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,a){return s(t,a,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,a){return s(t,a,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,a){return s(t,a,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,a){return s(t,a,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,a){return s(t,a,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,a){return s(t,a,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,a){return r.standardFunctionAsync(t,a,(d,y,e)=>{if(e=S(e),F(e,3,3,t,a),f(e[0])&&f(e[1]))return I(e[0],e[1],p(e[2]));if(e[0]instanceof u&&e[1]===null||e[1]instanceof u&&e[0]===null)return!1;if(i(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(i(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(i(e[0])&&e[1]instanceof u)return e[0].relate(e[1],p(e[2]));if(i(e[1])&&e[0]instanceof u)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new o(t,l.InvalidParameter,a)})})}export{j as registerFunctions};
//# sourceMappingURL=featuresetgeom-953471aa.js.map
