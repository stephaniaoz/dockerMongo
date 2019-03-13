var dato;
var filas;
var cabecera;
var arrObj = [];
var dataJson;

const fs = require('fs');
fs.readFile('./pruebaCargue.csv', function(err,data){
	if(err){
		console.log("Error");
	}else{
		//console.log(data.toString());
		getCsv(data.toString());
	}
});

function getCsv(dato){
	filas = dato.split(/\r?\n|\r/);
	tlFilas = filas.length;
	cabecera = filas[0].split('|');
	tlCabecera = cabecera.length;
	
	console.log("tl filas: "+tlFilas);
	console.log("total filas: "+filas.length);
	
	for(var i=1; i<tlFilas; i++){
		var objeto = {};
		var valoresFilaActual = filas[i].split("|");
		//console.log(valoresFilaActual);
		
		for(var j=0; j< tlCabecera; j++){
			//console.log("   numj: "+j);
			var head = cabecera[j];
			if(head == 'Authors' || head == 'Author(s) ID'){
				var separador;
				if(head == 'Author(s) ID'){
					separador = ";";
				}else{
					separador = ",";
				}
				if(valoresFilaActual[j] != undefined){					
					if(valoresFilaActual[j].split(separador).length == 1 && valoresFilaActual[j].split(separador)[0] == 0){
						objeto[cabecera[j]] = valoresFilaActual[j];
					}else{
						objeto[cabecera[j]] = valoresFilaActual[j].split(separador)
					}
				}		
			}else{
				objeto[cabecera[j]] = valoresFilaActual[j];
			}		
			
		}
		//console.log(objeto);
		arrObj.push(objeto);
	}
	
	dataJson = JSON.stringify(arrObj);
	console.log(dataJson);
	
	fs.writeFile('./dataJson.json',dataJson, function(err){
		if(err){
			console.log("Error "+err);
		}else{
			console.log("Archivo Creado");
		}
	});

}
	
function cargarArchivo(){
	
	
	console.log("hola");
}
/*
function cargarArchivo(){	
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	dato = this.responseText;
      	//document.getElementById("div1").innerHTML = data;
	getCsv(dato);
	
    }
  };
  xhttp.open("GET", "pruebaCargue.csv", true);
  xhttp.send();	
}

function getCsv(dato){
	//filas = this.dato.split(/\r?\n|\r/);
	filas = this.dato.split(/\r?\n|\r/);
	tlFilas = filas.length;
	console.log(dato);
	cabecera = filas[0].split('|');
	tlCabecera = cabecera.length;
	
	//console.log(cabecera);
	console.log("tl filas: "+tlFilas);
	console.log("total filas: "+filas.length);
	
	for(var i=1; i<tlFilas; i++){
		var objeto = {};
		var valoresFilaActual = filas[i].split("|");
		//console.log(valoresFilaActual);
		
		for(var j=0; j< tlCabecera; j++){
			//console.log("   numj: "+j);
			var head = cabecera[j];
			if(head == 'Authors' || head == 'Author(s) ID'){
				var separador;
				if(head == 'Author(s) ID'){
					separador = ";";
				}else{
					separador = ",";
				}
				if(valoresFilaActual[j] != undefined){					
					if(valoresFilaActual[j].split(separador).length == 1 && valoresFilaActual[j].split(separador)[0] == 0){
						objeto[cabecera[j]] = valoresFilaActual[j];
					}else{
						objeto[cabecera[j]] = valoresFilaActual[j].split(separador)
					}
				}		
			}else{
				objeto[cabecera[j]] = valoresFilaActual[j];
			}		
			
		}
		//console.log(objeto);
		arrObj.push(objeto);
	}
	
	dataJson = JSON.stringify(arrObj);
	console.log(JSON.stringify(arrObj));

}*/

exports.cargar = cargarArchivo;