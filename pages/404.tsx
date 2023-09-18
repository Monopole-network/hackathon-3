import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="90%" maxW="1200px" mx="auto" pt="20px">
        <Text textAlign="center" fontSize={40} fontWeight={400} mt={200}>
          404 | Page not found
        </Text>
      </Box>
    </Flex>
  );
};

export default Custom404;
