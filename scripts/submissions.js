document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("messages-container");
  const stored = localStorage.getItem("contactSubmissions");

  if (stored) {
    const messages = JSON.parse(stored);

    if (messages.length > 0) {
      const table = document.createElement("table");
      table.classList.add("submission-table");

      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      `;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      messages.forEach(msg => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${new Date(msg.timestamp).toLocaleString()}</td>
          <td>${msg.name}</td>
          <td>${msg.email}</td>
          <td>${msg.message}</td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      container.innerHTML = "";
      container.appendChild(table);
    }
  }
});
document.getElementById("clear-messages").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all messages?")) {
    localStorage.removeItem("contactSubmissions");
    location.reload(); 
  }
});