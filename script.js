function answer(response) {
  const gifContainer = document.getElementById("gif-container");
  const answerButtons = document.getElementById("answer-buttons");
  const valentineMessage = document.getElementById("valentine-message");
  const valentineGif = document.getElementById("valentine-gif");

  if (response === "yes") {
    gifContainer.innerHTML = "";
    valentineMessage.innerText = "LET'S GO SAYANG LOVE YOU!";

    const gifPaths = [
      "./assets/yes1.gif",
      "./assets/yes2.gif",
      "./assets/yes3.gif",
    ];

    gifPaths.forEach((path) => {
      const gif = document.createElement("img");
      gif.src = path;
      gif.alt = "Valentine GIF";
      gif.style.height = "200px";
      gifContainer.appendChild(gif);
    });

    answerButtons.style.display = "none";
  } else if (response === "no") {
    changeNoButtonText();
    changeValentineGif();
    increaseYesButtonSize();
  }
}

let noButtonClickCount = 0;

function changeNoButtonText() {
  const noButton = document.getElementById("no-button");
  const messages = [
    "Are you sure?",
    "Think again!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "One more chance!",
    "Take your time!",
    "Please, don't say no!",
    "I can't live without you!",
    "I'm on my knees",
    "I beg you, say yes!",
  ];

  noButton.innerText = messages[noButtonClickCount % messages.length];
  noButtonClickCount++;
}

function changeValentineGif() {
  const valentineGif = document.getElementById("valentine-gif");
  const gifPaths = [
    "./assets/please1.gif",
    "./assets/please2.gif",
    "./assets/please3.gif",
    "./assets/please4.gif",
    "./assets/please5.gif",
    "./assets/please6.gif",
    "./assets/please7.gif",
    "./assets/please8.gif",
    "./assets/please9.gif",
    "./assets/please10.gif",
  ];

  valentineGif.src = gifPaths[noButtonClickCount % gifPaths.length];
}

function increaseYesButtonSize() {
  const yesButton = document.getElementById("yes-button");
  const currentSize = parseInt(getComputedStyle(yesButton).fontSize);
  const maxSize = 50;

  if (currentSize < maxSize) {
    const newSize = currentSize + 2;
    yesButton.style.fontSize = newSize + "px";
  }
}
