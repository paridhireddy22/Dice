function askName(){
  var player1=prompt("First Player Name:");
  var player2=prompt("Second Player Name:");
  if(player1==null || player1.length==0)
  player1="Player 1";

  if(player2==null || player2.length==0)
  player2="Player 2";

  document.querySelectorAll("p")[0].innerHTML=player1;

  document.querySelectorAll("p")[1].innerHTML=player2;

  var randomNumber1=1+Math.floor(Math.random()*6);
  //alert(randomNumber1);
  document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");

  var randomNumber2=1+Math.floor(Math.random()*6);
  //alert(randomNumber2);
  document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML="🚩" + player1 + " Wins!";

  }
  else if(randomNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerHTML=player2+ " Wins! 🚩";
  }
  else
  {
    document.querySelector("h1").innerHTML="Draw!";
  }


}
