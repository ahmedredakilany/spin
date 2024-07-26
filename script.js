(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  let deg = 0;

  startButton.addEventListener(
    "click",
    () => {
      // Disable button during spin
      startButton.style.pointerEvents = "none";
      // Calculate a fixed rotation for consistent results
      deg = 7310; // e.g., 7200 degrees for a fixed number of spins
      // Set the transition on the wheel
      wheel.style.transition = "all 10s ease-out";
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add("blur");
    },
    { once: true }
  ); // Add { once: true } to make the event listener run only once

  wheel.addEventListener("transitionend", () => {
    // Remove blur
    wheel.classList.remove("blur");
    // Enable button when spin is over
    startButton.style.pointerEvents = "auto";
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = "none";
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;

    // Show SweetAlert with the prize
    Swal.fire({
      title: "مبروك كسبت أيفون 15",
      text: "أحصل على جائزتك الآن",
      imageUrl: "iPhone 15.png", // ضع مسار الصورة هنا
      imageWidth: 600,
      imageAlt: "iPhone 15",
      showConfirmButton: true,
      confirmButtonText: "أحصل على جائزتك الآن",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to your prize link
        window.location.href = "https://bit.ly/3UVk49n";
      }
    });
  });
})();
