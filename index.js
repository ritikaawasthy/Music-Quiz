var readlinesync= require("readline-sync");
var chalk = require("chalk");
var score=0;
var questions= [
{que: chalk.blueBright.bold("Que1:Did mohit chauhan sang Dil diyan gallan? "),
ans:"NO"},
{que:chalk.blueBright.bold("Que2:Is despacito a spanish song? "),
ans:"YES"},
{que:chalk.blueBright.bold("Que3:Was Steven Tylor the lead singer of The Beatels? "),
ans:"NO"},
{ que:chalk.blueBright.bold("Que4:Is Adele the singer of Rolling in the deep? "),
ans: "YES"},
{ que:chalk.greenBright.bold("Que5:Is Kailash Kher the singer of Kun Faya Kun? "),
ans: "NO"},
{ que: chalk.greenBright.bold("Que6:Is Shankar the singer of song Dil Chahata hai? "),
ans: "YES"},
{ que: chalk.greenBright.bold("Que7:Whats the genre of the band 'The Door'(Rock/Jazz)? "),
ans: "ROCK"},
{ que: chalk.greenBright.bold("Que8:Who sang 'My funny valentine'? "),
ans: "FRANK SINATRA"},
{que: chalk.magentaBright.bold("Que9:Who sang 'Yeh fitoor mera'? (A.R.Rahman/ Arijit Singh "),
ans: "ARIJIT SINGH"},
{que: chalk.magentaBright.bold("Que10:Who is the original singer of 'Knockin on Heaven's door? (Guns n Roses/ Bob Dylan) "),
ans: "BOB DYLAN"},
{que:chalk.magentaBright.bold("Que11:Who is the original artist of the song 'Do you know'? (Troy Boi/Enrique Iglesias) "),
ans:"ENRIQUE IGLESIAS" },
{que: chalk.magentaBright.bold("Que12:Who is the artist of the song 'Radio Gaga'(Queen/Lady Gaga "),
ans: "QUEEN"},
{que:chalk.red.bold ("Que13:Whats the genre of 'Louis Armstrong'? (Punk rock/Jazz) "),
ans: "JAZZ"
}
]

mainfunc()

function mainfunc(){
  console.log(chalk.bgRgb(250,0,0)("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
  console.log(chalk.rgb(250,0,0).bold("WELCOME TO BATTLE OF BANDS QUIZ!"));
   console.log(chalk.bgRgb(250,0,0)("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
  var userName= readlinesync.question(chalk.italic("Please enter your name here: "))
  console.log(chalk.yellowBright.bold("Hello "+userName))
  console.log(chalk.rgb(250,45,100).italic("Are you a music Guru? \nLet's find out "))
  console.log(chalk.rgb(270,20,120)("This quiz contains 13 questions in total and there are 3 levels to be completed \nEach level contains 5 questions \nPlay well and become the master of BOB \n{Rules:} \n1.For each right answer you get +20 points for each wrong answer -10 point is deducted \n2.Spell each answer correctly \n3.Send the screenshot of your score after ending the quiz.\nAll the best\n"))

  for(i=0;i<13;i++){
    var input= readlinesync.question(questions[i].que);
    check(questions[i].que,questions[i].ans,input);
    if(i==3){
      if(score>0){
        console.log(chalk.bgRgb(250,45,100)("Wohooo! You have cleared the first Level"))}
      else{
        console.log(chalk.bgRedBright("Your score is too low for the next level. Sorry You've Lost :( "))
        break;
      }
    }
    if(i==7){
      if(score>4){
        console.log(chalk.bgRgb(250,45,100)("Yay! You're on fire, Second round is completed"))
      }
      else{
        console.log(chalk.bgRedBright("Sorry, Your score is too low.Better luck next time"))
        break;
      }
    }
    if(i==12){
      console.log(chalk.bgRgb(250,45,100)("Congratulations! You have completed all three rounds"))
    }

  }
  console.log("Your Final Score is: "+ score);

}



function check(ques,rans,ans){
  if (ans.toUpperCase() ==rans){
    score= score+2;
    console.log(chalk.rgb(255, 500, 136)("YAY! Correct \nYour Score: "+score));
  }
  else{
    score--;
    console.log(chalk.redBright("Oh No! Thats wrong \nYour Score: "+score))
  }
}
