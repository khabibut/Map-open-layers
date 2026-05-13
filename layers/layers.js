ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-285403.248205, 6538187.976233, 162151.426792, 6712800.991267]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ServiceBoundarycopy_1 = new ol.format.GeoJSON();
var features_ServiceBoundarycopy_1 = format_ServiceBoundarycopy_1.readFeatures(json_ServiceBoundarycopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceBoundarycopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceBoundarycopy_1.addFeatures(features_ServiceBoundarycopy_1);
var lyr_ServiceBoundarycopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceBoundarycopy_1, 
                style: style_ServiceBoundarycopy_1,
                popuplayertitle: 'Service Boundary copy',
                interactive: false,
                title: '<img src="styles/legend/ServiceBoundarycopy_1.png" /> Service Boundary copy'
            });
var format_Optimizednetworksitesallsites_2 = new ol.format.GeoJSON();
var features_Optimizednetworksitesallsites_2 = format_Optimizednetworksitesallsites_2.readFeatures(json_Optimizednetworksitesallsites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Optimizednetworksitesallsites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Optimizednetworksitesallsites_2.addFeatures(features_Optimizednetworksitesallsites_2);
var lyr_Optimizednetworksitesallsites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Optimizednetworksitesallsites_2, 
                style: style_Optimizednetworksitesallsites_2,
                popuplayertitle: 'Optimized network sites all sites',
                interactive: true,
                title: '<img src="styles/legend/Optimizednetworksitesallsites_2.png" /> Optimized network sites all sites'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ServiceBoundarycopy_1.setVisible(true);lyr_Optimizednetworksitesallsites_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ServiceBoundarycopy_1,lyr_Optimizednetworksitesallsites_2];
lyr_ServiceBoundarycopy_1.set('fieldAliases', {'company': 'company', 'wrz_name': 'wrz_name', 'rz_id': 'rz_id', 'company_ty': 'company_ty', 'shape_leng': 'shape_leng', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', 'HH_RFI': 'HH_RFI', 'NoneHH_RFI': 'NoneHH_RFI', 'TotalMeter': 'TotalMeter', 'Rollout': 'Rollout', 'M3/6 Cover': 'M3/6 Cover', 'WRZ Short': 'WRZ Short', 'Scarcity': 'Scarcity', 'Meter Age': 'Meter Age', 'Leakage': 'Leakage', 'NB Cover': 'NB Cover', 'WIZE Eff': 'WIZE Eff', 'Y1 TScore': 'Y1 TScore', 'Y2-5TSCORE': 'Y2-5TSCORE', 'Technology': 'Technology', 'NBCover': 'NBCover', 'Y2 Rank': 'Y2 Rank', });
lyr_Optimizednetworksitesallsites_2.set('fieldAliases', {'Site ID': 'Site ID', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Site Owner': 'Site Owner', 'Forecast': 'Forecast', });
lyr_ServiceBoundarycopy_1.set('fieldImages', {'company': 'TextEdit', 'wrz_name': 'TextEdit', 'rz_id': 'TextEdit', 'company_ty': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', 'HH_RFI': 'TextEdit', 'NoneHH_RFI': 'TextEdit', 'TotalMeter': 'TextEdit', 'Rollout': 'TextEdit', 'M3/6 Cover': 'TextEdit', 'WRZ Short': 'TextEdit', 'Scarcity': 'TextEdit', 'Meter Age': 'TextEdit', 'Leakage': 'TextEdit', 'NB Cover': 'TextEdit', 'WIZE Eff': 'TextEdit', 'Y1 TScore': 'TextEdit', 'Y2-5TSCORE': 'TextEdit', 'Technology': 'TextEdit', 'NBCover': 'TextEdit', 'Y2 Rank': 'TextEdit', });
lyr_Optimizednetworksitesallsites_2.set('fieldImages', {'Site ID': '', 'Longitude': '', 'Latitude': '', 'Site Owner': '', 'Forecast': '', });
lyr_ServiceBoundarycopy_1.set('fieldLabels', {'company': 'inline label - always visible', 'wrz_name': 'hidden field', 'rz_id': 'hidden field', 'company_ty': 'hidden field', 'shape_leng': 'hidden field', 'st_area_sh': 'hidden field', 'st_perimet': 'hidden field', 'HH_RFI': 'hidden field', 'NoneHH_RFI': 'hidden field', 'TotalMeter': 'hidden field', 'Rollout': 'hidden field', 'M3/6 Cover': 'hidden field', 'WRZ Short': 'hidden field', 'Scarcity': 'hidden field', 'Meter Age': 'hidden field', 'Leakage': 'hidden field', 'NB Cover': 'hidden field', 'WIZE Eff': 'hidden field', 'Y1 TScore': 'hidden field', 'Y2-5TSCORE': 'hidden field', 'Technology': 'hidden field', 'NBCover': 'no label', 'Y2 Rank': 'hidden field', });
lyr_Optimizednetworksitesallsites_2.set('fieldLabels', {'Site ID': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Site Owner': 'hidden field', 'Forecast': 'inline label - visible with data', });
lyr_Optimizednetworksitesallsites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});