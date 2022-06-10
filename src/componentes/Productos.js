
const Productos =({data, agregarCarrito})=>{
    let{id, imgUrl, titulo, beneficios, precioUnitario}=data;
    return <div className="card">
        <div className="overflow">
         <img className="card-img" src={imgUrl} alt={titulo}/>
        </div>
        <h4 className="card-titulo">{titulo}</h4>
        <h5 className="card-texto">{beneficios}</h5>
        <p className="card-texto">${precioUnitario} </p>
        <button className="boton-agregar"onClick={()=> agregarCarrito(id)}>Agregar</button>
        </div>

}
export default Productos;