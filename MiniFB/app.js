function createPost() {
  var imageInput = document.getElementById("imageInput");
  var captionInput = document.getElementById("captionInput");
  var postsContainer = document.getElementById("postsContainer");
  var file = imageInput.files[0];
  var caption = captionInput.value;

    if(!file){
        alert('Please select an image')
        return;
    }   

    var reader = new FileReader();
    reader.onload = function(e){
        var postDiv = document.createElement('div')
        postDiv.classList.add('post')
        
        var img = document.createElement('img')
        img.src = e.target.result;
        console.log(e.target.result)
        
        var cap = document.createElement('div')
        cap.classList.add('caption')
        cap.textContent = caption;

        postDiv.appendChild(img)
        postDiv.appendChild(cap)

        postsContainer.prepend(postDiv)

        
        
        // imageInput.value == '';
        captionInput.value == '';

    }
    reader.readAsDataURL(file)

}

