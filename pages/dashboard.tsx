import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

const Dashboard: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<any | null>(null);

  const handleLogout = () => {
    localStorage.removeItem('currentAccount');
    setConnected(false);
    setCurrentAccount(null);
  };

  useEffect(() => {
    const storedAccount = localStorage.getItem('currentAccount');
    if (storedAccount) {
      setCurrentAccount(JSON.parse(storedAccount));
      setConnected(true);
    }
  }, []);

  return (
    <div>
      {!connected ? (
        <>
          <h2>Connexion</h2>
          <LoginForm onLogin={(accountData) => {
            setCurrentAccount(accountData);
            setConnected(true);
            localStorage.setItem('currentAccount', JSON.stringify(accountData));
          }} />
          <h2>Inscription</h2>
          <RegistrationForm />
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
    </div>
  );
};

export default Dashboard;
