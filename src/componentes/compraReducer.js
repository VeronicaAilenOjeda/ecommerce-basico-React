import { TYPES } from "./accionesCarrito";

export const compraInicial={
    productos:[
        {
            id:1,
            imgUrl: "./img/cordoba2.jpg",
            titulo: "Córdoba",
            beneficios: "6 días, 5 noches, hotel 4 estrellas",
            precioUnitario:"19999"
        },
        {
            id:2,
            imgUrl:"./img/bariloche3.jpg",
            titulo:"Bariloche",
            beneficios:"8 días, 7 noches, hotel 3 estrellas",
            precioUnitario:"55999"
    
        },
        {
            id:3,
            imgUrl:"./img/tucuman2.jpg",
            titulo:"Tucumán",
            beneficios:"5 días, 4 noches, hotel 3 estrellas",
            precioUnitario:"21999"
        },
        {
            id:4,
            imgUrl:"./img/buenos-aires2.jpg",
            titulo:"Buenos Aires",
            beneficios:"5 días, 4 noches, hotel 4 estrellas",
            precioUnitario:"16999"
        }
    ],
    carrito:[]
}

export function compraReducer(state, action){
    switch(action.type){
        case TYPES.AGREGAR_CARRITO:{
            let nuevoProducto=state.productos.find((productos)=> productos.id === action.payload);

            let productoEnCarrito= state.carrito.find((item)=>item.id=== nuevoProducto.id);

            return productoEnCarrito
            ? {
                ...state, 
                carrito: state.carrito.map((item)=> 
                item.id===nuevoProducto.id?{...item, quantity: item.quantity + 1}: item),
            }
            :{...state,
                carrito: [...state.carrito, {...nuevoProducto, quantity:1}]}    

        }
        case TYPES.ELIMINAR_ELEMENTO_CARRITO:{
            let productoParaBorrar= state.carrito.find(item=> item.id===action.payload)
            return productoParaBorrar.quantity>1?{
                ...state,
                carrito: state.carrito.map(item=> item.id=== action.payload ?{...item, quantity: item.quantity -1}: item)
            }
            :{
                ...state,
                carrito: state.carrito.filter(item=> item.id!== action.payload),
            }

        }
        case TYPES.ELIMINAR_TODO:{
            return{
                ...state,
                carrito: state.carrito.filter(item=> item.id!== action.payload),
            }
        }
        case TYPES.LIMPIAR_CARRITO:
            return compraInicial;
        default:
            return state;
    }
}