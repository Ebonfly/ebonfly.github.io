function nourify(e) {
const body = document.getElementById("pfp-img");
const img = body.getElementsByClassName("container")[0].getElementsByTagName("img")[0];

const body2 = document.getElementsByClassName("main-header")[0];
const text = body2.getElementsByTagName("sub")[0];
if (e.ctrlKey) {
    text.innerHTML = "^ My cat Nour ^";
    img.src = "nnnou.jpg"
    img.width=239;
    img.height=239;
    console.log("im doing a thing")
}
else{
    img.src = "pfp.png"
    text.innerHTML = "^ art by <a href=\"https://www.tumblr.com/pinkwitchcult/787259597290340352/two-dollys\">pinkwitchcult</a> ^";
}
}

function hide() {
const body2 = document.getElementsByClassName("main-header")[0];
const text = body2.getElementsByTagName("sub")[0];
    text.style.visibility = "hidden";
}

function show() {
const body2 = document.getElementsByClassName("main-header")[0];
const text = body2.getElementsByTagName("sub")[0];
    text.style.visibility = "visible";
}

document.addEventListener("keydown", nourify);
document.addEventListener("keyup", nourify);
document.addEventListener("click", nourify);