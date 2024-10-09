var elTexto = document.getElementById("textarea");
var escrito = document.getElementById("escrito");
var limiteCaracteres = 250;
escrito.textContent = 0 + "/" + limiteCaracteres;

// Evento para detectar cuando se modifica el texto
elTexto.addEventListener("input", function() {
  var contenido = elTexto.value.length;
  escrito.textContent = contenido + "/" + limiteCaracteres;

  // Cambiar el color de fondo del textarea según el número de caracteres escritos
  if (contenido > limiteCaracteres) {
    elTexto.style.borderColor = "red";
    elTexto.style.color = "red"
    escrito.style.color = "red";
    
  } else if(contenido >= 230){
    elTexto.style.borderColor = "orange";
    elTexto.style.color = "#202020"
    escrito.style.color = "#202020";
  } 
  
  else {
    elTexto.style.borderColor = "#b2b2b2";
    elTexto.style.color = "#202020"
    escrito.style.color = "#202020";
  }

  // Limitar el número de caracteres a 250
  if (contenido > limiteCaracteres) {
    elTexto.value = elTexto.value.substring(0, limiteCaracteres);
    contenido = limiteCaracteres;
    escrito.textContent = contenido + "/" + limiteCaracteres;
  }
  
});