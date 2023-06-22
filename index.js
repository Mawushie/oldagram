const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    liked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    liked: false,
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
    liked: false,
  },
];

//getting the main post element
const mainpostEl = document.getElementById("user-post");

//track likes
function like(index) {
  const post = posts[index];
  if (post.liked) {
    post.likes--;
  } else {
    post.likes++;
  }
  post.liked = !post.liked;

  const heartIcon = document.getElementById(`heart-icon-${index}`);
  heartIcon.src = post.liked ? "images/red-heart.png" : "images/icon-heart.png";

  const likesElement = document.getElementById(`post-likes-${index}`);
  likesElement.textContent = `${post.likes} likes`;
}

//to loop through the posts
for (let i = 0; i < posts.length; i++) {
  mainpostEl.innerHTML += `
    <div class="user-desc">
      <img src=${posts[i].avatar} alt="avatar" class="user-avatar" />
      <div>
        <p id="user-name">${posts[i].name}</p>
        <p id="user-location">${posts[i].location}</p>
      </div>
    </div>

    <div>
      <img src=${posts[i].post} alt="post-img" class="post-image"/>
    </div>

    <div>
      <div class="socials">
        <div class="icons-div">
          <img src="${
            posts[i].liked ? "images/red-heart.png" : "images/icon-heart.png"
          }" alt="icon-heart" class="icons" id="heart-icon-${i}" onclick="like(${i})" />
          <img src="images/icon-comment.png" alt="icon-comment" class="icons" />
          <img src="images/icon-dm.png" alt="icon-dm" class="icons" />
        </div>
        <p class="bold" id="post-likes-${i}">${posts[i].likes} likes</p>
        <p>
          <span class="bold">${posts[i].username}</span> ${posts[i].comment}
        </p>
      </div>
    </div>
  `;
}
