  <!-- Pagination links -->

{% if paginator.previous_page %}
  <p class="previous">
    {% if paginator.previous_page == 1 %}
    <a href="/">Previous</a>
    {% else %}
    <a href="/page{{paginator.previous_page}}">Previous</a>
    {% endif %}
  </p>
  {% else %}
  <p class="previous disabled">
    <span>Previous</span>
  </p>
  {% endif %}

 {% if paginator.page == 1 %}
      <span class="current-page">1</span>
      {% else %}
      <a href="/">1</a>
      {% endif %}
{% for count in (2..paginator.total_pages) %}
 {% if count == paginator.page %}
      <span class="current-page">{{count}}</span>
      {% else %}
      <a href="/page{{count}}">{{count}}</a>
      {% endif %}
{% endfor %}



  {% if paginator.next_page %}
  <p class="next">
    <a href="/page{{paginator.next_page}}">Next</a>
  </p>
  {% else %}
  <p class="next disabled">
    <span>Next</span>
  </p>
  {% endif %}