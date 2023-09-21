import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';


const SearchBar = () => {
  // Votre code pour gérer la recherche ici

  return (
    <form>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon />}
        />
        <Input placeholder="Search..." />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
