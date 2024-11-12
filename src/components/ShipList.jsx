import { useState, useEffect } from 'react';
import { getShips } from '../services/api';
import ShipDetail from './ShipDetail';
import SearchBar from './SearchBar';
import LoadMoreButton from './LoadMoreButton';

const ShipList = () => {
  const [ships, setShips] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedShip, setSelectedShip] = useState(null);

  useEffect(() => {
    fetchShips();
  }, [searchTerm, page]);

  const fetchShips = async () => {
    const data = await getShips(searchTerm, page);
    if (data) {
      if (page === 1) {
        setShips(data.results);
      } else {
        setShips((prevShips) => [...prevShips, ...data.results]);
      }
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleShipClick = (ship) => {
    setSelectedShip(ship);
  };

  const handleBack = () => {
    setSelectedShip(null);
  };

  if (selectedShip) {
    return <ShipDetail ship={selectedShip} onBack={handleBack} />;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {ships.map((ship, index) => (
          <li key={index} onClick={() => handleShipClick(ship)}>
            <img src="/star-wars-ship.jpg" alt={ship.name} style={{ width: '100%', marginBottom: '10px' }} />
            <h3>{ship.name}</h3>
            <p>Model: {ship.model}</p>
            <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
          </li>
        ))}
      </ul>
      <LoadMoreButton onClick={handleLoadMore} />
    </div>
  );
};

export default ShipList;