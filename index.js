jQuery(function() {


const $one = $('#button-one');
const $five = $('#button-five');
const $ten = $('#button-ten');
const $lever = $('#lever');
$ten.click(captureBet);
$five.click(captureBet);
$one.click(captureBet);
$lever.click(spin);

const $scorekeep = $('#scorekeep span');


$(document).ready(function(){

//this sets up the landing page when the page loads
    let $landing = $('<div/>').addClass('land');
    let $innerland = $('<div/>').addClass('innerland');
    let $go = $('<submit id="name-enter">Next</submit>');
    let $input = $('<input/>');
    let $instruct = $('<h1 id="test"> Please Enter Your Name </h1>');
    let $startGame = $('<button>Start Game</button>')
    $('body').append($landing);
    $landing.append($innerland);
    $innerland.append($instruct,$input,$go);

//here the name input is validated
    $go.addClass('go').click(function() {
      let $nameAdded = $input.val();
      if($nameAdded === '') {
        alert('Please enter your name');
      }
      else {$('#test').text(`Hi ${$nameAdded}, ` + `Insert cash to begin.`);

      $innerland.append($one,$five,$ten,$startGame);
      $startGame.addClass('go');
      $go.hide();
      $input.hide();
    }
// the user must select a starting bet to continue.
      $startGame.click(function(event) {
        if ($landing.is(':visible')){
        $landing.hide();
      };

      });

    });
  });

//the value of the bet is selected and added to the screen
  function captureBet(event) {
    let bet = 0;
      bet += parseInt($(event.target).val())
      event.preventDefault();
      $scorekeep.text(bet);
      $(event.target).toggleClass('bet-check')
      return bet;
  }

    let turns = 4;
//these are the possible items you be shown to win. They each have a value
    let assortment = {
    'cherry': 2,
    'water': 3,
    'crown': 1,
    'clover': 2,
    'strawberry': 3,
    'seven': 2,
    'bell': 1,
    'horseshoe' : 1,
    'jewel' :4,

    }

function spin() {

  turns--//the turns will decrease by one dollar each spin
  const combos = Object.keys(assortment)
  let levelOne = combos.slice(0, 3);//the game can be made easier or harder depending on how many things we have in the array.
  let levelTwo = combos.slice(0, 6);

  result =[]; //This holds the three random elements

  for(let i = 0; i < 3; i++) {
    combos[Math.floor(Math.random() * combos.length)];
  }

  for(let i = 0; i < 3; i++) {
    result.push(combos[Math.floor(Math.random() * combos.length)]);
  }

  //here we loop through the spaces in the dom and add the three random images to them
  let ids = [ '#square-two', '#square-five','#square-eight'];

  for (let i = 0; i<ids.length; i++) {
      classCheck(result[i],$(ids[i]));

  }

//if there are three like pictures in a row, then win. Points are calculated based on assortment.
  if((result[0]===result[1])&&(result[1]===result[2])) {
    console.log(`triple match on ${result[0]} which have a value of ${assortment[result[0]]}`);
    turns += (assortment[result[0]] * 10);
    console.log(` You now have ${turns} turns`);
    $('.inner-tiles').addClass('win');
    alert('win!');

  } // if there are two in a row, this is a partial win
  else if((result[0]===result[1])||(result[1]===result[2])){
    console.log(`double match on ${result[1]} which have a value of ${assortment[result[1]]}`);
    turns += (assortment[result[1]] * 2);
    console.log(` You now have ${turns} turns`);
  }


  $('.rand').each(function(i, val) {
    $(this).removeClass('cherry water crown clover strawberry seven bell horseshoe jewel');
    $(this).addClass(combos[Math.floor(Math.random() * combos.length)]);
    });

  $scorekeep.text(`${turns}`);

  if((parseInt($scorekeep.text())) <= 0){
    let bet = 0;
    let turns = 4;
    lose();
  }
}


function lose() {
  if ($('#lose').is(':hidden')){
        $('#lose').show();
      };
  let bet = 0;
  let turns = 4;
  let $replay = $('<button id="replay">Continue</button>');
  $('body').append('<div id="lose"></div>');
  $('#lose').append('<div class="inner-lose"></div>');
  $('.inner-lose').append('<h1>Add more cash and play again?</h1>',$one,$five,$ten,$replay);

      $replay.click(function(event) {
        $('#lose').css('visibility', 'hidden');
      });

  }

  //here, the classes are matched with the array elements in order to display each picture in the grid

  function classCheck(x, el) {
   console.log(el);
   el.removeClass();
   el.addClass('inner-tiles');


    switch(x) {
      case 'cherry':
      el.addClass('cherry');
          break;
      case 'water':
      el .addClass('water');
          break;
      case 'crown':
       el.addClass('crown');
          break;
      case 'clover':
       el.addClass('clover');
          break;
      case 'strawberry':
       el.addClass('strawberry');
          break;
      case 'seven':
       el.addClass('seven');
          break;
      case 'bell':
       el.addClass('bell');
          break;
      case 'horseshoe':
       el.addClass('horseshoe');
         break;
      case 'jewel':
       el.addClass('jewel');

  }
}

  })
