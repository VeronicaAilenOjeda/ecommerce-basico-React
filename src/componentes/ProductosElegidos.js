const ProductosElegidos=({data, eliminarCarrito})=>{
    let{id, titulo, beneficios, precioUnitario, quantity}=data;
    return(
        <div>
            <h4>{titulo}</h4>
            <h5>{beneficios}</h5>
            <p>${precioUnitario} x {quantity} persona= ${precioUnitario*quantity}</p>
            <button className="boton-eliminar-uno"onClick={()=> eliminarCarrito(id)}>Eliminar uno</button>
            <button className="boton-eliminar-todo" onClick={()=> eliminarCarrito(id, true)}>Eliminar todo</button>
            

        </div>
    )
}
export default ProductosElegidos;