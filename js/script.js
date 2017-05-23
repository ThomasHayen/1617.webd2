function myMap() {
var myLatlng = new google.maps.LatLng(51.040955, 3.719832);
var mapOptions = {
  zoom: 15,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Bits n' Codes agency"
});

marker.setMap(map);
}

