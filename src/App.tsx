// src/app/MyApp.tsx
import { UserProvider } from '@/UserContext'; // Adjust the import path as necessary

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
