---
layout: page
title: Measurements
#subtitle: Mark
permalink: /measurements/
hero_image: /marklab-website/assets/images/marklab_hero3.png
#hero_height: is-fullwidth
hero_darken: true
show_sidebar: false
menubar: menu
---

<div class="columns is-multiline">
  {% for task in site.data.measurements %}
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title">{{ task.label }}</p>
        <p class="subtitle">{{ task.name }}</p>
        <span class="tag is-info">{{ task.type }}</span>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
