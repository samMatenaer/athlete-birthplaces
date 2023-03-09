import{r as o,at as f,ae as w,a6 as p,a7 as n,bq as y,t as _,am as V,ao as v}from"./index-5be327fa.js";import{h as C}from"./Container-abf16040.js";import{r as b}from"./GroupContainer-3f33703e.js";import{f as H,u as T}from"./LayerView-87c40c57.js";import{i as g}from"./GraphicContainer-f07d87e6.js";import{a as d}from"./GraphicsView2D-4f243c71.js";import"./Texture-0acc3c7f.js";import"./WGLContainer-2eecf7ee.js";import"./VertexArrayObject-6cdb6ff4.js";import"./color-07427e33.js";import"./ProgramTemplate-871ef44b.js";import"./MaterialKey-f3e0d2fe.js";import"./utils-86ca6992.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./BaseGraphicContainer-75c07d45.js";import"./FeatureContainer-f46fd607.js";import"./AttributeStoreView-9147237c.js";import"./TiledDisplayObject-95ae21d2.js";import"./visualVariablesUtils-d12a4ac4.js";import"./visualVariablesUtils-09f66a0f.js";import"./TileContainer-3757efda.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-99ff4391.js";import"./BidiEngine-836b7ef6.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-95d000c1.js";import"./floatRGBA-b5760baa.js";import"./normalizeUtilsSync-a4aa398f.js";import"./projectionSupport-7ddc688f.js";import"./json-48e3ea08.js";import"./Matcher-52fe3d1e.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-eba779fd.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-19a5f5ac.js";import"./util-3f742baf.js";import"./ComputedAttributeStorage-aedfbce9.js";import"./arcadeTimeUtils-e22e7151.js";import"./executionError-fb3f283a.js";import"./centroid-23d4a258.js";const m="sublayers",l="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends H(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):w.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(o);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([p(()=>s.visible,h=>r.container.visible=h,n),p(()=>r.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new C,r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const h=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",h.graphicUpdateHandler),p(()=>s.visible,u=>h.container.visible=u,n),p(()=>h.updating,()=>this.notifyChange("updating"),n)],l),a.addChild(h.container),this.container.addChild(a),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const ui=c;export{ui as default};