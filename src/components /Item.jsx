import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <div>
        <h4>{producto.nombre}</h4>
        <p>Precio:${producto.precio}</p>
        <p>Categoria:{producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        
        
      </div>
    
    </div>
  );

  
}

// Definir PropTypes para validar las props


export default Item;