const element = document.getElementById('button')
element.addEventListener("click",myTossResult);
var tossCount = 0;



function myTossResult() {


    var randomNumber = Math.floor(Math.random() *2 +1)
console.log(randomNumber)

var randomImage = "img" + randomNumber + ".png";
var imageSource = "images/" + randomImage ;

var imageOriginal = document.querySelectorAll('img')[0];

imageOriginal.setAttribute('src',imageSource)

if ( randomNumber == 1){
    document.querySelector('h1').innerHTML ="Head"
}
else{
    document.querySelector('h1').innerHTML = "Tail"
}
tossCount = tossCount + 1;
document.querySelector('p').innerHTML = tossCount


}


