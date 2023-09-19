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

        // Récupérer les données du localStorage
        const storedAccounts = JSON.parse(localStorage.getItem('companyData') || '[]');

        // Vérifier si le courriel et le mot de passe correspondent à un compte
        const matchingAccount = storedAccounts.find((account: any) => {
            return account.email === formData.email && account.password === formData.password;
        });

        if (matchingAccount) {
            // Si un compte correspond, déclencher la fonction onLogin avec les données du compte
            onLogin(matchingAccount);
        } else {
            // Si aucune correspondance n'est trouvée, afficher un message d'erreur
            console.error('Identifiants incorrects');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default LoginForm;
