import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

interface LoginFormProps {
    onLogin: (accountData: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const storedAccounts = JSON.parse(localStorage.getItem('companyData') || '[]');

        const matchingAccount = storedAccounts.find((account: any) => {
            return account.email === formData.email && account.password === formData.password;
        });

        if (matchingAccount) {
            onLogin(matchingAccount);
        } else {
            console.error('Identifiants incorrects');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Adresse mail</FormLabel>
                <Input type='email'
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>
            </FormControl>
            <FormControl>
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required/>
            </FormControl>
            <Button my="4" w="100%" type="submit" colorScheme='purple'>Se connecter</Button>
        </form>
    );
};

export default LoginForm;
