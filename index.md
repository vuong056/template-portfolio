---
layout: index
title: page title
materials:
  - { name: "email", link: "mailto:vuong056@charlie-vuong.com" }
  - { name: "resume", link: "assets/pdf/Charlie_Vuong_Resume.pdf" }
  - { name: "linkedin", link: "https://www.linkedin.com/in/charlievuong056/" }
---

[bair-grant]: https://bcommons.berkeley.edu/
[c160]: https://www2.eecs.berkeley.edu/Courses/CS160/

<div markdown="1" class="left-column">
<a href="{{ site.baseurl }}/">
<img id="prof" src="{{ site.baseurl }}/assets/img/charlievuong.webp">
</a>
# {{ site.author.name }}

<div class="materials">
  {% for m in page.materials %}
  <span> [<a rel="noopener noreferrer" target="_blank" href="{{ m.link }}">{{ m.name }}</a>] </span>
  {% endfor %}
</div>

Graduate Student at UTA

<!-- <img style="max-width: 25px;" src="assets/img/apple-logo.png"> -->

</div><!-- end left -->

<div markdown="1" class="right-column">

<!-- ```
Please see this website source code at:
```

[`https://github.com/jeremywrnr/template-portfolio`](https://github.com/jeremywrnr/template-portfolio) -->

## About Me

I am 3rd year CompE PhD, advised by <strong><a href="http://cearto.com/" target="_blank" class="highlight-link">Dr. Cesar Torres</a></strong> at <strong><a href="https://hybridatelier.uta.edu/" target="_blank" class="highlight-link">The Hybrid Atelier</a></strong> in UT Arlington.


Research interests: HCI, material interaction, wearable sensing, and bio-medical.

## Experience

{% assign experiences = site.data.experiences %}

<ul>

{% for p in experiences %}

<li>
    <a href="{{ p.link }}">{{ p.name }}</a>
    <ra>{{p.date}}</ra>
    <br/>
    <span class="gray">{{ p.about }}</span>
</li>

{% endfor %}

</ul>

## Selected Publications

<ul class="v-margin image-list">
{% assign homepage = site.data.papers | where: "home", "1" %}
{% for p in homepage %}

<li>
    {% if p.info %}
    <a class="image" href="{{ p.info }}">
    {% else %}
    <a class="image" href="{{ p.paper }}">
    {% endif %}
    <img src="assets/img/{{ p.image }}" alt="{{ p.alt }}"/>
    </a>
    <div class="details">
    {% if p.info %}
    <a href="{{ p.info }}">
    {% else %}
    <a href="{{ p.paper }}">
    {% endif %}
    {% if p.sname %}
    {{ p.sname }}
    {% else %}
    {{ p.name }}
    {% endif %}
    </a>
    <br/>
    <span class="p-auth">{{ p.auth }}</span>
    <br/>
    <small class="materials" markdown="1">
    {% if p.paper %}<span>[[PDF]({{ p.paper }})]</span>{% endif %}
    <span>{{ p.cack }} {{ p.year }}{% if p.note %} · {{ p.note }}{% endif %}</span>

    </small>
    </div>

</li>
<br/>

{% endfor %}

</ul>

### Grad Coursework

- [Computer Vision](https://cs280-berkeley.github.io/) <ra>Efros/Malik</ra>

### Mentoring

- [student](https://www.linkedin.com/) <ra class="skill">Project name/focus</ra>

### Teaching

- [CSC 160 · UI Design/Development (Head GSI)][c160] <ra>2017,20</ra>

### Awards

- [Google-BAIR Commons Research Grant][bair-grant] <ra>2023</ra>

### Service

- Program Committee · ACM UIST <ra class="skill">2024</ra>

[More projects →]({{ site.baseurl }}/projects)

<small>Updated Jan 2025</small>

</div><!-- end right -->
