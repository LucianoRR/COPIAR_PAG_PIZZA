let toppings = document.getElementsByClassName("Topping");
let seleccion = document.getElementById("seleccion-contenedor");
console.log(seleccion)

let clickTopping = (event) => {
    seleccion.textContent = event.target.textContent;
}

for(let i=0; i < toppings.length; i++){
    toppings[i].addEventListener("click",clickTopping);
}

