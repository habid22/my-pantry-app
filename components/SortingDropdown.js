// components/SortingDropdown.js
import { Select } from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';

const SortingDropdown = () => {
  const { setSortMethod } = usePantry();

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  return (
    <Select onChange={handleSortChange} placeholder="Sort by" size="sm" width="150px">
      <option value="name-asc">Name (A-Z)</option>
      <option value="quantity-asc">Quantity (Low to High)</option>
    </Select>
  );
};

export default SortingDropdown;
