const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

//getting the main post element
const mainpostEl = document.getElementById("user-post");
const likes = [];
//track likes
function like() {
  console.log("liked");
  posts.likes = posts.likes + 1;
  console.log(posts);
}

//to loop throught the posts
for (let i = 0; i < posts.length; i++) {
  mainpostEl.innerHTML += `
          <div class="user-desc">
                  <img src=${posts[i].avatar} alt="vangogh" class="user-avatar" />
                  <div>
                      <p id="user-name">${posts[i].name}</p>
                      <p id="user-location">${posts[i].location}</p>
                  </div>
              </div>
              <div>
                  <img src=${posts[i].post} alt="post-vangogh" class="post-image" ondblclick="like()"/>
              </div>
              <div>
                  <div class="socials">
                      <div class="icons-div">
                          <img src="images/icon-heart.png" alt="icon-heart" class="icons" onclick="like()" />
                          <img src="images/icon-comment.png" alt="icon-comment" class="icons" />
                          <img src="images/icon-dm.png" alt="icon-dm" class="icons" />
                      </div>
                      <p class="bold">${posts[i].likes} likes</p>
                      <p >
                          <span class="bold">${posts[i].username}</span> ${posts[i].comment}
                      </p>
                  </div>
              </div>
  `;
}
