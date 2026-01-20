document.addEventListener("DOMContentLoaded", function() {
  const funLines = [
    "Fixing problems I accidentally created.",
    "Mostly debugging. Occasionally building.",
    "If it’s broken, I probably touched it.",
    "Turning confusion into working code.",
    "Curious enough to break it, stubborn enough to fix it.",
    "Powered by curiosity and questionable sleep schedules.",
    "Professional tinkerer, occasional problem-solver.",
    "Turning ideas into systems (eventually stable).",
    "Building projects, fixing problems, repeating."
  ];

  const line = funLines[Math.floor(Math.random() * funLines.length)];
  document.getElementById("fun-line").textContent = line;
});



