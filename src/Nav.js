import React from 'react'
import "./Nav.css";
import {Link} from 'react-router-dom';

function Nav({name}) {
   return (
      <nav className="nav">

         <div className="nav__container">

            <div className="nav__things">

               <Link to='/'><h1>{name}</h1></Link>

               <ul className="nav__items">
                  <Link to='/shop'><li>Shop</li></Link>

                  <Link to='/about'><li>About</li></Link>
               </ul>

            </div>

         </div>

      </nav>
   )
}

export default Nav
