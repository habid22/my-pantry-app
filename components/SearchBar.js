// components/SearchBar.js
import { Input } from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';

const SearchBar = () => {
  const { setSearchQuery } = usePantry();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Input
      placeholder="Search items..."
      onChange={handleSearch}
      mb={4}
    />
  );
};

export default SearchBar;
