import{b as c}from"./WGLContainer-1491f5d4.js";import{q as d}from"./index-8fbc1f4a.js";class f extends c{constructor(){super(...arguments),this._prevFBO=void 0,this.requiresDedicatedFBO=!1}dispose(){}doRender(r){const o=this.createRenderParams(r),{context:e,painter:t,profiler:n}=o;this._prevFBO=e.getBoundFramebufferObject(),n.recordContainerStart(this.name);const s=this._getFbo(o),a=t.getRenderTarget();e.bindFramebuffer(s),t.setRenderTarget(s),e.setDepthWriteEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1);for(const i of this.children)i.beforeRender(r);for(const i of this.children)i.processRender(o);for(const i of this.children)i.afterRender(r);t.setRenderTarget(a),t.releaseFbo(s),e.bindFramebuffer(this._prevFBO),t.beforeRenderLayer(o,this._clippingInfos?255:0,this.computedOpacity),s.colorTexture&&(e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),t.blitTexture(e,s.colorTexture,d.NEAREST)),t.compositeLayer(o,this.computedOpacity),n.recordContainerEnd()}createRenderParams(r){return{...super.createRenderParams(r),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(r){const{context:o,painter:e}=r,{width:t,height:n}=o.getViewport();return e.acquireFbo(t,n)}}export{f as r};
