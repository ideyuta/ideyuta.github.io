---
layout: postlist
title: blog index
---

{% for post in site.posts %}
* <span>{{ post.date | date_to_string }}</span>
  [{{ post.title }}]({{ post.url }})
  {% for category in post.categories %} <span>{{ category }}</span> {% endfor %}
{% endfor %}
