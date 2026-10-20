const termsToggle = document.querySelector(".terms-toggle");
const termsContent = document.querySelector("#terms-content");

termsToggle?.addEventListener("click", () => {
  const expanded = termsToggle.getAttribute("aria-expanded") === "true";
  termsToggle.setAttribute("aria-expanded", String(!expanded));
  termsContent.hidden = expanded;
});
