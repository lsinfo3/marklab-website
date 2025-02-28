---
layout: page
title: About
#subtitle: Mark
permalink: /about/
hero_image: /marklab-website/assets/images/marklab_hero3.png
hero_darken: true
---

Setting up a globally distributed measurement platform, is difficult and needs the help and support of others.<br>
**If you live/work in a country where we don't have a node yet and are interested in hosting one, please feel free to reach out!**  

<!-- Accordion Section -->
<div class="container">
    <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(1)">
            <span class="has-text-info has-text-weight-bold">01</span> Contact us
        </div>
        <div class="accordion-content" id="content-1">
            <p>Reach out to us (<a href="mailto:marklab@informatik.uni-wuerzburg.de">marklab@informatik.uni-wuerzburg.de</a>) with your contact details and the location (city, country) where you can host a measurement node.</p>
        </div>
        <div class="accordion-header" onclick="toggleAccordion(2)">
            <span class="has-text-info has-text-weight-bold">02</span> Host a Measurement Node
        </div>
        <div class="accordion-content" id="content-2">
            <p>We will send you a node, and you can install it at your location. The node connets to our VPN and only performs measurements in the mobile network.</p>
        </div>
        <div class="accordion-header" onclick="toggleAccordion(3)">
            <span class="has-text-info has-text-weight-bold">03</span> Contribute and profit
        </div>
        <div class="accordion-content" id="content-3">
            <p>By hosting a node, you contribute to network measurement research and get early insights into our findings.</p>
        </div>
    </div>
</div>

Regarding questions of any kind please contact:
[marklab@informatik.uni-wuerzburg.de](mailto:marklab@informatik.uni-wuerzburg.de)


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

.accordion-header span {
    color: #2e3447;  /* Change to your desired color */
    font-weight: bold;
}

</style>

<script>
function toggleAccordion(id) {
    var content = document.getElementById("content-" + id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}
</script>


