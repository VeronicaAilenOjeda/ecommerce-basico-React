import { useReducer } from "react";
import { TYPES } from "./accionesCarrito";
import { compraInicial, compraReducer } from "./compraReducer";
import Productos from "./Productos";
import ProductosElegidos from "./ProductosElegidos";

const CarritoCompras = ()=>{
    const [state, dispatch]=useReducer(compraReducer, compraInicial);
    const{productos, carrito}= state;

    const agregarCarrito=(id)=>{
        dispatch({type:TYPES.AGREGAR_CARRITO, payload:id});
    }
    const eliminarCarrito=(id, todo= false)=>{
        
        if(todo){
            dispatch({type:TYPES.ELIMINAR_TODO, payload:id})
        }else{
            dispatch({type:TYPES.ELIMINAR_ELEMENTO_CARRITO, payload:id})
        }
    }
    const limpiarCarrito=()=>{
        dispatch({type:TYPES.LIMPIAR_CARRITO})
    }

    return(
        <div className="orden-general">
            
            <h2>Elegí el destino de tus próximas vacaciones</h2>
            <br>
            </br>
            <div className="primer-orden">
            
               {productos.map((productos)=> <Productos key={productos.id} data={productos} agregarCarrito={agregarCarrito}/>)} 
            
            </div>

            <div className="segundo-orden">
            <h3>Tu compra hasta el momento:</h3>
            <article className="box">
              <button className="boton-eliminar" onClick={limpiarCarrito}>Limpiar elección</button>  
              {
                  carrito.map((item, index) => <ProductosElegidos key={index} data={item} eliminarCarrito={eliminarCarrito}/>)
              }
            </article>
            </div>
            
        </div>
    )
}
export default CarritoCompras;