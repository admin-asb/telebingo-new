window.addEventListener("message", function (event) {
  if (event.data.messageType === "resize") {
    const iframe = document.getElementById("iframeResizer");
    const maxHeight = window.innerHeight - 116;
    iframe.style.height = Math.min(event.data.height, maxHeight) + "px";
  }
});

$(".accordion__text").on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass("accordion__text-opened")) {
    $(this).removeClass("accordion__text-opened");
    $(this).siblings(".accordion__body").slideUp(300);
  } else {
    $(".accordion__text").removeClass("accordion__text-opened");
    $(this).addClass("accordion__text-opened");
    $(".accordion__body").slideUp(300);
    $(this).siblings(".accordion__body").slideDown(300);
  }
});

const tabs = document.querySelectorAll(".how__tab");
const tabsContainer = document.querySelector(".how__tabs");
const tabsContent = document.querySelectorAll(".how-inner");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".how__tab");
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove("how__tabs--active"));
  tabsContent.forEach(c => c.classList.remove("how__inner--active"));

  clicked.classList.add("how__tabs--active");

  document
    .querySelector(`.how__inner--${clicked.dataset.tab}`)
    .classList.add("how__inner--active");
});
