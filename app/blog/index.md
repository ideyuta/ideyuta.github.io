---
layout: default
title: Your New Jekyll Site
---

#Blog

{% for post in site.posts %}
  * {{ post.date | date_to_string }} [{{ post.title }}]({{ post.url }})
{% endfor %}
