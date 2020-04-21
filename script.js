const recentPostsDiv = document.getElementById('recentPosts');





// function to retrieve recent blog posts.
async function retrieveBlogPosts() {
  fetch('https://149ufzk3gd.execute-api.us-east-2.amazonaws.com/Prod', {
    method:'GET'
  })
  .then(response => response.json())
  .then((response) => {

    response.body.forEach((post, index) => {

      const postId = post.PostID;

      const aTag = document.createElement('a');
      aTag.classList.add('post-link');
      aTag.href = `./post.html?PostID=${postId}`


      const postDiv = document.createElement('div');
      postDiv.classList.add("post");

      const postPictureTag = document.createElement('img');
      postPictureTag.src = post.PostImageURL;
      postPictureTag.width = '240';
      postPictureTag.width = '180';

      const postTextDiv = document.createElement('div');
      postTextDiv.classList.add("post-text");

      const postNameTag = document.createElement('p');
      postNameTag.innerHTML = post.PostName;
      postNameTag.classList.add("post-name");

      const postAuthor = document.createElement('p');
      postAuthor.innerHTML = 'by ' + post.PostAuthor;
      postAuthor.classList.add("post-author");


      postTextDiv.appendChild(postNameTag);
      postTextDiv.appendChild(postAuthor);

      postDiv.appendChild(postPictureTag);
      postDiv.appendChild(postTextDiv);

      aTag.appendChild(postDiv);


      recentPostsDiv.appendChild(aTag);
    });

  });
}


//invoked to get the blog posts.
retrieveBlogPosts();
