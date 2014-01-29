<ul>
  <% this.collection.each(function(d) { %>
    <li>
      <a href="javascript:" data-id="<%= d.id %>"><%= d.get('prompt') %></a>
    </li>
  <% }) %>
</ul>