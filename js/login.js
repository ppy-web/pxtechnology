var contentdiv = document.querySelector(".contentdiv")
var bgimg = document.querySelector("#bgimg img");
var spanNode = document.querySelectorAll("#circle span");
var circle = document.getElementById("circle");
var online = document.getElementById("online");
var index = 1;


// 轮播
interId = setInterval(fn1, 3000);

function fn1() {
    if (index === 4) {
        index = 1;
    } else {
        index++;
    }
    bgimg.src = "images/login_bg" + index + ".png";
    resetSpanClass(index - 1);
}

circle.onmouseover = function (e) {
    e = e || window.event;
    var target = e.target || e.scrElement;

    if (target.nodeName.toLowerCase() === "span") {
        var num = getSpanIndex(target);
        resetSpanClass(num);
        bgimg.src = "images/login_bg" + (num + 1) + ".png";
        index = num + 1;
    }

}

contentdiv.onmouseover = function () {
    clearInterval(interId);
}
contentdiv.onmouseout = function () {
    interId = setInterval(fn1, 3000);
}

function getSpanIndex(t) {
    for (var i = 0; i < spanNode.length; i++) {
        if (spanNode[i] === t) {
            return i;
        }
    }
}

function resetSpanClass(index) {
    for (var i = 0; i < spanNode.length; i++) {
        if (i === index) {
            spanNode[i].className = "active";
        } else {
            spanNode[i].className = " ";
        }
    }
}
// 客服盒子拖动
var online = document.getElementById('online');
var closeBtn = document.getElementById('closeBtn');
var li = document.getElementById('li');

//点击在线客服，弹出客服框

li.onclick = function () {
    online.style.display = 'block';
    return false;
}

//点击关闭按钮，隐藏客服框
closeBtn.onclick = function () {
    online.style.display = 'none';
}

//拖拽
var drag = document.getElementById('drag');
drag.onmousedown = function (e) {
    // 鼠标按下，求鼠标在盒子中的位置
    var x = e.pageX - online.offsetLeft;
    var y = e.pageY - online.offsetTop;
    console.log(x + "-" + y);
    document.onmousemove = function (e) {
        // 鼠标移动的时候， 盒子的坐标
        var onlineX = e.pageX - x;
        var onlineY = e.pageY - y;

        online.style.left = onlineX + 'px';
        online.style.top = onlineY + 'px';
    }
}

document.onmouseup = function () {
    document.onmousemove = null;
}