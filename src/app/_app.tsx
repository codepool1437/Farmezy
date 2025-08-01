import { AppProps } from 'next/app'; // Import the AppProps type
import { UserProvider } from '@/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
