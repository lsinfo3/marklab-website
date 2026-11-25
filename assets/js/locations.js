/* All deployment information comes from _data/deployments.yml. */
document.addEventListener('DOMContentLoaded', function () {
  var element = document.getElementById('map');
  var data = document.getElementById('deployment-data');
  if (!element || !data) return;
  if (!window.L) {
    element.textContent = 'The map could not load. All locations are listed in the table below.';
    return;
  }
  var locations = JSON.parse(data.textContent);
  var map = L.map(element, { scrollWheelZoom: false });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  var markers = [];
  locations.forEach(function (location) {
    if (typeof location.lat !== 'number' || typeof location.lon !== 'number') return;
    var active = location.status === 'active';
    var marker = L.circleMarker([location.lat, location.lon], {
      radius: location.node_count === 2 ? 10 : 7,
      color: active ? '#a74738' : '#52637c',
      fillColor: active ? '#d87364' : '#d9e0e9',
      fillOpacity: 0.9, weight: 2, dashArray: active ? null : '3 3'
    });
    var label = location.city + ', ' + location.country + ' · ' + (active ? 'Active deployment' : 'Planned deployment');
    if (location.node_count) label += ' · ' + location.node_count + (location.node_count === 1 ? ' node' : ' nodes');
    marker.bindTooltip(label);
    marker.bindPopup(function () {
      var popup = document.createElement('p');
      popup.textContent = label;
      return popup;
    });
    markers.push(marker.addTo(map));
  });
  if (markers.length) map.fitBounds(L.featureGroup(markers).getBounds().pad(0.15));
  else map.setView([20, 0], 2);
});
