/**
* 	Diogo Moreira 08 de dezembro de 2021
*-Não consegui utilizar a api cheguei a acessar mas não consegui transformar em um valor que 
* desse para eu trabalhar com ele aqui dentro
*-O que foi utilizado aqui foi um arquivo JS que compara o valor da função randomica com o valor digitado
*e me retorna se tenho que aumentar ou diminuir o valor
*-E uma funçao que seta os displays no final e uma para desabilitar os displays que contem zero a esquerda
*-Não consegui alterar a cor do display quando acerta o valor
*/
var lbPalpite = document.getElementById('palpite').value;
var btnEnviar = document.getElementById('enviarBtn');
var btnNovaPartida = document.getElementById('btn');
var display1 = document.getElementById('display-1');
var display2 = document.getElementById('display-2');
var display3 = document.getElementById('display-3');
var maq1 = 0; //variavel responsavel por habilitar 
var aleatorio = NuAleatorio();
var container = document.querySelector('.display-container.display-size-12');

//Função responsavel por limpar o input do palpite
function limpar(){
	document.getElementById('palpite').value='';
}

//Chamada da função para zerar a tela
zera();

// Evento que é executado ao clicar no botão de enviar
btnEnviar.onclick = function() {
    Compara();
   	limpar();
   	Verifica();
	
}
//Atualiza a pagina quando clicado no botao nova partida
btnNovaPartida.onclick = function(){
	document.location.reload(true);
}

//funcao responsavel por comparar os estados dos valores e dar as dicas 
function Compara(){
	var NumPalpite = document.getElementById('palpite').value;
	var recebe;
	var Num = aleatorio;
	if (Num < NumPalpite){
		recebe = 'Menor';
	}
	else if(Num > NumPalpite){
 		recebe = 'Maior';
	} 
	else {
		container.style.visibility = 'visible';
		recebe = 'Você acertou';
		maq1 = 1;
		document.getElementById("enviar").disabled = true;	
		btnEnviar.disabled = true;
		btnNovaPartida.disabled = false;
	}
	document.getElementById("mensagem").innerHTML = recebe;
}
//Funçao que gera o numero aleatoria para comparar
function NuAleatorio(){
	var b = Math.floor((Math.random()*300) + 1);
	var a = zeroFill(b.toString(), 3);  

	return a;
}

//funçao que retorna o tamanho do numero
function zeroFill(string, length) {
	for (var i=0, l=length-string.length; i<l; i++) {
		string = '0' + string;
	}
	return string;
}

//função zera display
function zera(){
		var zero = '0';
		var baseClass = 'display-container display-size-12 display-no-';
		document.getElementById('display-1').className = baseClass + zero[0];
		document.getElementById('display-2').className = baseClass + zero[0];
		document.getElementById('display-3').className = baseClass + zero[0];
}

//Função para verificar o valor alatorio e desabilitar os pisplay que tem zero a esquerda
function Verifica() {
	if (maq1 === 1){
	var baseClass = 'display-container display-size-12 display-no-';

	if(aleatorio[0]===0 && aleatorio[1]===0){
		document.getElementById('display-1').style.visibility = "hidden";
		document.getElementById('display-2').style.visibility = "hidden";
		document.getElementById('display-3').className = baseClass + aleatorio[2];
	}else if(aleatorio[0]==0){
		document.getElementById('display-1').style.visibility = "hidden";
		document.getElementById('display-2').className = baseClass + aleatorio[1];
		document.getElementById('display-3').className = baseClass + aleatorio[2];
	
	}else{
		document.getElementById('display-1').className = baseClass + aleatorio[0];
		document.getElementById('display-2').className = baseClass + aleatorio[1];
		document.getElementById('display-3').className = baseClass + aleatorio[2];
	}
	} 
}