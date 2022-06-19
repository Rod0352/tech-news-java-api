async function upvoteClickHandler(event) {
  event.preventDefault();
//parse out id via the window.location() method
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];


  const response = await fetch('/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
//    capture the id value of the post and save it to "postId" property
        postId: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);