import{T as r}from"./color-3dc775af.js";import{n as h}from"./BaseGraphicContainer-d1b4bad6.js";class a extends h{renderChildren(e){this.attributeView.update(),this.children.some(t=>t.hasData)&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===r.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===r.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}export{a as i};
//# sourceMappingURL=GraphicContainer-6192f84f.js.map