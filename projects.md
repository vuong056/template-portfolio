---
layout: null
---

<html>
<head>
    <meta charset="UTF-8">
    <title>Bonus</title>
    <meta name="author" content="Jeremy Warner">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/project.css">
</head>
<body>
    <div id='projects'>
    {% for project in site.data.projects %}
    <div class="project" style="background-image: url('{{ site.baseurl }}/{{project.imag}}');">
    <a href="{{ project.link }}" {%if project.newtab %}target="_blank"{% endif %}>
    <div class="project-info">
    <div class="project-inner">
    <h3>{{ project.name }} </h3>
    <p>{{ project.desc }}</p>
    </div>
    </div>
    </a>
    </div>
    {% endfor %}
    </div>
</body>
</html>
