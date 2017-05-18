var arr = [];
var arrTarjeta =[];

function LasListas(nombreLista,id){
	this.nombreLista = nombreLista;
	this.id = id;
}

function LasTarjetas(texto,id,lista){
	this.texto = texto;
	this.id = id;
	this.lista = lista;
}

	var contenedor = document.getElementsByClassName("inicio")[0];
	var inicio = document.createElement("a");
	var textInicio = document.createTextNode("Añadir una Lista");
	inicio.appendChild(textInicio);
	inicio.setAttribute("class","agregar-lista")	
	contenedor.appendChild(inicio);


function agregoListas(){
	var boton = document.getElementsByClassName("agregar-lista")[0];

	boton.addEventListener("click", function(){
		var elSpan = document.createElement("span");
		elSpan.setAttribute("class","span-primero")
		elSpan.setAttribute("id",arr.length + 1)

		var elTextArea = document.createElement("textarea");
		elTextArea.setAttribute("class","primer-textarea"); 
		elTextArea.setAttribute("id","textarea-listas"); 
		elTextArea.setAttribute("placeholder","Añadir una Lista");

		var elBoton = document.createElement("a");
	    var textBoton= document.createTextNode("GUARDAR");
	    elBoton.appendChild(textBoton);
		elBoton.setAttribute("class", "boton-guardar");
		elBoton.setAttribute("id", "guardar");


		var salir = document.createElement("i");
		salir.setAttribute("class", "fa fa-times");
		salir.setAttribute("arial-hidden", "true");
		salir.setAttribute("id", "salir-uno");		

		elSpan.appendChild(elTextArea);
		elSpan.appendChild(elBoton);
		elSpan.appendChild(salir);	
		

		contenedor.appendChild(elSpan);
		var removeLista = contenedor.removeChild(inicio);

		var apretarBoton = document.getElementById("guardar");
		apretarBoton.addEventListener("click", listaTarjetas);

	});



}


function listaTarjetas(){
	var elSpan = document.getElementById(arr.length + 1);
	var elSpanC = document.getElementsByClassName("span-primero")[0];
	var elInput = document.getElementById("textarea-listas").value;


	var cajaNombreLista = document.createElement("span");
	var textoNombreLista = document.createTextNode(elInput);
	cajaNombreLista.appendChild(textoNombreLista);
	cajaNombreLista.setAttribute("class","el-input");
	cajaNombreLista.setAttribute("id","input");		


	var segundo = document.createElement("a");
	var textSegundo = document.createTextNode("Añadir una Tarjeta");
	segundo.appendChild(textSegundo);
	segundo.setAttribute("class","agregar-tarjeta");
	segundo.setAttribute("id","tarjeta");		


	var texUno = document.getElementById("textarea-listas");
	var boUno = document.getElementById("guardar");
	var saUno = document.getElementById("salir-uno");


	elSpan.removeChild(texUno);	
	elSpan.removeChild(boUno);
	elSpan.removeChild(saUno);	

	elSpan.appendChild(cajaNombreLista);
	elSpan.appendChild(segundo);


	contenedor.appendChild(elSpan);
	contenedor.appendChild(inicio);		

	var nombreLista = new LasListas(elInput, arr.length);
	arr.push(nombreLista);

	var apretarBotonDos = document.querySelector("a");
	apretarBotonDos.addEventListener("click", agregoTarjetas);	
}



function agregoTarjetas(){
	var elSpan = document.getElementById(arr.length + 1);
	var elSpanC = document.getElementsByClassName("span-primero")[0];
	var elInput = document.getElementById("input");	

	var spanVacio = document.createElement("span");
	spanVacio.setAttribute("id","span-dos");
	spanVacio.setAttribute("class","dos-span");

	var elTextAreaDos = document.createElement("textarea");
	elTextAreaDos.setAttribute("class","segundo-textarea");
	elTextAreaDos.setAttribute("id","segundo-textarea-id"); 
	elTextAreaDos.setAttribute("placeholder","Añadir una Tarea");		

	var elBotonDos = document.createElement("a");
	var textBotonDos= document.createTextNode("AÑADIR");
	elBotonDos.appendChild(textBotonDos);
	elBotonDos.setAttribute("class", "boton-anadir");
	elBotonDos.setAttribute("id", "anadir");		

	var salir = document.createElement("i");
	salir.setAttribute("class", "fa fa-times");
	salir.setAttribute("arial-hidden", "true");

	var tarjeta = document.getElementsByClassName("agregar-tarjeta")[0];

	elSpanC.removeChild(tarjeta);

	elSpanC.appendChild(elInput);
	elSpanC.appendChild(spanVacio);		
	elSpanC.appendChild(elTextAreaDos);
	elSpanC.appendChild(elBotonDos);
	elSpanC.appendChild(salir);

	contenedor.prepend(elSpanC);

	var agregaLasTarjeta = document.getElementById("anadir");
	agregaLasTarjeta.addEventListener("click", enlista);
}


function enlista(){
	var elInputDos = document.getElementById("segundo-textarea-id").value;
	var spanVacio = document.getElementsByClassName("dos-span")[0];
	var spanVacioId = document.getElementById("span-dos");



	var cajaNombreTarjeta = document.createElement("li");
	var textoNombreTarjeta = document.createTextNode(elInputDos);
	cajaNombreTarjeta.appendChild(textoNombreTarjeta);
	cajaNombreTarjeta.setAttribute("class","input-tarjeta");	

	spanVacio.appendChild(cajaNombreTarjeta);
	document.getElementById("segundo-textarea-id").value = "";

	var textoTarjetas = new LasTarjetas(elInputDos, arrTarjeta.length, arr.length);
	arrTarjeta.push(textoTarjetas);

}


agregoListas();


	
