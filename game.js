

//>>> protoPlayer
class Player { //create a prototype / class object to hold functions that apply to all weapon objects
  constructor(type) {
  this.type = type;
}
onAttack(weapon) { //fires is a property and its value is a function
  console.log(`Opps ${this.type} has attack you with a'${weapon}'`);
  }
};
//>>>>Players
let playerOne = new Player("p1");
playerOne.onAttack("yelp");
playerOne.img = document.createElement("IMG");
playerOne.img.setAttribute("src", "./Player1.png",);
playerOne.img.height = 50;
playerOne.img.width = 50;

let playerTwo = new Player("p2");
playerTwo.onAttack("Noo");
playerTwo.img = document.createElement("IMG");
playerTwo.img.setAttribute("src", "./Player2.png",);
playerTwo.img.height = 50;
playerTwo.img.width = 50;

//>>>>> board blocks
const blocks = document.createElement("IMG"); //create image element in cell
    blocks.setAttribute("src", "./no-audio.png",);//add image to that cell
    blocks.height = 50; // image height and width
    blocks.width = 50;

//>>>>> protoWeapon 
class Weapon { //create a prototype / class object to hold functions that apply to all weapon objects
  constructor(type) {
  this.type = type;
}
fires(shotNumber) { //fires is a property and its value is a function
  console.log(`The ${this.type} weapon fires '${shotNumber}' shots`);
  }
};
//weapons
let tapeWeapon = new Weapon("tape"); 
  tapeWeapon.fires("2");
  tapeWeapon.negs = "You tangled!";
  tapeWeapon.img = document.createElement("IMG");
  tapeWeapon.img.setAttribute("src", "tape.png");
  tapeWeapon.img.height = 50;
  tapeWeapon.img.width = 50;

let miniDiscWeapon = new Weapon("miniDisc");
  miniDiscWeapon.fires("4");
  miniDiscWeapon.negs = "You just weren't good enough :-(";
  miniDiscWeapon.img = document.createElement("IMG");
  miniDiscWeapon.img.setAttribute("src", "minidisc.png");
  miniDiscWeapon.img.height = 50;
  miniDiscWeapon.img.width = 50;

let mp3Weapon = new Weapon("mp3");
  mp3Weapon.fires("8");
  mp3Weapon.negs = "You lose yourself amoung the rubble"
  mp3Weapon.img = document.createElement("IMG");
  mp3Weapon.img.setAttribute("src", "mp3.png");
  mp3Weapon.img.height = 50;
  mp3Weapon.img.width = 50;

let vinylWeapon = new Weapon("vinyl");
  vinylWeapon.fires("6");
  vinylWeapon.negs = "You've warped!"
  vinylWeapon.img = document.createElement("IMG");
  vinylWeapon.img.setAttribute("src", "vinyl.png");
  vinylWeapon.img.height = 50;
  vinylWeapon.img.width = 50;

let cdWeapon = new Weapon("cd"); 
  cdWeapon.fires("8");
  cdWeapon.negs = "You scratched!";
  cdWeapon.img = document.createElement("IMG");
  cdWeapon.img.setAttribute("src", "cd.png");
  cdWeapon.img.height = 50;
  cdWeapon.img.width = 50;

//weapons array
const weapons = [mp3Weapon, miniDiscWeapon, cdWeapon, vinylWeapon, tapeWeapon];


//generate a board for the game and add cell ids
function generate_board() {
  
//   // get the reference for the body - []index for node
//let canvas = document.getElementById("myCanvas");
let body = document.getElementsByTagName("body")[0];
let board = document.createElement("table"); // creates a <table> element and a <tbody> element
let boardBody = document.createElement("tbody")
let boardArr = new Array();
// creates a table row "tr"
for (let i = 0; i < 10; i++) { //column
      let row = document.createElement("tr");
        // Create a <td> element / <td> = standard cells / node the contents of the <td>
      for (let j = 0; j < 10; j++) { //row
       let cell = document.createElement("td");
                    //create id for cell
                let cellId = i.toString()+"-"+j.toString(); 
                //tabindex = cellId;
                cell.id=cellId; //add id to each cell / test id is going to correct cell with cell.append(cellId);
                row.appendChild(cell); //append rows with cells
                boardBody.appendChild(row);// add the row to the end of the table body 
                boardArr[i] = new Array();
                boardArr[i][j] = "";
                
              } 
          }
   
    board.appendChild(boardBody)
   
   
   body.appendChild(board)//add board to html body
   //boardBody.appendChild(canvas);
   board.setAttribute("border", "0",);//set board atributes
   console.log(boardArr);
//document.getElementById("playGame").tabIndex=-1;
//board.tabIndex=0;

//generate random cell id - outside the boards
function getRandomCellId() {
    let iR = Math.floor(Math.random() * 10); // return row between 0-9
    let jC = Math.floor(Math.random() * 10); // return cell between 0-9 
    return iR.toString()+"-"+jC.toString(); //produces string to be used as id
    }
         
// add players

let p1P = getRandomCellId();
//document.getElementById(p1P).tabIndex=0; ///first item so no need for loop
document.getElementById(p1P).append(playerOne.img);
  document.getElementById(p1P).id = 1;//change the id - do we need to change ID?

  //playerTwo position - makes sure players don't touch so manipulate P1 position
  //to decide position for p2 
 
iRi = Number(p1P[0]) + 4; // turn digits into number then then add 4 to ensure not touching
        if (iRi > 9) { // if more than 9, - 6
          iRi = iRi - 6;
          
        }
    jCj = Number(p1P[2]) + 4; //as above with second digit
    if (jCj > 9) {
      jCj = jCj - 6;
      console.log(iRi);
    }
    let p2P = iRi.toString()+"-"+jCj.toString(); // create new string / cellId for P2
    document.getElementById(p2P).append(playerTwo.img);// attach to cell
    document.getElementById(p2P)//.tabIndex=0;
    document.getElementById(p2P).id = 2;//change the id 
    
    //find cell index


for (a = 0; a < 4; a++){ // do task 6 times
  let w = Math.floor(Math.random() * 4); // randomlly select weapon from array
   // call function to generate cell id
   let wP = getRandomCellId(); 
    if (document.getElementById(wP) === null) {continue;} // if number not an id (i.e has w, b, or p after it)   loop again
    document.getElementById(wP).append(weapons[w].img.cloneNode(true));// clone node duplicates instead of moving
    document.getElementById(wP).id = wP+"w";//change the id 
 } 
//add board blocks
for (a = 0; a < 10; a++) {
   let bP = getRandomCellId();
   if (document.getElementById(bP) === null) {continue;} // if number not an id loop again
   block = document.getElementById(bP).append(blocks.cloneNode(true));
   document.getElementById(bP).classList.add("blocks");
   document.getElementById(bP).id = bP+"b";//change the id
}
console.log(board);
//board.tabIndex=0

 
// MOVEMENT FOR PLAYER 1 - USING JQUERY
let p1cellIndex = $('#1').index(); // sets index for player 1
let p1rowindex = $('#1').parents('tr').index();//add one to row index

$(document).ready(function(){ // run function after page has loaded
  
$(this).keydown(function(event) {
  if (event.keyCode == 49 ) { // press 1 for player 1 to play
 let x = 0; // sets goes as 0 so can only go 3 times (see end of code)
  
$(this).keydown(function(event) {
  if (event.keyCode == 40) { //press up  
    event.preventDefault(); //stop screen scrolling with arrow keys
    p1rowindex = p1rowindex + 1;
      $('#1').parents('table').find('tr:eq('+p1rowindex+') td:eq('+p1cellIndex+')').append(playerOne.img);
}if (event.keyCode == 38) { // arrow down
    event.preventDefault();
    p1rowindex = p1rowindex - 1;
    $('#1').parents('table').find('tr:eq('+p1rowindex+') td:eq('+p1cellIndex+')').append(playerOne.img);
}if (event.keyCode == 39) {
    event.preventDefault();
    p1cellIndex = p1cellIndex + 1;
    $('#1').parents('table').find('tr:eq('+p1rowindex+') td:eq('+p1cellIndex+')').append(playerOne.img);
}if (event.keyCode == 37) { //left
    event.preventDefault();
    p1cellIndex = p1cellIndex - 1;
    $('#1').parents('table').find('tr:eq('+p1rowindex+') td:eq('+p1cellIndex+')').append(playerOne.img);
 }
x++;
if (x >= 3) { // allows 3 moves before function turns off
  $(this).off(event);
  } 
});
};})
// MOVEMENT FOR PLAYER 2 - USING JQUERY

let p2cellIndex = $('#2').index(); // sets index for player 2
let p2rowindex = $('#2').parents('tr').index();//add one to row index1
$(this).keydown(function(event) {
   if (event.keyCode == 50 ) { // press 2 for player 2 to go.
//player 2 activate this code.
let x = 0;  // sets 3 move function
$(this).keydown(function(event) {
  if(event.keyCode == 40) { //press up 
      event.preventDefault(); //stop screen scrolling with arrow keys
      p2rowindex = p2rowindex + 1;
      
      $('#2').parents('table').find('tr:eq('+p2rowindex+') td:eq('+p2cellIndex+')').append(playerTwo.img);
} if (event.keyCode == 38) { // arrow down
    event.preventDefault();
    p2rowindex = p2rowindex - 1;
    $('#2').parents('table').find('tr:eq('+p2rowindex+') td:eq('+p2cellIndex+')').append(playerTwo.img);
  }if (event.keyCode == 39) {
    event.preventDefault();
    p2cellIndex = p2cellIndex + 1;
    $('#2').parents('table').find('tr:eq('+p2rowindex+') td:eq('+p2cellIndex+')').append(playerTwo.img);
  }if (event.keyCode == 37) { //left
    event.preventDefault();
    p2cellIndex = p2cellIndex - 1;
$('#2').parents('table').find('tr:eq('+p2rowindex+') td:eq('+p2cellIndex+')').append(playerTwo.img);
  }
  x++;
if (x >= 3) { // allows 3 moves before function turns off
  $(this).off(event);
  } 
});}
});
});


    
} // generate_board end


