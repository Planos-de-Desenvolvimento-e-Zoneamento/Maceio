ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-35.733658, -9.686375, -35.712978, -9.672952]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosDutoviriosExternos_13 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_13 = format_AcessosDutoviriosExternos_13.readFeatures(json_AcessosDutoviriosExternos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosExternos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_13.addFeatures(features_AcessosDutoviriosExternos_13);
var lyr_AcessosDutoviriosExternos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_13, 
                style: style_AcessosDutoviriosExternos_13,
                popuplayertitle: 'Acessos Dutoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_13.png" /> Acessos Dutoviários Externos '
            });
var format_AcessosFerroviariosExterno_14 = new ol.format.GeoJSON();
var features_AcessosFerroviariosExterno_14 = format_AcessosFerroviariosExterno_14.readFeatures(json_AcessosFerroviariosExterno_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviariosExterno_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviariosExterno_14.addFeatures(features_AcessosFerroviariosExterno_14);
var lyr_AcessosFerroviariosExterno_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviariosExterno_14, 
                style: style_AcessosFerroviariosExterno_14,
                popuplayertitle: 'Acessos Ferroviarios Externo',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviariosExterno_14.png" /> Acessos Ferroviarios Externo'
            });
var format_AcessosRodoviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_15 = format_AcessosRodoviriosInternosLongoPrazo_15.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_15.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_15);
var lyr_AcessosRodoviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_15, 
                style: style_AcessosRodoviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_15.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_16 = format_AcessosRodoviriosInternosMdioPrazo_16.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_16.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_16);
var lyr_AcessosRodoviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_16, 
                style: style_AcessosRodoviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_16.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_17 = format_AcessosRodoviriosInternosCurtoPrazo_17.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_17.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_17);
var lyr_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_17, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_17.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_18 = format_AcessosRodoviriosInternosSituaoAtual_18.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_18.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_18);
var lyr_AcessosRodoviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_18, 
                style: style_AcessosRodoviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_18.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_19 = format_AcessosRodoviriosExternos_19.readFeatures(json_AcessosRodoviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_19.addFeatures(features_AcessosRodoviriosExternos_19);
var lyr_AcessosRodoviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_19, 
                style: style_AcessosRodoviriosExternos_19,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_19.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_28 = format_reasNoAfetassOperaesPorturiasLongoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_29 = format_reasNoAfetassOperaesPorturiasMdioPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_31 = format_reasNoAfetassOperaesPorturiasSituaoAtual_31.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_31.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_31);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_31, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_31.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_32 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_32 = format_reaseInstalaesAlfandegadas_32.readFeatures(json_reaseInstalaesAlfandegadas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_32.addFeatures(features_reaseInstalaesAlfandegadas_32);
var lyr_reaseInstalaesAlfandegadas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_32, 
                style: style_reaseInstalaesAlfandegadas_32,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_32.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_33 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_33 = format_AcostagemLongoPrazo_33.readFeatures(json_AcostagemLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_33.addFeatures(features_AcostagemLongoPrazo_33);
var lyr_AcostagemLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_33, 
                style: style_AcostagemLongoPrazo_33,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_33.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_34 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_34 = format_AcostagemMdioPrazo_34.readFeatures(json_AcostagemMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_34.addFeatures(features_AcostagemMdioPrazo_34);
var lyr_AcostagemMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_34, 
                style: style_AcostagemMdioPrazo_34,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_34.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_35 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_35 = format_AcostagemCurtoPrazo_35.readFeatures(json_AcostagemCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_35.addFeatures(features_AcostagemCurtoPrazo_35);
var lyr_AcostagemCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_35, 
                style: style_AcostagemCurtoPrazo_35,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_35.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_36 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_36 = format_AcostagemSituaoAtual_36.readFeatures(json_AcostagemSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_36.addFeatures(features_AcostagemSituaoAtual_36);
var lyr_AcostagemSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_36, 
                style: style_AcostagemSituaoAtual_36,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_36.png" /> Acostagem - Situação Atual '
            });
var format_TerminaisdePassageirosLongoPrazo_37 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosLongoPrazo_37 = format_TerminaisdePassageirosLongoPrazo_37.readFeatures(json_TerminaisdePassageirosLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosLongoPrazo_37.addFeatures(features_TerminaisdePassageirosLongoPrazo_37);
var lyr_TerminaisdePassageirosLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosLongoPrazo_37, 
                style: style_TerminaisdePassageirosLongoPrazo_37,
                popuplayertitle: 'Terminais de Passageiros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosLongoPrazo_37.png" /> Terminais de Passageiros - Longo Prazo '
            });
var format_TerminaisdePassageirosMdioPrazo_38 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosMdioPrazo_38 = format_TerminaisdePassageirosMdioPrazo_38.readFeatures(json_TerminaisdePassageirosMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosMdioPrazo_38.addFeatures(features_TerminaisdePassageirosMdioPrazo_38);
var lyr_TerminaisdePassageirosMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosMdioPrazo_38, 
                style: style_TerminaisdePassageirosMdioPrazo_38,
                popuplayertitle: 'Terminais de Passageiros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosMdioPrazo_38.png" /> Terminais de Passageiros - Médio Prazo '
            });
var format_TerminaisdePassageirosCurtoPrazo_39 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosCurtoPrazo_39 = format_TerminaisdePassageirosCurtoPrazo_39.readFeatures(json_TerminaisdePassageirosCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosCurtoPrazo_39.addFeatures(features_TerminaisdePassageirosCurtoPrazo_39);
var lyr_TerminaisdePassageirosCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosCurtoPrazo_39, 
                style: style_TerminaisdePassageirosCurtoPrazo_39,
                popuplayertitle: 'Terminais de Passageiros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosCurtoPrazo_39.png" /> Terminais de Passageiros - Curto Prazo '
            });
var format_TerminaisdePassageirosSituaoAtual_40 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosSituaoAtual_40 = format_TerminaisdePassageirosSituaoAtual_40.readFeatures(json_TerminaisdePassageirosSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosSituaoAtual_40.addFeatures(features_TerminaisdePassageirosSituaoAtual_40);
var lyr_TerminaisdePassageirosSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosSituaoAtual_40, 
                style: style_TerminaisdePassageirosSituaoAtual_40,
                popuplayertitle: 'Terminais de Passageiros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosSituaoAtual_40.png" /> Terminais de Passageiros - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_41 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_41 = format_ArmazenagemLongoPrazo_41.readFeatures(json_ArmazenagemLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_41.addFeatures(features_ArmazenagemLongoPrazo_41);
var lyr_ArmazenagemLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_41, 
                style: style_ArmazenagemLongoPrazo_41,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_41.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_42 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_42 = format_ArmazenagemMdioPrazo_42.readFeatures(json_ArmazenagemMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_42.addFeatures(features_ArmazenagemMdioPrazo_42);
var lyr_ArmazenagemMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_42, 
                style: style_ArmazenagemMdioPrazo_42,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_42.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_43 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_43 = format_ArmazenagemCurtoPrazo_43.readFeatures(json_ArmazenagemCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_43.addFeatures(features_ArmazenagemCurtoPrazo_43);
var lyr_ArmazenagemCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_43, 
                style: style_ArmazenagemCurtoPrazo_43,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_43.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_44 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_44 = format_ArmazenagemSituaoAtual_44.readFeatures(json_ArmazenagemSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_44.addFeatures(features_ArmazenagemSituaoAtual_44);
var lyr_ArmazenagemSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_44, 
                style: style_ArmazenagemSituaoAtual_44,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_44.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_PequenasEmbarcaes_53 = new ol.format.GeoJSON();
var features_PequenasEmbarcaes_53 = format_PequenasEmbarcaes_53.readFeatures(json_PequenasEmbarcaes_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PequenasEmbarcaes_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PequenasEmbarcaes_53.addFeatures(features_PequenasEmbarcaes_53);
var lyr_PequenasEmbarcaes_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PequenasEmbarcaes_53, 
                style: style_PequenasEmbarcaes_53,
                popuplayertitle: 'Pequenas Embarcações',
                interactive: true,
                title: '<img src="styles/legend/PequenasEmbarcaes_53.png" /> Pequenas Embarcações'
            });
var format_Passageiros_54 = new ol.format.GeoJSON();
var features_Passageiros_54 = format_Passageiros_54.readFeatures(json_Passageiros_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_54.addFeatures(features_Passageiros_54);
var lyr_Passageiros_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_54, 
                style: style_Passageiros_54,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_54.png" /> Passageiros'
            });
var format_GranelSlidoGranelLquidoPassageirosCargaGeral_55 = new ol.format.GeoJSON();
var features_GranelSlidoGranelLquidoPassageirosCargaGeral_55 = format_GranelSlidoGranelLquidoPassageirosCargaGeral_55.readFeatures(json_GranelSlidoGranelLquidoPassageirosCargaGeral_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_55.addFeatures(features_GranelSlidoGranelLquidoPassageirosCargaGeral_55);
var lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_55, 
                style: style_GranelSlidoGranelLquidoPassageirosCargaGeral_55,
                popuplayertitle: 'Granel Sólido/Granel Líquido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoGranelLquidoPassageirosCargaGeral_55.png" /> Granel Sólido/Granel Líquido/Passageiros/Carga Geral'
            });
var format_GranisSlidosMineraisEspecialmenteSal_56 = new ol.format.GeoJSON();
var features_GranisSlidosMineraisEspecialmenteSal_56 = format_GranisSlidosMineraisEspecialmenteSal_56.readFeatures(json_GranisSlidosMineraisEspecialmenteSal_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMineraisEspecialmenteSal_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMineraisEspecialmenteSal_56.addFeatures(features_GranisSlidosMineraisEspecialmenteSal_56);
var lyr_GranisSlidosMineraisEspecialmenteSal_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMineraisEspecialmenteSal_56, 
                style: style_GranisSlidosMineraisEspecialmenteSal_56,
                popuplayertitle: 'Granéis Sólidos Minerais - Especialmente Sal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMineraisEspecialmenteSal_56.png" /> Granéis Sólidos Minerais - Especialmente Sal'
            });
var format_GranelSlidoPassageirosCargaGeral_57 = new ol.format.GeoJSON();
var features_GranelSlidoPassageirosCargaGeral_57 = format_GranelSlidoPassageirosCargaGeral_57.readFeatures(json_GranelSlidoPassageirosCargaGeral_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoPassageirosCargaGeral_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoPassageirosCargaGeral_57.addFeatures(features_GranelSlidoPassageirosCargaGeral_57);
var lyr_GranelSlidoPassageirosCargaGeral_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoPassageirosCargaGeral_57, 
                style: style_GranelSlidoPassageirosCargaGeral_57,
                popuplayertitle: 'Granel Sólido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoPassageirosCargaGeral_57.png" /> Granel Sólido/Passageiros/Carga Geral'
            });
var format_GranelSlidoEspecialmenteAcar_58 = new ol.format.GeoJSON();
var features_GranelSlidoEspecialmenteAcar_58 = format_GranelSlidoEspecialmenteAcar_58.readFeatures(json_GranelSlidoEspecialmenteAcar_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoEspecialmenteAcar_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoEspecialmenteAcar_58.addFeatures(features_GranelSlidoEspecialmenteAcar_58);
var lyr_GranelSlidoEspecialmenteAcar_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoEspecialmenteAcar_58, 
                style: style_GranelSlidoEspecialmenteAcar_58,
                popuplayertitle: 'Granel Sólido - Especialmente Açúcar',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoEspecialmenteAcar_58.png" /> Granel Sólido - Especialmente Açúcar'
            });
var format_GranelLquidoEspecialmentecidoSulfrico_59 = new ol.format.GeoJSON();
var features_GranelLquidoEspecialmentecidoSulfrico_59 = format_GranelLquidoEspecialmentecidoSulfrico_59.readFeatures(json_GranelLquidoEspecialmentecidoSulfrico_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoEspecialmentecidoSulfrico_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoEspecialmentecidoSulfrico_59.addFeatures(features_GranelLquidoEspecialmentecidoSulfrico_59);
var lyr_GranelLquidoEspecialmentecidoSulfrico_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoEspecialmentecidoSulfrico_59, 
                style: style_GranelLquidoEspecialmentecidoSulfrico_59,
                popuplayertitle: 'Granel Líquido - Especialmente Ácido Sulfúrico',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoEspecialmentecidoSulfrico_59.png" /> Granel Líquido - Especialmente Ácido Sulfúrico'
            });
var format_GranisLquidos_60 = new ol.format.GeoJSON();
var features_GranisLquidos_60 = format_GranisLquidos_60.readFeatures(json_GranisLquidos_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisLquidos_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_60.addFeatures(features_GranisLquidos_60);
var lyr_GranisLquidos_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_60, 
                style: style_GranisLquidos_60,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_60.png" /> Granéis Líquidos'
            });
var format_CombustveisLquidos_61 = new ol.format.GeoJSON();
var features_CombustveisLquidos_61 = format_CombustveisLquidos_61.readFeatures(json_CombustveisLquidos_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CombustveisLquidos_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombustveisLquidos_61.addFeatures(features_CombustveisLquidos_61);
var lyr_CombustveisLquidos_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombustveisLquidos_61, 
                style: style_CombustveisLquidos_61,
                popuplayertitle: 'Combustíveis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/CombustveisLquidos_61.png" /> Combustíveis Líquidos'
            });
var format_MltiploUso_62 = new ol.format.GeoJSON();
var features_MltiploUso_62 = format_MltiploUso_62.readFeatures(json_MltiploUso_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_62.addFeatures(features_MltiploUso_62);
var lyr_MltiploUso_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_62, 
                style: style_MltiploUso_62,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_62.png" /> Múltiplo Uso'
            });
var format_PequenasEmbarcaes_63 = new ol.format.GeoJSON();
var features_PequenasEmbarcaes_63 = format_PequenasEmbarcaes_63.readFeatures(json_PequenasEmbarcaes_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PequenasEmbarcaes_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PequenasEmbarcaes_63.addFeatures(features_PequenasEmbarcaes_63);
var lyr_PequenasEmbarcaes_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PequenasEmbarcaes_63, 
                style: style_PequenasEmbarcaes_63,
                popuplayertitle: 'Pequenas Embarcações',
                interactive: true,
                title: '<img src="styles/legend/PequenasEmbarcaes_63.png" /> Pequenas Embarcações'
            });
var format_Passageiros_64 = new ol.format.GeoJSON();
var features_Passageiros_64 = format_Passageiros_64.readFeatures(json_Passageiros_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_64.addFeatures(features_Passageiros_64);
var lyr_Passageiros_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_64, 
                style: style_Passageiros_64,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_64.png" /> Passageiros'
            });
var format_GranelSlidoGranelLquidoPassageirosCargaGeral_65 = new ol.format.GeoJSON();
var features_GranelSlidoGranelLquidoPassageirosCargaGeral_65 = format_GranelSlidoGranelLquidoPassageirosCargaGeral_65.readFeatures(json_GranelSlidoGranelLquidoPassageirosCargaGeral_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_65.addFeatures(features_GranelSlidoGranelLquidoPassageirosCargaGeral_65);
var lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_65, 
                style: style_GranelSlidoGranelLquidoPassageirosCargaGeral_65,
                popuplayertitle: 'Granel Sólido/Granel Líquido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoGranelLquidoPassageirosCargaGeral_65.png" /> Granel Sólido/Granel Líquido/Passageiros/Carga Geral'
            });
var format_GranisSlidosMineraisEspecialmenteSal_66 = new ol.format.GeoJSON();
var features_GranisSlidosMineraisEspecialmenteSal_66 = format_GranisSlidosMineraisEspecialmenteSal_66.readFeatures(json_GranisSlidosMineraisEspecialmenteSal_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMineraisEspecialmenteSal_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMineraisEspecialmenteSal_66.addFeatures(features_GranisSlidosMineraisEspecialmenteSal_66);
var lyr_GranisSlidosMineraisEspecialmenteSal_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMineraisEspecialmenteSal_66, 
                style: style_GranisSlidosMineraisEspecialmenteSal_66,
                popuplayertitle: 'Granéis Sólidos Minerais - Especialmente Sal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMineraisEspecialmenteSal_66.png" /> Granéis Sólidos Minerais - Especialmente Sal'
            });
var format_GranelSlidoPassageirosCargaGeral_67 = new ol.format.GeoJSON();
var features_GranelSlidoPassageirosCargaGeral_67 = format_GranelSlidoPassageirosCargaGeral_67.readFeatures(json_GranelSlidoPassageirosCargaGeral_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoPassageirosCargaGeral_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoPassageirosCargaGeral_67.addFeatures(features_GranelSlidoPassageirosCargaGeral_67);
var lyr_GranelSlidoPassageirosCargaGeral_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoPassageirosCargaGeral_67, 
                style: style_GranelSlidoPassageirosCargaGeral_67,
                popuplayertitle: 'Granel Sólido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoPassageirosCargaGeral_67.png" /> Granel Sólido/Passageiros/Carga Geral'
            });
var format_GranelSlidoEspecialmenteAcar_68 = new ol.format.GeoJSON();
var features_GranelSlidoEspecialmenteAcar_68 = format_GranelSlidoEspecialmenteAcar_68.readFeatures(json_GranelSlidoEspecialmenteAcar_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoEspecialmenteAcar_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoEspecialmenteAcar_68.addFeatures(features_GranelSlidoEspecialmenteAcar_68);
var lyr_GranelSlidoEspecialmenteAcar_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoEspecialmenteAcar_68, 
                style: style_GranelSlidoEspecialmenteAcar_68,
                popuplayertitle: 'Granel Sólido - Especialmente Açúcar',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoEspecialmenteAcar_68.png" /> Granel Sólido - Especialmente Açúcar'
            });
var format_GranelLquidoEspecialmentecidoSulfrico_69 = new ol.format.GeoJSON();
var features_GranelLquidoEspecialmentecidoSulfrico_69 = format_GranelLquidoEspecialmentecidoSulfrico_69.readFeatures(json_GranelLquidoEspecialmentecidoSulfrico_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoEspecialmentecidoSulfrico_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoEspecialmentecidoSulfrico_69.addFeatures(features_GranelLquidoEspecialmentecidoSulfrico_69);
var lyr_GranelLquidoEspecialmentecidoSulfrico_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoEspecialmentecidoSulfrico_69, 
                style: style_GranelLquidoEspecialmentecidoSulfrico_69,
                popuplayertitle: 'Granel Líquido - Especialmente Ácido Sulfúrico',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoEspecialmentecidoSulfrico_69.png" /> Granel Líquido - Especialmente Ácido Sulfúrico'
            });
var format_GranisLquidos_70 = new ol.format.GeoJSON();
var features_GranisLquidos_70 = format_GranisLquidos_70.readFeatures(json_GranisLquidos_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisLquidos_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_70.addFeatures(features_GranisLquidos_70);
var lyr_GranisLquidos_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_70, 
                style: style_GranisLquidos_70,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_70.png" /> Granéis Líquidos'
            });
var format_CombustveisLquidos_71 = new ol.format.GeoJSON();
var features_CombustveisLquidos_71 = format_CombustveisLquidos_71.readFeatures(json_CombustveisLquidos_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CombustveisLquidos_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombustveisLquidos_71.addFeatures(features_CombustveisLquidos_71);
var lyr_CombustveisLquidos_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombustveisLquidos_71, 
                style: style_CombustveisLquidos_71,
                popuplayertitle: 'Combustíveis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/CombustveisLquidos_71.png" /> Combustíveis Líquidos'
            });
var format_MltiploUso_72 = new ol.format.GeoJSON();
var features_MltiploUso_72 = format_MltiploUso_72.readFeatures(json_MltiploUso_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_72.addFeatures(features_MltiploUso_72);
var lyr_MltiploUso_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_72, 
                style: style_MltiploUso_72,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_72.png" /> Múltiplo Uso'
            });
var format_PequenasEmbarcaes_73 = new ol.format.GeoJSON();
var features_PequenasEmbarcaes_73 = format_PequenasEmbarcaes_73.readFeatures(json_PequenasEmbarcaes_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PequenasEmbarcaes_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PequenasEmbarcaes_73.addFeatures(features_PequenasEmbarcaes_73);
var lyr_PequenasEmbarcaes_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PequenasEmbarcaes_73, 
                style: style_PequenasEmbarcaes_73,
                popuplayertitle: 'Pequenas Embarcações',
                interactive: true,
                title: '<img src="styles/legend/PequenasEmbarcaes_73.png" /> Pequenas Embarcações'
            });
var format_Passageiros_74 = new ol.format.GeoJSON();
var features_Passageiros_74 = format_Passageiros_74.readFeatures(json_Passageiros_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_74.addFeatures(features_Passageiros_74);
var lyr_Passageiros_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_74, 
                style: style_Passageiros_74,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_74.png" /> Passageiros'
            });
var format_GranelSlidoGranelLquidoPassageirosCargaGeral_75 = new ol.format.GeoJSON();
var features_GranelSlidoGranelLquidoPassageirosCargaGeral_75 = format_GranelSlidoGranelLquidoPassageirosCargaGeral_75.readFeatures(json_GranelSlidoGranelLquidoPassageirosCargaGeral_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_75.addFeatures(features_GranelSlidoGranelLquidoPassageirosCargaGeral_75);
var lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_75, 
                style: style_GranelSlidoGranelLquidoPassageirosCargaGeral_75,
                popuplayertitle: 'Granel Sólido/Granel Líquido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoGranelLquidoPassageirosCargaGeral_75.png" /> Granel Sólido/Granel Líquido/Passageiros/Carga Geral'
            });
var format_GranisSlidosMineraisEspecialmenteSal_76 = new ol.format.GeoJSON();
var features_GranisSlidosMineraisEspecialmenteSal_76 = format_GranisSlidosMineraisEspecialmenteSal_76.readFeatures(json_GranisSlidosMineraisEspecialmenteSal_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMineraisEspecialmenteSal_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMineraisEspecialmenteSal_76.addFeatures(features_GranisSlidosMineraisEspecialmenteSal_76);
var lyr_GranisSlidosMineraisEspecialmenteSal_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMineraisEspecialmenteSal_76, 
                style: style_GranisSlidosMineraisEspecialmenteSal_76,
                popuplayertitle: 'Granéis Sólidos Minerais - Especialmente Sal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMineraisEspecialmenteSal_76.png" /> Granéis Sólidos Minerais - Especialmente Sal'
            });
var format_GranelSlidoPassageirosCargaGeral_77 = new ol.format.GeoJSON();
var features_GranelSlidoPassageirosCargaGeral_77 = format_GranelSlidoPassageirosCargaGeral_77.readFeatures(json_GranelSlidoPassageirosCargaGeral_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoPassageirosCargaGeral_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoPassageirosCargaGeral_77.addFeatures(features_GranelSlidoPassageirosCargaGeral_77);
var lyr_GranelSlidoPassageirosCargaGeral_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoPassageirosCargaGeral_77, 
                style: style_GranelSlidoPassageirosCargaGeral_77,
                popuplayertitle: 'Granel Sólido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoPassageirosCargaGeral_77.png" /> Granel Sólido/Passageiros/Carga Geral'
            });
var format_GranelSlidoEspecialmenteAcar_78 = new ol.format.GeoJSON();
var features_GranelSlidoEspecialmenteAcar_78 = format_GranelSlidoEspecialmenteAcar_78.readFeatures(json_GranelSlidoEspecialmenteAcar_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoEspecialmenteAcar_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoEspecialmenteAcar_78.addFeatures(features_GranelSlidoEspecialmenteAcar_78);
var lyr_GranelSlidoEspecialmenteAcar_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoEspecialmenteAcar_78, 
                style: style_GranelSlidoEspecialmenteAcar_78,
                popuplayertitle: 'Granel Sólido - Especialmente Açúcar',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoEspecialmenteAcar_78.png" /> Granel Sólido - Especialmente Açúcar'
            });
var format_GranelLquidoEspecialmentecidoSulfrico_79 = new ol.format.GeoJSON();
var features_GranelLquidoEspecialmentecidoSulfrico_79 = format_GranelLquidoEspecialmentecidoSulfrico_79.readFeatures(json_GranelLquidoEspecialmentecidoSulfrico_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoEspecialmentecidoSulfrico_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoEspecialmentecidoSulfrico_79.addFeatures(features_GranelLquidoEspecialmentecidoSulfrico_79);
var lyr_GranelLquidoEspecialmentecidoSulfrico_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoEspecialmentecidoSulfrico_79, 
                style: style_GranelLquidoEspecialmentecidoSulfrico_79,
                popuplayertitle: 'Granel Líquido - Especialmente Ácido Sulfúrico',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoEspecialmentecidoSulfrico_79.png" /> Granel Líquido - Especialmente Ácido Sulfúrico'
            });
var format_GranisLquidos_80 = new ol.format.GeoJSON();
var features_GranisLquidos_80 = format_GranisLquidos_80.readFeatures(json_GranisLquidos_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisLquidos_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_80.addFeatures(features_GranisLquidos_80);
var lyr_GranisLquidos_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_80, 
                style: style_GranisLquidos_80,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_80.png" /> Granéis Líquidos'
            });
var format_CombustveisLquidos_81 = new ol.format.GeoJSON();
var features_CombustveisLquidos_81 = format_CombustveisLquidos_81.readFeatures(json_CombustveisLquidos_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CombustveisLquidos_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombustveisLquidos_81.addFeatures(features_CombustveisLquidos_81);
var lyr_CombustveisLquidos_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombustveisLquidos_81, 
                style: style_CombustveisLquidos_81,
                popuplayertitle: 'Combustíveis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/CombustveisLquidos_81.png" /> Combustíveis Líquidos'
            });
var format_MltiploUso_82 = new ol.format.GeoJSON();
var features_MltiploUso_82 = format_MltiploUso_82.readFeatures(json_MltiploUso_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_82.addFeatures(features_MltiploUso_82);
var lyr_MltiploUso_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_82, 
                style: style_MltiploUso_82,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_82.png" /> Múltiplo Uso'
            });
var format_PequenasEmbarcaes_83 = new ol.format.GeoJSON();
var features_PequenasEmbarcaes_83 = format_PequenasEmbarcaes_83.readFeatures(json_PequenasEmbarcaes_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PequenasEmbarcaes_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PequenasEmbarcaes_83.addFeatures(features_PequenasEmbarcaes_83);
var lyr_PequenasEmbarcaes_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PequenasEmbarcaes_83, 
                style: style_PequenasEmbarcaes_83,
                popuplayertitle: 'Pequenas Embarcações',
                interactive: true,
                title: '<img src="styles/legend/PequenasEmbarcaes_83.png" /> Pequenas Embarcações'
            });
var format_Passageiros_84 = new ol.format.GeoJSON();
var features_Passageiros_84 = format_Passageiros_84.readFeatures(json_Passageiros_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_84.addFeatures(features_Passageiros_84);
var lyr_Passageiros_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_84, 
                style: style_Passageiros_84,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_84.png" /> Passageiros'
            });
var format_GranelSlidoGranelLquidoPassageirosCargaGeral_85 = new ol.format.GeoJSON();
var features_GranelSlidoGranelLquidoPassageirosCargaGeral_85 = format_GranelSlidoGranelLquidoPassageirosCargaGeral_85.readFeatures(json_GranelSlidoGranelLquidoPassageirosCargaGeral_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_85.addFeatures(features_GranelSlidoGranelLquidoPassageirosCargaGeral_85);
var lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoGranelLquidoPassageirosCargaGeral_85, 
                style: style_GranelSlidoGranelLquidoPassageirosCargaGeral_85,
                popuplayertitle: 'Granel Sólido/Granel Líquido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoGranelLquidoPassageirosCargaGeral_85.png" /> Granel Sólido/Granel Líquido/Passageiros/Carga Geral'
            });
var format_GranisSlidosMineraisEspecialmenteSal_86 = new ol.format.GeoJSON();
var features_GranisSlidosMineraisEspecialmenteSal_86 = format_GranisSlidosMineraisEspecialmenteSal_86.readFeatures(json_GranisSlidosMineraisEspecialmenteSal_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMineraisEspecialmenteSal_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMineraisEspecialmenteSal_86.addFeatures(features_GranisSlidosMineraisEspecialmenteSal_86);
var lyr_GranisSlidosMineraisEspecialmenteSal_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMineraisEspecialmenteSal_86, 
                style: style_GranisSlidosMineraisEspecialmenteSal_86,
                popuplayertitle: 'Granéis Sólidos Minerais - Especialmente Sal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMineraisEspecialmenteSal_86.png" /> Granéis Sólidos Minerais - Especialmente Sal'
            });
var format_GranelSlidoPassageirosCargaGeral_87 = new ol.format.GeoJSON();
var features_GranelSlidoPassageirosCargaGeral_87 = format_GranelSlidoPassageirosCargaGeral_87.readFeatures(json_GranelSlidoPassageirosCargaGeral_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoPassageirosCargaGeral_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoPassageirosCargaGeral_87.addFeatures(features_GranelSlidoPassageirosCargaGeral_87);
var lyr_GranelSlidoPassageirosCargaGeral_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoPassageirosCargaGeral_87, 
                style: style_GranelSlidoPassageirosCargaGeral_87,
                popuplayertitle: 'Granel Sólido/Passageiros/Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoPassageirosCargaGeral_87.png" /> Granel Sólido/Passageiros/Carga Geral'
            });
var format_GranelSlidoEspecialmenteAcar_88 = new ol.format.GeoJSON();
var features_GranelSlidoEspecialmenteAcar_88 = format_GranelSlidoEspecialmenteAcar_88.readFeatures(json_GranelSlidoEspecialmenteAcar_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoEspecialmenteAcar_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoEspecialmenteAcar_88.addFeatures(features_GranelSlidoEspecialmenteAcar_88);
var lyr_GranelSlidoEspecialmenteAcar_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoEspecialmenteAcar_88, 
                style: style_GranelSlidoEspecialmenteAcar_88,
                popuplayertitle: 'Granel Sólido - Especialmente Açúcar',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoEspecialmenteAcar_88.png" /> Granel Sólido - Especialmente Açúcar'
            });
var format_GranelLquidoEspecialmentecidoSulfrico_89 = new ol.format.GeoJSON();
var features_GranelLquidoEspecialmentecidoSulfrico_89 = format_GranelLquidoEspecialmentecidoSulfrico_89.readFeatures(json_GranelLquidoEspecialmentecidoSulfrico_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoEspecialmentecidoSulfrico_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoEspecialmentecidoSulfrico_89.addFeatures(features_GranelLquidoEspecialmentecidoSulfrico_89);
var lyr_GranelLquidoEspecialmentecidoSulfrico_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoEspecialmentecidoSulfrico_89, 
                style: style_GranelLquidoEspecialmentecidoSulfrico_89,
                popuplayertitle: 'Granel Líquido - Especialmente Ácido Sulfúrico',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoEspecialmentecidoSulfrico_89.png" /> Granel Líquido - Especialmente Ácido Sulfúrico'
            });
var format_GranisLquidos_90 = new ol.format.GeoJSON();
var features_GranisLquidos_90 = format_GranisLquidos_90.readFeatures(json_GranisLquidos_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisLquidos_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_90.addFeatures(features_GranisLquidos_90);
var lyr_GranisLquidos_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_90, 
                style: style_GranisLquidos_90,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_90.png" /> Granéis Líquidos'
            });
var format_CombustveisLquidos_91 = new ol.format.GeoJSON();
var features_CombustveisLquidos_91 = format_CombustveisLquidos_91.readFeatures(json_CombustveisLquidos_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CombustveisLquidos_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombustveisLquidos_91.addFeatures(features_CombustveisLquidos_91);
var lyr_CombustveisLquidos_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombustveisLquidos_91, 
                style: style_CombustveisLquidos_91,
                popuplayertitle: 'Combustíveis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/CombustveisLquidos_91.png" /> Combustíveis Líquidos'
            });
var format_MltiploUso_92 = new ol.format.GeoJSON();
var features_MltiploUso_92 = format_MltiploUso_92.readFeatures(json_MltiploUso_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_92.addFeatures(features_MltiploUso_92);
var lyr_MltiploUso_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_92, 
                style: style_MltiploUso_92,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_92.png" /> Múltiplo Uso'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_93 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_93 = format_reasAfetassOperaesPorturiasLongoPrazo_93.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_93.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_93);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_93, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_93,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_93.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_94 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_94 = format_reasAfetassOperaesPorturiasMdioPrazo_94.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_94.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_94);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_94, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_94,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_94.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_95 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_95 = format_reasAfetassOperaesPorturiasCurtoPrazo_95.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_95.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_95);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_95, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_95,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_95.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_96 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_96 = format_reasAfetassOperaesPorturiasSituaoAtual_96.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_96.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_96);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_96, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_96,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_96.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldoPortoOrganizadodeMacio_97 = new ol.format.GeoJSON();
var features_PoligonaldoPortoOrganizadodeMacio_97 = format_PoligonaldoPortoOrganizadodeMacio_97.readFeatures(json_PoligonaldoPortoOrganizadodeMacio_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldoPortoOrganizadodeMacio_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldoPortoOrganizadodeMacio_97.addFeatures(features_PoligonaldoPortoOrganizadodeMacio_97);
var lyr_PoligonaldoPortoOrganizadodeMacio_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldoPortoOrganizadodeMacio_97, 
                style: style_PoligonaldoPortoOrganizadodeMacio_97,
                popuplayertitle: 'Poligonal do Porto Organizado de Macéio',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldoPortoOrganizadodeMacio_97.png" /> Poligonal do Porto Organizado de Macéio'
            });
var group_readoPortoOrganizadodeMacei = new ol.layer.Group({
                                layers: [lyr_PoligonaldoPortoOrganizadodeMacio_97,],
                                fold: 'open',
                                title: 'Área do Porto Organizado de Maceió'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_93,lyr_reasAfetassOperaesPorturiasMdioPrazo_94,lyr_reasAfetassOperaesPorturiasCurtoPrazo_95,lyr_reasAfetassOperaesPorturiasSituaoAtual_96,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_PequenasEmbarcaes_83,lyr_Passageiros_84,lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_85,lyr_GranisSlidosMineraisEspecialmenteSal_86,lyr_GranelSlidoPassageirosCargaGeral_87,lyr_GranelSlidoEspecialmenteAcar_88,lyr_GranelLquidoEspecialmentecidoSulfrico_89,lyr_GranisLquidos_90,lyr_CombustveisLquidos_91,lyr_MltiploUso_92,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_PequenasEmbarcaes_73,lyr_Passageiros_74,lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_75,lyr_GranisSlidosMineraisEspecialmenteSal_76,lyr_GranelSlidoPassageirosCargaGeral_77,lyr_GranelSlidoEspecialmenteAcar_78,lyr_GranelLquidoEspecialmentecidoSulfrico_79,lyr_GranisLquidos_80,lyr_CombustveisLquidos_81,lyr_MltiploUso_82,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_PequenasEmbarcaes_63,lyr_Passageiros_64,lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_65,lyr_GranisSlidosMineraisEspecialmenteSal_66,lyr_GranelSlidoPassageirosCargaGeral_67,lyr_GranelSlidoEspecialmenteAcar_68,lyr_GranelLquidoEspecialmentecidoSulfrico_69,lyr_GranisLquidos_70,lyr_CombustveisLquidos_71,lyr_MltiploUso_72,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_PequenasEmbarcaes_53,lyr_Passageiros_54,lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_55,lyr_GranisSlidosMineraisEspecialmenteSal_56,lyr_GranelSlidoPassageirosCargaGeral_57,lyr_GranelSlidoEspecialmenteAcar_58,lyr_GranelLquidoEspecialmentecidoSulfrico_59,lyr_GranisLquidos_60,lyr_CombustveisLquidos_61,lyr_MltiploUso_62,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_41,lyr_ArmazenagemMdioPrazo_42,lyr_ArmazenagemCurtoPrazo_43,lyr_ArmazenagemSituaoAtual_44,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_TerminaldePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageirosLongoPrazo_37,lyr_TerminaisdePassageirosMdioPrazo_38,lyr_TerminaisdePassageirosCurtoPrazo_39,lyr_TerminaisdePassageirosSituaoAtual_40,],
                                fold: 'open',
                                title: 'Terminal de Passageiros '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_33,lyr_AcostagemMdioPrazo_34,lyr_AcostagemCurtoPrazo_35,lyr_AcostagemSituaoAtual_36,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_32,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_15,lyr_AcessosRodoviriosInternosMdioPrazo_16,lyr_AcessosRodoviriosInternosCurtoPrazo_17,lyr_AcessosRodoviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos'});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviariosExterno_14,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_13,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_AcessosDutoviriosExternos_13.setVisible(false);lyr_AcessosFerroviariosExterno_14.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosRodoviriosExternos_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.setVisible(false);lyr_reaseInstalaesAlfandegadas_32.setVisible(false);lyr_AcostagemLongoPrazo_33.setVisible(false);lyr_AcostagemMdioPrazo_34.setVisible(false);lyr_AcostagemCurtoPrazo_35.setVisible(false);lyr_AcostagemSituaoAtual_36.setVisible(false);lyr_TerminaisdePassageirosLongoPrazo_37.setVisible(false);lyr_TerminaisdePassageirosMdioPrazo_38.setVisible(false);lyr_TerminaisdePassageirosCurtoPrazo_39.setVisible(false);lyr_TerminaisdePassageirosSituaoAtual_40.setVisible(false);lyr_ArmazenagemLongoPrazo_41.setVisible(false);lyr_ArmazenagemMdioPrazo_42.setVisible(false);lyr_ArmazenagemCurtoPrazo_43.setVisible(false);lyr_ArmazenagemSituaoAtual_44.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.setVisible(false);lyr_PequenasEmbarcaes_53.setVisible(false);lyr_Passageiros_54.setVisible(false);lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_55.setVisible(false);lyr_GranisSlidosMineraisEspecialmenteSal_56.setVisible(false);lyr_GranelSlidoPassageirosCargaGeral_57.setVisible(false);lyr_GranelSlidoEspecialmenteAcar_58.setVisible(false);lyr_GranelLquidoEspecialmentecidoSulfrico_59.setVisible(false);lyr_GranisLquidos_60.setVisible(false);lyr_CombustveisLquidos_61.setVisible(false);lyr_MltiploUso_62.setVisible(false);lyr_PequenasEmbarcaes_63.setVisible(false);lyr_Passageiros_64.setVisible(false);lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_65.setVisible(false);lyr_GranisSlidosMineraisEspecialmenteSal_66.setVisible(false);lyr_GranelSlidoPassageirosCargaGeral_67.setVisible(false);lyr_GranelSlidoEspecialmenteAcar_68.setVisible(false);lyr_GranelLquidoEspecialmentecidoSulfrico_69.setVisible(false);lyr_GranisLquidos_70.setVisible(false);lyr_CombustveisLquidos_71.setVisible(false);lyr_MltiploUso_72.setVisible(false);lyr_PequenasEmbarcaes_73.setVisible(false);lyr_Passageiros_74.setVisible(false);lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_75.setVisible(false);lyr_GranisSlidosMineraisEspecialmenteSal_76.setVisible(false);lyr_GranelSlidoPassageirosCargaGeral_77.setVisible(false);lyr_GranelSlidoEspecialmenteAcar_78.setVisible(false);lyr_GranelLquidoEspecialmentecidoSulfrico_79.setVisible(false);lyr_GranisLquidos_80.setVisible(false);lyr_CombustveisLquidos_81.setVisible(false);lyr_MltiploUso_82.setVisible(false);lyr_PequenasEmbarcaes_83.setVisible(false);lyr_Passageiros_84.setVisible(false);lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_85.setVisible(false);lyr_GranisSlidosMineraisEspecialmenteSal_86.setVisible(false);lyr_GranelSlidoPassageirosCargaGeral_87.setVisible(false);lyr_GranelSlidoEspecialmenteAcar_88.setVisible(false);lyr_GranelLquidoEspecialmentecidoSulfrico_89.setVisible(false);lyr_GranisLquidos_90.setVisible(false);lyr_CombustveisLquidos_91.setVisible(false);lyr_MltiploUso_92.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_93.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_94.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_95.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_96.setVisible(false);lyr_PoligonaldoPortoOrganizadodeMacio_97.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosExternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_TerminaldePassageiros,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_readoPortoOrganizadodeMacei];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'ID': 'ID', 'NUMERO_ID': 'Número de Identificação ', 'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'ID': 'ID', 'NUMERO_ID': 'Número de Identificação ', 'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'ID': 'ID', 'NUMERO_ID': 'Número de Identificação ', 'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'ID': 'ID', 'NUMERO_ID': 'Número de Identificação ', 'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'Função': 'Função', 'Calado_m': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'Função': 'Função', 'Calado_m': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'Função': 'Função', 'Calado_m': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'Função': 'Função', 'Calado_m': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'Trecho': 'Trecho', 'Calado__m_': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado__m_': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado__m_': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado__m_': 'Calado (m) ', });
lyr_AcessosDutoviriosExternos_13.set('fieldAliases', {'Nome': 'Nome', 'Mat__Trans': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'Tipo_Duto': 'Tipo de Duto ', });
lyr_AcessosFerroviariosExterno_14.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldAliases', {'N__PISTA': 'Número de Pistas de Rolamento ', 'IDENTIFICA': 'Identificação ', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldAliases', {'N__PISTA': 'Número de Pistas de Rolamento ', 'IDENTIFICA': 'Identificação ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldAliases', {'N__PISTA': 'Número de Pistas de Rolamento ', 'IDENTIFICA': 'Identificação ', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldAliases', {'N__PISTA': 'Número de Pistas de Rolamento ', 'IDENTIFICA': 'Identificação ', });
lyr_AcessosRodoviriosExternos_19.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Area_m²': 'Área (m²) ', 'Tipo_Explo': 'Tipo de Exploração ', 'Utilizacao': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Area_m²': 'Área (m²) ', 'Tipo_Explo': 'Tipo de Exploração ', 'Utilizacao': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Area_m²': 'Área (m²) ', 'Tipo_Explo': 'Tipo de Exploração ', 'Utilizacao': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Area_m²': 'Área (m²) ', 'Tipo_Explo': 'Tipo de Exploração ', 'Utilizacao': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Tipo_Cessa': 'Tipo de Cessão ', 'Responsave': 'Responsável ', 'Area_m': 'Área (m²) ', 'Ini_Contra': 'Data de Início do Contrato ', 'Fim_Contra': 'Data de Término do Contrato ', 'Atividade': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Tipo_Cessa': 'Tipo de Cessão ', 'Responsave': 'Responsável ', 'Area_m': 'Área (m²) ', 'Ini_Contra': 'Data de Início do Contrato ', 'Fim_Contra': 'Data de Término do Contrato ', 'Atividade': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Tipo_Cessa': 'Tipo de Cessão ', 'Responsave': 'Responsável ', 'Area_m': 'Área (m²) ', 'Ini_Contra': 'Data de Início do Contrato ', 'Fim_Contra': 'Data de Término do Contrato ', 'Atividade': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Tipo_Cessa': 'Tipo de Cessão ', 'Responsave': 'Responsável ', 'Area_m': 'Área (m²) ', 'Ini_Contra': 'Data de Início do Contrato ', 'Fim_Contra': 'Data de Término do Contrato ', 'Atividade': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'DESTINA__O': 'Destinação ', 'Area_m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'DESTINA__O': 'Destinação ', 'Area_m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'DESTINA__O': 'Destinação ', 'Area_m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'DESTINA__O': 'Destinação ', 'Area_m²': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldAliases', {'INSTRUMENT': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_33.set('fieldAliases', {'ID_BERCO': 'Identificador do Berço ', 'IDENTIFICA': 'Identificador do Cais ', 'CARACT_CON': 'Características Construtivas ', 'COMPRI_M': 'Comprimento (m) ', 'PROFUNDIDA': 'Profundidade (m) ', 'CALADO_AUT': 'Calado (m) ', 'PERFIL_CAR': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_34.set('fieldAliases', {'ID_BERCO': 'Identificador do Berço ', 'IDENTIFICA': 'Identificador do Cais ', 'CARACT_CON': 'Características Construtivas ', 'COMPRI_M': 'Comprimento (m) ', 'PROFUNDIDA': 'Profundidade (m) ', 'CALADO_AUT': 'Calado (m) ', 'PERFIL_CAR': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_35.set('fieldAliases', {'ID_BERCO': 'Identificador do Berço ', 'IDENTIFICA': 'Identificador do Cais ', 'CARACT_CON': 'Características Construtivas ', 'COMPRI_M': 'Comprimento (m) ', 'PROFUNDIDA': 'Profundidade (m) ', 'CALADO_AUT': 'Calado (m) ', 'PERFIL_CAR': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_36.set('fieldAliases', {'ID_BERCO': 'Identificador do Berço ', 'IDENTIFICA': 'Identificador do Cais ', 'CARACT_CON': 'Características Construtivas ', 'COMPRI_M': 'Comprimento (m) ', 'PROFUNDIDA': 'Profundidade (m) ', 'CALADO_AUT': 'Calado (m) ', 'PERFIL_CAR': 'Perfil de Carga ', });
lyr_TerminaisdePassageirosLongoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Área_m²': 'Área do Terminal (m²) ', 'Estacionam': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosMdioPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Área_m²': 'Área do Terminal (m²) ', 'Estacionam': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosCurtoPrazo_39.set('fieldAliases', {'Nome': 'Nome', 'Área_m²': 'Área do Terminal (m²) ', 'Estacionam': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosSituaoAtual_40.set('fieldAliases', {'Nome': 'Nome', 'Área_m²': 'Área do Terminal (m²) ', 'Estacionam': 'Área do Estacionamento (m²) ', });
lyr_ArmazenagemLongoPrazo_41.set('fieldAliases', {'NOME_ID': 'Nome', 'TIPO_DA_IN': 'Tipo da Instalação ', 'CAPACIDADE': 'Capacidade ', 'AREA_M_': 'Área (m²) ', 'VOLUME_M_': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_42.set('fieldAliases', {'NOME_ID': 'Nome', 'TIPO_DA_IN': 'Tipo da Instalação ', 'CAPACIDADE': 'Capacidade ', 'AREA_M_': 'Área (m²) ', 'VOLUME_M_': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldAliases', {'NOME_ID': 'Nome', 'TIPO_DA_IN': 'Tipo da Instalação ', 'CAPACIDADE': 'Capacidade ', 'AREA_M_': 'Área (m²) ', 'VOLUME_M_': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_44.set('fieldAliases', {'NOME_ID': 'Nome', 'TIPO_DA_IN': 'Tipo da Instalação ', 'CAPACIDADE': 'Capacidade ', 'AREA_M_': 'Área (m²) ', 'VOLUME_M_': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Area_m²': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.set('fieldAliases', {'NOME_IDENT': 'Nome', 'Area_m²': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.set('fieldAliases', {'NOME_IDENT': 'NOME_IDENT', 'Area_m²': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Area_m²': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldAliases', {'NOME_IDENT': 'Nome', 'CONTRATO': 'Número do Contrato ', 'ARRENDATAR': 'Arrendatário ', 'DATA_INICI': 'Data Início do Contrato ', 'DATA_TERMI': 'Data do Término do Contrato ', 'PRORROGACA': 'Possibilidade de Prorrogação ', 'PRODUTOS': 'Perfil de Carga ', 'AREA': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldAliases', {'NOME_IDENT': 'Nome', 'CONTRATO': 'Número do Contrato ', 'ARRENDATAR': 'Arrendatário ', 'DATA_INICI': 'Data Início do Contrato ', 'DATA_TERMI': 'Data do Término do Contrato ', 'PRORROGACA': 'Possibilidade de Prorrogação ', 'PRODUTOS': 'Perfil de Carga ', 'AREA': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldAliases', {'NOME_IDENT': 'Nome', 'CONTRATO': 'Número do Contrato ', 'ARRENDATAR': 'Arrendatário ', 'DATA_INICI': 'Data Início do Contrato ', 'DATA_TERMI': 'Data do Término do Contrato ', 'PRORROGACA': 'Possibilidade de Prorrogação ', 'PRODUTOS': 'Perfil de Carga ', 'AREA': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldAliases', {'NOME_IDENT': 'Nome', 'CONTRATO': 'Número do Contrato ', 'ARRENDATAR': 'Arrendatário ', 'DATA_INICI': 'Data Início do Contrato ', 'DATA_TERMI': 'Data do Término do Contrato ', 'PRORROGACA': 'Possibilidade de Prorrogação ', 'PRODUTOS': 'Perfil de Carga ', 'AREA': 'Área (m²) ', });
lyr_PequenasEmbarcaes_53.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Passageiros_54.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_55.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisSlidosMineraisEspecialmenteSal_56.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoPassageirosCargaGeral_57.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoEspecialmenteAcar_58.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelLquidoEspecialmentecidoSulfrico_59.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisLquidos_60.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CombustveisLquidos_61.set('fieldAliases', {'Nome': 'Nome ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_MltiploUso_62.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_PequenasEmbarcaes_63.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Passageiros_64.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_65.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisSlidosMineraisEspecialmenteSal_66.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoPassageirosCargaGeral_67.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoEspecialmenteAcar_68.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelLquidoEspecialmentecidoSulfrico_69.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisLquidos_70.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CombustveisLquidos_71.set('fieldAliases', {'Nome': 'Nome ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_MltiploUso_72.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_PequenasEmbarcaes_73.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Passageiros_74.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_75.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisSlidosMineraisEspecialmenteSal_76.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoPassageirosCargaGeral_77.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoEspecialmenteAcar_78.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelLquidoEspecialmentecidoSulfrico_79.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisLquidos_80.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CombustveisLquidos_81.set('fieldAliases', {'Nome': 'Nome ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_MltiploUso_82.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_PequenasEmbarcaes_83.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Passageiros_84.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_85.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'PERFIL_': 'Perfil de Carga ', 'TIP_INSTAL': 'Tipo de Instalação ', 'AREA_M': 'Área (m²) ', });
lyr_GranisSlidosMineraisEspecialmenteSal_86.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlidoPassageirosCargaGeral_87.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'PERFIL_': 'Perfil de Carga ', 'TIP_INSTAL': 'Tipo de Instalação ', 'AREA_M': 'Área (m²) ', });
lyr_GranelSlidoEspecialmenteAcar_88.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'PERFIL_': 'Perfil de Carga ', 'TIP_INSTAL': 'Tipo de Instalação ', 'AREA_M': 'Área (m²) ', });
lyr_GranelLquidoEspecialmentecidoSulfrico_89.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranisLquidos_90.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CombustveisLquidos_91.set('fieldAliases', {'Nome': 'Nome ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_MltiploUso_92.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'PERFIL_': 'Perfil de Carga ', 'TIP_INSTAL': 'Tipo de Instalação ', 'AREA_M': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_93.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Perfil_': 'Perfil de Carga ', 'Tip_Instal': 'Tipo de Instalação ', 'Area_m': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_94.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Perfil_': 'Perfil de Carga ', 'Tip_Instal': 'Tipo de Instalação ', 'Area_m': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_95.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'Perfil_': 'Perfil de Carga ', 'Tip_Instal': 'Tipo de Instalação ', 'Area_m': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_96.set('fieldAliases', {'NOME_IDENT': 'Nome ', 'PERFIL_': 'Perfil de Carga ', 'TIP_INSTAL': 'Tipo de Instalação ', 'AREA_M': 'Área (m²) ', });
lyr_PoligonaldoPortoOrganizadodeMacio_97.set('fieldAliases', {'fid': 'fid', 'Name': 'Anexo ', 'ins.legal': 'Instrumento Legal ', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'ID': 'Range', 'NUMERO_ID': 'TextEdit', 'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'ID': 'Range', 'NUMERO_ID': 'TextEdit', 'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'ID': 'Range', 'NUMERO_ID': 'TextEdit', 'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'ID': 'Range', 'NUMERO_ID': 'TextEdit', 'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'Função': 'TextEdit', 'Calado_m': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'Função': 'TextEdit', 'Calado_m': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'Função': 'TextEdit', 'Calado_m': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'Função': 'TextEdit', 'Calado_m': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'Trecho': 'TextEdit', 'Calado__m_': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado__m_': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado__m_': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado__m_': 'TextEdit', });
lyr_AcessosDutoviriosExternos_13.set('fieldImages', {'Nome': 'TextEdit', 'Mat__Trans': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'Tipo_Duto': 'TextEdit', });
lyr_AcessosFerroviariosExterno_14.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldImages', {'N__PISTA': 'TextEdit', 'IDENTIFICA': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldImages', {'N__PISTA': 'TextEdit', 'IDENTIFICA': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldImages', {'N__PISTA': 'TextEdit', 'IDENTIFICA': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldImages', {'N__PISTA': 'TextEdit', 'IDENTIFICA': 'TextEdit', });
lyr_AcessosRodoviriosExternos_19.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Tipo_Explo': 'TextEdit', 'Utilizacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Tipo_Explo': 'TextEdit', 'Utilizacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Tipo_Explo': 'TextEdit', 'Utilizacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Tipo_Explo': 'TextEdit', 'Utilizacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Tipo_Cessa': 'TextEdit', 'Responsave': 'TextEdit', 'Area_m': 'TextEdit', 'Ini_Contra': 'TextEdit', 'Fim_Contra': 'TextEdit', 'Atividade': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Tipo_Cessa': 'TextEdit', 'Responsave': 'TextEdit', 'Area_m': 'TextEdit', 'Ini_Contra': 'TextEdit', 'Fim_Contra': 'TextEdit', 'Atividade': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Tipo_Cessa': 'TextEdit', 'Responsave': 'TextEdit', 'Area_m': 'TextEdit', 'Ini_Contra': 'TextEdit', 'Fim_Contra': 'TextEdit', 'Atividade': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Tipo_Cessa': 'TextEdit', 'Responsave': 'TextEdit', 'Area_m': 'TextEdit', 'Ini_Contra': 'TextEdit', 'Fim_Contra': 'TextEdit', 'Atividade': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'DESTINA__O': 'TextEdit', 'Area_m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'DESTINA__O': 'TextEdit', 'Area_m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'DESTINA__O': 'TextEdit', 'Area_m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'DESTINA__O': 'TextEdit', 'Area_m²': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldImages', {'INSTRUMENT': 'TextEdit', });
lyr_AcostagemLongoPrazo_33.set('fieldImages', {'ID_BERCO': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'CARACT_CON': 'TextEdit', 'COMPRI_M': 'Range', 'PROFUNDIDA': 'TextEdit', 'CALADO_AUT': 'TextEdit', 'PERFIL_CAR': 'TextEdit', });
lyr_AcostagemMdioPrazo_34.set('fieldImages', {'ID_BERCO': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'CARACT_CON': 'TextEdit', 'COMPRI_M': 'Range', 'PROFUNDIDA': 'TextEdit', 'CALADO_AUT': 'TextEdit', 'PERFIL_CAR': 'TextEdit', });
lyr_AcostagemCurtoPrazo_35.set('fieldImages', {'ID_BERCO': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'CARACT_CON': 'TextEdit', 'COMPRI_M': 'Range', 'PROFUNDIDA': 'TextEdit', 'CALADO_AUT': 'TextEdit', 'PERFIL_CAR': 'TextEdit', });
lyr_AcostagemSituaoAtual_36.set('fieldImages', {'ID_BERCO': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'CARACT_CON': 'TextEdit', 'COMPRI_M': 'Range', 'PROFUNDIDA': 'TextEdit', 'CALADO_AUT': 'TextEdit', 'PERFIL_CAR': 'TextEdit', });
lyr_TerminaisdePassageirosLongoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Área_m²': 'TextEdit', 'Estacionam': 'TextEdit', });
lyr_TerminaisdePassageirosMdioPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Área_m²': 'TextEdit', 'Estacionam': 'TextEdit', });
lyr_TerminaisdePassageirosCurtoPrazo_39.set('fieldImages', {'Nome': 'TextEdit', 'Área_m²': 'TextEdit', 'Estacionam': 'TextEdit', });
lyr_TerminaisdePassageirosSituaoAtual_40.set('fieldImages', {'Nome': 'TextEdit', 'Área_m²': 'TextEdit', 'Estacionam': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_41.set('fieldImages', {'NOME_ID': 'TextEdit', 'TIPO_DA_IN': 'TextEdit', 'CAPACIDADE': 'TextEdit', 'AREA_M_': 'TextEdit', 'VOLUME_M_': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_42.set('fieldImages', {'NOME_ID': 'TextEdit', 'TIPO_DA_IN': 'TextEdit', 'CAPACIDADE': 'TextEdit', 'AREA_M_': 'TextEdit', 'VOLUME_M_': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldImages', {'NOME_ID': 'TextEdit', 'TIPO_DA_IN': 'TextEdit', 'CAPACIDADE': 'TextEdit', 'AREA_M_': 'TextEdit', 'VOLUME_M_': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_44.set('fieldImages', {'NOME_ID': 'TextEdit', 'TIPO_DA_IN': 'TextEdit', 'CAPACIDADE': 'TextEdit', 'AREA_M_': 'TextEdit', 'VOLUME_M_': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Area_m²': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'CONTRATO': 'TextEdit', 'ARRENDATAR': 'TextEdit', 'DATA_INICI': 'DateTime', 'DATA_TERMI': 'DateTime', 'PRORROGACA': 'TextEdit', 'PRODUTOS': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'CONTRATO': 'TextEdit', 'ARRENDATAR': 'TextEdit', 'DATA_INICI': 'DateTime', 'DATA_TERMI': 'DateTime', 'PRORROGACA': 'TextEdit', 'PRODUTOS': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'CONTRATO': 'TextEdit', 'ARRENDATAR': 'TextEdit', 'DATA_INICI': 'DateTime', 'DATA_TERMI': 'DateTime', 'PRORROGACA': 'TextEdit', 'PRODUTOS': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'CONTRATO': 'TextEdit', 'ARRENDATAR': 'TextEdit', 'DATA_INICI': 'DateTime', 'DATA_TERMI': 'DateTime', 'PRORROGACA': 'TextEdit', 'PRODUTOS': 'TextEdit', 'AREA': 'TextEdit', });
lyr_PequenasEmbarcaes_53.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Passageiros_54.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_55.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisSlidosMineraisEspecialmenteSal_56.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoPassageirosCargaGeral_57.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoEspecialmenteAcar_58.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelLquidoEspecialmentecidoSulfrico_59.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisLquidos_60.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CombustveisLquidos_61.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_MltiploUso_62.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_PequenasEmbarcaes_63.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Passageiros_64.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_65.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisSlidosMineraisEspecialmenteSal_66.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoPassageirosCargaGeral_67.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoEspecialmenteAcar_68.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelLquidoEspecialmentecidoSulfrico_69.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisLquidos_70.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CombustveisLquidos_71.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_MltiploUso_72.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_PequenasEmbarcaes_73.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Passageiros_74.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_75.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisSlidosMineraisEspecialmenteSal_76.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoPassageirosCargaGeral_77.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoEspecialmenteAcar_78.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelLquidoEspecialmentecidoSulfrico_79.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisLquidos_80.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CombustveisLquidos_81.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_MltiploUso_82.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_PequenasEmbarcaes_83.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Passageiros_84.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_85.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'PERFIL_': 'TextEdit', 'TIP_INSTAL': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_GranisSlidosMineraisEspecialmenteSal_86.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoPassageirosCargaGeral_87.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'PERFIL_': 'TextEdit', 'TIP_INSTAL': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_GranelSlidoEspecialmenteAcar_88.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'PERFIL_': 'TextEdit', 'TIP_INSTAL': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_GranelLquidoEspecialmentecidoSulfrico_89.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranisLquidos_90.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CombustveisLquidos_91.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_MltiploUso_92.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'PERFIL_': 'TextEdit', 'TIP_INSTAL': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_93.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Perfil_': 'TextEdit', 'Tip_Instal': 'TextEdit', 'Area_m': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_94.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Perfil_': 'TextEdit', 'Tip_Instal': 'TextEdit', 'Area_m': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_95.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'Perfil_': 'TextEdit', 'Tip_Instal': 'TextEdit', 'Area_m': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_96.set('fieldImages', {'NOME_IDENT': 'TextEdit', 'PERFIL_': 'TextEdit', 'TIP_INSTAL': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_PoligonaldoPortoOrganizadodeMacio_97.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ins.legal': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'NUMERO_ID': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'ID': 'inline label - visible with data', 'NUMERO_ID': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'ID': 'inline label - visible with data', 'NUMERO_ID': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'ID': 'inline label - visible with data', 'NUMERO_ID': 'inline label - visible with data', 'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado_m': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado_m': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado_m': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado_m': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado__m_': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado__m_': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado__m_': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado__m_': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat__Trans': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Tipo_Duto': 'inline label - visible with data', });
lyr_AcessosFerroviariosExterno_14.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldLabels', {'N__PISTA': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldLabels', {'N__PISTA': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldLabels', {'N__PISTA': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldLabels', {'N__PISTA': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Tipo_Explo': 'inline label - visible with data', 'Utilizacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Tipo_Explo': 'inline label - visible with data', 'Utilizacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Tipo_Explo': 'inline label - visible with data', 'Utilizacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Tipo_Explo': 'inline label - visible with data', 'Utilizacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Tipo_Cessa': 'inline label - visible with data', 'Responsave': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', 'Ini_Contra': 'inline label - visible with data', 'Fim_Contra': 'inline label - visible with data', 'Atividade': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Tipo_Cessa': 'inline label - visible with data', 'Responsave': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', 'Ini_Contra': 'inline label - visible with data', 'Fim_Contra': 'inline label - visible with data', 'Atividade': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Tipo_Cessa': 'inline label - visible with data', 'Responsave': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', 'Ini_Contra': 'inline label - visible with data', 'Fim_Contra': 'inline label - visible with data', 'Atividade': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Tipo_Cessa': 'inline label - visible with data', 'Responsave': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', 'Ini_Contra': 'inline label - visible with data', 'Fim_Contra': 'inline label - visible with data', 'Atividade': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'DESTINA__O': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'DESTINA__O': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'DESTINA__O': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'DESTINA__O': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldLabels', {'INSTRUMENT': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_33.set('fieldLabels', {'ID_BERCO': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', 'CARACT_CON': 'inline label - visible with data', 'COMPRI_M': 'inline label - visible with data', 'PROFUNDIDA': 'inline label - visible with data', 'CALADO_AUT': 'inline label - visible with data', 'PERFIL_CAR': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_34.set('fieldLabels', {'ID_BERCO': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', 'CARACT_CON': 'inline label - visible with data', 'COMPRI_M': 'inline label - visible with data', 'PROFUNDIDA': 'inline label - visible with data', 'CALADO_AUT': 'inline label - visible with data', 'PERFIL_CAR': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_35.set('fieldLabels', {'ID_BERCO': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', 'CARACT_CON': 'inline label - visible with data', 'COMPRI_M': 'inline label - visible with data', 'PROFUNDIDA': 'inline label - visible with data', 'CALADO_AUT': 'inline label - visible with data', 'PERFIL_CAR': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_36.set('fieldLabels', {'ID_BERCO': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', 'CARACT_CON': 'inline label - visible with data', 'COMPRI_M': 'inline label - visible with data', 'PROFUNDIDA': 'inline label - visible with data', 'CALADO_AUT': 'inline label - visible with data', 'PERFIL_CAR': 'inline label - visible with data', });
lyr_TerminaisdePassageirosLongoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área_m²': 'inline label - visible with data', 'Estacionam': 'inline label - visible with data', });
lyr_TerminaisdePassageirosMdioPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área_m²': 'inline label - visible with data', 'Estacionam': 'inline label - visible with data', });
lyr_TerminaisdePassageirosCurtoPrazo_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área_m²': 'inline label - visible with data', 'Estacionam': 'inline label - visible with data', });
lyr_TerminaisdePassageirosSituaoAtual_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área_m²': 'inline label - visible with data', 'Estacionam': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_41.set('fieldLabels', {'NOME_ID': 'inline label - visible with data', 'TIPO_DA_IN': 'inline label - visible with data', 'CAPACIDADE': 'inline label - visible with data', 'AREA_M_': 'inline label - visible with data', 'VOLUME_M_': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_42.set('fieldLabels', {'NOME_ID': 'inline label - visible with data', 'TIPO_DA_IN': 'inline label - visible with data', 'CAPACIDADE': 'inline label - visible with data', 'AREA_M_': 'inline label - visible with data', 'VOLUME_M_': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldLabels', {'NOME_ID': 'inline label - visible with data', 'TIPO_DA_IN': 'inline label - visible with data', 'CAPACIDADE': 'inline label - visible with data', 'AREA_M_': 'inline label - visible with data', 'VOLUME_M_': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_44.set('fieldLabels', {'NOME_ID': 'inline label - visible with data', 'TIPO_DA_IN': 'inline label - visible with data', 'CAPACIDADE': 'inline label - visible with data', 'AREA_M_': 'inline label - visible with data', 'VOLUME_M_': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'ARRENDATAR': 'inline label - visible with data', 'DATA_INICI': 'inline label - visible with data', 'DATA_TERMI': 'inline label - visible with data', 'PRORROGACA': 'inline label - visible with data', 'PRODUTOS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'ARRENDATAR': 'inline label - visible with data', 'DATA_INICI': 'inline label - visible with data', 'DATA_TERMI': 'inline label - visible with data', 'PRORROGACA': 'inline label - visible with data', 'PRODUTOS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'ARRENDATAR': 'inline label - visible with data', 'DATA_INICI': 'inline label - visible with data', 'DATA_TERMI': 'inline label - visible with data', 'PRORROGACA': 'inline label - visible with data', 'PRODUTOS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'ARRENDATAR': 'inline label - visible with data', 'DATA_INICI': 'inline label - visible with data', 'DATA_TERMI': 'inline label - visible with data', 'PRORROGACA': 'inline label - visible with data', 'PRODUTOS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_PequenasEmbarcaes_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Passageiros_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisSlidosMineraisEspecialmenteSal_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoPassageirosCargaGeral_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoEspecialmenteAcar_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelLquidoEspecialmentecidoSulfrico_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisLquidos_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CombustveisLquidos_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_MltiploUso_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_PequenasEmbarcaes_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Passageiros_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisSlidosMineraisEspecialmenteSal_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoPassageirosCargaGeral_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoEspecialmenteAcar_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelLquidoEspecialmentecidoSulfrico_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisLquidos_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CombustveisLquidos_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_MltiploUso_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_PequenasEmbarcaes_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Passageiros_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisSlidosMineraisEspecialmenteSal_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoPassageirosCargaGeral_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoEspecialmenteAcar_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelLquidoEspecialmentecidoSulfrico_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisLquidos_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CombustveisLquidos_81.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_MltiploUso_82.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_PequenasEmbarcaes_83.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Passageiros_84.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoGranelLquidoPassageirosCargaGeral_85.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'PERFIL_': 'inline label - visible with data', 'TIP_INSTAL': 'inline label - visible with data', 'AREA_M': 'inline label - visible with data', });
lyr_GranisSlidosMineraisEspecialmenteSal_86.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoPassageirosCargaGeral_87.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'PERFIL_': 'inline label - visible with data', 'TIP_INSTAL': 'inline label - visible with data', 'AREA_M': 'inline label - visible with data', });
lyr_GranelSlidoEspecialmenteAcar_88.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'PERFIL_': 'inline label - visible with data', 'TIP_INSTAL': 'inline label - visible with data', 'AREA_M': 'inline label - visible with data', });
lyr_GranelLquidoEspecialmentecidoSulfrico_89.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranisLquidos_90.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CombustveisLquidos_91.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_MltiploUso_92.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'PERFIL_': 'inline label - visible with data', 'TIP_INSTAL': 'inline label - visible with data', 'AREA_M': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_93.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Perfil_': 'inline label - visible with data', 'Tip_Instal': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_94.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Perfil_': 'inline label - visible with data', 'Tip_Instal': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_95.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'Perfil_': 'inline label - visible with data', 'Tip_Instal': 'inline label - visible with data', 'Area_m': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_96.set('fieldLabels', {'NOME_IDENT': 'inline label - visible with data', 'PERFIL_': 'inline label - visible with data', 'TIP_INSTAL': 'inline label - visible with data', 'AREA_M': 'inline label - visible with data', });
lyr_PoligonaldoPortoOrganizadodeMacio_97.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'ins.legal': 'inline label - visible with data', });
lyr_PoligonaldoPortoOrganizadodeMacio_97.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});