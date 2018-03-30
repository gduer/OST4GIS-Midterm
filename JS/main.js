/* =====================
Leaflet Configuration
===================== */
locations = "https://raw.githubusercontent.com/gduer/JS-Midterm/master/locations.json?token=AduVdlMfywykjLA0-Iy8LhosRpr63Q2pks5avulrwA%3D%3D";
political = "https://raw.githubusercontent.com/gduer/JS-Midterm/master/political.json?token=AduVdvIwEaonAvWlKH5EwKfNR2NUblQcks5axp15wA%3D%3D";

var frame = 0;
var DaniMarker;
var animatedMarker;
var animatedDragon1;
var animatedDragon2;
var animatedDragon3;
var activeLayers = L.layerGroup();
var locationsFeatureGroup;
var politicalFeatureGroup;

function action(frame) {
  if(frame === 1){
    $("#backwards-button").prop("disabled",false);
    map.flyTo([4.637042566162651, 31.178238748711664], 8);
    DaniMarker = new L.marker([4.73572308260344, 31.276848003261797], {icon: dannyIcon}).bindPopup('Hi I\'m Dani!').addTo(activeLayers);
    map.addLayer(activeLayers);
    $('#image').css({'border':'solid'});
    $("#image").append('<img id="image" src="Images/Pentos.png"/>');
    $('#content').css({'font-size':'14px'});
    $('#content').text("Our Queen's story begins in Pentos. A Dothraki khalasar led by Khal Drogo arrives at the city, leading the magisters of Pentos to double the city guard. To save the city, Magister Illyrio Mopatis brokers a marriage between his guest (and our future Queen), Princess Daenerys Targaryen, and Khal Drogo. Daenerys is presented to Drogo at the nine-towered manse Drogo has been given in the city. Their wedding ceremony is held in a field outside the city. Drogo, his new bride, and his khalasar depart the city shortly after the ceremony, heading for Vaes Dothrak.");
    $('.title').text("PENTOS");
  }
  if(frame === 2){
    var travelPath2 = L.polyline([[4.73572308260344, 31.276848003261797], [8.64774659424068, 38.13966400318406], [4.629095945023036, 44.85788313921303], [-1.1344155151522362, 64.92369193967671]]);
    animatedMarker = L.animatedMarker(travelPath2.getLatLngs(), {icon: dannyIcon,  onEnd: function(){
      dragon1 = new L.marker([-0.7531960298774517, 65.21693763963964], {icon: dragon}).bindPopup('Drogon').addTo(activeLayers);
      dragon2 = new L.marker([-1.1375631625134697, 64.51402030883712], {icon: dragon}).bindPopup('Rhaegal').addTo(activeLayers);
      dragon3 = new L.marker([-1.3846303722302662, 65.50798934692506], {icon: dragon}).bindPopup('Viserion').addTo(activeLayers);
    }}).addTo(activeLayers);
    map.addLayer(activeLayers);
    map.flyTo([-1.1344155151522362, 64.92369193967671], 8);
    $("#image").append('<img id="image" src="Images/VasDoth.png"/>');
    $('#content').text("After wedding Khal Drogo outside Pentos, Daenerys Targaryen travels with his khalasar to Vaes Dothrak, where she is presented to the dosh khaleen. She survives an assassination attempt in the markets, leading Drogo to announce he will lead his khalasar against the Seven Kingdoms. Soon after, Khal Drogo died from an infection, and Daenerys was cast out from the Dothraki. With her newborn dragons, she decides to keep moving east, looking for shelter.");
    $('.title').text("VAS DOTHRAK");
  }
  if(frame === 3){
    var travelPath3 = L.polyline([[-1.157703660686935,64.89993624865168], [-34.61184354994869, 87.99494206420219]]);
    animatedMarker = L.animatedMarker(travelPath3.getLatLngs(), {icon: dannyIcon, onEnd: function(){
      dragon1 = new L.marker([-34.44980979462733, 87.96934088619933], {icon: bigDragon}).bindPopup('Drogon').addTo(activeLayers);
      dragon2 = new L.marker([-34.553902406265834,87.82656080338005], {icon: bigDragon}).bindPopup('Rhaegal').addTo(activeLayers);
      dragon3 = new L.marker([-34.43169346745631, 88.06269709419655], {icon: bigDragon}).bindPopup('Viserion').addTo(activeLayers);
    }}).addTo(activeLayers);
    map.addLayer(activeLayers);
    map.flyTo([-34.61184354994869, 87.99494206420219], 8);
    $("#image").append('<img id="image" src="Images/Qarth.png"/>');
    $('#content').text("After escaping Vas Dothrak and nearly dying of thirst in the desert. Our Queen and her young dragons wandered all the way to Qarth, nearly 1,500 miles away from Vaes Dothrak. There, she secured ships and continued on to Slaver's Bay.");
    $('.title').text("QARTH");
  }
  if(frame === 4){
    var travelPath4 = L.polyline([[-34.61184354994869, 87.99494206420219], [-15.238651003055447, 64.66120522857746]]);
    var travelPathDragon1 = L.polyline([[-34.44980979462733, 87.96934088619933], [-14.943355879420617, 65.57994106863707]]);
    var travelPathDragon2 = L.polyline([[-34.553902406265834,87.82656080338005], [-15.642588414771478, 65.33831323617372]]);
    var travelPathDragon3 = L.polyline([[-34.43169346745631, 88.06269709419655], [-15.27207376218709, 64.19607257361959]]);
    animatedMarker = L.animatedMarker(travelPath4.getLatLngs(), {icon: dannyIcon2}).addTo(activeLayers);
    animatedDragon1 = L.animatedMarker(travelPathDragon1.getLatLngs(), {icon: bigDragon}).addTo(activeLayers);
    animatedDragon2 = L.animatedMarker(travelPathDragon2.getLatLngs(), {icon: bigDragon}).addTo(activeLayers);
    animatedDragon3 = L.animatedMarker(travelPathDragon3.getLatLngs(), {icon: bigDragon}).addTo(activeLayers);
    map.addLayer(activeLayers);
    map.flyTo([-15.238651003055447, 64.66120522857746], 8);
    $("#image").append('<img id="image" src="Images/Slavers.png"/>');
    $('#content').text("Our Queen's first stop in Slaver's Bay was Astapor, home of the Unsullied army. There, she decided she couldn't stand by and witness its horrible slave conditions. After killing the slave traders and winning the loyalty of the Unsullied, Daenerys headed to the next slaver's town, Yunkai. She conquered Yunkai, freeing more slaves, and then moved onto Meeren.");
    $('.title').text("SLAVER\'S BAY");
  }
  if(frame === 5){
    var travelPath5 = L.polyline([[-15.238651003055447, 64.66120522857746], [-9.706331879419123, 67.14051559054954]]);
    var travelPathDragon4 = L.polyline([[-14.943355879420617, 65.57994106863707], [-10.782696712656929, 67.41679482508258]]);
    var travelPathDragon5 = L.polyline([[-15.642588414771478, 65.33831323617372], [-8.595832635357457, 65.48377216537563]]);
    var travelPathDragon6 = L.polyline([[-15.27207376218709, 64.19607257361959], [-10.091391883312793, 70.5799228136939]]);
    animatedMarker = L.animatedMarker(travelPath5.getLatLngs(), {icon: dannyIcon2}).addTo(activeLayers);
    animatedDragon1 = L.animatedMarker(travelPathDragon4.getLatLngs(), {icon: bigDragon}).addTo(activeLayers);
    animatedDragon2 = L.animatedMarker(travelPathDragon5.getLatLngs(), {icon: bigDragon}).addTo(activeLayers);
    animatedDragon3 = L.animatedMarker(travelPathDragon6.getLatLngs(), {icon: bigDragon}).addTo(activeLayers);
    map.addLayer(activeLayers);
    map.flyTo([-9.706331879419123, 67.14051559054954], 8);
    $("#image").append('<img id="image" src="Images/Meereen.png"/>');
    $('#content').text("After abolishing slavery in Astapor and Yunkai, our Queen beseiged and conquored the great city of Meereen.  When entering the city, our Queen is received as a hero and savior by Meereenese freedmen. She rules the city as a queen for some time, as she prepares her new ship armada to finally make her landing in Westeros");
    $('.title').text("MEEREEN");
  }
  if(frame === 6){
    $("#forward-button").prop("disabled",false);
    var travelPath6 = L.polyline([[-9.706331879419123, 67.14051559054954], [-13.8586662041662, 61.381026094962365], [-26.724253386917113, 58.21657421521707], [-21.048809161656905, 43.72960701915557], [-10.409851431575607, 28.880478405952367], [6.939697974990755, 24.377492353110153]]);
    animatedMarker = L.animatedMarker(travelPath6.getLatLngs(), {icon: boatIcon, onEnd: function(){DaniMarker = new L.marker([7.038941344821865, 24.352460067024783], {icon: dannyIcon2}).bindPopup('Hi I\'m Dani!').addTo(activeLayers);}}).addTo(activeLayers);
    map.flyTo([ -13.945546670754918, 35.38557338941983], 4);
    map.on('zoomend', function() {
    map.addLayer(activeLayers);});
    $("#image").append('<img id="image" src="Images/Ships.png"/>');
    $('#content').text("Finally, our Queen is on her way to Westeros to make her rightful claim on the Iron Throne!");
    $('.title').text("JOURNEY TO DRAGONSTONE");
    $("#forward-button").prop("disabled",true);
  }
}

function forward() {
    frame = frame + 1;
    map.removeLayer(activeLayers);
    activeLayers = L.layerGroup();
    $( "#image" ).empty();
    $( "#content" ).empty();
    action(frame);
}

function backwards() {
    frame = frame - 1;
    $( "#image" ).empty();
    $( "#content" ).empty();
    $("#forward-button").prop("disabled",false);
    map.removeLayer(activeLayers);
    activeLayers = L.layerGroup();
    if(frame === 0){
      map.flyTo([11.359809273957639, 17.73358062729659], 4);
      $("#backwards-button").prop("disabled",true);
      $('#image').css({'border':'none'});
      $('#content').css({'font-size':'24px'});
      $('#content').text("Click around the map to explore, or click next to follow the story of our Queen.");
      $('.title').text("WELCOME TO THE WORLD OF ICE AND FIRE");
    }
    else{
    action(frame);
  }
}

var dannyIcon = new L.icon({
    iconUrl: 'Icons/danny.png',

    iconSize:     [60, 50], // size of the icon
    iconAnchor:   [10, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [10, -25] // point from which the popup should open relative to the iconAnchor
});

var dannyIcon2 = new L.icon({
    iconUrl: 'Icons/danny2.png',

    iconSize:     [60, 50], // size of the icon
    iconAnchor:   [10, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [10, -25] // point from which the popup should open relative to the iconAnchor
});

var boatIcon = new L.icon({
    iconUrl: 'Icons/sailboat.svg',

    iconSize:     [60, 50], // size of the icon
    iconAnchor:   [10, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [10, -25] // point from which the popup should open relative to the iconAnchor
});

var dragon = new L.icon({
    iconUrl: 'Icons/dragon.svg',

    iconSize:     [40, 30], // size of the icon
    iconAnchor:   [10, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [10, -25] // point from which the popup should open relative to the iconAnchor
});

var bigDragon = new L.icon({
    iconUrl: 'Icons/dragon2.svg',

    iconSize:     [90, 70], // size of the icon
    iconAnchor:   [10, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [10, -25] // point from which the popup should open relative to the iconAnchor
});

var cityIcon = new L.icon({
    iconUrl: 'Icons/city.svg',

    iconSize:     [20, 15], // size of the icon
});

var castleIcon = new L.icon({
    iconUrl: 'Icons/castle.svg',

    iconSize:     [15, 12], // size of the icon
});

function getColor(d) {
    return d === "New Gift"  ?        '#414141' :
           d === "Riverlands"  ?      '#6fd4f5' :
           d === "Beyond The Wall"  ? '#4daf4a' :
           d === "Bran's Gift"  ?     '#414141' :
           d === "The North"  ?       '#f2f2f2' :
           d === "The Iron Islands" ? '#4b62e0' :
           d === "Dorne"  ?           '#f0a757' :
           d === "Stormlands"  ?      '#f8f02b' :
           d === "The Vale"  ?        '#ddeeff' :
           d === "The Westerlands"  ? '#dd5d53' :
           d === "The Reach"  ?       '#91e586' :
                                      '#e73131' ;
}

var myStyle = function(feature) {
    return {fillColor: getColor(feature.properties.name), weight: 1};

};

var locationIcon = function(type){
  if (type === "City"){return cityIcon;}
  else{return castleIcon;}
};

var showIcons = function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: locationIcon(geoJsonPoint.properties.type)}).bindPopup(geoJsonPoint.properties.name);};
var bounds = ([[42, -20], [-40, 91.5]]);

var cityFilter = function(geoJsonPoint) {
  return geoJsonPoint.properties.type == "City" ||  geoJsonPoint.properties.type == "Castle";
};


function onEachFeature(feature, layer) {
    //bind click
    layer.on('click', function (e) {
      $('.title').text(layer.feature.properties.name);
      $('.content').text("claimed by: " + layer.feature.properties.ClaimedBy);
      $( "#image" ).empty();
      $("#image").append('<img id="image" src="Images/' + layer.feature.properties.ClaimedBy + '.jpg"/>');
      console.log(layer.feature.properties.name);
      // You can make your ajax call declaration here
      //$.ajax(...
    });
}

$(document).ready(function() {
  $.ajax(political).done(function(data) {
      var parsedData = JSON.parse(data);
      politicalFeatureGroup = L.geoJson(parsedData, {
      style: myStyle,
      onEachFeature: onEachFeature
    }).addTo(map);

    });

  $.ajax(locations).done(function(data) {
      var parsedData = JSON.parse(data);
      locationsFeatureGroup = L.geoJson(parsedData, {
        pointToLayer : showIcons,
        filter: cityFilter
      }).addTo(map);

});
});


var map = L.map('map', {
  center: [11.359809273957639, 17.73358062729659],
  zoom: 4,
  maxBounds: bounds,
  maxBoundsViscosity: 1.0,
  minZoom: 4
});


var Stamen_TonerLite = L.tileLayer('https://cartocdn-ashbu.global.ssl.fastly.net/ramirocartodb/api/v1/map/named/tpl_756aec63_3adb_48b6_9d14_331c6cbc47cf/all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
