import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search..." />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
