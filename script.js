const faq_cards_btns = document.querySelectorAll(".btn");

faq_cards_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
