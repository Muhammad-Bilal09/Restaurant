import { createContext, useState } from "react"

export const cartcontext=createContext(null)
 export const Contextprovider=(props)=>{
    const [Items,setItems]=useState([])
    return(
        <cartcontext.Provider value={{Items,setItems}}>
        {props.children}
        </cartcontext.Provider>
    );
}