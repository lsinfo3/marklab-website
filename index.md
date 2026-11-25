---
layout: default
title: Measurements beyond the lab
description: Study real cellular networks with MARKlab. Compare performance, roaming, and energy consumption, explore open research data, or host a measurement node.
---
{% assign active = site.data.deployments.locations | where: 'status', 'active' %}
{% assign countries = active | map: 'country' | uniq %}
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <p class="eyebrow">University of Würzburg · Communication Networks</p>
      <h1>Measurements beyond the lab.</h1>
      <p class="lead">A distributed research platform for real cellular networks. Investigate performance, roaming, and energy consumption across radio technologies, operators, and locations.</p>
      <div class="actions"><a class="button" href="{{ '/platform/' | relative_url }}">Explore MARKlab</a><a class="button secondary" href="{{ '/host/' | relative_url }}">Host a node</a></div>
    </div>
    <figure class="hero-photo"><img src="{{ '/assets/images/marklab_hero3.png' | relative_url }}" alt="Three MARK measurement nodes with their cellular antenna and management connections" fetchpriority="high"><figcaption>Dedicated hardware. Remotely orchestrated experiments. Real networks.</figcaption></figure>
  </div>
</section>
<div class="wrap stats" aria-label="Platform overview">
  <div class="stat"><strong>{{ countries.size }}</strong><span>countries with active deployments</span></div>
  <div class="stat"><strong>5G</strong><span>operational node variants</span></div>
  <div class="stat"><strong>Open</strong><span>source code and published research data</span></div>
</div>
<section class="wrap section">
  <div class="section-head"><div><p class="eyebrow">For researchers</p><h2>One platform. Multiple perspectives.</h2></div><p>Run comparable experiments on dedicated MARK nodes, with control over the radio technology, operator, and measurement configuration.</p></div>
  <div class="research-grid">
    <article class="research-topic"><h3>Network performance</h3><p>Measure latency, packet loss, throughput, and signal conditions in public cellular networks.</p><a href="{{ '/measurements/' | relative_url }}">Explore measurement tasks</a></article>
    <article class="research-topic"><h3>Energy consumption</h3><p>Observe current and voltage alongside network behaviour to investigate the energy costs of IoT connectivity.</p><a href="{{ '/node/' | relative_url }}">Inside a MARK node</a></article>
    <article class="research-topic"><h3>Mobile roaming</h3><p>Investigate how visited networks and home-network routing shape real connectivity across countries.</p><a href="{{ '/architecture/' | relative_url }}">Understand the architecture</a></article>
    <article class="research-topic"><h3>Reproducible research</h3><p>Build on containerised experiments, open platform code, peer-reviewed studies, and their accompanying datasets.</p><a href="{{ '/results/' | relative_url }}">Publications and data</a></article>
  </div>
</section>
<section class="pale"><div class="wrap section split">
  <div><p class="eyebrow">A distributed testbed</p><h2>Local deployments.<br>International questions.</h2><p>MARK nodes are deployed across Europe and in São Paulo, Brazil. Each location gives researchers another perspective on production mobile networks.</p><p class="muted">Deployment inventory updated {{ site.data.deployments.verified | date: '%-d %B %Y' }}. The map describes deployments, rather than live node availability.</p><a href="{{ '/locations/' | relative_url }}">Explore locations and planned deployments</a></div>
  <ol><li><strong>Configure an experiment</strong>Select a measurement configuration, radio technology, operator, and target.</li><li><strong>Execute on a MARK node</strong>Containerised tasks collect network measurements and supporting telemetry.</li><li><strong>Analyse the results</strong>Use the collected data to compare performance under the stated experimental conditions.</li></ol>
</div></section>
<section class="wrap section">
  <div class="section-head"><div><p class="eyebrow">From the platform</p><h2>Latest news</h2></div><a href="{{ '/blog/' | relative_url }}">All news</a></div>
  <div class="news-preview">{% for post in site.posts limit:3 %}<article><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%-d %B %Y' }}</time><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>{{ post.excerpt }}<a href="{{ post.url | relative_url }}">Read article</a></article>{% endfor %}</div>
</section>
<section class="wrap section"><div class="host-banner"><div><p class="eyebrow" style="color:#f4b3a8">Help expand MARKlab</p><h2>Your location could make a difference.</h2><p>Provide a place with mobile reception, power, and an Ethernet connection. We supply the measurement node and manage its experiments remotely.</p></div><a class="button" href="{{ '/host/' | relative_url }}">What hosting involves</a></div></section>
