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
          { lat: 40.41592488814913, lon: -3.697665266617252, name: "Madrid, Spain", status: "Active" },
          { lat: 47.14106267433893, lon: 8.429255642694061, name: "Lucerne, Switzerland", status: "Active" },
          { lat: -8.478312628480555, lon: -54.89392071546018, name: "Brasil", status: "Planned" }
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
