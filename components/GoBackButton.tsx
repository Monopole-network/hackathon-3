import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackButtonProps {
  path: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ path }) => {
  const router = useRouter();
  const borderColor = useColorModeValue('blackAlpha.200', 'white');

  return (
    <Button
      borderRadius="20px"
      border="1px solid white"
      borderColor={borderColor}
      w="130px"
      h="43px"
      onClick={() => router.push(path)}
    >
      <Flex w="100%" justify="space-between" align="center">
        <FaArrowLeft />
        <Text>Go back</Text>
      </Flex>
    </Button>
  );
};

export default GoBackButton;
