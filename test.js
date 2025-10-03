let x = 5;
const y = 6; 

let z = x + y;
console.log(z);

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

const btn1 = document.getElementById("btn1");  //取得ID
const btn2 = document.getElementById("btn2");  //取得ID
const btn3 = document.getElementById("btn3");  //取得ID
const btn4 = document.getElementById("btn4");  //取得ID
const img = document.getElementById("img");  //取得ID
x = 20;
let a = "block";

btn1.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    document.getElementById("demo1").innerHTML = "Hello JavaScript";
})
btn2.addEventListener("click",function(){  //監聽事件，點擊，執行函式
x = x + 10;
document.getElementById("demo2").style.fontSize=x + "px";
})
btn3.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    alert("沒事");
    this.innerText = "沒事";
    this.style.color = "red";
})
btn4.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    a = (a=="none")? "block" : "none";
    document.getElementById("demo1").style.display = a;
    document.getElementById("demo2").style.display = a;
})
img.addEventListener("mouseover",function(){  //監聽事件，滑鼠懸浮上面
    this.src = "0.jpg";
})
img.addEventListener("mouseout",function(){  //監聽事件，滑鼠懸浮離開
    this.src = "a94bb0b237735bd2ab79107bcc0f6fc1.jpg";
})

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
let countNum =0;   //廣域變數
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("觀察隨機的數字：", randomNumber);
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    //guessField.focus();       //游標焦點預設在輸入欄位裡
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
if  (  userGuess === randomNumber ) {
    result.textContent = "猜測結果:Congratulations!" ;
}
else if (userGuess  < randomNumber ) {
    result.textContent = "猜測結果:數字太小!" ;
}
else if (userGuess  >  randomNumber ) {
    result.textContent = "猜測結果:數字太大!";
}}
guessSubmit.addEventListener("click", checkGuess);


