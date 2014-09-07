---
layout: postlist
title: blog index
---

{% for post in site.posts %}
* <a href="{{ post.url }}">{{ post.title }}</a>
  <span>{{ post.date | date: '%Y . %m . %d' }}</span>
  {% for category in post.categories %} <span>{{ category }}</span> {% endfor %}
  <a class="twBtn" href="https://twitter.com/share?text={{ post.title }}&amp;amp;url={{ site.url }}{{ post.url }}">Tweet</a>
  <a class="twCount" href="https://twitter.com/search?q={{ site.url }}{{ post.url }}">0</a>
{% endfor %}
