  <!-- Pagination links -->
<div class="pagination span-10">
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
  <span class="page_number ">Page: {{paginator.page}} of {{paginator.total_pages}}</span>
  {% if paginator.next_page %}
    <a href="/page{{paginator.next_page}}" class="next ">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>
