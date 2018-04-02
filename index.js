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

    let $landing = $('<div/>').addClass('land');
    let $innerland = $('<div/>').addClass('innerland');
    let $go = $('<submit><h2>clickme<h2/></submit>');
    let $input = $('<input/>');
    let $instruct = $('<h1> Please Enter Your Name <h1/>');
    let $startGame = $('<button><h2>Start Game<h2/></button>')
    $('body').append($landing);
    $landing.append($innerland);
    $innerland.append($instruct,$input,$go);

    $go.addClass('go').click(function() {
      let $nameAdded = $input.val();
      if($nameAdded === '') {
        alert('Please enter your name');
      }
      else {$('h1:nth-of-type(2)').text(`Hi ${$nameAdded}, ` + `Insert cash to begin.`);


      $innerland.append($one,$five,$ten,$startGame);
      $startGame.addClass('go');
      $go.hide();
      $input.hide();
    }

      $startGame.click(function(event) {
        if($scorekeep.text(0)) {
        alert('Please enter your bet');
      }  else if ($landing.is(':visible')){
        $landing.hide();
      };


      });
    });
  });


  function captureBet(event) {
    let bet = 0;
      bet += parseInt($(event.target).val())
      event.preventDefault();
      $scorekeep.text(bet);
       return bet;
  }

    let turns = 4;

    let assortment = {
    'cherry': 2,
    'water': 3,
    'crown': 8,
    'clover': 4,
    'strawberry': 1,
    'seven': 9,
    'bell': 5,
    'horseshoe' : 6,
    'jewel' :10
    }



function spin() {

  turns--
  const combos = Object.keys(assortment)//.slice(0, 3); <-- dictates how hard the game is. Want to map turns to the second argument here (e.g. .slice(0, Math.floor(turn * 1.25))

  result =[];


  for(let i = 0; i < 3; i++) {
    combos[Math.floor(Math.random() * combos.length)];

  }

  for(let i = 0; i < 3; i++) {
    result.push(combos[Math.floor(Math.random() * combos.length)]);
  }

  let ids = [ '#square-two', '#square-five','#square-eight'];

  for (let i = 0; i<ids.length; i++) {
      classCheck(result[i],$(ids[i]));

  }

  if((result[0]===result[1])&&(result[1]===result[2])) {
    console.log(`triple match on ${result[0]} which have a value of ${assortment[result[0]]}`);
    turns += (assortment[result[0]] * 3);
    console.log(`You now have ${turns} turns`);

  }
  else if((result[0]===result[1])||(result[1]===result[2])){
    console.log(`double match on ${result[1]} which have a value of ${assortment[result[1]]}`);
    turns += (assortment[result[1]] * 2);
    console.log(`You now have ${turns} turns`);
  }


  $('.rand').each(function(i, val) {
    $(this).addClass(combos[Math.floor(Math.random() * combos.length)]);

    });

  $scorekeep.text(`${turns}`);

}


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
