import { NavLink } from "react-router-dom";

export const Nav = () => {
    return(
        <nav>
        <NavLink to='/'>Books</NavLink>
        <NavLink to='/quotes'>Quotes</NavLink>
      </nav>
    )
}