var Y=prompt("Dime un numero");
var X=prompt("Dime otro numero");

function alzar(Y){
     return Math.ceil(Y);  
}
function bajar(X){
    return Math.floor(X);
}
function enteroProx(Y){
    return Math.round(Y)
}
function random(){
    return Math.random();
}
function elevar(Y,X){
    return Math.pow(X,Y);
}

function raiz(Y){
    return Math.sqrt(Y);
}
function max(Y,X){
    return Math.max(Y,X);
}
function min(Y,X){
  return  Math.min(Y,X);
}


console.log("el numeroY redondeado al alza es:" +alzar(Y));
console.log("el numeroX redondeado a la baja es:" +bajar(X));
console.log("el entero mas proximo a Y es:" +enteroProx(Y));
console.log("valor aleatorio:" +random());
console.log("el valor de X elevado a Y:" +elevar(X,Y));
console.log("Raiz cuadrada de Y:" +raiz(Y));
console.log("Maximo entre X e Y:" +max(X,Y));
console.log("Minimo entre X e Y:" +min(X,Y));