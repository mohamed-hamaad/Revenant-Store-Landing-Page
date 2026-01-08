//       Answers     //
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".question");
  const answer   = item.querySelector(".answer");
  const arrow    = item.querySelector(".arrow");

  question.addEventListener("click", () => {
    const isShown = answer.classList.contains("shown");

    if (isShown) {
      answer.classList.remove("shown");
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.classList.add("shown");
      arrow.style.transform = "rotate(90deg)";
    }
  });
});

//       Ham Menu     //
const icon = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".nav-menu");
const auth = document.querySelector(".auth-btns");
icon.addEventListener("click", () => {
  menu.classList.toggle("shown");
  auth.classList.toggle("shown");
});