import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(term);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [term, onSearch]);

  return (
    <input
      type="text"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Search by name or model"
      style={{ width: '20%', padding: '10px', fontSize: '1.2em' }}
    />
  );
};

export default SearchBar;