/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
 alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
function start() {
  do {
    play();
  } while (confirm('Spila annan?'));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  var random = randomNumber(1, 100);

  var questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask()],
  samtals = questions.length,
  rett = questions.filter(Boolean).length;
  alert("Þú svaraðir "+rett+" af "+samtals+" dæmum rétt");
}


/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {

  function spurning() {
    var a = Math.floor(Math.random() * 100) + 1.;
    var b = Math.floor(Math.random() * 100) + 1;
    var op = ["-", "+"][Math.floor(Math.random()*2)];
    return prompt("Hvað er " + a +" " + op + " " + b + "?") == eval(a + op + b);
  }
  function spurning() {
  var c = Math.floor(Math.random() * 10) + 1;
  var d = Math.floor(Math.random() * 10) + 1;
  var op = ["/","*"][Math.floor(Math.random()*2)];
  return prompt("Hvað er " + c +" " + op + " " + d +"?") == eval(c + op + d);
}
return spurning();
}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
