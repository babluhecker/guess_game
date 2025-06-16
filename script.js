const form = document.querySelector("form")
const numval = document.querySelector(".numval")
let result = document.querySelector(".result")
let suggestion = document.querySelector(".sugg")
let balance = document.querySelector(".money")
let score = document.querySelector(".score")

let total_balance = 100;
let newscore = 0;

let randnum = Math.floor(Math.random() * 100 + 1);
console.log(randnum);


form.addEventListener("submit", (event) => {

    event.preventDefault();
    let num =  numval.value;

 
    if (num.toLowerCase() == "x") {
      if (total_balance == 0) {
        total_balance = 100;
        balance.innerHTML = total_balance;
        suggestion.innerHTML = "NEW GAME STARTS";
      }

    } 
    
    else {
      check(parseInt(num));
    }

    form.reset();
});

function check(num) {
     
   if(total_balance != 0){
        if (num > randnum) {
          suggestion.innerHTML = "HIGHER GUESS";
          total_balance -= 10;
          balance.innerHTML = total_balance;
          result.innerHTML = "😭 FAIL";
        } else if (num < randnum) {
          suggestion.innerHTML = "LOW GUESS";
          total_balance -= 10;
          balance.innerHTML = total_balance;
          result.innerHTML = "😭 FAIL";
        } else if (randnum == num) {
          suggestion.innerHTML = "😊";
          result.innerHTML = "🥳 WON";
          setTimeout(() => {
            suggestion.innerHTML = "NEW GAME STARTS";
          }, 1000);
          newscore += 1;
          score.innerHTML = newscore;
          randnum = Math.floor(Math.random() * 100 + 1);
        }
    }
    if (total_balance == 0) {
      result.innerHTML = "📌GAME OVER"
      suggestion.innerHTML = "ENTER X TO REFILL";
    } 
   

    
}


