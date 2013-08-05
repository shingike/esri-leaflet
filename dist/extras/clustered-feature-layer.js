/*! Esri-Leaflet - v0.0.1 - 2013-08-05
*   Copyright (c) 2013 Environmental Systems Research Institute, Inc.
*   Apache License*/
!function(a,Terraformer){a.esri.ClusteredFeatureLayer=a.Class.extend({includes:a.esri.Mixins.featureGrid,options:{cellSize:512,debounce:100,deduplicate:!0,pointToLayer:function(b,c){return new a.marker(c)},onEachMarker:void 0},initialize:function(b,c){a.Util.setOptions(this,c),this.url=a.esri.Util.cleanUrl(b),this._loaded=[],this.cluster=this.options.cluster||new a.MarkerClusterGroup},onAdd:function(a){this.options.cluster.addTo(a),this._initializeFeatureGrid(a)},onRemove:function(a){this._destroyFeatureGrid(a)},addTo:function(a){return a.addLayer(this),this},_render:function(b){if(b.objectIdFieldName&&b.features.length&&!b.error)for(var c=b.objectIdFieldName,d=b.features.length-1;d>=0;d--){var e=b.features[d],f=e.attributes[c];if(a.esri.Util.indexOf(this._loaded,f)<0){var g=Terraformer.ArcGIS.parse(e);g.id=f;var h=this.options.createMarker(g,[g.geometry.coordinates[1],g.geometry.coordinates[0]]);this.options.onEachMarker&&this.options.onEachMarker(g,h),this.cluster.addLayer(h),this._loaded.push(f)}}}}),a.esri.clusteredFeatureLayer=function(b,c){return new a.esri.ClusteredFeatureLayer(b,c)}}(L,Terraformer);