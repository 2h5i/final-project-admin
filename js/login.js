function loginUser(){
    var settings = {
      url: 'http://localhost:8080/api/auth/login',
      method: 'POST',
      timeout: 0,
      "headers": {
        'Content-Type': 'application/json'
      },
      "data":JSON.stringify({
        "userId":$('#userName').val(),
        "password":$('#userPassword').val(),
      }),
    }
    const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
    };
    $.ajax(settings).done(function (response, status, request) {
        console.log(request.getResponseHeader('Authorization'));
        console.log(request);
        let a = parseJwt(request.getResponseHeader('Authorization').split(' ')[1]);
        if (a.auth === "USER"){
            alert("접근 권한이 없습니다.")
            return
        }
        window.localStorage.setItem("accesstoken",request.getResponseHeader('Authorization'));
        alert("로그인이 완료되었습니다.");
        window.location.href="index.html"; 
    });
    
};
