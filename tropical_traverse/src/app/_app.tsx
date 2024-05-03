import{AppProps} from 'next/app'
import{AccountProvider} from './context/AuthContext'

const MyApp = ({Component, pageProps}: AppProps) => {
    return(
        <AccountProvider>
            <Component{...pageProps}/>
        </AccountProvider>
    );
};

export default MyApp;