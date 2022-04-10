var reponse = prompt('Votre annee de naissance svp');
var reponse1 = prompt('Votre annee de naissance svp');

if(parseFloat(reponse) == parseInt(reponse) && !isNaN(reponse))
{
	get_calcul_age();
}
else 
{
	while(parseFloat(reponse) != parseInt(reponse))
	{
		alert('Veuillez donnez un nombre');
/*var*/ reponse = prompt('Votre annee de naissance svp');
	}
	get_calcul_age();
} 
	
function get_calcul_age()
{
	var age = 2022-reponse;
	alert('tu a:' +age+ 'ans');
}
		












//les 3 '='='=' permettent de comparer les types en plus des valeurs