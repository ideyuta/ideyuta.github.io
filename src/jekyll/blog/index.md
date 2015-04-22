---
layout: posts
title: blog index
---

{% for post in site.posts %}
* <a class="title" href="{{ post.url }}">{{ post.title }}</a>
  {% if post.tmpl == "static" %}
  <p>unko</p>
  {% endif %}
  <div class="data">
  <span>{{ post.date | date: '%Y. %m. %d' }}</span>
  {% for category in post.categories %}<a href="/blog/{{ category }}/"><span>{{ category }}</span></a>{% endfor %}
  </div>
{% endfor %}
