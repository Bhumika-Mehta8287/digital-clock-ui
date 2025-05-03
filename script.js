// Get HTML elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Function to update the clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  timeElement.textContent = timeString;

  const dateString = now.toLocaleDateString();
  dateElement.textContent = dateString;
}

// Function to toggle the theme
function toggleTheme() {
  body.classList.toggle('dark-theme');
  const isDarkTheme = body.classList.contains('dark-theme');
  themeToggleBtn.textContent = isDarkTheme ? '🌞 Light Theme' : '🌙 Dark Theme';
}

// Initialize the clock and update every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to show the time immediately

// Event listener for theme toggle
themeToggleBtn.addEventListener('click', toggleTheme);
