document.addEventListener("submit", (event) => {
  event.preventDefault()
  const popupHidden = document.querySelector("#popup_msg");

  const inputName = document.querySelector("#nomeCompleto");
  const inputEmail = document.querySelector("#email");
  const inputMsg = document.querySelector(".msg");
  // inputName.value = "";
  // inputEmail.value = "";
  // inputMsg.value = "";

  popupHidden.classList.toggle("active");

  setTimeout(() => {
    popupHidden.classList.remove("active");
  }, 5000);
});
