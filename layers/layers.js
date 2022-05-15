var wms_layers = [];


        var lyr_OpenStreetMapfr_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap.fr',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, under ODbL</a>',
                url: 'http://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ขอบเขต'
            });
var format_hospitel_3 = new ol.format.GeoJSON();
var features_hospitel_3 = format_hospitel_3.readFeatures(json_hospitel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospitel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospitel_3.addFeatures(features_hospitel_3);
var lyr_hospitel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospitel_3, 
                style: style_hospitel_3,
                interactive: true,
                title: '<img src="styles/legend/hospitel_3.png" /> hospitel'
            });
var format_Hospital_4 = new ol.format.GeoJSON();
var features_Hospital_4 = format_Hospital_4.readFeatures(json_Hospital_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_4.addFeatures(features_Hospital_4);
var lyr_Hospital_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_4, 
                style: style_Hospital_4,
                interactive: true,
                title: '<img src="styles/legend/Hospital_4.png" /> Hospital'
            });

lyr_OpenStreetMapfr_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr__2.setVisible(true);lyr_hospitel_3.setVisible(true);lyr_Hospital_4.setVisible(true);
var layersList = [lyr_OpenStreetMapfr_0,lyr_GoogleMaps_1,lyr__2,lyr_hospitel_3,lyr_Hospital_4];
lyr__2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_hospitel_3.set('fieldAliases', {'Hospitel': 'Hospitel', 'สังกัด': 'สังกัด', 'สิทธิ': 'สิทธิ', 'เบอร์': 'เบอร์', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Hospital_4.set('fieldAliases', {'ชื่อโรงพยาบาล': 'ชื่อโรงพยาบาล', 'ประเภท': 'ประเภท', 'การบริการ': 'การบริการ', 'สิทธิ': 'สิทธิ', 'lat': 'lat', 'long': 'long', 'field_7': 'field_7', });
lyr__2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_hospitel_3.set('fieldImages', {'Hospitel': 'TextEdit', 'สังกัด': 'TextEdit', 'สิทธิ': 'TextEdit', 'เบอร์': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hospital_4.set('fieldImages', {'ชื่อโรงพยาบาล': 'TextEdit', 'ประเภท': 'TextEdit', 'การบริการ': 'TextEdit', 'สิทธิ': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'field_7': 'TextEdit', });
lyr__2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'header label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_hospitel_3.set('fieldLabels', {'Hospitel': 'header label', 'สังกัด': 'header label', 'สิทธิ': 'header label', 'เบอร์': 'header label', 'Lat': 'inline label', 'Long': 'inline label', });
lyr_Hospital_4.set('fieldLabels', {'ชื่อโรงพยาบาล': 'header label', 'ประเภท': 'header label', 'การบริการ': 'header label', 'สิทธิ': 'header label', 'lat': 'inline label', 'long': 'inline label', 'field_7': 'no label', });
lyr_Hospital_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});