const producto = document.querySelector('#producto');

const carrito = document.querySelector('#carrito');

carrito.addEventListener('dragover', e => {
    carrito.preventDefault();
})

carrito.addEventListener('drop', e => {
    carrito.appendChild(producto);
})