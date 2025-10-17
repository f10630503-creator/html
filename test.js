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
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");
let countNum =0;   //廣域變數
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("觀察隨機的數字：", randomNumber);
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    //guessField.focus();       //游標焦點預設在輸入欄位裡
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
    guesses.textContent += userGuess + " ";
    if  (  userGuess === randomNumber ) {
        result.textContent = "猜測結果:Congratulations!" ;
        }
    else if (userGuess  < randomNumber ) {
        result.textContent = "猜測結果:數字太小!" ;
    }
    else if (userGuess  >  randomNumber ) {
    result.textContent = "猜測結果:數字太大!";
    }
    if (countNum>10){
        result.textContent += "遊戲結束";
        result.style.backgroundColor="red";
        alert("遊戲結束");
        setGameOver();
    }}

function setGameOver() {
    guessField.disabled = true; //停止輸入功能
    guessSubmit.disabled = true;    //停止按鈕功能
}

function initGame() {// 初始化遊戲
    // 重設計數與亂數
    countNum = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("重新開始隨機的數字：", randomNumber);

    // 重設介面
    count.textContent = "猜測次數：0";
    result.textContent = "";
    result.style.backgroundColor = "";
    guesses.textContent = "猜過的數字: ";

    // 啟用輸入與按鈕，清空欄位並聚焦
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus(); 
}
restartBtn.addEventListener("click", initGame);
guessSubmit.addEventListener("click", checkGuess);
guessField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});

