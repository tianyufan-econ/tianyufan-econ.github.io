---
permalink: /
title: "Tianyu Fan"
layout: academic
redirect_from:
  - /about/
  - /about.html
---

<div class="introduction">
  <p>I am a Postdoctoral Research Associate at Princeton University. I will join the Chinese University of Hong Kong as an Assistant Professor of Economics in 2027.</p>
  <p>My research studies how technological change and geopolitical relationships shape economic growth, international trade, and the distribution of income.</p>
  <p>I received my Ph.D. in Economics from Yale University in 2026.</p>
</div>

<div id="research">
{% for section in site.data.research %}
<section class="research-section" aria-labelledby="{{ section.id }}">
  <h2 class="section-title" id="{{ section.id }}">{{ section.title }}</h2>
  {% for paper in section.papers %}
    {% include academic-paper.html paper=paper %}
  {% endfor %}
</section>
{% endfor %}
</div>

<section class="research-section data-intro" aria-labelledby="data">
  <h2 class="section-title" id="data">Data</h2>
  <h3><a href="{{ '/data/' | relative_url }}">Global Geopolitical Events Database</a></h3>
  <p>Bilateral geopolitical alignment across 193 countries, 1950–2024. Download alignment scores, read the documentation, and find the associated research.</p>
  <p><a href="{{ '/data/' | relative_url }}">Data and documentation</a></p>
</section>
