import{am as r,an as a,ao as o}from"./index.js";import s from"./FeatureLayerView2D.js";import"./Container.js";import"./Texture.js";import"./LayerView.js";import"./schemaUtils.js";import"./color.js";import"./utils.js";import"./MaterialKey.js";import"./visualVariablesUtils2.js";import"./ExpandedCIM.js";import"./BidiEngine.js";import"./Rect.js";import"./quantizationUtils.js";import"./floatRGBA.js";import"./util.js";import"./floorFilterUtils.js";import"./popupUtils.js";import"./RefreshableLayerView.js";const m=t=>{let e=class extends t{get availableFields(){return this.layer.fieldsIndex.fields.map(p=>p.name)}};return r([a()],e.prototype,"layer",void 0),r([a({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let i=class extends m(s){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=r([o("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const R=i;export{R as default};