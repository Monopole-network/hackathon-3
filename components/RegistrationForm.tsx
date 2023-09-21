import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const RegistrationForm: React.FC = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        companyName: '',
        companySiret: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (accountData: any) => {
        localStorage.setItem('currentAccount', JSON.stringify(accountData));
        window.location.reload();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const existingData = JSON.parse(localStorage.getItem('companyData') || '[]');

        const isSiretUsed = existingData.some((data: any) => data.companySiret === formData.companySiret);
        const isEmailUsed = existingData.some((data: any) => data.email === formData.email);

        if (isSiretUsed) {
            setErrorMessage('Le SIRET est déjà utilisé.');
        } else if (isEmailUsed) {
            setErrorMessage('L\'adresse e-mail est déjà utilisée.');
        } else {
            existingData.push(formData);
            localStorage.setItem('companyData', JSON.stringify(existingData));
            handleLogin(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input 
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            <FormControl>
                <FormLabel>SIRET</FormLabel>
                <Input 
                    type="text"
                    id="companySiret"
                    name="companySiret"
                    value={formData.companySiret}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input 
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            <Button my="4" w="100%" type="submit" colorScheme='purple'>Sign Up</Button>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
};

export default RegistrationForm;
