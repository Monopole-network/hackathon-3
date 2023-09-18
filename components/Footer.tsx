import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { MonopoleIcon } from './Icons';

const Footer: React.FC = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  let currentYear = new Date().getFullYear();
  const menuColor = useColorModeValue('white', '#000126');

  return (
    <Box px="40px" py="40px" h="50px">
      <Flex height="100%" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
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
          <Flex alignItems="center" display={{ base: 'none', sm: 'none', md: 'contents', lg: 'contents' }}>
            <Divider
              ml="20px"
              height="40px"
              width="2px"
              orientation="vertical"
              borderRadius="10px"
              mr="20px"
              bg="#353945"
            />
            <Text fontSize="14px" fontWeight="700">
              Monopole © {currentYear}. All rights reserved
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Menu>
            <MenuButton background="transparent" borderRadius="50px">
              More
            </MenuButton>
            <MenuList alignItems="center" border="0px" background={menuColor}>
              <MenuItem
                background="transparent"
                _hover={{ background: 'whiteAlpha.100' }}
                borderRadius="50px"
                onClick={() => {
                  router.push('/commitment-charter');
                }}
              >
                <Text fontSize="14px" fontWeight="700">
                  Commitment Charter
                </Text>
              </MenuItem>
              <MenuItem
                background="transparent"
                _hover={{ background: 'whiteAlpha.100' }}
                borderRadius="50px"
                onClick={() => {
                  router.push('/terms-of-use');
                }}
              >
                <Text fontSize="14px" fontWeight="700">
                  Terms of Use
                </Text>
              </MenuItem>
              <MenuItem
                background="transparent"
                _hover={{ background: 'whiteAlpha.100' }}
                borderRadius="50px"
                onClick={() => {
                  router.push('/policy');
                }}
              >
                <Text fontSize="14px" fontWeight="700">
                  Privacy Policy
                </Text>
              </MenuItem>
              <MenuItem
                background="transparent"
                _hover={{ background: 'whiteAlpha.100' }}
                borderRadius="50px"
                onClick={() => {
                  router.push('/code-of-conduct');
                }}
              >
                <Text fontSize="14px" fontWeight="700">
                  Code of Conduct
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
          <Button background="transparent" onClick={toggleColorMode} borderRadius="50px">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
