const switch_key = document.getElementById("switch");
const slider = document.getElementById("slider");
const input_background = document.querySelector(".input-div");
const buttons_background = document.querySelector(".buttons-div");
const btn_group_1 = Array.from(document.querySelectorAll(".btn-group1-th1"));
const btn_group_2 = Array.from(document.querySelectorAll(".btn-group2-th1"));
const btn_group_3 = Array.from(document.querySelectorAll(".btn-group3-th1"));
const fonts = [
    document.getElementById("calc-logo"),
    document.getElementById("theme-font"),
    ...Array.from(document.querySelectorAll(".theme-number-fonts")),
    document.getElementById("input")
];

let theme = 1;
switch_key.addEventListener("click", () => {
    theme++;
    if(theme === 4){
        theme = 1;
    }

    if(theme === 1){
        switch_key.className = "circle1";
        slider.style.justifyContent = "start";
        slider.style.backgroundColor = "#242D44";
        document.body.style.backgroundColor = "#3A4663";
        fonts.forEach((font) => {
            font.style.color = "#FFFFFF";
        });
        input_background.style.backgroundColor = "#181F33";
        buttons_background.style.backgroundColor = "#242D44";
        btn_group_1.forEach((button) => {
            button.className = "btn-group1-th1";
        });
        btn_group_2.forEach((button) => {
            button.className = "btn-group2-th1";
        });
        btn_group_3.forEach((button) => {
            button.className = "btn-group3-th1";
        });
    }else if(theme === 2){
        switch_key.className = "circle2";
        slider.style.justifyContent = "center";
        slider.style.backgroundColor = "#D2CDCD";
        document.body.style.backgroundColor = "#E6E6E6";
        fonts.forEach((font) => {
            font.style.color = "#36362C";
        });
        input_background.style.backgroundColor = "#EEEEEE";
        buttons_background.style.backgroundColor = "#D2CDCD";
        btn_group_1.forEach((button) => {
            button.className = "btn-group1-th2";
        });
        btn_group_2.forEach((button) => {
            button.className = "btn-group2-th2";
        });
        btn_group_3.forEach((button) => {
            button.className = "btn-group3-th2";
        });
    }else{
        switch_key.className = "circle3";
        slider.style.justifyContent = "end";
        slider.style.backgroundColor = "#1E0936";
        document.body.style.backgroundColor = "#17062A";
        fonts.forEach((font) => {
            font.style.color = "#FFE53D";
        });
        input_background.style.backgroundColor = "#1E0936";
        buttons_background.style.backgroundColor = "#1E0936";
        btn_group_1.forEach((button) => {
            button.className = "btn-group1-th3";
        });
        btn_group_2.forEach((button) => {
            button.className = "btn-group2-th3";
        });
        btn_group_3.forEach((button) => {
            button.className = "btn-group3-th3";
        });
    }
});