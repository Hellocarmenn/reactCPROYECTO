import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
       <nav className="navbar">
        <a to="/" className="logo"><h1>Veterinaria</h1></a>
        <ul className="menu">
            <li><a className="menu-link" to="/">Inicio</a></li>
            <li><a className="menu-link" to="/productos">Productos</a></li>
            <li><a className="menu-link" to="/nosotros">Nosotros</a></li>
            <li><a className="menu-link" to="/contacto">Contacto</a></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
    </>
  )
}
export default NavBar;