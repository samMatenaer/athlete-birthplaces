import{kj as p,kk as b,gG as v,gH as u,l7 as c,l8 as f,gI as _,ca as g,l9 as m,a6 as d,la as L,r as O,kx as w,lb as M,am as t,an as l,bl as $,av as h,ao as V,gb as x}from"./index.js";import{a as C}from"./lazyLayerLoader.js";let s=class extends p(b(v(u(c(f(_(x))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new g({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=m(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(d(()=>this.visible,this._onVisibilityChange.bind(this),h))}_writeLayers(i,e,o,r){const a=[];if(!i)return a;i.forEach(y=>{const n=L(y,r.webmap?r.webmap.getLayerJSONFromResourceInfo(y):null,r);O(n)&&n.layerType&&a.push(n)}),e.layers=a}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:C},i)),Promise.resolve(this)}async loadAll(){return w(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=d(()=>i.visible,e=>this._onChildVisibilityChange(i,e),h)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!M(this).initialized)return;const o=this.layers;let r=o.find(a=>a.visible);switch(i){case"exclusive":o.length&&!r&&(r=o.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":o.forEach(a=>{a.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};t([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),t([l({readOnly:!0})],s.prototype,"allTables",void 0),t([l()],s.prototype,"fullExtent",void 0),t([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),t([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),t([$("layers")],s.prototype,"_writeLayers",null),t([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),t([l({json:{origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),t([l()],s.prototype,"spatialReference",void 0),t([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),t([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],s.prototype,"visibilityMode",null),s=t([V("esri.layers.GroupLayer")],s);const k=s;export{k as default};