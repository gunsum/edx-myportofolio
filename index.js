function signUp(event) {
    event.preventDefault();
    let input = document.querySelector("#email");
    console.log(input.value);
  }
  let form = document.querySelector("form");
  form.addEventListener("submit", signUp);
