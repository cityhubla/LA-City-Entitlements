$(document).ready(function() {
mapboxgl.accessToken = 'pk.eyJ1IjoiY3J1emluNzN2dyIsImEiOiI3RDdhUi1NIn0.jaEqREZw7QQMRafKPNBdmA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'js/light-v8.json',
    center: [-118.243685,34.052234],
    zoom: 12
});

var ncboundurl = 'data/nc_boundaries.geojson';    
var ncbound = new mapboxgl.GeoJSONSource({
    data: ncboundurl
});
    
var cityboundaryurl = 'data/lacity.geojson';    
var cityboundary = new mapboxgl.GeoJSONSource({
    data: cityboundaryurl
});    

map.on('style.load', function () {
    map.addSource('cityboundary', cityboundary);
    
    map.addLayer({
        "id": "cityboundary",
        "type": "line",
        "source": "cityboundary",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
        'fill-color': '#47a2da',
        'line-color': '#47a2da',
        'fill-opacity':0,
        'line-width':3
    }
    });
    
    map.addSource('ncbound', ncbound);
    
    map.addLayer({
        "id": "ncbound",
        "type": "line",
        "source": "ncbound",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
        'line-color': '#47a2da',
        'line-width':3,
        'line-dasharray':[2,2]
    }
    });

    map.addSource('lazoning', {
    type:'vector',
    url:""+"http://104.236.162.144:8000/lazoning/" + "meta.json?vectortileflag=true"
    });
    
    map.addLayer({
    "id": "lacommercial",
    "type": "fill",
    "source": "lazoning",
    "source-layer": "Zoning",    
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "filter":["in", "ZONE_CLASS", "C1","C1(PV)","C1.5","C2","C4","C5","C5","CM","CR"],
    "paint": {
    'fill-color': '#245479',
    'fill-outline-color': '#FFF',
    'fill-opacity':.25,
    }
    });
        
    map.addLayer({
    "id": "laresidential",
    "type": "fill",
    "source": "lazoning",
    "source-layer": "Zoning",    
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "filter":["in", "ZONE_CLASS","R1","R1P","R2","R2P","R3","R3(PV)","R3(UV)","R3P","R4","R4(PV)","R4P","R5","R5P","RA","RAP","RAS3","RAS3(UV)","RAS4","RAS4(UV)","RD1.5","RD2","RD3","RD4","RD5","RD6","RE","RE11","RE15","RE20","RE40","RE9","RMP","RS","RSP","RU","RW1","RW2","RZ2.5","RZ3","RZ4","RZ5"],
    "paint": {
    'fill-color': '#009dff',
    'fill-outline-color': '#FFF',
    'fill-opacity':.25,
    }
    });
    
    map.addLayer({
    "id": "lamanufacturing",
    "type": "fill",
    "source": "lazoning",
    "source-layer": "Zoning",    
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "filter":["in", "ZONE_CLASS","M(PV)","M1","M2","M2(PV)","M3","MR1","MR2"],
    "paint": {
    'fill-color': '#00a79d',
    'fill-outline-color': '#FFF',
    'fill-opacity':.25,
    }
    });
    
    map.addLayer({
    "id": "lacityzoning",
    "type": "fill",
    "source": "lazoning",
    "source-layer": "Zoning",    
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "filter":["!in", "ZONE_CLASS", "C2","C4","C1","C5","R1","R2","R3","R4","R5"],
    "paint": {
    'fill-color': '#999999',
    'fill-outline-color': '#FFF',
    'fill-opacity':.25,
    }
    });
    
    map.addSource('ent', {
    type:'vector',
    url:'mapbox://cruzin73vw.b05f7872'
    });
    
    map.addLayer({
        "id": "density bonus",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Request Type", "DB-DENSITY BONUS"],
        "paint": {
        'circle-color':'#ffa4ff',
        'circle-radius':10  
        }
    });
    
    map.addLayer({
        "id": "zoning change",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Request Type", "ZC-ZONE CHANGE"],
        "paint": {
        'circle-color':'#cf4fe3',
        'circle-radius':10  
        }
    });
    
    map.addLayer({
        "id": "EIReport",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Request Type", "EIR-ENVIRONMENTAL IMPACT REPORT"],
        "paint": {
        'circle-color':'#0076b1',
        'circle-radius':10  
        }
    });
    
    map.addLayer({
        "id": "CUBalcohol",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Request Type", "CUB-Conditional Use Beverage-Alcohol"],
        "paint": {
        'circle-color':'black',
        'circle-radius':2  
        }
    });
    
    map.addLayer({
        "id": "CExemption",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Request Type", "CE-CATEGORICAL EXEMPTION"],
        "paint": {
        'circle-color':'black',
        'circle-radius':5,
        'circle-opacity':.3
        }
    });
    
    map.addLayer({
        "id": "CEXcoastal",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Request Type", "CEX-COASTAL EXEMPTION"],
        "paint": {
        'circle-color':'aqua',
        'circle-radius':3  
        }
    });

    map.addLayer({
        "id": "all entitlements",
        "type": "circle",
        "source": "ent",
        interactive:true,
        "filter":["!in", "Request Type", "DB-DENSITY BONUS","CUB-Conditional Use Beverage-Alcohol","EIR-ENVIRONMENTAL IMPACT REPORT","ZC-ZONE CHANGE","CE-CATEGORICAL EXEMPTION","CEX-COASTAL EXEMPTION"],
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "paint": {
        'circle-color':'#ff7f00',
        'circle-radius':{"stops": [[9, 2],[12, 5], [15,15]]},
        'circle-opacity':.75
        }
    });
    
        map.addLayer({
        "id": "selection",
        "type": "circle",
        "source": "ent",
        "source-layer":"1_2015_to_10_2015_lacityentitlements",
        "filter":["==", "Address", "NONE"],
        "paint": {
        'circle-color':'yellow',
        'circle-radius':{"stops": [[6, 10], [12,15]]} 
        }
    });
    

});

map.on('click', function(e) {
      map.featuresAt(e.point, {radius: 5}, function(err, features) {
          map.setFilter('selection',[ 'all',[ 'in', 'Address' ].concat(features[0].properties.Address)]);
          document.getElementById('infobox').innerHTML = "<b>Address: </b>"+features[0].properties.Address+"<br><b>Community Plan: </b>"+features[0].properties['Community Plan Area']+"<br><b>Request Type: </b>"+features[0].properties['Request Type']+"<br><b>Project Description: </b>"+features[0].properties['Project Description']
      });
  });

    
//Address Search    
var mapsearch = function(){
var searchgeo=document.getElementById('geosearch').value  

var addsearch ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+searchgeo+'.json?access_token=pk.eyJ1IjoiY3J1emluNzN2dyIsImEiOiI3RDdhUi1NIn0.jaEqREZw7QQMRafKPNBdmA'
mapboxgl.util.getJSON(addsearch, function(err, result) {
        var bbox = result;
    console.log(bbox.features[0].center);
    map.flyTo({
    center:bbox.features[0].center,
    zoom: 15
    })
    });

}

//Disable Rotate
map.dragRotate.disable();   
});