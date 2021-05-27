function search() {
    
    let win = Math.round(Math.random() * 10);
    
    essais = 3;
    
    let aDeviner = prompt("3 chances pour trouvez le bon numéro entre 0 et 10 :");
    aDeviner = parseInt(aDeviner, 10);

    while (win != aDeviner && essais > 0) {

        essais--
        if (aDeviner < win) {
            alert("Tu es au dessous !");
        } else if (aDeviner > win) {
            alert("Tu es au dessus !");
        } else {
            alert("Ce n'est pas la règle du jeu !");
        }
        if (essais > 0) {
        aDeviner = prompt("Retentez votre chance !");
        }

    }
    if (win == aDeviner) {
    alert("C'EST GANGNÉ !");
    } else {
        alert("Perdu :(");
    }
}

search();