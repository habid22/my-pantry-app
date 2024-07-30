// components/PantryList.js
import { usePantry } from '../context/PantryContext';
import PantryItem from './PantryItem';
import { Box, Grid, Center } from "@chakra-ui/react";

const PantryList = () => {
  const { filteredItems } = usePantry();

  return (
    <Center>
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={4}
        maxWidth="1200px"
        width="100%"
        p={4}
      >
        {filteredItems.map((item) => (
          <Box key={item.id}>
            <PantryItem item={item} />
          </Box>
        ))}
      </Grid>
    </Center>
  );
};

export default PantryList;
