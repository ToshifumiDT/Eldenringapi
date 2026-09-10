import { Link } from 'react-router-dom';
import '../style/home.css';

function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <p className="home-kicker">The Lands Between Archive</p>
        <h1 className="home-title">Elden Ring Information</h1>
        <p className="home-intro">
          Explore the formidable foes, legendary weapons, and ancient armor of
          the Lands Between.
        </p>
        <nav className="home-nav" aria-label="Explore categories">
          <ul>
            <li>
              <Link to="/bosses">Bosses</Link>
            </li>
            <li>
              <Link to="/weapons">Weapons</Link>
            </li>
            <li>
              <Link to="/armors">Armors</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Home;
