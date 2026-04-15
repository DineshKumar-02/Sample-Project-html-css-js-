function signup() {
  var name  = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age   = document.getElementById("age").value;
 
  if (name == "" || email == "" || age == "") {
    document.getElementById("error").textContent = "Please fill all fields to use the blog page!";
    return;
  }
 
  if (age < 13) {
    document.getElementById("error").textContent = "You must be at least 14!";
    return;
  }
 
  window.location.href = "blog.html";
}                                                                                     