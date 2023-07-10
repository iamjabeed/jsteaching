// alert("Hello world!");

// const heading = document.getElementById("heading");

// console.log(heading);

// heading.style.fontSize = "5rem";
// heading.style.color = "red"
// heading.style.backgroundColor = "red"


// heading2.innerHTML = "<p>Web dev is awesome </p>";

const heading2 = document.createElement("h2");


heading2.innerText = "Web dev is awesome";

const div2 = document.querySelector("#heading-2");

div2.appendChild(heading2);


const div3 = document.querySelector(".unit-copy-wrapper .headline")
div3.innerText= "Pavithra 15";