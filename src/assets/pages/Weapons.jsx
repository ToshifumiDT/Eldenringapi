import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import '../style/pages.css';

function Weapons() {
  const [weaponData, setWeaponData] = useState([]);

  useEffect(() => {
    axios.get('https://eldenring.fanapis.com/api/weapons?limit=100')
      .then(response => {
        setWeaponData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching weapons:', error);
      });
  }, []);

  return (
    <main id="weaponCards">
      <nav className="page-nav" aria-label="Back to home">
        <Link to="/">Home</Link>
      </nav>

      <h1 className="page-title">Weapons</h1>
      {weaponData.map((weapon) => (
        <article key={weapon.id} className="weapon-card">
          {weapon.image ? (
            <div className="weapon-image">
              <img
                src={weapon.image}
                alt={weapon.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <div
              className="image-placeholder"
              role="img"
              aria-label={`${weapon.name} image unavailable`}
            >
              Image unavailable
            </div>
          )}
          <h2 className="card-title">{weapon.name}</h2>
          <p><strong>Category:</strong> {weapon.category}</p>
          <p><strong>Description:</strong> {weapon.description}</p>
          <p><strong>Weight:</strong> {weapon.weight}</p>
          <p><strong>Required attributes:</strong></p>
          <ul>
            {weapon.requiredAttributes?.map((attribute) => (
              <li key={attribute.name}>{attribute.name}: {attribute.amount}</li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}

export default Weapons;
