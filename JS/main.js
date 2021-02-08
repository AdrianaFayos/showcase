const almacen = {

    Agua: {
        precio: 0.4,
        stock: 5,
    },

    Leche: {
        precio: 0.9,
        stock: 2,
    },

    Pan: {
        precio: 0.6,
        stock: 3,
    },

    Pasta: {
        precio: 1.2,
        stock: 1,
    },

    Pollo: {
        precio: 4.5,
        stock: 2,
    },

    Ternera: {
        precio: 6.9,
        stock: 1,
    },

    Berenjena: {
        precio: 1.8,
        stock: 8,
    },

    Esparragos: {
        precio: 1.2,
        stock: 6,
    },

    Fresas: {
        precio: 3.6,
        stock: 4,
    },

    Naranjas: {
        precio: 3.1,
        stock: 5,
    },

    Chocolate: {
        precio: 1.3,
        stock: 2,
    },

    Galletas: {
        precio: 1.1,
        stock: 2,
    },

}

const carrito = {

    Agua: 0,
    Leche: 0,
    Pan: 0,
    Pasta: 0,
    Pollo: 0,
    Ternera: 0,
    Berenjena: 0,
    Esparragos: 0,
    Fresas: 0,
    Naranjas: 0,
    Chocolate: 0,
    Galletas: 0,

}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.name);
  }
  
function drop(ev) {
    ev.preventDefault();

    
}    