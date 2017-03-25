function verComentario (){
	var actual = document.getElementById("comentarioEntrada").value;
	document.getElementById("vistaPrevia").innerHTML=actual;
}

setInterval(verComentario, 100);

function imprimirComentario (){
	var comentario = document.getElementById("vistaPrevia").textContent;
	document.getElementById("comentarioEnviado").innerHTML = comentario;
}

//function borrar () {
//	var borrado= document.getElementByName("comentarioEnviado").textContent;
//	borrado = [0];
//}

function agrandarTexto(){
	document.getElementById("vistaPrevia").style.fontZise = 20 + "px";	
}