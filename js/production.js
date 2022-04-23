
//checkbox block
var production_biorouka = 0;
var production_microchip = 0;
var production_soul = 0;

biorouka_checkbox_1_state = document.getElementById("biorouka-1");
biorouka_checkbox_2_state = document.getElementById("biorouka-2");
biorouka_checkbox_3_state = document.getElementById("biorouka-3");
biorouka_checkbox_4_state = document.getElementById("biorouka-4");

microchip_checkbox_1_state = document.getElementById("microchip-1");
microchip_checkbox_2_state = document.getElementById("microchip-2");
microchip_checkbox_3_state = document.getElementById("microchip-3");
microchip_checkbox_4_state = document.getElementById("microchip-4");

soul_checkbox_state = document.getElementById("soul");

description_text_for_production = document.getElementById('description_text');

//проверка монет и комплектующих для создания робота
function CheckReadyFinishButton() {
  if (coins >= 10 && production_soul == 1 && production_microchip == 4 && production_biorouka == 4) {
    document.getElementById('btn_create_robot_production').disabled = false;
    document.getElementById('btn_create_robot_header').disabled = false;
  }
  else if (coins < 10 || production_soul < 1 || production_microchip < 4 || production_biorouka < 4) {
    document.getElementById('btn_create_robot_production').disabled = true;
    document.getElementById('btn_create_robot_header').disabled = true;
  }
}

//проверка текста, который сообщяет чего не хватает для создания робота
function CheckDescriptionText() {
  //для отображения кнопки создания робота
  CheckReadyFinishButton();
  //для смены картинки робота(готов к производству)
  TypeFrontEnd();
  TypeDesign();
  GenderMale();
  GenderFemale();
  if (coins >= 10) {

    //проверка если не хватает всего кроме монет
    if (production_biorouka == 0 && production_microchip == 0 && production_soul == 0) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, процессоров и души";
    }

    //проверка если все готово для производства робота
    else if (production_soul == 1 && production_microchip == 4 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Все готово для производства биоробота !";
    }

    //проверка души и биорук с микрочипами
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма";
    }
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и 1 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и 2 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и 3 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и 1 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и 2 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и 3 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и 1 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и 2 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и 3 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 4 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 4 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 процессора";
    }
    else if (production_soul == 1 && production_biorouka == 4 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 процессора";
    }

    //проверка биорук с микрочипом
    else if (production_biorouka == 1 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и души";
    }
    else if (production_biorouka == 1 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 1 процессора и души";
    }
    else if (production_biorouka == 1 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 2 процессора и души";
    }
    else if (production_biorouka == 1 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 3 процессора и души";
    }
    else if (production_biorouka == 2 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и души";
    }
    else if (production_biorouka == 2 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 1 процессора и души";
    }
    else if (production_biorouka == 2 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 2 процессора и души";
    }
    else if (production_biorouka == 2 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 3 процессора и души";
    }
    else if (production_biorouka == 3 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и души";
    }
    else if (production_biorouka == 3 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 1 процессора и души";
    }
    else if (production_biorouka == 3 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 2 процессора и души";
    }
    else if (production_biorouka == 3 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 3 процессора и души";
    }
    else if (production_biorouka == 4 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает души";
    }
    else if (production_biorouka == 4 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 процессора и души";
    }
    else if (production_biorouka == 4 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 процессора и души";
    }
    else if (production_biorouka == 4 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 процессора и души";
    }

    //проверка микрочипов с биоруками
    else if (production_microchip == 1 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 процессора и души";
    }
    else if (production_microchip == 1 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 3 процессора и души";
    }
    else if (production_microchip == 1 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 3 процессора и души";
    }
    else if (production_microchip == 1 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 3 процессора и души";
    }
    else if (production_microchip == 2 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 процессора и души";
    }
    else if (production_microchip == 2 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 2 процессора и души";
    }
    else if (production_microchip == 2 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 2 процессора и души";
    }
    else if (production_microchip == 2 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 2 процессора и души";
    }
    else if (production_microchip == 3 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 процессора и души";
    }
    else if (production_microchip == 3 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 1 процессора и души";
    }
    else if (production_microchip == 3 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 1 процессора и души";
    }
    else if (production_microchip == 3 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 1 процессора и души";
    }
    else if (production_microchip == 4 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает души";
    }
    else if (production_microchip == 4 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и души";
    }
    else if (production_microchip == 4 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и души";
    }
    else if (production_microchip == 4 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и души";
    }

    //проверка души и биорук
    else if (production_soul == 1 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и процессоров";
    }
    else if (production_soul == 1 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и процессоров";
    }
    else if (production_soul == 1 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и процессоров";
    }
    else if (production_soul == 1 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает процессоров";
    }

    //проверка души и микрочипов
    else if (production_soul == 1 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов и 3 процессора";
    }
    else if (production_soul == 1 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов и 2 процессора";
    }
    else if (production_soul == 1 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов и 1 процессора";
    }
    else if (production_soul == 1 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов";
    }


    //проверка не хватает всего кроме моент и биорук
    else if (production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, процессоров и души";
    }
    else if (production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, процессоров и души";
    }
    else if (production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, процессоров и души";
    }
    else if (production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает процессоров и души";
    }

    //проверка не хватает всего кроме монет и процессоров
    else if (production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 3 процессора и души";
    }
    else if (production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 2 процессора и души";
    }
    else if (production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 1 процессора и души";
    }
    else if (production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов и души";
    }

    //проверка не хватает всего кроме монет и души
    else if (production_soul == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов и процессоров";
    }
  }

  //проверка не хватает всего
  else {
    description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, процессоров, души и монет";

    //проверка если не хватает монет
    if (production_soul == 1 && production_microchip == 4 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает монет";
    }

    //проверка души и биорук с микрочипами с нехваткой монет
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма и монет";
    }
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 1 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 2 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 1 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 3 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма и монет";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 1 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 2 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 2 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 3 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма и монет";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 1 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 2 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 3 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 3 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 4 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 4 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 процессора и монет";
    }
    else if (production_soul == 1 && production_biorouka == 4 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 процессора и монет";
    }

    //проверка биорук с микрочипом с нехваткой монет
    else if (production_biorouka == 1 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, души и монет";
    }
    else if (production_biorouka == 1 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 1 процессора, души и монет";
    }
    else if (production_biorouka == 1 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 2 процессора, души и монет";
    }
    else if (production_biorouka == 1 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 3 процессора, души и монет";
    }
    else if (production_biorouka == 2 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, души и монет";
    }
    else if (production_biorouka == 2 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 1 процессора, души и монет";
    }
    else if (production_biorouka == 2 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 2 процессора, души и монет";
    }
    else if (production_biorouka == 2 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 3 процессора, души и монет";
    }
    else if (production_biorouka == 3 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, души и монет";
    }
    else if (production_biorouka == 3 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 1 процессора, души и монет";
    }
    else if (production_biorouka == 3 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 2 процессора, души и монет";
    }
    else if (production_biorouka == 3 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 3 процессора, души и монет";
    }
    else if (production_biorouka == 4 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает души и монет";
    }
    else if (production_biorouka == 4 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 процессора, души и монет";
    }
    else if (production_biorouka == 4 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 процессора, души и монет";
    }
    else if (production_biorouka == 4 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 процессора, души и монет";
    }

    //проверка микрочипов с биоруками с нехваткой монет
    else if (production_microchip == 1 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 процессора, души  и монет";
    }
    else if (production_microchip == 1 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 3 процессора, души и монет";
    }
    else if (production_microchip == 1 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 3 процессора, души и монет";
    }
    else if (production_microchip == 1 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 3 процессора, души и монет";
    }
    else if (production_microchip == 2 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 процессора, души и монет";
    }
    else if (production_microchip == 2 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 2 процессора, души и монет";
    }
    else if (production_microchip == 2 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 2 процессора, души и монет";
    }
    else if (production_microchip == 2 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 2 процессора, души и монет";
    }
    else if (production_microchip == 3 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 процессора, души и монет";
    }
    else if (production_microchip == 3 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, 1 процессора, души и монет";
    }
    else if (production_microchip == 3 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, 1 процессора, души и монет";
    }
    else if (production_microchip == 3 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, 1 процессора, души и монет";
    }
    else if (production_microchip == 4 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает души и монет";
    }
    else if (production_microchip == 4 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, души и монет";
    }
    else if (production_microchip == 4 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, души и монет";
    }
    else if (production_microchip == 4 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, души и монет";
    }

    //проверка души и биорук с нехваткой монет
    else if (production_soul == 1 && production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, процессоров и монет";
    }
    else if (production_soul == 1 && production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, процессоров и монет";
    }
    else if (production_soul == 1 && production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, процессоров и монет";
    }
    else if (production_soul == 1 && production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает процессоров и монет";
    }

    //проверка души и микрочипов с нехваткой монет
    else if (production_soul == 1 && production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 3 процессора и монет";
    }
    else if (production_soul == 1 && production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 2 процессора и монет";
    }
    else if (production_soul == 1 && production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 1 процессора и монет";
    }
    else if (production_soul == 1 && production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов и монет";
    }


    //проверка не хватает всего кроме биорук
    else if (production_biorouka == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 3 биомеханизма, процессоров, души и монет";
    }
    else if (production_biorouka == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 2 биомеханизма, процессоров, души и монет";
    }
    else if (production_biorouka == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает 1 биомеханизма, процессоров, души и монет";
    }
    else if (production_biorouka == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает процессоров, души и монет";
    }

    //проверка не хватает всего кроме процессоров
    else if (production_microchip == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 3 процессора, души и монет";
    }
    else if (production_microchip == 2) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 2 процессора, души и монет";
    }
    else if (production_microchip == 3) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, 1 процессора, души и монет";
    }
    else if (production_microchip == 4) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, души и монет";
    }

    //проверка не хватает всего кроме души
    else if (production_soul == 1) {
      description_text_for_production.innerHTML = "Для производства биоробота не хватает биомеханизмов, процессоров и монет";
    }
  }
}

//проверка количества комплектующих на складе для установки в робота
function CheckCountBiorouka() {
  if (biorouka >= 1) {
    biorouka_checkbox_1_state.disabled = false;
  }
  else if (biorouka < 1) {
    biorouka_checkbox_1_state.disabled = true;
  }
  if (biorouka >= 2) {
    biorouka_checkbox_2_state.disabled = false;
  }
  else if (biorouka < 2) {
    biorouka_checkbox_2_state.disabled = true;
  }
  if (biorouka >= 3) {
    biorouka_checkbox_3_state.disabled = false;
  }
  else if (biorouka < 3) {
    biorouka_checkbox_3_state.disabled = true;
  }
  if (biorouka >= 4) {
    biorouka_checkbox_4_state.disabled = false;
  }
  else if (biorouka < 4) {
    biorouka_checkbox_4_state.disabled = true;
  }

//проверка если первый чекбокс отмечен
  if (biorouka == 0 && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_1_state.disabled = false;
  if (biorouka == 1 && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_2_state.disabled = false;
  if (biorouka == 2 && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_3_state.disabled = false;
  if (biorouka == 3 && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если второй чекбокс отмечен
  if (biorouka == 0 && biorouka_checkbox_2_state.checked)
    biorouka_checkbox_2_state.disabled = false;
  if (biorouka == 1 && biorouka_checkbox_2_state.checked)
    biorouka_checkbox_2_state.disabled = false;
  if (biorouka == 2 && biorouka_checkbox_2_state.checked)
    biorouka_checkbox_3_state.disabled = false;
  if (biorouka == 3 && biorouka_checkbox_2_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если третий чекбокс отмечен
  if (biorouka == 0 && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_3_state.disabled = false;
  if (biorouka == 1 && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_3_state.disabled = false;
  if (biorouka == 2 && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_3_state.disabled = false;
  if (biorouka == 3 && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если четвертый чекбокс отмечен
  if (biorouka == 0 && biorouka_checkbox_4_state.checked)
    biorouka_checkbox_4_state.disabled = false;
  if (biorouka == 1 && biorouka_checkbox_4_state.checked)
    biorouka_checkbox_4_state.disabled = false;
  if (biorouka == 2 && biorouka_checkbox_4_state.checked)
    biorouka_checkbox_4_state.disabled = false;
  if (biorouka == 3 && biorouka_checkbox_4_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если первый и второй чекбокс отмечен
  if (biorouka == 0 && biorouka_checkbox_2_state.checked && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_1_state.disabled = false;
  if (biorouka == 1 && biorouka_checkbox_2_state.checked && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_3_state.disabled = false;
  if (biorouka == 2 && biorouka_checkbox_2_state.checked && biorouka_checkbox_1_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если первый и третий чекбокс отмечен
  if (biorouka == 2 && biorouka_checkbox_1_state.checked && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если второй и третий чекбокс отмечен
  if (biorouka == 2 && biorouka_checkbox_2_state.checked && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_4_state.disabled = false;

//проверка если первый, второй и третий чекбокс отмечен
  if (biorouka == 1 && biorouka_checkbox_1_state.checked && biorouka_checkbox_2_state.checked && biorouka_checkbox_3_state.checked)
    biorouka_checkbox_4_state.disabled = false;
}

function CheckCountMicrochip() {
  if (microchip >= 1) {
    microchip_checkbox_1_state.disabled = false;
  }
  else if (microchip < 1) {
    microchip_checkbox_1_state.disabled = true;
  }
  if (microchip >= 2) {
    microchip_checkbox_2_state.disabled = false;
  }
  else if (microchip < 2) {
    microchip_checkbox_2_state.disabled = true;
  }
  if (microchip >= 3) {
    microchip_checkbox_3_state.disabled = false;
  }
  else if (microchip < 3) {
    microchip_checkbox_3_state.disabled = true;
  }
  if (microchip >= 4) {
    microchip_checkbox_4_state.disabled = false;
  }
  else if (microchip < 4) {
    microchip_checkbox_4_state.disabled = true;
  }

//проверка если первый чекбокс отмечен
  if (microchip == 0 && microchip_checkbox_1_state.checked)
    microchip_checkbox_1_state.disabled = false;
  if (microchip == 1 && microchip_checkbox_1_state.checked)
    microchip_checkbox_2_state.disabled = false;
  if (microchip == 2 && microchip_checkbox_1_state.checked)
    microchip_checkbox_3_state.disabled = false;
  if (microchip == 3 && microchip_checkbox_1_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если второй чекбокс отмечен
  if (microchip == 0 && microchip_checkbox_2_state.checked)
    microchip_checkbox_2_state.disabled = false;
  if (microchip == 1 && microchip_checkbox_2_state.checked)
    microchip_checkbox_2_state.disabled = false;
  if (microchip == 2 && microchip_checkbox_2_state.checked)
    microchip_checkbox_3_state.disabled = false;
  if (microchip == 3 && microchip_checkbox_2_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если третий чекбокс отмечен
  if (microchip == 0 && microchip_checkbox_3_state.checked)
    microchip_checkbox_3_state.disabled = false;
  if (microchip == 1 && microchip_checkbox_3_state.checked)
    microchip_checkbox_3_state.disabled = false;
  if (microchip == 2 && microchip_checkbox_3_state.checked)
    microchip_checkbox_3_state.disabled = false;
  if (microchip == 3 && microchip_checkbox_3_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если четвертый чекбокс отмечен
  if (microchip == 0 && microchip_checkbox_4_state.checked)
    microchip_checkbox_4_state.disabled = false;
  if (microchip == 1 && microchip_checkbox_4_state.checked)
    microchip_checkbox_4_state.disabled = false;
  if (microchip == 2 && microchip_checkbox_4_state.checked)
    microchip_checkbox_4_state.disabled = false;
  if (microchip == 3 && microchip_checkbox_4_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если первый и второй чекбокс отмечен
  if (microchip == 0 && microchip_checkbox_2_state.checked && microchip_checkbox_1_state.checked)
    microchip_checkbox_1_state.disabled = false;
  if (microchip == 1 && microchip_checkbox_2_state.checked && microchip_checkbox_1_state.checked)
    microchip_checkbox_3_state.disabled = false;
  if (microchip == 2 && microchip_checkbox_2_state.checked && microchip_checkbox_1_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если первый и третий чекбокс отмечен
  if (microchip == 2 && microchip_checkbox_1_state.checked && microchip_checkbox_3_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если второй и третий чекбокс отмечен
  if (microchip == 2 && microchip_checkbox_2_state.checked && microchip_checkbox_3_state.checked)
    microchip_checkbox_4_state.disabled = false;

//проверка если первый, второй и третий чекбокс отмечен
  if (microchip == 1 && microchip_checkbox_1_state.checked && microchip_checkbox_2_state.checked && microchip_checkbox_3_state.checked)
    microchip_checkbox_4_state.disabled = false;
}

function CheckCountSoul() {
  if (soul == 0) {
    soul_checkbox_state.disabled = false;
  }
  else if (soul >= 1) {
    soul_checkbox_state.disabled = false;
  }
  else if (soul < 1) {
    soul_checkbox_state.disabled = true;
  }
}

//добавление комплектующих в робота
function AddComponentBiorouka() {
  if (biorouka >= 1){
    biorouka--;
    production_biorouka++;
    СountComponentBiorouka();
    CheckDescriptionText();
    document.getElementById("count_component_biorouka").innerHTML = biorouka;
  }
}

function AddComponentMicrochip() {
  if (microchip >= 1){
    microchip--;
    production_microchip++;
    СountComponentMicrochip();
    CheckDescriptionText();
    document.getElementById("count_component_microchip").innerHTML = microchip;
  }
}

function AddComponentSoul() {
  if (soul >= 1){
    soul--;
    production_soul++;
    СountComponentSoul();
    CheckDescriptionText();
    document.getElementById("count_component_soul").innerHTML = soul;
  }
}



//логика установки биорук
function Biorouka_1() {
  if (biorouka_checkbox_1_state.checked) {
    AddComponentBiorouka();
  }
  else {
    biorouka++;
    production_biorouka--;
    СountComponentBiorouka(); //storage.js
    CheckCountBiorouka();
    CheckDescriptionText();
    document.getElementById("count_component_biorouka").innerHTML = biorouka;
  }
}

function Biorouka_2() {
  if (biorouka_checkbox_2_state.checked) {
    AddComponentBiorouka();
  }
  else {
    biorouka++;
    production_biorouka--;
    СountComponentBiorouka(); //storage.js
    CheckCountBiorouka();
    CheckDescriptionText();
    document.getElementById("count_component_biorouka").innerHTML = biorouka;
  }
}

function Biorouka_3() {
  if (biorouka_checkbox_3_state.checked) {
    AddComponentBiorouka();
  }
  else {
    biorouka++;
    production_biorouka--;
    СountComponentBiorouka(); //storage.js
    CheckCountBiorouka();
    CheckDescriptionText();
    document.getElementById("count_component_biorouka").innerHTML = biorouka;
  }
}

function Biorouka_4() {
  if (biorouka_checkbox_4_state.checked) {
    AddComponentBiorouka();
  }
  else {
    biorouka++;
    production_biorouka--;
    СountComponentBiorouka(); //storage.js
    CheckCountBiorouka();
    CheckDescriptionText();
    document.getElementById("count_component_biorouka").innerHTML = biorouka;
  }
}

//логика установки чипов
function Microchip_1() {
  if (microchip_checkbox_1_state.checked) {
    AddComponentMicrochip();
  }
  else {
    microchip++;
    production_microchip--;
    СountComponentMicrochip(); //storage.js
    CheckCountMicrochip();
    CheckDescriptionText();
    document.getElementById("count_component_microchip").innerHTML = microchip;
  }
}

function Microchip_2() {
  if (microchip_checkbox_2_state.checked) {
    AddComponentMicrochip();
  }
  else {
    microchip++;
    production_microchip--;
    СountComponentMicrochip(); //storage.js
    CheckCountMicrochip();
    CheckDescriptionText();
    document.getElementById("count_component_microchip").innerHTML = microchip;
  }
}

function Microchip_3() {
  if (microchip_checkbox_3_state.checked) {
    AddComponentMicrochip();
  }
  else {
    microchip++;
    production_microchip--;
    СountComponentMicrochip(); //storage.js
    CheckCountMicrochip();
    CheckDescriptionText();
    document.getElementById("count_component_microchip").innerHTML = microchip;
  }
}

function Microchip_4() {
  if (microchip_checkbox_4_state.checked) {
    AddComponentMicrochip();
  }
  else {
    microchip++;
    production_microchip--;
    СountComponentMicrochip(); //storage.js
    CheckCountMicrochip();
    CheckDescriptionText();
    document.getElementById("count_component_microchip").innerHTML = microchip;
  }
}

//логика установки души
function Soul() {
  if (soul_checkbox_state.checked) {
    AddComponentSoul();
  }
  else {
    soul++;
    production_soul--;
    СountComponentSoul(); //storage.js
    CheckCountSoul();
    CheckDescriptionText();
    document.getElementById("count_component_soul").innerHTML = soul;
  }
}

//checkbox block end

//radio block

robot = document.getElementById('robot');
gender = document.getElementsByName('group_gender_robot');
type = document.getElementsByName('group_type_robot');

//проверка выбора чекбоксов и отображение соответствующего силуэта робота
function TypeFrontEnd() {
  if (gender[0].checked && type[0].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-front-male_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-front-male_can_make.svg')";
    }
  }
  else if (gender[1].checked && type[0].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-front-female_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-front-female_can_make.svg')";
    }
  }
}

function TypeDesign() {
  if (gender[0].checked && type[1].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-designer-male_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-designer-male_can_make.svg')";
    }
  }
  else if (gender[1].checked && type[1].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-designer-female_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-designer-female_can_make.svg')";
    }
  }
}

function GenderMale() {
  if (gender[0].checked && type[0].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-front-male_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-front-male_can_make.svg')";
    }
  }
  else if (gender[0].checked && type[1].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-designer-male_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-designer-male_can_make.svg')";
    }
  }
}

function GenderFemale() {
  if (gender[1].checked && type[0].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-front-female_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-front-female_can_make.svg')";
    }
  }
  else if (gender[1].checked && type[1].checked){
    robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-designer-female_not_can_make.svg')";
    if (coins >= 10 && production_biorouka == 4 && production_microchip == 4 && production_soul == 1) {
      robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-designer-female_can_make.svg')";
    }
  }
}

//radio block end

//popUp block

var popup_create_robot = document.getElementById('popup_create_robot'); // для открытия предупреждение

// для закрытия предупреждение
function PopUpCreateRobotClose() {
  popup_create_robot.style.display = "none";
}

//popUp block end

//create_robot block

//создание робота и отключение дальнейшего функционала
function CreateRobot() {
  if (gender[0].checked && type[0].checked)
    robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-front-male_finish.svg')";
  else if (gender[1].checked && type[0].checked)
    robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-front-female_finish.svg')";

  if (gender[0].checked && type[1].checked)
    robot.style.backgroundImage = "url('./img/svg/production/robots/male/Robot-designer-male_finish.svg')";
  else if (gender[1].checked && type[1].checked)
    robot.style.backgroundImage = "url('./img/svg/production/robots/female/Robot-designer-female_finish.svg')";

  //показать уведомление о готовом роботе
  popup_create_robot.style.display = "block";

  //отключаем весь функционал
  document.getElementById('btn_create_robot_header').disabled = true;
  document.getElementById('btn_create_robot_production').disabled = true;

  biorouka_checkbox_1_state.disabled = true;
  biorouka_checkbox_2_state.disabled = true;
  biorouka_checkbox_3_state.disabled = true;
  biorouka_checkbox_4_state.disabled = true;

  microchip_checkbox_1_state.disabled = true;
  microchip_checkbox_2_state.disabled = true;
  microchip_checkbox_3_state.disabled = true;
  microchip_checkbox_4_state.disabled = true;

  soul_checkbox_state.disabled = true;

  gender[0].disabled = true;
  gender[1].disabled = true;
  type[0].disabled = true;
  type[1].disabled = true;

  biorouka_state_for_sale.disabled = true;
  microchip_state_for_sale.disabled = true;
  soul_state_for_sale.disabled = true;

  biorouka_state.disabled = true;
  microchip_state.disabled = true;
  soul_state.disabled = true;

  document.getElementById('add_one_coin').hidden = true;
  document.getElementById('five_coins').disabled = true;
}

//create_robot block end
