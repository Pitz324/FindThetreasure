const WIDTH = 400;
const HEIGHT = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT)
};

let $map = document.getElementById('map');
let $distancia = document.getElementById('distancia');
let clicks = 0;
$map.addEventListener('click', function (e) {
	clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distancia.innerHTML = `<h1>${distanceHint}</h1>`;

    if(distance < 20) {
     alert(`Has enccontrado el tesoro en ${clicks} clicks`);
     location.reload();
    }

})