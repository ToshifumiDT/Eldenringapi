import React, { useEffect, useState } from 'react';
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
    <div id="armorCards">
{/* link to home. dont write /home here */}
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <h2>Armors</h2>
      {armorData.map((armor) => (
        <div key={armor.id} className="armor-card">
          <div className="armor-image">
            <img
              src={armor.image ? armor.image : "https://eldenring.fanapis.com/api/armors?limit=100"}
              alt={armor.name}
            />
          </div>
          <h2>{armor.name}</h2>
          <p><strong>Description:</strong> {armor.description}</p>
          <p><strong>Weight:</strong> {armor.weight}</p>
        </div>
      ))}
    </div>
  );
}

export default Armor;


