//importer readline module
const readline = require("readline");

//readline interface
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

addition(a, b) {
  return a + b;
}

soustraction(a, b) {
  return a - b;
}
multiplication(a, b) {
  return a * b;
}

division(a, b) {
  if (b === 0) {
    throw new Error("Pas de division par zéro !");
  }
  return a / b;
}

// le menu d'affichage
function menuPrincipal() {
  console.log("\n--- la calculatrice ---\n");
  console.log("1. Addition");
  console.log("2. Soustraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Puissance");
  console.log("6. Racine carrée");
  console.log("7. Factorielle");
  console.log("8. Quitter");

  read.question("Choisiser une option ", (choix) => {
    gererChoix(choix);
  });
}

// les options a choisies
function gererChoix(choix) {
  switch (choix) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      rl.question("Premier nombre : ", (premier) => {
        rl.question("Deuxième nombre : ", (deuxieme) => {

          switch (choix) {
            case "1":
              resultat = calc.addition(a, b);
              break;
            case "2":
              resultat = calc.soustraction(a, b);
              break;
            case "3":
              resultat = calc.multiplication(a, b);
              break;
            case "4":
              resultat = calc.division(a, b);
              break;    
        });
      });
      break;

    case "6":
      console.log("test");
      break;

    case "7":
      console.log("test");
      break;

    case "8":
      console.log("au revoir");
      break;

    default:
      console.log("essayer encore");
      menuPrincipal();
      break;
  }
}
menuPrincipal();