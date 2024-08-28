import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

function Home() {
  return (
    <div>
      <h1>Elden Ring information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/bosses">Bosses</Link>
          </li>
          <li>
            <Link to="/weapons">Weapons</Link>
          </li>
          <li>
            <Link to="/Armors">Armors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
