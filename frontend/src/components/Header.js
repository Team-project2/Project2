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
            <Link to="/books">Movies
            </Link>
          </li>
        
        </ul>
      </div>
    );
}
