//importer readline module
const readline = require("readline");

//readline interface
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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
      console.log("test");
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