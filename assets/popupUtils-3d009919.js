import{t as m,ge as T,cJ as x,r as f}from"./index-fc217036.js";async function b(e,s=e.popupTemplate){var l,o;if(m(s))return[];const n=await s.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:c}=s,{objectIdField:t,typeIdField:i,globalIdField:d,relationships:u}=e;if(n.includes("*"))return["*"];const h=c?await T(e):[],p=x(e.fieldsIndex,[...n,...h]);return i&&p.push(i),p&&t&&((l=e.fieldsIndex)!=null&&l.has(t))&&!p.includes(t)&&p.push(t),p&&d&&((o=e.fieldsIndex)!=null&&o.has(d))&&!p.includes(d)&&p.push(d),u&&u.forEach(I=>{var r;const{keyField:a}=I;p&&a&&((r=e.fieldsIndex)!=null&&r.has(a))&&!p.includes(a)&&p.push(a)}),p}function E(e,s){return e.popupTemplate?e.popupTemplate:f(s)&&s.defaultPopupTemplateEnabled&&f(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{b as d,E as s};
//# sourceMappingURL=popupUtils-3d009919.js.map
