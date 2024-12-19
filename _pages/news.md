---
title: News
permalink: /news/
---

  {% for post in site.posts %}
  <div style="margin-bottom: 20px;">
      <a style="background-color: #FEFEFE; color: #252A34; width: 100%; height: 35px; text-align: left; vertical-align: middle; padding-left: 20px; text-decoration: none; display: inline-block;" href="{{ post.url | relative_url }}"> {{ post.title }} <span style="font-size: 14px; margin-top: 5px; margin-bottom: 5px;"> ({{ post.date | date: "%-d. %B %Y" }}) </span></a>
      <br />
      
      <div style="font-size: 14px; margin-top: 10px;"> {{ post.excerpt }} </div>
  </div>
  {% endfor %}
