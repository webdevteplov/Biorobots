var biorouka = 0;
var microchip = 0;
var soul = 0;

biorouka_state = document.getElementById("buy_biorouka");

microchip_state = document.getElementById("buy_microchip");

soul_state = document.getElementById("buy_soul");

//проверка состояния кнопок покупки комплектующих
function СoinСountСheckForBiorouka() {
  if (coins >= 7) {
    biorouka_state.disabled = false;
  }
  else {
    biorouka_state.disabled = true;
  }
}

function СoinСountСheckForMicrochip() {
  if (coins >= 5) {
    microchip_state.disabled = false;
  }
  else {
    microchip_state.disabled = true;
  }
}

function СoinСountСheckForSoul() {
  if (coins >= 25) {
    soul_state.disabled = false;
  }
  else {
    soul_state.disabled = true;
  }
}

//покупка комплектующих
function BuyBiorouka() {
  if (coins >= 7){
    for (var i = 0; i < 7; i++) {
      DelCoin();
    }
    biorouka++;
    document.getElementById("count_component_biorouka").innerHTML = biorouka;
    СountComponentBiorouka(); //storage.js
    CheckCountBiorouka(); //production.js
    CheckDescriptionText(); //production.js
  }
  else {
    alert("Недостаточно денег");
  }
}


function BuyMicrochip() {
  if (coins >= 5){
    for (var i = 0; i < 5; i++) {
      DelCoin();
    }
    microchip++;
    document.getElementById("count_component_microchip").innerHTML = microchip;
    СountComponentMicrochip(); //storage.js
    CheckCountMicrochip(); //production.js
    CheckDescriptionText(); //production.js
  }
  else {
    alert("Недостаточно денег");
  }
}


function BuySoul() {
  if (coins >= 25){
    for (var i = 0; i < 25; i++) {
      DelCoin();
    }
    soul++;
    document.getElementById("count_component_soul").innerHTML = soul;
    СountComponentSoul(); //storage.js
    CheckCountSoul(); //production.js
    CheckDescriptionText(); //production.js
  }
  else {
    alert("Недостаточно денег");
  }
}
