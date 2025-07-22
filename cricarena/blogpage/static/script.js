// // Simulate a logged-in user
// // Replace this with a real check from cookies or localStorage
const isLoggedIn = false; // change to true to simulate verified user
const username = isLoggedIn ? "Alice" : "Guest";
 
function fetchPosts() {
  fetch('blogpage/api/posts/')
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        addPostToDOM(post.author_name, post.team_name, post.content, post.is_verified);
      });
    });
}

// function addPostToDOM(username, team, content, isVerified) {
//   const postList = document.getElementById("postList");
//   const postHTML = `
//     <div class="post-card">
//       <h3>${username} (${team_name})
//         ${isVerified ? '<span class="verified">✔ Verified</span>' : '<span class="unverified">⚠ Guest</span>'}
//       </h3>
//       <p>${content}</p>
//     </div>
//   `;
//   postList.insertAdjacentHTML("beforeend", postHTML);
// }


function submitPost() {
  const content = document.getElementById("postContent").value.trim();
  if (!content) {
    alert("Please write something!");
    return;
  }

  const postHTML = `
    <div class="post-card">
      <h3>
        <span class="author-name">${username}</span>
        <span class="team-name">(${team_name})</span>
        ${isLoggedIn ? '<span class="verified">✔ Verified</span>' : '<span class="unverified">⚠ Guest</span>'}
      </h3>
      <p>${content}</p>
    </div>
  `;

  const postList = document.getElementById("postList");
  postList.insertAdjacentHTML("afterbegin", postHTML);
  document.getElementById("postContent").value = "";

  // TODO: Send to Django backend via fetch
  fetch('blogpage/api/posts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
      // ...(isLoggedIn ? { Authorization: `Token your-auth-token-here` } : {})
    },
    body: JSON.stringify({ content })
  }).then(response => response.json())
  .then(data => {
    document.getElementById('postContent').value = '';
    fetchPosts();  // ✅ REFRESH POSTS
  })
  .catch(error => console.error('Failed to save post:', error));
  window.location.href = ''; // Redirect to blog page after submission
}


window.onload = function () {
    fetch('blogpage/api/posts/')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {  
                addPostToDOM(post.author_name, post.team_name , post.content, post.is_verified);
            });
        });
};

