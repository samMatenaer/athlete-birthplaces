import{j as o,al as p,am as a,an as r,ao as m}from"./index-fc217036.js";import{a as n}from"./BitmapContainer-fcb86f7d.js";import{f as h,u as d}from"./LayerView-18928023.js";import{v as c}from"./ExportStrategy-9a76f673.js";import{i as u}from"./RefreshableLayerView-ec5b6924.js";import"./WGLContainer-38e27347.js";import"./VertexArrayObject-33e28580.js";import"./Texture-ed549a22.js";import"./color-3dc775af.js";import"./ProgramTemplate-da079708.js";import"./MaterialKey-aaa20868.js";import"./utils-9e2add98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-0a5856ba.js";import"./earcut-61f7b102.js";import"./Bitmap-24ff5ab6.js";let t=class extends u(h(d)){update(i){this._strategy.update(i).catch(e=>{o(e)||p.getLogger(this.declaredClass).error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImageBitmap(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const R=t;export{R as default};
//# sourceMappingURL=BaseDynamicLayerView2D-19798311.js.map