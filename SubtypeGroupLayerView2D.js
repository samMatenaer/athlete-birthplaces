import{am as d,ao as u,a6 as y,a7 as m,X as h,r as c,cD as b}from"./index.js";import g from"./FeatureLayerView2D.js";import"./Container.js";import"./Texture.js";import"./LayerView.js";import"./schemaUtils.js";import"./color.js";import"./utils.js";import"./MaterialKey.js";import"./visualVariablesUtils2.js";import"./ExpandedCIM.js";import"./BidiEngine.js";import"./Rect.js";import"./quantizationUtils.js";import"./floatRGBA.js";import"./util.js";import"./floorFilterUtils.js";import"./popupUtils.js";import"./RefreshableLayerView.js";function f(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends g{initialize(){this.addHandles([y(()=>this.view.scale,()=>this._update(),m)],"constructor")}isUpdating(){var o;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,a=this.tileRenderer==null||((o=this.tileRenderer)==null?void 0:o.updating),l=i&&(e||s||t||r||a);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${a}
`),l}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(a=>f(a,s)).map(a=>a.subtypeCode);if(!t.length)return e;e=c(e)?e:new b().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=d([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const E=n;export{E as default};