var montaña = document.getElementById('montain')
var cañon = document.getElementById('canon')
var ventana = document.getElementById('window')

montaña.addEventListener('click', this.iteracion)
cañon.addEventListener('click', this.iteracion)
ventana.addEventListener('click', this.iteracion)

function iteracion(ev) {
  const nombreImg = ev.currentTarget.id
  const imagen = slImagen(nombreImg)

  if (imagen.classList.contains('bajar') === false) {
    if (imagen.classList.contains('subir')) imagen.classList.remove('subir')
    imagen.classList.add('bajar')
  } else {
    imagen.classList.remove('bajar')
    imagen.classList.add('subir')
  }
}

function slImagen(nombre) {
  switch(nombre) {
    case 'montain':
      return this.montaña
    case 'canon':
      return this.cañon
    case 'window':
      return this.ventana
  }
}