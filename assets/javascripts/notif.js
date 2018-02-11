---
---

new Noty({
type: 'error',
timeout: 5000,
progressBar: true,
closeWith: ['click', 'button'],
text: '<h6 class="bolder normalin">Latest Updates:</h6>{% for post in site.posts limit:1 %}<div class="infos"><span class="normalin">{{ post.title }}</span> by {% if post.author %}{{ post.author }}{% else %}{{ post.artist }}{% endif %} on _the {{ post.categories }}</div>{% endfor %}',

}).show();