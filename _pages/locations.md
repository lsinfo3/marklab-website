---
layout: page
title: Measurement locations
section: Deployments
description: MARKlab deployments across Europe and Brazil, with further international locations planned.
permalink: /locations/
map: true
---
{% assign active = site.data.deployments.locations | where: 'status', 'active' %}
{% assign planned = site.data.deployments.locations | where: 'status', 'planned' %}
{% assign countries = active | map: 'country' | uniq %}

**{{ active.size }} active locations across {{ countries.size }} countries.** São Paulo hosts two nodes. Location entries can represent multiple nodes; this is not a total node count.

Inventory confirmed {{ site.data.deployments.verified | date: '%-d %B %Y' }}. “Active” describes a deployment, not real-time connectivity or availability for a particular experiment. Radio technology availability depends on the node hardware and local networks.

<div class="legend"><span class="status active">Active deployment · solid circle</span><span class="status planned">Planned deployment · dashed circle</span></div>
<div id="map" class="map" role="region" aria-label="Map of MARKlab deployments; the full inventory follows in a table"></div>
<script id="deployment-data" type="application/json">{{ site.data.deployments.locations | jsonify }}</script>

Map markers show approximate city or regional locations, not host addresses. Planned countries without a confirmed city are listed below without a map marker. Map tiles are provided by OpenStreetMap; loading the map connects your browser to external map services.

## Active deployments

<div class="table-scroll" role="region" aria-label="Active deployment locations" tabindex="0">
<table>
<thead><tr><th scope="col">Location</th><th scope="col">Country</th></tr></thead>
<tbody>{% for location in active %}<tr><td>{{ location.city }}</td><td>{{ location.country }}</td></tr>{% endfor %}</tbody>
</table>
</div>

## Planned deployments

<div class="table-scroll" role="region" aria-label="Planned deployment locations" tabindex="0">
<table>
<thead><tr><th scope="col">Country</th><th scope="col">Location</th><th scope="col">Status</th></tr></thead>
<tbody>{% for location in planned %}<tr><td>{{ location.country }}</td><td>{{ location.city | default: 'To be confirmed' }}</td><td>Planned</td></tr>{% endfor %}</tbody>
</table>
</div>

## Help expand the platform

A new host can add a valuable research perspective, including in countries where MARKlab already has nodes. [Find out what hosting involves]({{ '/host/' | relative_url }}) or contact [{{ site.email }}](mailto:{{ site.email }}).
