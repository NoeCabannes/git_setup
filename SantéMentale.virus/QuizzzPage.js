function calculer(name, texte) {
	var choix = document.querySelectorAll("input"); 
}
 
function calculer (form) {
    var score = 0;
    var choix = document.querySelectorAll("input");
    var score_phrase = document.getElementById("score_phrase"); 

   if (choix[0].checked) {
        score = score + 10;
    }
   if (choix[1].checked) {
        score = score + 7;
    }
   if (choix[2].checked) {
        score = score + 3;
    }
   if (choix[3].checked) {
        score = score + 0;
    }
   if (choix[4].checked) {
        score = score + 10;
    }
   if (choix[5].checked) {
        score = score + 7;
    }
   if (choix[6].checked) {
        score = score + 3;
    }
   if (choix[7].checked) {
        score = score + 0;
    }
   if (choix[8].checked) {
        score = score + 10;
    }
   if (choix[9].checked) {
        score = score + 7;
    }
   if (choix[10].checked) {
        score = score + 3;
    }
   if (choix[11].checked) {
        score = score + 0;
    }
   if (choix[12].checked) {
        score = score + 10;
    }
   if (choix[13].checked) {
        score = score + 7;
    }
   if (choix[14].checked) {
        score = score + 3;
    }
   if (choix[15].checked) {
        score = score + 0;
    }
   if (choix[16].checked) {
        score = score + 0;
    }
   if (choix[17].checked) {
        score = score + 3;
    }
   if (choix[18].checked) {
        score = score + 7;
    }
   if (choix[19].checked) {
        score = score + 10;
    }
   if (choix[20].checked) {
        score = score + 10;
    }
   if (choix[21].checked) {
        score = score + 7;
    }
   if (choix[22].checked) {
        score = score + 3;
    }
   if (choix[23].checked) {
        score = score + 0;
    }
   if (choix[24].checked) {
        score = score + 10;
    }
   if (choix[25].checked) {
        score = score + 7;
    }
   if (choix[26].checked) {
        score = score + 3;
    }
   if (choix[27].checked) {
        score = score + 0;
    }
   if (choix[28].checked) {
        score = score + 10;
    }
   if (choix[29].checked) {
        score = score + 7;
    }
   if (choix[30].checked) {
        score = score + 3;
    }
   if (choix[31].checked) {
        score = score + 0;
    }
   if (choix[32].checked) {
        score = score + 10;
    }
   if (choix[33].checked) {
        score = score + 7;
    }
   if (choix[34].checked) {
        score = score + 3;
    }
   if (choix[35].checked) {
        score = score + 0;
    }
   if (choix[36].checked) {
        score = score + 10;
    }
   if (choix[37].checked) {
        score = score + 7;
    }
   if (choix[38].checked) {
        score = score + 3;
    }
   if (choix[39].checked) {
        score = score + 0;
    }
    if (score == 100) { 
        alert("Tu es digne d'un saint.");
    } else if (score >= 75) { 
        alert("Tu es un humain normal.");
    } else if (score >= 50) {
        alert("Tu peux mieux faire mais tu reste sain d'esprit"); 
    } else if (score >= 25) {
        alert("Tu es à la limite de sombrer");
    } else if (score > 0) {
        alert("Remets toi en question, il sera compliqué de te sortir de là.");
    } else if (score == 0) {
        alert("Tu es une personne crade, tu ne te respectes même pas un minimum, c'est irrécuperable.");
    }
	
    var text = (score + "%") 
    score_phrase.innerText = text 
}