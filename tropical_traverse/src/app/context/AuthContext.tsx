import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';

interface Account {
    username: string;
}

interface AccountContextType{
    user: Account | null;
    setUserAccount: (userData: Account) => void;
    logout: () => void;
}

const AccountContext = createContext<AccountContextType>({
    user: null,
    setUserAccount: () => {},
    logout: () => {},
})

const AccountProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<Account | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            try{
                const parsedUser: Account = JSON.parse(storedUser)
                if(parsedUser.username){
                    setUser(parsedUser)
                }
            }catch (error){
                console.error("Failed to parse local storage:", error);
            }
        }
    }, []);
  
    const setUserAccount = (userData: Account) => {
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }
  
    return (
      <AccountContext.Provider value={{user, setUserAccount, logout}}>
        {children}
      </AccountContext.Provider>
    );
  };

const useAccount = () => useContext(AccountContext);


export {AccountProvider, useAccount};