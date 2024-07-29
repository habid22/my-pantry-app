// components/PantryList.js
import { usePantry } from '../context/PantryContext';
import PantryItem from './PantryItem';
import { Box, Grid } from "@chakra-ui/react";

const PantryList = () => {
  const { items } = usePantry();

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={4}>
      {items.map((item) => (
        <Box key={item.id}>
          <PantryItem item={item} />
        </Box>
      ))}
    </Grid>
  );
};

export default PantryList;