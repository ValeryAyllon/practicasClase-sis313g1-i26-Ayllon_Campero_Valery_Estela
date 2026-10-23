let btn = document.getElementById("btn");
let chk0 = document.getElementById("chk0");
let chk1 = document.getElementById("chk1");
let chk2 = document.getElementById("chk2");
let chk3 = document.getElementById("chk3");
let displayScore = document.getElementById("score");
let radio = document.getElementsByName("radio0");
let display = document.getElementById("scor");

console.log(radio);

btn.addEventListener("click", (event)=>{
    let score = 0;
    if(chk0.checked == true){
        score = score + 50;
    }
    if(chk1.checked == true){
        score = score + 50;
    }
    if(chk2.checked == true){
        score = score - 50;
    }
    if(chk3.checked == true){
        score = score - 50;
    }
    if(radio[0].checked == true) {
        score = score + 100;
    }    
    if(score < 0){
        score = 0;
    }    
    display.innerHTML = score;
});
