document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".action-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      const oldRipple = this.querySelector(".ripple");
      if (oldRipple) oldRipple.remove();

      this.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    });
  });
});