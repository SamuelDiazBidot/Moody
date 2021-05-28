import React, { createContext, useState, useEffect } from 'react'

interface User {
    username: string,
    id: number,
    token: string,
}

const AuthContext = createContext([{}, () => {}])

const AuthProvider = ({children}: {children: React.ReactNode} ) => {
    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {
          if(sessionStorage.getItem('state')) {
              let x = sessionStorage.getItem('state')

              if (x == null) {
                setUser(undefined)
              } else {
                setUser(JSON.parse(x.toString()))
              }
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('state', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={[user!, setUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }