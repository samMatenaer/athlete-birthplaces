import{mN as d,n3 as f,n4 as i,n1 as l,U as u}from"./index-8fbc1f4a.js";function y(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(s,t){const e={};for(const n of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=n;for(const c of r){const{id:h}=c,p=d(f(`${s.path}/${a}/attachments/${h}`)),m=i.fromJSON(c);m.set({url:p,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(m):e[a]=[m]}}return e}function b(s,t,e){let n={query:l({...s.query,f:"json",...y(t)})};return e&&(n={...e,...n,query:{...e.query,...n.query}}),u(s.path+"/queryAttachments",n).then(a=>a.data.attachmentGroups)}async function q(s,t,e){const{objectIds:n}=t,a=[];for(const o of n)a.push(u(s.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>n.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{b as executeAttachmentQuery,q as fetchAttachments,j as processAttachmentQueryResult};
