import React, { useEffect, useState } from 'react';
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
    <div id="bossCards">
{/* link to home. dont write /home here */}
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <h2>Bosses</h2>
      {bossData.map((boss) => (
        <div key={boss.id} className="boss-card">
          <div className="boss-image">
            <img
              src={boss.image ? boss.image : "https://eldenring.fanapis.com/api/bosses?limit=100"}
              alt={boss.name}
            />
          </div>
          <h2>{boss.name}</h2>
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
        </div>
      ))}
    </div>
  );
}

export default Bosses;
