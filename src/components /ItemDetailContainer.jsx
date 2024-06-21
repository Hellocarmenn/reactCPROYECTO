import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../helpers/pedirDatos";
import { number } from "prop-types";

export const ItemDetailContainer = () => {
    const [item,setItem] = useState(null);
    const id = useParams().id;
    
    useEffect(() => {
        pedirItemPorId(number(id))
        .then((res) => {
            setItem(res);


        })
    },[id])


  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
    
  )
}
