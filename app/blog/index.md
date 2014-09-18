---
layout: postlist
title: blog index
---

{% for post in site.posts %}
* <a class="title" href="{{ post.url }}">{{ post.title }}</a>
  <span>{{ post.date | date: '%Y. %m. %d' }}</span>
  {% for category in post.categories %} <span>{{ category }}</span> {% endfor %}
{% endfor %}

