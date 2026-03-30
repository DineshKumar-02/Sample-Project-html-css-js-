// let posts = [
//   { title: "My First Blog", content: "This is my first blog post. Excited to start blogging!" },
//   { title: "Learning JavaScript", content: "JavaScript is powerful for building interactive websites." }
// ];

// function displayPosts() {
//   let blogList = document.getElementById("blogList");
//   blogList.innerHTML = "";
  
//   posts.forEach((post, index) => {
//     let div = document.createElement("div");
//     div.classList.add("blog-post");
//     div.innerHTML = `
//       <h2>${post.title}</h2>
//       <p>${post.content.substring(0, 50)}...</p>
//       <button onclick="readMore(${index})">Read More</button>
//     `;
//     blogList.appendChild(div);
//   });
// }

// function readMore(index) {
//   let blogList = document.getElementById("blogList");
//   blogList.innerHTML = `
//     <h2>${posts[index].title}</h2>
//     <p>${posts[index].content}</p>
//     <button onclick="displayPosts()">Back</button>
//   `;
// }

// displayPosts();
