import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import { Box, Button, ButtonGroup, CloseButton, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';
import { FaCreditCard, FaShieldAlt, FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/router';


const Dashboard: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<any | null>(null);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState<boolean>(false);
  const [firstWallet, setFirstWallet] = useState<boolean>(false);
  const [secondWallet, setSecondWallet] = useState<boolean>(false);
  const [accountBank, setAccountBank] = useState<boolean>(false);

  const router = useRouter();

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

    const storedFirstWallet = localStorage.getItem('firstWallet');
    const storedSecondWallet = localStorage.getItem('secondWallet');
    const storedAccountBank = localStorage.getItem('accountBank');
    if (storedFirstWallet) {
      setFirstWallet(JSON.parse(storedFirstWallet));
    }
    if (storedSecondWallet) {
      setSecondWallet(JSON.parse(storedSecondWallet));
    }
    if (storedAccountBank) {
      setAccountBank(JSON.parse(storedAccountBank));
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

  const handleFirstWalletClick = () => {
    setFirstWallet(true);
    localStorage.setItem('firstWallet', JSON.stringify(true));
  };

  const handleSecondWalletClick = () => {
    setSecondWallet(true);
    localStorage.setItem('secondWallet', JSON.stringify(true));
  };

  const handleAccountBankClick = () => {
    setAccountBank(true);
    localStorage.setItem('accountBank', JSON.stringify(true));
  };

  const handleRemoveFirstWallet = () => {
    setFirstWallet(false);
    localStorage.removeItem('firstWallet');
  };
  
  const handleRemoveSecondWallet = () => {
    setSecondWallet(false);
    localStorage.removeItem('secondWallet');
  };
  
  const handleRemoveAccountBank = () => {
    setAccountBank(false);
    localStorage.removeItem('accountBank');
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
                    <h2>Customer</h2>
                    <Box display="flex" gap={5} mx="auto">
                      <Button>Sign In</Button>
                      <Button>Sign Up</Button>
                    </Box>
                  </Box>
                  <Box display="flex" mx="auto" flexDirection="column" gap={3}>
                    <h2>Company</h2>
                    <Box display="flex" gap={5} mx="auto">
                      <Button onClick={handleLoginClick}>Sign In</Button>
                      <Button onClick={handleRegistrationClick}>Sign Up</Button>
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
                  {accountBank && (
                    <Box backgroundColor='rgba(205, 205, 205, 0.4)' display="inline-flex" alignItems={'center'} gap={3} px={3} borderRadius={7} width="max-content">
                      <Text>
                        AXA
                      </Text>
                      <Text
                        borderLeft="1px solid red"
                        borderRight="1px solid red"
                        px={2}
                        borderColor="rgba(116, 116, 116, 1)"
                      >
                        ... 5912
                      </Text>
                      <Icon as={FaCreditCard} />
                      <Button onClick={handleRemoveAccountBank} colorScheme="red" variant="link">
                        <Icon height="12px" width="12px" as={FaTrash}/>
                      </Button>
                    </Box>
                  )}
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
                      <Button onClick={handleRemoveFirstWallet} colorScheme="red" variant="link">
                        <Icon height="12px" width="12px" as={FaTrash}/>
                      </Button>
                    </Box>
                    {!secondWallet && (
                      <Button onClick={handleSecondWalletClick} colorScheme='purple' display="inline-flex" width="max-content">Lier une autre wallet</Button>
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
                      <Button onClick={handleRemoveSecondWallet} colorScheme="red" variant="link">
                        <Icon height="12px" width="12px" as={FaTrash}/>
                      </Button>
                    </Box>
                  )}
                  {!firstWallet && (
                    <Button onClick={handleFirstWalletClick} display="inline-flex" width="max-content" colorScheme='purple'>Link my wallet to the company</Button>
                  )}
                  {!accountBank && (
                    <Button onClick={handleAccountBankClick} display="inline-flex" width="max-content" colorScheme='purple'> Link a bank account to the company</Button>
                  )}
                </Box>
              </Box>
            </Box>
            <Box>
              <Heading my={8}>My projects</Heading>
              <Button onClick={() => router.push('./create_project') } display="inline-flex" width="max-content" colorScheme='purple'>Create a project</Button>
              {/* afficher les projets qui appartiennent à l'entreprise */}
              {/* si pas de projet, bouton pour en créer un */}
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Dashboard;
