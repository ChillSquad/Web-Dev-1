const menuBar = document.getElementById('menu');

menuBar.onclick = function menuClick() {
    let x = document.getElementById('myTopNav');

    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}