---
layout: splash
title: "CenTex Umpire Association"
header:
  overlay_image: /assets/images/hero-group-photo.jpg
  overlay_filter: 0.4
  actions:
    - label: "Join Our Chapter"
      url: "/join/"
    - label: "Learn More"
      url: "/about/"
excerpt: "Providing professional high school baseball officials in Central Texas"
---

## Welcome to CenTex Umpire Association

We are the TASO Baseball Central Texas Chapter of high school baseball officials proudly serving the Central Texas area. Our members officiate UIL baseball games across Austin, Cedar Park, Georgetown, Round Rock, Liberty Hill, Marble Falls, Manor, Elgin and [surrounding communities](/about/#our-service-area).

---

## Quick Links

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-body">
        <h3 class="archive__item-title">About Us</h3>
        <p class="archive__item-excerpt">Learn about our chapter, mission, and service area.</p>
        <p><a href="/about/" class="btn btn--primary">Read More</a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-body">
        <h3 class="archive__item-title">Join Our Chapter</h3>
        <p class="archive__item-excerpt">Interested in becoming a high school baseball umpire?</p>
        <p><a href="/join/" class="btn btn--primary">Get Started</a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-body">
        <h3 class="archive__item-title">Resources</h3>
        <p class="archive__item-excerpt">TASO, UIL, rules, and equipment resources.</p>
        <p><a href="/resources/" class="btn btn--primary">View Resources</a></p>
      </div>
    </div>
  </div>
</div>

## Latest News

{% for post in site.posts limit:3 %}
### [{{ post.title }}]({{ post.url }})
<small>{{ post.date | date: "%B %d, %Y" }}</small>

{{ post.excerpt }}

{% endfor %}

[View All News](/posts/){: .btn .btn--info}
