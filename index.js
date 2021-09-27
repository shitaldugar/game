let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random()*3);
     return choices[randomNumber];
}
function convertToWord(letter){
    if(letter=="r")return "rock";
    if(letter=="p")return "paper";
    return "scissor";
}
function win(userChoice ,computerChoice){
    //console.log("you win");
   userScore++;
   //console.log(userScore);
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   const smallUserWord="user".fontsize(2).sub();
   const smallCompWord="comp".fontsize(2).sub();
   result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! `;
   document.getElementById(userChoice).classList.add('green-glow');
   setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);
   
   } 




function lose(userChoice,computerChoice){
    console.log("you lose");
   computerScore++;
   userScore_span.innerHtml = userScore;
   computerScore_span.innerHTML = computerScore;
   const smallUserWord="user".fontsize(2).sub();
   const smallCompWord="comp".fontsize(2).sub();
   result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...! `;
   document.getElementById(userChoice).classList.add('red-glow');
   setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
   }  


function draw(userChoice,computerChoice){
  // userScore_span.innerHtml=userScore;
   //computerScore_span.innerHTML=computerScore;
   const smallUserWord="user".fontsize(2).sub();
   const smallCompWord="comp".fontsize(2).sub();
   result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. it's a draw .`;
   document.getElementById(userChoice).classList.add('gray-glow');
   setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);
   }  



function game(userChoice){
    //console.log("💩 U+1F4A9 💩 U+1F4A9 💩 U+1F4A9+userChoice")
    const computerChoice=getComputerChoice();
    //console.log(computerChoice);
    //console.log("userChoice=>"+userChoice);
    //console.log("computerChoice=>"+computerChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
       // console.log("USER WINS.");
         win(userChoice,computerChoice);
         break;
        case "rp":
        case "ps":
        case "sr":
        //console.log("USER LOSES.");
         lose(userChoice,computerChoice);
         break;
        case "rr":
        case "pp":
        case "ss":
       // console.log("its a draw.");
        draw(userChoice,computerChoice);
        break;
        
    }

}
function main(){
rock_div.addEventListener('click',function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissor_div.addEventListener('click',function(){
    game("s");
})
}
main();

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("Slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

