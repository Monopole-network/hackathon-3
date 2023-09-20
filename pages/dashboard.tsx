import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import { Box, Button, CloseButton, Flex } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<any | null>(null);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState<boolean>(false);

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
              <CloseButton onClick={handleCloseForm} size='lg' ms="auto"/>
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
            <h2>Informations de l'entreprise</h2>
            <p>Nom de l'entreprise : {currentAccount?.companyName}</p>
            <p>SIRET : {currentAccount?.companySiret}</p>
            <p>Email : {currentAccount?.email}</p>
            <button onClick={handleLogout}>Se déconnecter</button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Dashboard;
