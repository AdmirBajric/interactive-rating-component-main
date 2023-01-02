const buttons = document.querySelectorAll(".ratingBtn");
const submit = document.querySelector(".submit");
const main = document.querySelector("#main");
const modal = document.querySelector("#modal");
const modalSelected = document.querySelector(".modal-selected");

let selected = [];

buttons.forEach((btn) => {
  modal.style.display = "none";
  btn.addEventListener("click", () => {
    selected = [];
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.toggle("btn-active");
    btn.classList.contains("btn-active") && selected.push(btn.textContent);
  });
});

submit.addEventListener("click", () => {
  if (selected.length > 0) {
    modalSelected.textContent = "";
    main.style.display = "none";
    modal.style.display = "";
    modalSelected.textContent = `You selected ${selected[0]} out of 5`;
  } else {
    alert("No rating number is selected!");
  }
});
