var captionArea = document.getElementById("caption");
var overlayInput = document.getElementById("overlayInput");

function execCaptionCommand(command) {
  captionArea.focus();
  document.execCommand(command, false, null);
}

function toggleTextOverImage(checkbox) {
  overlayInput.style.display = checkbox.checked ? "block" : "none";
}

function justifyOverlayText(alignment) {
  overlayInput.style.textAlign = alignment;
}

function createPost() {
  var caption = captionArea.innerHTML.trim();
  var overlay = overlayInput.innerText.trim();
  var align = overlayInput.style.textAlign;
  var file = document.getElementById("image").files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var post = {
      id: Date.now(),
      image: e.target.result,
      caption,
      overlay,
      align,
      likes: 0,
      liked: false,
      comments: [],
    };
    savePost(post);
    renderPosts();
    resetForm();
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    var post = {
      id: Date.now(),
      image: null,
      caption,
      overlay,
      align,
      likes: 0,
      liked: false,
      comments: [],
    };
    savePost(post);
    renderPosts();
    resetForm();
  }
}

function resetForm() {
  captionArea.innerHTML = "";
  overlayInput.innerText = "";
  overlayInput.style.display = "none";
  document.getElementById("image").value = "";
}

function savePost(post) {
  var posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.unshift(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

function deletePost(id) {
  var posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts = posts.filter((p) => p.id !== id);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function toggleLike(id) {
  var posts = JSON.parse(localStorage.getItem("posts") || "[]");
  var post = posts.find((p) => p.id === id);
  if (post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
  }
}

function addComment(id, inputEl) {
  var text = inputEl.value.trim();
  if (!text) return;

  var posts = JSON.parse(localStorage.getItem("posts") || "[]");
  var post = posts.find((p) => p.id === id);
  if (post) {
    post.comments.push(text);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
  }
}

function renderPosts() {
  var posts = JSON.parse(localStorage.getItem("posts") || "[]");
  var postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    var postDiv = document.createElement("div");
    postDiv.className = "post";

    if (post.image) {
      var wrapper = document.createElement("div");
      wrapper.className = "post-image";

      var img = document.createElement("img");
      img.src = post.image;

      if (post.overlay) {
        var overlay = document.createElement("div");
        overlay.className = "overlay-text";
        overlay.innerText = post.overlay;
        overlay.style.textAlign = post.align || "center";
        wrapper.appendChild(overlay);
      }

      wrapper.appendChild(img);
      postDiv.appendChild(wrapper);
    }

    var caption = document.createElement("div");
    caption.className = "post-caption";
    caption.innerHTML = post.caption;
    postDiv.appendChild(caption);

    var actions = document.createElement("div");
    actions.className = "actions";

    var likeBtn = document.createElement("button");
    likeBtn.innerHTML = post.liked ? "❤️" : "🤍";
    likeBtn.onclick = () => toggleLike(post.id);
    actions.appendChild(likeBtn);

    var likeCount = document.createElement("span");
    likeCount.textContent = `${post.likes} like${post.likes === 0 ? "" : "s"} `;
    actions.appendChild(likeCount);

    postDiv.appendChild(actions);

    var commentSection = document.createElement("div");
    commentSection.className = "comment-section";

    post.comments.forEach((comment) => {
      var commentEl = document.createElement("div");
      commentEl.className = "comment";
      commentEl.textContent = comment;
      commentSection.appendChild(commentEl);
    });

    var input = document.createElement("input");
    input.placeholder = "Write a comment...";
    input.onkeydown = (e) => {
      if (e.key === "Enter") {
        addComment(post.id, input);
      }
    };
    commentSection.appendChild(input);

    postDiv.appendChild(commentSection);

    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deletePost(post.id);

    postDiv.appendChild(delBtn);
    postsContainer.appendChild(postDiv);
  });
}

renderPosts();

// var obj = {
//     name: 'sarwat'
// }

// sessionStorage.setItem("name", JSON.stringify(obj))
// console.log(JSON.parse(sessionStorage.getItem('name')))

// var numbers = [1, 2, 3, 4, 5, 6];
// var odd = numbers.filter(a => a % 2 !== 0 )
// console.log(odd); // [2, 4, 6]

// var arr = [1,2,3,4]
// arr.forEach(elem => console.log(elem*2));

var nme = `Sarwat Mustafa`;

console.log(`My name is ${nme}`);

// var input = document.createElement("input");
// input.placeholder = "Write something...";
// input.onkeydown = (keyObj) => {
//   // if (e.key === "Enter") {
//   //   addComment(post.id, input);
//   // }

//   console.log(keyObj.key)
// };

// var test = document.getElementById('test')

// test.appendChild(input)

// var arr = [4, 3, 1, 5];

// var find2 = arr.find((p) => p < 5);
// console.log(find2)




var num1 = 2
num1 += 2

console.log(num1)