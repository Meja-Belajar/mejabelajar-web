import React, { createContext, useEffect, useState } from 'react'
import { getLive, getUser } from '../../api/api';
import { Live, User } from '../interface/Interface';

interface Children {
  children: React.ReactNode
}

const UserContext = createContext({})

const UserProvider = ( { children } : Children ) => {
  // loading state
  const [isLoad, setLoad] = useState<boolean>(true);

  const [user, setUser] = useState<User>()
  const [live, setlive] = useState<Live>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setUser(userData);

        const liveData = await getLive();
        setlive(liveData);

        // console.log(userData); 
        // console.log(liveData); 

        setLoad(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const context = {
    user,
    live
  }


  if(isLoad) return ( <div> loading </div> )
  else return (
    <UserContext.Provider value={ context }>
      {children}  
    </UserContext.Provider>
  )
}

export {
  UserContext,
  UserProvider
}
