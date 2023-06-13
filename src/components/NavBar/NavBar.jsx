import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgAmogus = "../img/amogus-icon.jpg";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgAmogus" src={imgAmogus} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="miBtn" activeClassName="active" to={"/categoria/2"}> Imposters </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" activeClassName="active" to={"/categoria/3"}> Tripulants </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar