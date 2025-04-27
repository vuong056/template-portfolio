---
layout: page
title: "*****"
---

<style> ra { float: right } </style>

# posts

<ul class="post-list">
{% for post in site.post reversed %}
<li>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
{{ post.title }}
<ra>{{ post.date | date: "%b %-d, %Y" }}</ra>
</a>
</li>
{% endfor %}
</ul>
