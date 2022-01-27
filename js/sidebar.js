const widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget) {
   widget.addEventListener("click", function (e) {
      if (e.target.classList.contains("widget__title")) {
         e.target.classList.toggle("widget__title--active");
         e.target.nextElementSibling.classList.toggle("widget__body--active");
      }
   });
});
