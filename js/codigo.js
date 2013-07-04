var mensaje = function()
{
	this.nombre="Manuel";
};

mensaje.prototype.alerta = function()
{
	alert(this.nombre);
};

function cambiar(objeto)
{
	if(objeto.style.background=='red')
	{
		objeto.style.background='';
	}
	else
	{
		objeto.style.background='red';
	}
}