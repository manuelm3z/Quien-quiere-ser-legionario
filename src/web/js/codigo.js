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

var colores=function(){};
colores.prototype.seleccionar(objeto)
{
	console.log(objeto);
	/*var clases=objeto.className, texto=clases.split(" "); 
	if(texto.lastIndexOf("seleccionado")<0)
	{
		objeto.className=objeto.className+' seleccionado';
	}*/
}

/**
* instancio
*/
var capas=new colores();
