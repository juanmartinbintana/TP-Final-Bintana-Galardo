function exportarContacto() {
    const name = document.getElementsByClassName('nombre')[0].value;
    const surname = document.getElementsByClassName('apellido')[0].value;
    const mail = document.getElementsByClassName('email')[0].value;
    const phone = document.getElementsByClassName('telefono')[0].value;
    const detail = document.getElementsByClassName('detalle')[0].value;

    const datos = `Nombre: ${name}\nApellido: ${surname}\nEmail: ${mail}\nTelefono: ${phone}\nDetalle: ${detail}`;

    const elemento = document.createElement('a');
    const archivo = new Blob([datos], {type: 'text/plain'});
    elemento.href = URL.createObjectURL(archivo);
    elemento.download = 'formulario.txt';

    document.body.appendChild(elemento);
    elemento.click();
    document.body.removeChild(elemento);
}

const productos = [
    { nombre: "Yerba Cosmico 500g", imagen: "img/Productos/Cosmico 500g.jpg", precio: 3500, stock: 8 },
    { nombre: "Coca Cola 1.5lts", imagen: "img/Productos/Coca Cola 1.5lts.jpg", precio: 1800, stock: 15 },
    { nombre: "Fernet Branca 750ml", imagen: "img/Productos/Fernet Branca 750ml.jpg", precio: 10000, stock: 5 },
    { nombre: "Salamin Cagnoli Picado Fino", imagen: "img/Productos/Salamin Cagnoli.jpg", precio: 6000, stock: 10 },
    { nombre: "Queso Azul La Quesera", imagen: "img/Productos/Queso Azul La Quesera.jpg", precio: 20000, stock: 3 },
    { nombre: "Papas Lays Clásicas 85g", imagen: "img/Productos/Papas Lays 85g.jpg", precio: 2500, stock: 20 },
    { nombre: "Vino Angelica Zapata Malbec Alta X 750cc", imagen: "img/Productos/Vino Angelica Zapata Malbec 750cc.jpg", precio: 25000, stock: 7 },
    { nombre: "Limpiador Cif Original En Crema 750 g 500ml", imagen: "img/Productos/Limpiador Cif Original En Crema 750 g 500ml.jpg", precio: 2300, stock: 9 },
    { nombre: "Cerveza Andes Origen Rubia Golden lata 473 mL 6u", imagen: "img/Productos/Cerveza Andes Origen Rubia Golden lata 473 mL 6 unidades.jpg", precio: 6200, stock: 20 },
    { nombre: "Babysec Ultra Soft Xxgx50u Género Sin género", imagen: "img/Productos/Babysec Ultra Soft Xxgx50u Género Sin género Tamaño Extra extra grande (XXG).jpg", precio: 13500, stock: 10 },
    { nombre: "Mayonesa Natura sin gluten doypack 950g", imagen: "img/Productos/Mayonesa Natura sin gluten doypack 950g.jpg", precio: 2700, stock: 6 },
    { nombre: "Aceite De Oliva Oliovita Clasico Botella X 500 Ml", imagen: "img/Productos/Aceite De Oliva Oliovita Clasico Botella De Vidrio X 500 Ml.jpg", precio: 13600, stock: 6 },
];

function renderizarProductos() {
    const productList = document.getElementById('catalogo');
    productList.innerHTML = ''; 

    productos.forEach((producto, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImg = document.createElement('img');
        productImg.src = producto.imagen;
        productImg.alt = producto.nombre;

        const productName = document.createElement('h2');
        productName.textContent = producto.nombre;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Precio: $${producto.precio}`;

        const productStock = document.createElement('p');
        productStock.textContent = `Stock: ${producto.stock}`;

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = '1';
        inputCantidad.placeholder = 'Cantidad';
        inputCantidad.classList.add('cantidad');

        const buttonComprar = document.createElement('button');
        buttonComprar.textContent = 'Comprar';
        buttonComprar.addEventListener('click', () => verificarStock(index, inputCantidad.value));

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productStock);
        productDiv.appendChild(inputCantidad);
        productDiv.appendChild(buttonComprar);

        productList.appendChild(productDiv);
    });
}

function verificarStock(index, cantidad) {
    const producto = productos[index];
    const cantidadNumerica = parseInt(cantidad, 10);

    if (isNaN(cantidadNumerica) || cantidadNumerica <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    if (cantidadNumerica > producto.stock) {
        alert('Stock no disponible para la cantidad solicitada.');
    } else {
        alert(`Compra realizada: ${cantidadNumerica} ${producto.nombre}`);
        producto.stock -= cantidadNumerica;
        renderizarProductos(); 
    }
}

window.onload = renderizarProductos;

