//** AVEC LA FONCTION eval()**//


//on recupère les tags (balises HTML) button et les mets dans un tableau (lesBoutons)
var lesBoutons = document.getElementsByTagName('button');
for (var i = 0; i < lesBoutons.length; i++) {
	// on écoute les boutons et on leurs associe la fonction clickBouton qui sera exécuter au click
	lesBoutons[i].addEventListener('click', clickBouton);
}

var ecran = document.getElementById('ecran');

function effaceEcran(){
	ecran.value = "";
}

function clickBouton(){
	var valeurPrec = 0;
	var boutonClick = this;

	if(boutonClick.value == "C"){
		effaceEcran();
	}
	else if(boutonClick.value == "="){
		resultat = eval(ecran.value);
		ecran.value = resultat;
	}
	else if(boutonClick.value == "+" || boutonClick.value == "-" || boutonClick.value == "*" ||  boutonClick.value == "/"){
		//valeurPrec += parseInt(ecran.value);
		ecran.value += boutonClick.value;
	}else{
		nb=parseInt(boutonClick.value);
		ecran.value += nb;
	}
}