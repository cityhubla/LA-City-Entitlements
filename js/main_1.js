mapboxgl.accessToken = 'pk.eyJ1IjoiY3J1emluNzN2dyIsImEiOiI3RDdhUi1NIn0.jaEqREZw7QQMRafKPNBdmA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cruzin73vw/cin2m33v8001zatnl9kx7dn13',
    center: [-118.243685,34.052234],
    zoom: 12
});

// When a click event occurs near a marker icon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['2015-GPA','2015-HD','2015-ZC','2015-DB','2015-SPR','2015-SL','2014-GPA','2014-HD','2014-ZC','2014-DB','2014-SPR','2014-SL','2013-GPA','2013-HD','2013-ZC','2013-DB','2013-SPR','2013-SL'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>Address: '+feature.properties.Address+'</h3><h3>Application Date: '+feature.properties.Applicatio+'</h3><h3>Case Number: '+feature.properties['Case Numbe']+'</h3><h3>Project Description: '+feature.properties['Project De']+'</h3>'+"<br><b><a href='http://planning.lacity.org/caseinfo/casesummary.aspx?case="+features[0].properties['Case Numbe']+"'  target='_blank'>Case Link to LA City Planning</a></b>")
        .addTo(map);
    map.flyTo({center: features[0].geometry.coordinates});
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['2015-GPA','2015-HD','2015-ZC','2015-DB','2015-SPR','2015-SL','2014-GPA','2014-HD','2014-ZC','2014-DB','2014-SPR','2014-SL','2013-GPA','2013-HD','2013-ZC','2013-DB','2013-SPR','2013-SL'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});

addLayer('15`', '2015-GPA','gpa');
addLayer('15`', '2015-ZC','zc');
addLayer('15`', '2015-HD','hd');
addLayer('15`', '2015-DB','db');
addLayer('15`', '2015-SL','sl');
addLayer('15`', '2015-SPR','spr');

addLayer('14`', '2014-GPA','gpa');
addLayer('14`', '2014-ZC','zc');
addLayer('14`', '2014-HD','hd');
addLayer('14`', '2014-DB','db');
addLayer('14`', '2014-SL','sl');
addLayer('14`', '2014-SPR','spr');

addLayer('13`', '2013-GPA','gpa');
addLayer('13`', '2013-ZC','zc');
addLayer('13`', '2013-HD','hd');
addLayer('13`', '2013-DB','db');
addLayer('13`', '2013-SL','sl');
addLayer('13`', '2013-SPR','spr');

function addLayer(name, id, ent) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = name;

    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(id, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(id, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(id, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById(ent);
    layers.appendChild(link);
}