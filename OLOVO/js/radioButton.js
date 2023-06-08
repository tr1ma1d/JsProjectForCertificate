var rad = document.getElementsById("input_radio");

rad.forEach(e => {
    e.onchange = function () {
        document.getElementById("inputsecond").style.visibility = "collapse";
        return;
    };
});

var rad2 = document.getElementsById("input_radio2");

rad2.forEach(e => {
    e.onchange = function () {
        document.getElementById("input3").style.visibility = "visible";
        return;
    };
});

