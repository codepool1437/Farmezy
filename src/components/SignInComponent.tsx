// src/components/SignInComponent.tsx
import { useUser } from '@/UserContext';
import { useState } from 'react';

const SignInComponent = () => {
    const { setUser } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission

        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Save user to context
            setUser(data.user); // Ensure this is updating correctly
            localStorage.setItem('user', JSON.stringify(data.user));
        } else {
            setError(data.error || 'Sign-in failed.'); // Set error message
            console.error(data.error);
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInComponent;
