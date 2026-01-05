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
    <h2 style="margin-top: 0;">{{ officer.title }}
    {% if officer.taso %}
    <a href="https://taso.org/chapter-directory/baseball/" target="_blank"><img src="https://img.shields.io/badge/{{ officer.taso | replace: ' ', '%20' | replace: '-', '--' }}-blue?style=flat-square" alt="{{ officer.taso }}"></a>
    {% endif %}
    </h2>
    <p><strong>{{ officer.name }}</strong></p>
    {% if officer.email %}
    {% assign email_parts = officer.email | split: "@" %}
    <p>Email: <span class="protected-email" data-u="{{ email_parts[0] }}" data-d="{{ email_parts[1] }}"><noscript>Enable JavaScript to view email</noscript></span></p>
    {% endif %}
    {% if officer.bio %}
    <p>{{ officer.bio }}</p>
    {% endif %}
    {% if officer.addendum %}
    <p>{{ officer.addendum }}</p>
    {% endif %}
  </div>
</div>
<hr>
{% endfor %}

## Contact

For general inquiries, please email <span class="protected-email" data-u="president" data-d="centexumpires.org"><noscript>Enable JavaScript to view email</noscript></span>.
