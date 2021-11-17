import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
    return (
      <div className="NavBar">
        <ul>
          <li className="Home">
            <Link to="/"><i class="fas fa-home"></i></Link>
          </li>
          <li className="about">
            <Link to="/about">Rating us</Link>
          </li>
          <li className="books">
<<<<<<< HEAD
            <Link to="/books">Movies
            </Link>
          </li>
        
=======
            <Link to="/books">Books</Link>
          </li>
         
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
        </ul>
      </div>
    );
}
