---
layout: page
title: About
#subtitle: Mark
permalink: /about/
hero_image: /marklab-website/assets/images/marklab_hero3.png
hero_darken: true
---

Setting up a globally distributed measurement platform, is diffcult and needs the help and support of others.
**Right now, we need people that host measurement probes, in countries we are not haveing a node in.**  

<!-- Accordion Section -->
<div class="container">
    <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(1)">
            <span class="has-text-info has-text-weight-bold">01</span> Get in touch
        </div>
        <div class="accordion-content" id="content-1">
            <p>Send us an email (<a href="mailto:mobileatlas@sba-research.org">mobileatlas@sba-research.org</a>), providing your contact details and the location (city, country) where you could host a measurement probe.</p>
        </div>

        <div class="accordion-header" onclick="toggleAccordion(2)">
            <span class="has-text-info has-text-weight-bold">02</span> Host a Measurement Probe
        </div>
        <div class="accordion-content" id="content-2">
            <p>We will send you a probe device, and you can install it at your location.</p>
        </div>

        <div class="accordion-header" onclick="toggleAccordion(3)">
            <span class="has-text-info has-text-weight-bold">03</span> Contribute and profit
        </div>
        <div class="accordion-content" id="content-3">
            <p>By hosting a probe, you contribute to network measurement research and get early insights into our findings.</p>
        </div>
    </div>
</div>

<style>
.accordion-content {
    display: none;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
}
.accordion-header {
    cursor: pointer;
    padding: 15px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5px;
}
.accordion-header:hover {
    background-color: #f0f0f0;
}
</style>

<script>
function toggleAccordion(id) {
    var content = document.getElementById("content-" + id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}
</script>