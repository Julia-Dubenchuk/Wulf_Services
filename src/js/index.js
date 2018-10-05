var formForUser = document.getElementById("form-user");
var footer = document.getElementById("footer");

function openForm(){
  footer.classList.add("form-none");
  formForUser.classList.remove("form-none");
}

function closeForm(){
  formForUser.classList.add("form-none");
  footer.classList.remove("form-none");
}

