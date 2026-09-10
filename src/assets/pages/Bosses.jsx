import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import '../style/pages.css';

function Bosses() {
  const [bossData, setBossData] = useState([]);

  useEffect(() => {
    axios.get('https://eldenring.fanapis.com/api/bosses?limit=100')
      .then(response => {
        setBossData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching bosses:', error);
      });
  }, []);

  return (
    <main id="bossCards">
      <nav className="page-nav" aria-label="Back to home">
        <Link to="/">Home</Link>
      </nav>

      <h1 className="page-title">Bosses</h1>
      {bossData.map((boss) => (
        <article key={boss.id} className="boss-card">
          {boss.image ? (
            <div className="boss-image">
              <img src={boss.image} alt={boss.name} loading="lazy" decoding="async" />
            </div>
          ) : (
            <div
              className="image-placeholder"
              role="img"
              aria-label={`${boss.name} image unavailable`}
            >
              Image unavailable
            </div>
          )}
          <h2 className="card-title">{boss.name}</h2>
          <p><strong>Region:</strong> {boss.region}</p>
          <p><strong>Description:</strong> {boss.description}</p>
          <p><strong>Location:</strong> {boss.location}</p>
          <p><strong>Drops:</strong></p>
          <ul>
            {boss.drops.map((drop, index) => (
              <li key={index}>{drop}</li>
            ))}
          </ul>
          <p><strong>Health Points:</strong> {boss.healthPoints}</p>
        </article>
      ))}
    </main>
  );
}

export default Bosses;
