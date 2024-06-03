var randomNo1=Math.ceil(Math.random()*6);
var randomNo2=Math.ceil(Math.random()*6);


var image1="dice"+randomNo1+".png";
var image2="dice"+randomNo2+".png";

var source1="images/"+image1;
var source2="images/"+image2;

document.querySelectorAll("img")[0].setAttribute("src",source1);
document.querySelectorAll("img")[1].setAttribute("src",source2);




if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}   
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}