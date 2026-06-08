const button = document.getElementById("openBtn");
const letterSection = document.getElementById("letter");
const cursor = document.getElementById("cursor");

const text =
`Happy Birthday, my love.

Thank you for being the best part of my life.

Every single day with you is a gift,your smile brightens my darkest moments, your laugh is my favourite sound in the whole world, and your love means everything to me.

I hope this birthday brings you as much happiness as you bring into my life every day.

You deserve the world, and I will spend every day trying to give it to you.

I love you, always. 🌸`;

button.addEventListener("click", () => {
  letterSection.classList.remove("hidden");
  typeLetter();
  letterSection.scrollIntoView({ behavior: "smooth" });
});

function typeLetter() {
  let i = 0;
  const typing = document.getElementById("typing");
  typing.innerHTML = "";

  const interval = setInterval(() => {
    typing.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (cursor) cursor.style.display = "none";
    }
  }, 35);
}

// Floating hearts
const heartEmojis = ["❤️", "🌸", "💕", "💗", "🌷"];

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 16 + 14) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 400);
