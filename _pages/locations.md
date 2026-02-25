---
layout: page
title: Locations
#subtitle: Mark
permalink: /locations/
hero_image: /marklab-website/assets/images/marklab_hero3.png
#hero_height: is-fullwidth
hero_darken: true
---

## MARK Deployments

<div id="map" style="width: 100%; height: 500px;"></div>

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
      var map = L.map('map').setView([51.1657, 10.4515], 4); // Centered on Europe

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add markers with tooltips
      var locations = [
          { lat: 49.781108225830415, lon: 9.97292187555465, name: "Würzburg, Germany", status: "Active" }, 
          { lat: 48.15677758945259,  lon: 11.566836443047128, name: "Munich, Germany", status: "Active" },
          { lat: 63.43054077399492, lon: 10.395076455285725, name: "Trondheim, Norway", status: "Active" },
          { lat: 45.81512621395278, lon: 15.981975001057377, name: "Zagreb, Croatia", status: "Active" }, 
          { lat: 45.468426594164924, lon: 9.190887769941973, name: "Milan, Italy", status: "Active" },
          { lat: 40.12909034903276, lon: 9.003508650660718, name: "Sardinia, Italy", status: "Active" },
          { lat: 40.41592488814913, lon: -3.697665266617252, name: "Madrid, Spain", status: "Active" },
          { lat: 47.14106267433893, lon: 8.429255642694061, name: "Lucerne, Switzerland", status: "Active" },
          { lat: 51.10931014256227, lon: 17.03434944281905, name: "Wrocław, Poland", status: "Active" },
          { lat: 52.229943242940216, lon: 21.00854120242006, name: "Warsaw, Poland", status: "Planned" },
          { lat: 48.857699237086486, lon: 2.351666038520643, name: "Paris, France", status: "Planned" },
          { lat: 41.157444996101894, lon: -8.62904082950535, name: "Porto, Portugal", status: "Active" },
          { lat: 60.17030798072441, lon: 24.930068920730672, name: "Helsinki, Finland", status: "Planned" },
          { lat: 39.75132951091126, lon: -101.41992588683895, name: "USA", status: "Planned" },
          { lat: -8.478312628480555, lon: -54.89392071546018, name: "Brazil", status: "Planned" }
      ];

      // Status-based icons
      var statusIcons = {
          "Active": L.icon({ iconUrl: '/marklab-website/assets/icons/marker-icon-red.png', iconSize: [25, 41], iconAnchor: [12, 41] }),
          "Planned": L.icon({ iconUrl: '/marklab-website/assets/icons/marker-icon-grey.png', iconSize: [25, 41], iconAnchor: [12, 41] }),
      };

      // Add markers with status-based colors
      locations.forEach(function(location) {
          var marker = L.marker([location.lat, location.lon], { icon: statusIcons[location.status] }).addTo(map);
          
          // Tooltip
          marker.bindTooltip(`<strong>${location.name}</strong><br>Status: ${location.status}`, 
              { permanent: false, direction: "top" });
      });
  });
</script>
