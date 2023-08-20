// let randomNumberDice1=Math.floor(Math.random()*6 )+1;
// let randomNumberDice2=Math.floor(Math.random()*6 )+1;

// if we keep this code here we will generate random numbers once not every time the function is clicked

let image1=document.querySelector('.img1');
let image2=document.querySelector('.img2');
let result=document.querySelector('.result');

result.addEventListener('click',()=>{
    dicegame()
})


document.body.addEventListener('keydown',(event)=>{
    if(event.key==="p"){
        console.log(event);
        dicegame();
    }
})

function dicegame(){
let randomNumberDice1=Math.floor(Math.random()*6 )+1;
let randomNumberDice2=Math.floor(Math.random()*6 )+1;
image1.setAttribute('src',`./images/dice${randomNumberDice1}.png`);
image2.setAttribute('src',`./images/dice${randomNumberDice2}.png`);

if(randomNumberDice1>randomNumberDice2){
   result.innerHTML="Player 1 win! 🏆";
}
else if( randomNumberDice1===randomNumberDice2){
    result.innerHTML="Draw! 🤝";
    }
else{
    result.innerHTML="Player 2 win! 🏆";
}
}