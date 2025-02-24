---
layout: blog
title: News
#subtitle: Mark
hero_image: /marklab-website/assets/images/marklab_hero3.png
#hero_height: is-fullwidth
hero_darken: true
permalink: /blog/
---

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}

{% if paginator.previous_page or paginator.next_page %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="prev">Previous</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">Next</a>
    {% endif %}
  </div>
{% endif %}