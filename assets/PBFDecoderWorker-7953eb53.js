import{iD as d,t as c,aV as p,iE as f,fE as y,fy as _,iF as m,iG as g,iH as P}from"./index-fc217036.js";class C{constructor(t,e,s){this.uid=t,this.geometry=e,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}let b=class{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}};function G(i,t){return t}function l(i,t,e,s){switch(e){case 0:return h(i,t+s,0);case 1:return i.originPosition==="lowerLeft"?h(i,t+s,1):T(i,t+s,1)}}function u(i,t,e,s){return e===2?h(i,t,2):l(i,t,e,s)}function v(i,t,e,s){return e===2?h(i,t,3):l(i,t,e,s)}function M(i,t,e,s){return e===3?h(i,t,3):u(i,t,e,s)}function h({translate:i,scale:t},e,s){return i[s]+e*t[s]}function T({translate:i,scale:t},e,s){return i[s]-e*t[s]}class R{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new b}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=d(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!c(e))for(const s of t.features)e(s.geometry)}createSpatialReference(){return new p}addField(t,e){t.fields.push(f.fromJSON(e));const s=t.fields.map(r=>r.name);this._attributesConstructor=function(){for(const r of s)this[r]=null}}addFeature(t,e){const s=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(s>0)for(const r in e.attributes){const o=e.attributes[r];typeof o=="string"&&o.length>s&&(e.attributes[r]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:s,queryGeometryType:r}=e,o=y(s.clone(),s,!1,!1,this._transform),a=_(o,r,!1,!1);let n=null;switch(r){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}a.type=n,t.queryGeometryType=r,t.queryGeometry=a}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,s,r)=>this.addCoordinatePoint(e,s,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,s,r)=>this._addCoordinatePolygon(e,s,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,s,r)=>this._addCoordinatePolyline(e,s,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,s,r)=>this._addCoordinateMultipoint(e,s,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:m(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new C(g(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,s)=>e+s,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,s){const r=this._transform?this._applyTransform(this._transform,e,s,0):e;if(r!=null)switch(s){case 0:t.x=r;break;case 1:t.y=r;break;case 2:t.hasZ?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,e){let s=0;return e<=1&&(s=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,s):t}_addCoordinatePolyline(t,e,s){this._dehydratedAddPointsCoordinate(t.paths,e,s)}_addCoordinatePolygon(t,e,s){this._dehydratedAddPointsCoordinate(t.rings,e,s)}_addCoordinateMultipoint(t,e,s){s===0&&t.points.push([]);const r=this._transformPathLikeValue(e,s);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,s){s===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,s),o=t[t.length-1],a=this._coordinateBuffer;if(a){if(s===0){const n=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(a.buffer,n,this._vertexDimension))}a[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(t){const{hasZ:e,hasM:s}=t;return e&&s?M:e?u:s?v:l}}class x{_parseFeatureQuery(t){var r;const e=P(t.buffer,new R(t.options)),s={...e,spatialReference:(r=e.spatialReference)==null?void 0:r.toJSON(),fields:e.fields?e.fields.map(o=>o.toJSON()):void 0};return Promise.resolve(s)}}function A(){return new x}export{A as default};
//# sourceMappingURL=PBFDecoderWorker-7953eb53.js.map
