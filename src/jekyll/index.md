---
layout: posts
title: index
---

{% assign counter = 0 %}

{% for post in site.posts %}
<a class="title" href="{{ post.url }}">{{ post.title }}</a>

  {% assign counter = counter | plus: 1 %}
  {% if counter >= 6 %}
  {% assign counter = 1 %}
  {% endif %}

  {% if post.tmpl == "static" %}
  <p>unko{{ counter }}</p>
  {% endif %}
  <p>count{{ counter }}</p>
  <div class="data">
  <span>{{ post.date | date: '%Y. %m. %d' }}</span>
  {% for category in post.categories %}<span>{{ category }}</span>{% endfor %}
  </div>
</a>
{% endfor %}
