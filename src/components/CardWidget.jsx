/* eslint-disable jsx-a11y/anchor-is-valid */
import { ShoppingCart } from "lucide-react"

const CartWidget = () => {
  return (
    <div>
        <a className="menu-link" to="/carrito">
            Carrito
            <span className="numerito">1</span>
            <ShoppingCart/>
        </a>
    </div>
  )
}

export default CartWidget