const ShipDetail = ({ ship, onBack }) => {
  return (
    <div className="ShipDetail">
      <button onClick={onBack}>Back</button>
      <img src="/star-wars-ship.jpg" alt={ship.name} style={{ width: '100%', marginBottom: '20px' }} />
      <h2>{ship.name}</h2>
      <p>Model: {ship.model}</p>
      <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
      <p>Passengers: {ship.passengers}</p>
      <p>Max Atmosphering Speed: {ship.max_atmosphering_speed}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Crew: {ship.crew}</p>
      <p>Cargo Capacity: {ship.cargo_capacity}</p>
    </div>
  );
};

export default ShipDetail;