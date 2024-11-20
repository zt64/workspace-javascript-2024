// generate random integer between min and max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

var M = randInt(300, 600);
const N = randInt(100, 300);
const K = randInt(0, 100);

document.querySelector("#total").textContent = M.toString();
document.querySelector("#given").textContent = N.toString();
document.querySelector("#takeback").textContent = K.toString();

// update the answers
document.querySelector("[value='1']").nextSibling.nodeValue =
    M.toString() + " - " + K.toString() + " + " + K.toString();

function changeStyle(e) {
    e.preventDefault();
    const className = this.getAttribute("class");
    alert("Clicked");
    if (className == "answer") {
        this.setAttribute("class", "answer selected");
    } else {
    }
    this.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(180deg)" }],
        { duration: 3000, fill: "forwards" }
    );
}

const answerList = document.getElementsByClassName("answer");
for (let i = 0; i < 4; i++) {
    answerList[i].addEventListener("click", changeStyle, false);
}
