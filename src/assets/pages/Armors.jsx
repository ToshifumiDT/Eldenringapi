import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import '../style/pages.css';

function Armor() {
  const [armorData, setArmorData] = useState([]);

  useEffect(() => {
    axios.get('https://eldenring.fanapis.com/api/armors?limit=100')
      .then(response => {
        setArmorData(response.data.data); 
      })
      .catch(error => {
        console.error('Error fetching armors:', error);
      });
  }, []);

  return (
    <main id="armorCards">
      <nav className="page-nav" aria-label="Back to home">
        <Link to="/">Home</Link>
      </nav>

      <h1 className="page-title">Armors</h1>
      {armorData.map((armor) => (
        <article key={armor.id} className="armor-card">
          {armor.image ? (
            <div className="armor-image">
              <img src={armor.image} alt={armor.name} loading="lazy" decoding="async" />
            </div>
          ) : (
            <div
              className="image-placeholder"
              role="img"
              aria-label={`${armor.name} image unavailable`}
            >
              Image unavailable
            </div>
          )}
          <h2 className="card-title">{armor.name}</h2>
          <p><strong>Description:</strong> {armor.description}</p>
          <p><strong>Weight:</strong> {armor.weight}</p>
        </article>
      ))}
    </main>
  );
}

export default Armor;


