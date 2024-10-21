import { useContext } from "react"
import {  UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
            userContext.setUser({
                name: 'Vishwas',
                email: 'vishwas@example.com'
            })
    }
    const handleLogout = () => {
            userContext.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username is {userContext.user?.name}</div>
            <div>Useremail is {userContext.user?.email}</div>
        </div>
    )
}