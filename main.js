let producto ={
    nombre:"camiseta",
    precio: 500,
    stock: 10
    }
console.log("Datos del producto inicial:");
console.log(producto);
producto.nombre = "zapato"
console.log("Producto cambiado:");
console.log(producto);
producto.categoria = "calzados"
delete producto.stock
console.log("stock eliminado y nueva categoria añadida:");
console.log(producto);
