
let contador=0;

function mensaje (nombre){
    console.log(nombre);

}

function caja (nombre){
    alert (nombre)
}
function removerButton(elemento){
    elemento.remove();
}

function agregarAlContador(){
    contador ++;
    console.log(contador);

}
function mostrarPerfil(){
    alert ("Te llevaremos al Perfil");
}
function busqueda(elemento){
    elemento.style.color="blue";

}
function ocultarPerfil(elemento){
    elemento.style.color="red";
}