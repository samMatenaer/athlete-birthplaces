import{gH as n,gI as p,mF as l,am as r,an as i,ao as u,gb as d,s as y}from"./index-fc217036.js";let t=class extends n(p(d)){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unsupported layer type";s&&(a+=" "+s),o(new y("layer:unsupported-layer-type",a,{layerType:s}))})}))}read(e,o){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,o)}write(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),r([i({type:["show","hide"]})],t.prototype,"listMode",void 0),r([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=r([u("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};
//# sourceMappingURL=UnsupportedLayer-ff78aa54.js.map
