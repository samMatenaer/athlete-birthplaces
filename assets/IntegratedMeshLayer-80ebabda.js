import{am as t,an as a,cb as S,bl as T,ao as f,bi as O,gi as b,kt as L,ly as x,cU as N,kJ as I,ae as R,dL as M,U as A,gN as w,gF as J,gG as U,gH as k,kk as j,gI as D,kw as V,a3 as K,bq as P,av as E,ft as z,cs as G,r as q,t as F,s as d,bk as C,kz as H,gb as B}from"./index-fc217036.js";import{g as m}from"./persistable-619a9db6.js";import{E as Q,L as v}from"./SceneService-4dac64da.js";import{s as W,l as X,u as Y,m as Z}from"./I3SLayerDefinitions-766db6db.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-ac9302d9.js";import"./originUtils-1469eeaf.js";import"./resourceUtils-36bcf00e.js";var h;let n=h=class extends O{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const l=new S;x(e,l,o.layer.spatialReference),i[r]=l.toJSON(o)}else i[r]=e.toJSON(o);delete i[r].spatialReference}clone(){return new h({geometry:N(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([T(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends I(R.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const r=new p;for(const o of e)r.add(c.fromJSON(o,i));return r}static async fromUrl(e,i,r){const o={url:M(e),origin:"service"},l=await A(e,{responseType:"json",signal:w(r,"signal")}),$=i.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:$}},o));return new p({url:e,items:u})}};t([a({type:String})],y.prototype,"url",void 0),y=p=t([f("esri.layers.support.SceneModifications")],y);const _=y;let s=class extends Q(J(U(k(j(D(V(B))))))){constructor(...e){super(...e),this._handles=new K,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(P(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,E))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,r){this._modificationsSource={url:z(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){G(r)}if(await this._fetchService(i),q(this._modificationsSource)){const r=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!F(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],s.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([a({type:W,readOnly:!0})],s.prototype,"nodePages",void 0),t([a({type:[X],readOnly:!0})],s.prototype,"materialDefinitions",void 0),t([a({type:[Y],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),t([a({type:[Z],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:_}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),t([C(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),t([a(H)],s.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=t([f("esri.layers.IntegratedMeshLayer")],s);const pe=s;export{pe as default};
//# sourceMappingURL=IntegratedMeshLayer-80ebabda.js.map
