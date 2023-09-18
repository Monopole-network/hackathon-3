import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaWallet } from 'react-icons/fa';
import { MonopoleIcon, MonopoleIconText } from './Icons';
import Menu from './Menu/Menu';

const version = 'v0.31';

const Navbar: React.FC = () => {
  const router = useRouter();
  const textColor = useColorModeValue('rgba(0, 0, 0, 0.7)', 'rgba(255, 255, 255, 0.92)');

  return (
    <Box
      px={{ base: '10px', sm: '20px', md: '25px', lg: '30px' }}
      position="fixed"
      left="0px"
      right="0px"
      top="0px"
      height="95px"
      zIndex="2000"
      borderBottom="1px solid rgba(130, 53, 255, .1)"
      backdropFilter="blur(25px)"
    >
      <Flex height="100%" w="100%" alignItems="center">
        <Flex alignItems="center" w="100%">
          <Flex display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <Button
              height="25px"
              width="180px"
              background="transparent"
              _hover={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
              onClick={() => {
                router.push('/');
              }}
            >
              <MonopoleIconText height="25px" width="180px" />
            </Button>
            <Box zIndex="3" mt="2.5px">
              <Text fontSize="xs" opacity="0.5" fontWeight="700" mt="2.5px">
                BETA {version}
              </Text>
            </Box>
          </Flex>
          <Flex display={{ base: 'block', sm: 'block', md: 'none', lg: 'none' }}>
            <Button
              height="43px"
              width="43px"
              background="transparent"
              _hover={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
              onClick={() => {
                router.push('/');
              }}
            >
              <MonopoleIcon height="19px" width="43px" />
            </Button>
            <Box zIndex="3" mt="2.5px">
              <Text fontSize="xs" opacity="0.5" fontWeight="700" mt="2.5px">
                BETA {version}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Menu />
        <Flex w="100%" justify="flex-end" alignItems="center" textAlign="center">
          <Button
            borderRadius="16px"
            height="48px"
            width="48px"
            background="transparent"
            onClick={() => {
              router.push('/connection');
            }}
          >
            <Icon height="20px" width="20px" color={textColor} as={FaWallet} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
