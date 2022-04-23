var coins = 0;
var max_coins = 100;
var left = 123; //css стили для картинок монет
var zIndex = 0; //

// для открытия предупреждения
var popup_coin = document.getElementById('popup_coin');

//для закрытия предупреждения
function PopUpCoinClose() {
  popup_coin.style.display = "none";
}

//проверка падежей слова "монет"
function СoinСountСheck() {
  if (coins === 1 || coins === 21 || coins === 31 ||
       coins === 41 || coins === 51 || coins === 61 ||
         coins === 71 || coins === 81 || coins === 91){
    document.getElementById("biorobo_coins_text").innerHTML = "biorobo монетa";
  }
  else if (coins === 2 || coins === 3 || coins === 4 ||
     coins === 22 || coins === 23 || coins === 24 ||
      coins === 32 || coins === 33 || coins === 34 ||
       coins === 42 || coins === 43 || coins === 44 ||
        coins === 52 || coins === 53 || coins === 54 ||
         coins === 62 || coins === 63 || coins === 64 ||
          coins === 72 || coins === 73 || coins === 74 ||
           coins === 82 || coins === 83 || coins === 84 ||
            coins === 92 || coins === 93 || coins === 94){
    document.getElementById("biorobo_coins_text").innerHTML = "biorobo монеты";
  }
  else {
    document.getElementById("biorobo_coins_text").innerHTML = "biorobo монет";
  }
}

//добавление монет
function AddCoin() {
  var coin_img = document.createElement("img");
  left += 7;
  zIndex -= 1;
  coin_img.src = "./img/svg/wallet/Coin.svg";
  coin_img.style.position = "absolute";
  coin_img.style.zIndex = zIndex;
  coin_img.style.left = left + "px";
  var container = document.getElementById("coins");
  container.appendChild(coin_img);
  coins++;
  document.getElementById("quantity_coins").innerHTML = coins;
  СoinСountСheck();
  СoinСountСheckForBiorouka();  //
  СoinСountСheckForMicrochip(); // market.js
  СoinСountСheckForSoul();      //
  CheckDescriptionText(); // production.js
}

//удаление монет
function DelCoin() {
  var del_coin_img = document.getElementById("coins");
  del_coin_img.removeChild(del_coin_img.lastChild);
  left -= 7;
  coins--;
  document.getElementById("quantity_coins").innerHTML = coins;
  СoinСountСheck();
  СoinСountСheckForBiorouka();  //
  СoinСountСheckForMicrochip(); // market.js
  СoinСountСheckForSoul();      //
}

//добавление одной монеты
function AddOneCoin(){
  if (coins < max_coins) {
    AddCoin();
  }
  else popup_coin.style.display = "block"; //открывает предупреждение
}

//добавление пяти монет
function AddFiveCoin() {
  var checkbox = document.getElementById("five_coins");
  if (checkbox.checked) {
    for (var i = 0; i < 5; i++) {
      if (coins < max_coins) {
        AddCoin();
      }
      else {
        popup_coin.style.display = "block"; //открывает предупреждение
      }
    }
	}
}
