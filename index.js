// Importer readline pour discuter avec l'utilisateur
const readline = require("readline");

// Configurer les entrées/sorties
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MaCalculatrice {
  // Vérifie nombre
  numeroValide(entrée) {
    const num = parseFloat(entrée);
    if (isNaN(num)) {
      throw new Error(`"${entrée}" n'est pas un chiffre valide.`);
    }
    return num;
  }

  // Les opérations de base
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

  // Calcul avancé
  puissance(base, exp) {
    return Math.pow(base, exp);
  }

  racineCarree(nombre) {
    if (nombre < 0) {
      throw new Error("Pas de racines carrées pour les négatifs !");
    }
    return Math.sqrt(nombre);
  }

  factorielle(n) {
    if (n < 0) {
      throw new Error("Pas de factorielle pour les négatifs.");
    }
    if (n === 0 || n === 1) return 1;
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
      resultat *= i;
    }
    return resultat;
  }
}

const calc = new MaCalculatrice();

// Affiche le menu
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

// Gère les options choisies
function gererChoix(choix) {
  switch (choix) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      read.question("Premier nombre : ", (premier) => {
        read.question("Deuxième nombre : ", (deuxieme) => {
          try {
            const a = calc.numeroValide(premier);
            const b = calc.numeroValide(deuxieme);
            let resultat;

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
              case "5":
                resultat = calc.puissance(a, b);
                break;
            }

            console.log(`Résultat : ${resultat}`);
          } catch (erreur) {
            console.error(`Erreur : ${erreur.message}`);
          }
          menuPrincipal();
        });
      });
      break;

    case "6":
      read.question("Entrez un nombre : ", (entrée) => {
        try {
          const nombre = calc.numeroValide(entrée);
          const resultat = calc.racineCarree(nombre);
          console.log(`Résultat : ${resultat}`);
        } catch (erreur) {
          console.error(`Erreur : ${erreur.message}`);
        }
        menuPrincipal();
      });
      break;

    case "7":
      read.question("Un nombre entier, s'il vous plaît : ", (entrée) => {
        try {
          const n = calc.numeroValide(entrée);
          const resultat = calc.factorielle(n);
          console.log(`Résultat : ${resultat}`);
        } catch (erreur) {
          console.error(`Erreur : ${erreur.message}`);
        }
        menuPrincipal();
      });
      break;

    case "8":
      console.log("Merci d'avoir utilisé cette calculatrice. À bientôt !");
      read.close();
      break;

    default:
      console.log("Je n'ai pas compris, essayez encore.");
      menuPrincipal();
      break;
  }
}

menuPrincipal();

