const generateButton = document.getElementById("generate");
const resultsDiv = document.getElementById("results");

// Sample captions (you can expand this list later)
const captions = [
  "This is going to trend! 🔥",
  "Can’t stop thinking about this… 😎",
  "Who else feels the same? 🤔",
  "Absolutely love this! ❤️",
  "Tweeting this right now! 🐦"
];

generateButton.addEventListener("click", () => {
  const keyword = document.getElementById("keyword").value || "Life";
  resultsDiv.innerHTML = ""; // Clear previous results

  for (let i = 0; i < 5; i++) {
    const caption = captions[Math.floor(Math.random() * captions.length)];
    const p = document.createElement("p");
    p.textContent = `${keyword}: ${caption}`;
    p.className = "p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200";

    // Copy caption on click
    p.addEventListener("click", () => {
      navigator.clipboard.writeText(p.textContent);
      alert("Copied to clipboard!");
    });

    resultsDiv.appendChild(p);
  }
});
