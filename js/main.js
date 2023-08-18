$(document).ready(function () {
  // Accordion
  $(".heading").click(function () {
    $(this).next().slideToggle(500);
    $(".heading + p").not($(this).next()).slideUp(500);
  });

  // Show side menu
  let menuWidth = $(".menu").outerWidth();
  $(".icon-menu").click(function () {
    $(".menu").animate({ left: "0px" }, 500);
  });
  $(".icon-close").click(function () {
    $(".menu").animate({ left: `-${menuWidth}px` }, 500);
  });

  // Countdown
  // Set the target date and time
  const targetDate = new Date("2023-11-05T23:59:59").getTime();

  // Update the countdown every 1 second
  const countdownInterval = setInterval(function () {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const duration = targetDate - now;
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    // Update the countdown display
    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);

    // If the countdown is finished, display a message
    if (duration < 0) {
      clearInterval(countdownInterval);
      $("#countdown").text("Countdown is finished");
    }
  }, 1000);

  // Limit textarea character
  $("#textarea").on("input", function () {
    let maxLength = 100;
    let value = $(this).val();
    let currentLength = value.length;
    $("#messageChar").text("");
    if (currentLength > maxLength) {
      // Trim the value to the maximum length
      var trimmedValue = value.substring(0, maxLength);
      // Set the trimmed value back to the textarea
      $(this).val(trimmedValue);
      currentLength = maxLength; // Update current length to max length
      $("#messageChar").text("You Exceded The Characters Limit");
    }
    $("#countOfChar").text(maxLength - currentLength);
    
  });
});
