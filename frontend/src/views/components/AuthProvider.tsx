import React, { createContext, useState, useEffect } from 'react'

interface User {
    username: string,
    id: number,
    token: string,
}

const AuthContext = createContext<[User | null, React.Dispatch<React.SetStateAction<User | null>>]>([null, () => {}])

const AuthProvider = ({children}: {children: React.ReactNode} ) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
          if(sessionStorage.getItem('state')) {
              let x: string | null = sessionStorage.getItem('state')

              if (x !== null) {
                let y: User = JSON.parse(x!.toString())
                setUser(y)
              }
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('state', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }