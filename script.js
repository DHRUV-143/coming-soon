// Countdown timer function (modify the target date accordingly)
const targetDate = new Date("2023-12-31").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Call the countdown function initially
updateCountdown();

// Call the countdown function every second
setInterval(updateCountdown, 1000);

// Array of slogans to be displayed one by one
const slogans = [
  "Building Something Awesome!",
  "Stay Tuned for the Big Reveal!",
  "Exciting Features Coming Soon!",
  "Another amazing slogan!",
  "Join us on this journey!",
  "Get ready for something special!"
];

let sloganIndex = 0;
const sloganElement = document.getElementById("sloganText");

function changeSlogan() {
  const slogan = slogans[sloganIndex];
  sloganElement.setAttribute("data-text", slogan); // Set the slogan as the data-text attribute
  sloganElement.textContent = slogan; // Update the slogan text

  // Increment the sloganIndex and loop back to the first slogan if necessary
  sloganIndex = (sloganIndex + 1) % slogans.length;
}

// Call the changeSlogan function every 3 seconds
setInterval(changeSlogan, 3000);

// Function to switch between color themes
const themes = ["light-theme", "dark-theme", "blue-theme", "green-theme"];
let themeIndex = 0;

function changeTheme(themeClass) {
  const container = document.querySelector(".container");
  container.classList.remove(...themes); // Remove all existing theme classes
  container.classList.add(themeClass);

  // Set custom properties for theme colors
  const computedStyles = getComputedStyle(container);
  const backgroundColor = computedStyles.backgroundColor;
  const isDarkTheme = themeClass === "dark-theme";

  // Adjust text color dynamically based on the theme background
  if (isDarkTheme) {
    document.documentElement.style.setProperty("--slogan-text-color", "#ffffff");
    document.documentElement.style.setProperty("--glow-color", "#ff7b54"); // Use the primary color for the glow in dark theme
  } else {
    document.documentElement.style.setProperty("--slogan-text-color", "#333333");
    document.documentElement.style.setProperty("--glow-color", backgroundColor); // Use the theme background color for the glow in light theme
  }

  // Animate theme change
  container.style.animation = "themeChangeAnimation 1s";
  setTimeout(() => {
    container.style.animation = ""; // Reset animation after 1 second
  }, 1000);
}

// Automatically change theme every 10 seconds
function autoChangeTheme() {
  changeTheme(themes[themeIndex]);
  themeIndex = (themeIndex + 1) % themes.length;
}

setInterval(autoChangeTheme, 10000); // 10 seconds

// Initial theme change
autoChangeTheme();

// CTA button click event
const ctaButton = document.getElementById("ctaBtn");

ctaButton.addEventListener("click", () => {
  alert("Thank you for clicking the CTA button! Stay tuned for the big reveal!");
});
