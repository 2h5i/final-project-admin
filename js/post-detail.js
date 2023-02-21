const postId = window.location.href.split('?id=')[1];

document.addEventListener('DOMContentLoaded', function () {
  var settings = {
    url: `http://localhost:8080/api/admin/posts/${postId}`,
    method: 'GET',
    timeout: 0,
    headers: {
      Authorization: window.localStorage.getItem('accesstoken'),
    },
  };

  $.ajax(settings).done(function (response) {
    const titleArea = document.getElementById('post-detail-title');
    titleArea.innerText = response.title;

    const userIdArea = document.getElementById('post-detail-user-id');
    userIdArea.innerText = response.userInfo.userId;

    const createdAtArea = document.getElementById('post-detail-createdAt');
    createdAtArea.innerText = response.createdAt;

    const contentArea = document.querySelector('.ql-editor');
    contentArea.innerHTML = response.content;
  });
});

const removePost = () => {
  var settings = {
    url: `http://localhost:8080/api/admin/posts/${postId}`,
    method: 'DELETE',
    timeout: 0,
    headers: {
      Authorization: window.localStorage.getItem('accesstoken'),
    },
  };

  $.ajax(settings).done(function (response) {
    alert('성공적으로 삭제되었습니다.');
    window.location.href = '/posts.html';
  });
};
