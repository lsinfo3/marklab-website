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
          { lat: 52.5200, lon: 13.4050, name: "Berlin, Germany" },
          { lat: 48.8566, lon: 2.3522, name: "Paris, France" },
          { lat: 51.5074, lon: -0.1278, name: "London, UK" }
      ];

      locations.forEach(function(location) {
          L.marker([location.lat, location.lon]).addTo(map)
              .bindTooltip(location.name, { permanent: false, direction: "top" });
      });
  });
</script>