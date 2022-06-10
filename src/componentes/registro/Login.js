import React, { useState } from "react";
import "./Login.css"
import Label from "./componentes/Label/Label";
import Input from "./componentes/Input/Input";
import swal from "sweetalert";
const Login=()=>{

    const [user, setUser]= useState("");
    const [apellido, setApellido]= useState("");

    function handleChange(name, value){
        if (name === "usuario"){
            setUser(value)
        }else{
            setApellido(value)
        }
    }

    function confirmarCompra(){
        let cuenta={user, apellido}
        if(cuenta){
            swal({
                title: "¿Estás seguro que deseas confirmar la compra?",
                icon:"warning",
                buttons:["No", "Si"]
            }).then (respuesta=>{
                if(respuesta){
                    swal({text:"Compra realizada con éxito",
            icon:"success"})
                }   
            })
        }
    }

    return(
        <div className="login-contenedor">
            <div>
            <Label text="Ingrese su nombre:"/>
            <Input atributo={{
                id:"usuario",
                name:"usuario",
                type:"text",
                placeholder:"Ingrese su nombre"
            }}
            handleChange={handleChange}/>
            <Label text="Ingrese su apellido:"/>
            <Input atributo={{
                id:"apellido",
                name:"apellido",
                type:"text",
                placeholder:"Ingrese su apellido"
            }}
            handleChange={handleChange}/>
            </div>
            <div className="final">
            <h4>Gracias por elegirnos {user} {apellido}</h4>
            <button className= "boton-confirmacion" onClick={confirmarCompra}>
                Confirmar Compra
            </button>

            </div>
            
        
        </div>
    )
}
export default Login;
