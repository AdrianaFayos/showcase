const almacen = {

    Agua: {
        precio: 0.40,
        stock: 5,
    },

    Leche: {
        precio: 0.90,
        stock: 3,
    },

    Pan: {
        precio: 0.60,
        stock: 9,
    },

    Pasta: {
        precio: 1.20,
        stock: 4,
    },

    Pollo: {
        precio: 4.50,
        stock: 3,
    },

    Ternera: {
        precio: 6.90,
        stock: 2,
    },

    Berenjena: {
        precio: 1.80,
        stock: 8,
    },

    Esparragos: {
        precio: 1.20,
        stock: 6,
    },

    Fresas: {
        precio: 3.60,
        stock: 4,
    },

    Naranjas: {
        precio: 3.10,
        stock: 5,
    },

    Chocolate: {
        precio: 1.30,
        stock: 2,
    },

    Galletas: {
        precio: 1.10,
        stock: 4,
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

let total = 0;

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
            
        carrito[producto] = 1;

        document.querySelector('.cesta ul').innerHTML += `<p>${producto} ${carrito[producto]}</p>`;

        console.log(`Ha añadido ${carrito[producto]} ${producto} a su carrito. `)
    
    } /* Si ya estaba, le sumamos uno */ else {
        
        carrito[producto] = carrito[producto] + 1 ; 
        document.querySelector('.cesta ul').innerHTML += `<p>${producto} ${carrito[producto] - 1}</p>`;
        console.log(`Ha añadido ${carrito[producto]} ${producto} a su carrito. `)
    }
    
    preciototal();

} 

 // Calcular el precio total
function preciototal(){
    total = total + almacen[producto].precio;
    document.querySelector('.total').innerHTML = ` ${total} €`;
    console.log(`Su carrito tiene un total de ${total} €`)
}


}

// Boton para realizar la compra
function realizarCompra () {
 
    if( document.querySelector('.cesta ul').innerText.length < 1 ) {
       
        alert('Lo siento, no hay artículos en su carrito.'); 
   
    } else {

      alert('Enhorabuena, ha completado su compra.');   
      eliminarTodo();

    }
}

// Boton para vaciar toda la compra
function eliminarTodo (){
   
    carrito === 0;
    //AQUI ME FALTA LA FUNCIÓN QUE RESTABLEZCA EL STOCK
    document.querySelector('.cesta ul').innerHTML = "";
    console.log('Ha eliminado todo su carrito')
    document.querySelector('.total').innerHTML = "";
    total = 0;
    
}