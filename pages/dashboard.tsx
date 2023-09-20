import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import { Box, Button, ButtonGroup, CloseButton, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';
import { FaShieldAlt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<any | null>(null);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState<boolean>(false);
  const [firstWallet, setFirstWallet] = useState<boolean>(false);
  const [secondWallet, setSecondWallet] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem('currentAccount');
    setConnected(false);
    setCurrentAccount(null);
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };

  useEffect(() => {
    const storedAccount = localStorage.getItem('currentAccount');
    if (storedAccount) {
      setCurrentAccount(JSON.parse(storedAccount));
      setConnected(true);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const handleRegistrationClick = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="90%" maxW="1200px" mx="auto" pt="20px">
        {!connected ? (
          <>
            {showLoginForm || showRegistrationForm ? (
              <CloseButton onClick={handleCloseForm} size='lg' ms="auto" />
            ) : (
              <>
                <Box textAlign="center" display="flex" gap={10} flexDirection="column">
                  <Box display="flex" mx="auto" flexDirection="column" gap={3}>
                    <h2>Client</h2>
                    <Box display="flex" gap={5} mx="auto">
                      <Button>Connexion</Button>
                      <Button>Inscription</Button>
                    </Box>
                  </Box>
                  <Box display="flex" mx="auto" flexDirection="column" gap={3}>
                    <h2>Entreprise</h2>
                    <Box display="flex" gap={5} mx="auto">
                      <Button onClick={handleLoginClick}>Connexion</Button>
                      <Button onClick={handleRegistrationClick}>Inscription</Button>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
            {showLoginForm && <LoginForm onLogin={(accountData) => {
              setCurrentAccount(accountData);
              setConnected(true);
              localStorage.setItem('currentAccount', JSON.stringify(accountData));
            }} />}
            {showRegistrationForm && <RegistrationForm />}
          </>
        ) : (
          <>
            <Box display="flex" gap={10} width="100%" alignItems="center">
              <Image
                src="/building.png"
                alt="building"
                borderRadius="full"
                height="100px"
                width="100px"
              />
              <Box display="flex" flexDirection="column" width="100%" gap={3}>
                <Box display="flex" flexDirection="row" width="100%">
                  <Box flex="1">
                    <Text fontSize='2xl' as="b">
                      Hi, {currentAccount?.companyName} !
                    </Text>
                  </Box>
                  <ButtonGroup>
                    <Stack direction='row' spacing={3}>
                      <Button leftIcon={<CheckIcon />} colorScheme='green' variant='solid'>
                        KYB
                      </Button>
                      <Button leftIcon={<EditIcon />} colorScheme='purple' variant='outline'>
                        Edit
                      </Button>
                      <Button rightIcon={<ArrowForwardIcon />} colorScheme='purple' variant='outline' onClick={handleLogout}>
                        Log out
                      </Button>
                    </Stack>
                  </ButtonGroup>
                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                  {firstWallet && (
                    <>
                    <Box backgroundColor='rgba(205, 205, 205, 0.4)' display="inline-flex" alignItems={'center'} gap={3} px={3} borderRadius={7} width="max-content">
                      <Text>
                        EVM
                      </Text>
                      <Text
                        borderLeft="1px solid red"
                        borderRight="1px solid red"
                        px={2}
                        borderColor="rgba(116, 116, 116, 1)"
                      >
                        0x4UD58Hgr4HD68…58WxY37bctUo48e
                      </Text>
                      <Icon as={FaShieldAlt} />
                    </Box>
                    {!secondWallet && (
                      <Button onClick={() => setSecondWallet(true)} colorScheme='purple' display="inline-flex" width="max-content">Lier une autre wallet</Button>
                    )}
                    </>
                  )}
                  {secondWallet && (
                    <Box backgroundColor='rgba(205, 205, 205, 0.4)' display="inline-flex" alignItems={'center'} gap={3} px={3} borderRadius={7} width="max-content">
                      <Text>
                        MVX
                      </Text>
                      <Text
                        borderLeft="1px solid red"
                        borderRight="1px solid red"
                        px={2}
                        borderColor="rgba(116, 116, 116, 1)"
                      >
                        0x4UD58Hgr4HD68…58WxY37bctUo48e
                      </Text>
                      <Icon as={FaShieldAlt} />
                    </Box>
                  )}
                  {!firstWallet && (
                    <Button onClick={() => setFirstWallet(true)} display="inline-flex" width="max-content" colorScheme='purple'>Lier mon wallet à l'entreprise</Button>
                  )}
                </Box>
              </Box>
            </Box>
            <Box>
              <Heading my={8}>Mes projets</Heading>
              {/* afficher les projets qui corresponde à l'entreprise */}
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Dashboard;