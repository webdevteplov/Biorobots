biorouka_state_for_sale = document.getElementById("sell_biorouka");

microchip_state_for_sale = document.getElementById("sell_microchip");

soul_state_for_sale = document.getElementById("sell_soul");


//проверка состояния кнопок продажи комплектующих
function СountComponentBiorouka() {
  if (biorouka >= 1) {
    biorouka_state_for_sale.disabled = false;
  }
  else if (biorouka < 1) {
    biorouka_state_for_sale.disabled = true;
  }
}

function СountComponentMicrochip() {
  if (microchip >= 1) {
    microchip_state_for_sale.disabled = false;
  }
  else if (microchip < 1){
    microchip_state_for_sale.disabled = true;
  }
}

function СountComponentSoul() {
  if (soul >= 1) {
    soul_state_for_sale.disabled = false;
  }
  else if (soul < 1){
    soul_state_for_sale.disabled = true;
  }
}

//продажа комплектующих
function SellBiorouka() {
  biorouka--;
  СountComponentBiorouka();
  CheckCountBiorouka(); //production.js
  CheckDescriptionText(); //production.js
  document.getElementById("count_component_biorouka").innerHTML = biorouka;
  for (var i = 0; i < 5; i++) {
    if (coins < max_coins)
      AddCoin();
    else
      popup_coin.style.display = "block"; //открывает предупреждение
  }
}

function SellMicrochip() {
  microchip--;
  СountComponentMicrochip();
  CheckCountMicrochip(); //production.js
  CheckDescriptionText(); //production.js
  document.getElementById("count_component_microchip").innerHTML = microchip;
  for (var i = 0; i < 3; i++) {
    if (coins < max_coins)
      AddCoin();
    else
      popup_coin.style.display = "block"; //открывает предупреждение
  }
}

function SellSoul() {
  soul--;
  СountComponentSoul();
  CheckCountSoul(); //production.js
  CheckDescriptionText(); //production.js
  document.getElementById("count_component_soul").innerHTML = soul;
  for (var i = 0; i < 15; i++) {
    if (coins < max_coins)
      AddCoin();
    else
      popup_coin.style.display = "block"; //открывает предупреждение
  }
}
