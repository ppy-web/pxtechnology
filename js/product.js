var introduce = document.querySelector(".introduce")
var interducebg = document.querySelector("#homebg img");
var next = document.getElementById("next");
var last = document.getElementById("last");

var homebgDiv = document.getElementById(".homebg");
var spanNode = document.querySelectorAll("#circle span");
var circle = document.getElementById("circle");
var index = 1;

interId = setInterval(fn1, 3000);

function fn1() {
    if (index === 3) {
        index = 1;
    } else {
        index++;
    }

    interducebg.src = "images/product0" + index + ".jpg";
    resetSpanClass(index - 1);
}

circle.onclick = function (e) {
    e = e || window.event;
    var target = e.target || e.scrElement;
    if (target.nodeName.toLowerCase() === "span") {
        var spanIndex = getSpanIndex(target);
        resetSpanClass(spanIndex);
        console.log("我变了");
        interducebg.src = "images/product0" + (spanIndex + 1) + ".jpg";
        index = spanIndex + 1;
    }
}
introduce.onmouseover = function () {
    clearInterval(interId);
}
introduce.onmouseout = function () {
    interId = setInterval(fn1, 3000);
}

last.onclick = function (e) {
    if (index === 1) {
        index = 3;
    } else {
        index--;
    }
    console.log("上一条");
    resetSpanClass(index - 1);
    interducebg.src = "images/product0" + index + ".jpg";
}
next.onclick = function () {
    if (index === 3) {
        index = 1;
    } else {
        index++;
    }
    console.log("下一条");
    resetSpanClass(index - 1);
    interducebg.src = "images/product0" + index + ".jpg";
}

function getSpanIndex(t) {
    for (var i = 0; i < spanNode.length; i++) {
        if (spanNode[i] == t) {
            return i;
        }
    }
}
console.log(spanNode);

function resetSpanClass(index) {
    for (var i = 0; i < spanNode.length; i++) {
        if (i === index) {
            spanNode[i].className = "active";
        } else {
            spanNode[i].className = " ";
        }
    }
}