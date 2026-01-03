---
title: "Chapter Officers"
permalink: /officers/
---

Meet the leadership team of the CenTex Umpire Association. Our officers work to support all chapter members and ensure the smooth operation of our organization.

{% for officer in site.data.officers %}
<div style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  {% if officer.image %}
  <img src="{{ officer.image }}" alt="{{ officer.name }}" style="width: 150px; height: 200px; object-fit: cover; object-position: top; border-radius: 8px; flex-shrink: 0;">
  {% endif %}
  <div>
    <h2 style="margin-top: 0;">{{ officer.title }}</h2>
    <p><strong>{{ officer.name }}</strong></p>
    {% if officer.email %}
    <p>Email: <a href="mailto:{{ officer.email }}">{{ officer.email }}</a></p>
    {% endif %}
    {% if officer.bio %}
    <p>{{ officer.bio }}</p>
    {% endif %}
  </div>
</div>
<hr>
{% endfor %}

## Contact

For general inquiries, please email [president@centexumpires.org](mailto:president@centexumpires.org).
