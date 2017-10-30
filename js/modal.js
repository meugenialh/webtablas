window.onload = loadProducts();

function loadProducts()
{
   var container = document.querySelector(".contenedor-central");
   var cadenaTabla = "";

    for(var i=0;i<tablas.length;i++)
    {
       cadenaTabla += "<li class='contenido' data-id='" + tablas[i].id + "'>";
       cadenaTabla += "<img src='" + tablas[i].src + "''>";
       cadenaTabla += "<div class='subcontenido'>";
       cadenaTabla += "<h2>" + tablas[i].nombre + "</h2>";
       cadenaTabla += "<p>" + tablas[i].descripcion + "</p>";
       cadenaTabla += "<span class='precio'>Precio : " + tablas[i].precio + "€</span>";
       cadenaTabla += "</div>";
       cadenaTabla += "</li>";
    }

    container.innerHTML = cadenaTabla;
}

var id;
var micontador;
var timeInterval;

function mostrarMensaje()
{
      var priceModal = document.querySelector("#myModal");
      alert('Gracias');
      setTimeout(function(){ priceModal.style.display="none"; },2000);
}

function contadorPrecio()
{

  var cuentaAtras = document.querySelector("#cuentaAtras");
  var priceModal = document.querySelector("#priceModal");

  if(micontador!==0)
  {
    micontador -=1;
    cuentaAtras.innerHTML = "Tienes <strong>00:" + micontador + "</strong> segundos para beneficiarte de nuestra super mega promo colega" ;
  }
  else
  {
    clearInterval(timeInterval);
    priceModal.innerText = tablas[id].precio;
    cuentaAtras.innerHTML = "Ha perdido tu oportunidad ahora pagarás más, pringao."
  }
}

function cargarModal(event)
{

  var modal = document.querySelector("#myModal");
  var imgModal = document.querySelector("#imgModal");
  var cabModal = document.querySelector("#cabModal");
  var textModal = document.querySelector("#textModal");
  var priceModal = document.querySelector("#priceModal");
  var cuentaAtras = document.querySelector("#cuentaAtras");
  var btnShop = document.querySelector("#btnShop");
  var PrecioTotal = 0;

  modal.style.display = "block";
  id = this.getAttribute("data-id");

  imgModal.src = tablas[id].src;
  cabModal.innerText = tablas[id].nombre;
  textModal.innerText = tablas[id].descripcionAmplia;
  priceModal.innerText = tablas[id].precio - (tablas[id].precio * 0.2);

  btnShop.addEventListener('click',mostrarMensaje)

  micontador = 15;
  contadorPrecio();
  timeInterval = setInterval(contadorPrecio,1000);

}

 function cerrar(event)
 {
   var modal1 = document.querySelector("#myModal");
   modal1.style.display = "none";
 }

  var lista = document.querySelectorAll('li.contenido');

  for(var i=0;i<lista.length;i++)
  {
    lista[i].addEventListener('click',cargarModal);
  }

  var objCerrar = document.querySelector(".close");
  objCerrar.addEventListener('click',cerrar);
