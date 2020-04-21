
// function to retrieve recent blog posts.
async function retrieveSinglePost() {
  fetch('https://149ufzk3gd.execute-api.us-east-2.amazonaws.com/Prod', {
    method:'GET'
  })
  .then(response => response.json())
  .then((response) => {

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const postId = urlParams.get('PostID')


      let singlePost;


      for(let i =0; i < response.body.length; i++) {
          if (response.body[i].PostID == postId) singlePost = response.body[i]
      }


    const postHeader = document.getElementById('postHeaderText');
    postHeader.innerHTML = singlePost.PostName;

    const postImage = document.getElementById('postImage');
    postImage.src = singlePost.PostImageURL;

    const postAuthor = document.getElementById('postAuthor');
    postAuthor.innerHTML = 'By ' + singlePost.PostAuthor;

    const blogText = document.getElementById('blogText');
    blogText.innerHTML = singlePost.Post;

    });

}


retrieveSinglePost();
