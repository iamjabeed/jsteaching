//? Random Color Generator

const container = document.getElementById("container");

const generatedCode = document.getElementById("hexa-code");

const btn = document.getElementById("btn");

const randomHex = () => {
  const codeEl = "0123456789ABCDEF";

  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    randomColor = randomColor + codeEl[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};

// console.log(randomHex());

function colorGenerate() {
  container.style.backgroundColor = randomHex();
  generatedCode.textContent = randomHex();
}

btn.addEventListener("click", colorGenerate);
