// src/UserContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Fetch user data on component mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/user', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched user:', data.user); // Debug log
                    setUser(data.user); // Assuming the API returns { user: { id, name, email } }
                } else {
                    console.error('Failed to fetch user:', response.status, response.statusText);
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
