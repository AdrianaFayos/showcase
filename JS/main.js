let almacen = {

    Agua: {
        precio: 0.4,
        stock: 5,
    },

    Leche: {
        precio: 0.9,
        stock: 3,
    },

    Pan: {
        precio: 0.6,
        stock: 9,
    },

    Pasta: {
        precio: 1.2,
        stock: 4,
    },

    Pollo: {
        precio: 4.5,
        stock: 3,
    },

    Ternera: {
        precio: 6.9,
        stock: 2,
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
        stock: 4,
    },

}

let carrito = {

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

function startDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.name);
  }
  
function drop(ev) {
    ev.preventDefault();

    const producto = ev.dataTransfer.getData("text");

    // Si no hay stock en el almacen ya no podemos añadir al carrito.

    if (almacen[producto].stock === 0) {

        alert('Lo siento, no quedan más unidades.');
        drag(ev) == false;

    } /* Si hay stock: */ else{
        
    almacen[producto].stock--;

    console.log(`Quedan ${almacen[producto].stock} unidades de ${producto} en el almacen."`);

    // Si no estaba en el carrito, lo añadimos

    if (carrito[producto] === 0) {
        
        const button = document.createElement('button');
        button.className = "botonEliminar";
        button.type = 'button';
        button.innerText = '-';
        
        carrito[producto] ++;

        document.querySelector('.cesta ul').innerHTML += `<p>${producto} ${carrito[producto]}</p> ${button}`;

        
    } /* Si ya estaba, le sumamos uno */ else {
        
        carrito[producto] ++ ;
        document.querySelector('.cesta ul').innerHTML.replace(carrito[producto]);
    
    }

    button.addEventListener('click', borrarCarrito);

    
} 

}