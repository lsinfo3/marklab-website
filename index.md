---
layout: default
title: Measuring mobile networks
description: Measure cellular network performance, roaming, and energy consumption with MARKlab. Find research data, learn about the hardware, or host a node.
---
{% assign active = site.data.deployments.locations | where: 'status', 'active' %}
{% assign countries = active | map: 'country' | uniq %}
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <p class="eyebrow">University of Würzburg · Communication Networks</p>
      <h1>Measuring mobile networks.</h1>
      <p class="lead">MARKlab runs measurements in public mobile networks. We study network performance, roaming, and energy consumption across radio technologies, operators, and countries.</p>
      <div class="actions"><a class="button" href="{{ '/platform/' | relative_url }}">About the platform</a><a class="button secondary" href="{{ '/host/' | relative_url }}">Host a node</a></div>
    </div>
    <figure class="hero-photo"><img src="{{ '/assets/images/marklab_hero3.png' | relative_url }}" alt="Three MARK measurement nodes with their cellular antenna and management connections" fetchpriority="high"><figcaption>MARK nodes run experiments scheduled remotely by the research team.</figcaption></figure>
  </div>
</section>
<div class="wrap stats" aria-label="Platform overview">
  <div class="stat"><strong>{{ countries.size }}</strong><span>countries with active deployments</span></div>
  <div class="stat"><strong>5G</strong><span>operational node variants</span></div>
  <div class="stat"><strong>Open</strong><span>source code and published research data</span></div>
</div>
<section class="wrap section">
  <div class="section-head"><div><p class="eyebrow">For researchers</p><h2>What we measure</h2></div><p>Choose the radio technology, operator, and measurement settings, then run the same experiment at different locations.</p></div>
  <div class="research-grid">
    <article class="research-topic"><h3>Network performance</h3><p>Measure latency, packet loss, throughput, and signal conditions in public cellular networks.</p><a href="{{ '/measurements/' | relative_url }}">See measurement tasks</a></article>
    <article class="research-topic"><h3>Energy consumption</h3><p>Record current and voltage during network measurements to study the energy use of IoT devices.</p><a href="{{ '/node/' | relative_url }}">Inside a MARK node</a></article>
    <article class="research-topic"><h3>Mobile roaming</h3><p>Measure how visited networks and routing through the home network affect performance when roaming.</p><a href="{{ '/architecture/' | relative_url }}">How MARKlab works</a></article>
    <article class="research-topic"><h3>Reproducible research</h3><p>Use our published datasets and platform code, or run your own containerised experiments.</p><a href="{{ '/results/' | relative_url }}">Publications and data</a></article>
  </div>
</section>
<section class="pale"><div class="wrap section split">
  <div><p class="eyebrow">A distributed testbed</p><h2>Where we measure</h2><p>We operate MARK nodes across Europe and in São Paulo, Brazil, to compare measurements from different mobile networks.</p><p class="muted">Locations last updated {{ site.data.deployments.verified | date: '%-d %B %Y' }}. The map shows deployment locations; it does not show whether individual nodes are currently online.</p><a href="{{ '/locations/' | relative_url }}">See active and planned locations</a></div>
  <ol><li><strong>Configure an experiment</strong>Select a measurement configuration, radio technology, operator, and target.</li><li><strong>Execute on a MARK node</strong>The node runs the measurement tasks and records network and system data.</li><li><strong>Analyse the results</strong>Compare the results across technologies, operators, and locations.</li></ol>
</div></section>
<section class="wrap section">
  <div class="section-head"><div><p class="eyebrow">Updates</p><h2>Latest news</h2></div><a href="{{ '/blog/' | relative_url }}">All news</a></div>
  <div class="news-preview">{% for post in site.posts limit:3 %}<article><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%-d %B %Y' }}</time><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>{{ post.excerpt }}<a href="{{ post.url | relative_url }}">Read article</a></article>{% endfor %}</div>
</section>
<section class="wrap section"><div class="host-banner"><div><p class="eyebrow" style="color:#f4b3a8">Help expand MARKlab</p><h2>Host a MARK node</h2><p>Provide a place with mobile reception, power, and an Ethernet connection. We supply the measurement node and manage its experiments remotely.</p></div><a class="button" href="{{ '/host/' | relative_url }}">What hosting involves</a></div></section>
