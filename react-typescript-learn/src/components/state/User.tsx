import { useState } from "react"
type Authuser = {
    name: string
    email: string
}
export const User = () =>
{
    //mention type using <> usestate<AuthUser | null>(null)
    const [user, setUser] = useState<Authuser>({} as Authuser)
    const handleLogin = () => {
        setUser({
            name: 'baby',
            email: 'baby@gmail.com'
        })
    }
    //const handleLogout = () => {
    //    setUser(null)
    // }
    return (
        <div>
        <button onClick={handleLogin}>Login</button>
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
        </div>
    )
}