//querySelector: con clases es .className, con id es #idName
const heading = document.querySelector('.header__texto h2') // Devuelve 0 o 1 Elemento
                                                        //(El primero que encuentre si hay más de uno)


heading.textContent = "Blog de Café"; //textContent cambia el texto del elemento seleccionado
//heading.classList = "clase_mod"; //Cambia el nombre de la clase existente o la crea
heading.classList.add("nueva_clase"); //Agrega a la clase existente el nombre de la nueva clase
heading.classList.remove("nueva_clase"); //Quita una clase existente

console.log(heading);



//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //Puede devolver 0 o todos los elementos
                                                            //que concuerden con el selector
console.log(enlaces[0]); //Se acceden a los elementos tal cual como se lo hace con un array

enlaces[0].textContent = "Nosotros M-JS"
enlaces[0].href = 'https://google.com';


//Generar nuevo enlace
const nuevoEnlace = document.createElement('A');

nuevoEnlace.href = 'cursos.html';// Agregar el href
nuevoEnlace.textContent = 'Nuevo Enlace'; //Agregar el Contenido
nuevoEnlace.classList.add('navegacion__enlace') //Agregar clase

//Agregando el enlace anterior en el html

const navegacion = document.querySelector('.navegacion') //Selecciona el primer elemento cuya clase se llama
                                            //navegacion, en este caso refiere al menú
navegacion.appendChild(nuevoEnlace); //Inserta el enlace anterior en el objeto de clase 'navegacion'

console.log(nuevoEnlace);



//Eventos

console.log(1);

window.addEventListener('load', function () { //En este evento todo se ejecuta antes que este código
    console.log(2);                            //HTML, JS, CSS
})

window.onload = function() { //Esto es el equivalente del código anterior
    console.log(3);
}
console.log(4);

document.addEventListener('DOMContentLoaded', function() { //En este evento solo espera la ejecución del
    console.log(5);                                         //HTML, no espera a CSS o imagenes
})

window,onscroll = function () {
    console.log(window.scrollX,window.scrollY);
}



//Seleccionar un elemento y agregarle un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e) {
    e.preventDefault(); //Evita que se genere la acción por defecto         
    console.log('Enviando formulario');
    //alert('Diste click en Enviar')
})


//Eventos de los Inputs y TextArea en Formularios

const datos = {
    nombre: '',
    email: '',
    mensaje: '' 
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email'); //Selecciono uno de los campos del formulario
const mensaje = document.querySelector('#mensaje');


//input sirve para detectar cambios dentro del campo en cuestión
//es útil crear la función aparte cuando se quiere ejecutar una misma acción en más de un elemento

nombre.addEventListener('input', contenidoCampo);
email.addEventListener('input', contenidoCampo);
mensaje.addEventListener('input', contenidoCampo);

function contenidoCampo(e) {
    console.log(e.target.id);
}

//change sirve cuando se ha empezado a escribir en el campo en cuestión y se cambia a otro campo
nombre.addEventListener('change', actualizarDatos);
email.addEventListener('change', actualizarDatos);
mensaje.addEventListener('change', actualizarDatos);

function actualizarDatos(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

