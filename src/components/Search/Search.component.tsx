import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

import { useProductsContext } from '../../providers/Products';
import { SearchContainer, SearchInput, SearchIconWrapper } from './Search.styled';

function Search() {
  const [termValue, setTermValue] = useState('');
  const { saveSearchTerm, searchTerm } = useProductsContext();
  const { push } = useHistory();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const term = (e.target as HTMLInputElement).value;
      saveSearchTerm(term.trim());
      push('/search');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermValue(e.target.value);
  };

  useEffect(() => {
    setTermValue(searchTerm);
  }, [searchTerm]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={termValue}
      />
      <SearchIconWrapper>
        <BiSearchAlt2 size={25} />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
