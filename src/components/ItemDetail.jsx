import { toCapital } from "../helpers/toCapital"


const ItemDetail = ( {item} ) => {
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.nombre} />
            <div>
                <h3 className="titulo">{item.nombre}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">${item.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail