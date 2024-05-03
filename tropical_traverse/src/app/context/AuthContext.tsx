import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';

interface Account {
    username: string;
}

interface AccountContextType{
    user: Account | null;
    setUserAccount: (userData: Account) => void;
}

const AccountContext = createContext<AccountContextType>({
    user: null,
    setUserAccount: () => {},
})

// //Creates default values
// const AccountContext = createContext<{user: Account | null; login: (userData: Account) => void;}>({
//     user: null,
//     login: ()=> {},
// });

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
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    // const login = (userData: Account) => {
    //   localStorage.setItem('user', JSON.stringify(userData));
    //   setUser(userData);
    // };
  
    return (
      <AccountContext.Provider value={{user, setUserAccount}}>
        {children}
      </AccountContext.Provider>
    );
  };

const useAccount = () => useContext(AccountContext);


export {AccountProvider, useAccount};