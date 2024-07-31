// components/SortingDropdown.js
import { Select } from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';

const SortingDropdown = () => {
  const { setSortMethod } = usePantry();

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  return (
    <Select 
      onChange={handleSortChange} 
      placeholder="Sort by..." 
      size="sm" 
      width="200px" 
      fontSize="15px" 
      py={2} 
      px={0}
      borderRadius="xs"  // Adding border-radius for rounded corners
    >
      <option value="name-asc">Name (A-Z)</option>
      <option value="quantity-asc">Quantity (Low to High)</option>
      <option value="quantity-desc">Quantity (High to Low)</option>
    </Select>
  );
};

export default SortingDropdown;
