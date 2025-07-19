// Simulate a logged-in user
// Replace this with a real check from cookies or localStorage
const isLoggedIn = false; // change to true to simulate verified user
const username = isLoggedIn ? "Alice" : "Guest";

function submitPost() {
  const content = document.getElementById("postContent").value.trim();
  if (!content) {
    alert("Please write something!");
    return;
  }

  const postHTML = `
    <div class="post-card">
      <h3>${username}
        ${isLoggedIn ? '<span class="verified">✔ Verified</span>' : '<span class="unverified">⚠ Guest</span>'}
      </h3>
      <p>${content}</p>
    </div>
  `;

  const postList = document.getElementById("postList");
  postList.insertAdjacentHTML("afterbegin", postHTML);
  document.getElementById("postContent").value = "";

  // TODO: Send to Django backend via fetch
  fetch('/api/posts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(isLoggedIn ? { Authorization: `Token your-auth-token-here` } : {})
    },
    body: JSON.stringify({ content })
  }).catch(err => console.error("Failed to save post:", err));
}
