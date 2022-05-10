var count = 0;
const message = 'Hello World';
var letters = Array.from(message.replace(/\W/g, ''));

document.getElementById("letters").innerHTML = message;

function changeSVG() {
    var svgImage = document.getElementById("asl");
    removeAnimation(svgImage);
    var letter = letters[count % 10];
    svgImage.src = "assets/img/asl/alphabet/" + letter.toLowerCase() + ".svg";
    svgImage.alt = "asl letter " + letter;
    highlightLetter(count);
    count++;
}

// remove animation after first click
function removeAnimation(svgImage) {
    if (svgImage.src != "assets/img/asl/hand-colored-r.svg") {
        svgImage.className = "hand";
    }
}

// highlight the current corresponding letter
function highlightLetter(count) {
    var colorText = "";
    for (var i = 0; i < 5; i++) {
        if (i == count % 10) {
            colorText += "<span style=\"color: red;\">" + letters[i] + "</span>"
        } else {
            colorText += letters[i];
        }
    }
    colorText += " ";
    for (var i = 5; i < 10; i++) {
        if (i == count % 10) {
            colorText += "<span style=\"color: red;\">" + letters[i] + "</span>"
        } else {
            colorText += letters[i];
        }
    }
    // colorText += "!";
    document.getElementById("letters").innerHTML = colorText;
}


const svgImage = document.getElementById("asl");

svgImage.addEventListener('click', () => {
  alert('Next Letter');
});

svgImage.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button.click();
  }
});