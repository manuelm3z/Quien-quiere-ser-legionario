/**
* Clase mensaje
* Para los mensajes
*/
var mensaje = function()
{
	this.nombre="Manuel";
};

mensaje.prototype.alerta = function()
{
	alert(this.nombre);
};
/**
* esta clase se encarga de cambiar estilos y clases
*/
var colores = function(){};

colores.prototype.seleccionar=function(objeto)
{
	go=true;
	//traigo todas las respuestas
	opciones=document.getElementsByTagName('article');
	for(var i=0; i<opciones.length; i++)
	{
		//verifico si alguna otra ya tiene la clase
		if(opciones[i].id!=objeto.id)
		{
			if(opciones[i].className.split(" ").lastIndexOf("seleccionado")>0)
			{
				go=false;
			}
		}
	}
	if(go)
	{
		//Si la clase no esta la agrego
		var posicion=objeto.className.split(" ").lastIndexOf("seleccionado");
		if(posicion<0)
		{
			objeto.className=objeto.className+' seleccionado';
		}
		else if(posicion>0)
		{
			objeto.className=objeto.className.split(" ").slice(0,posicion).toString();
		}
	}
	console.log(go);
	console.log(posicion);
}

/**
* instancio
*/
var capas=new colores();
