function listCookies() {
  var cookies = document.cookie.split(";");

  console.log("Cookies:");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    console.log(cookie);
  }
}

listCookies();
