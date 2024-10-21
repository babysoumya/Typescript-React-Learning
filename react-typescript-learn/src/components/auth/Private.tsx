import { Login } from "./Login";
import { profileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn : boolean,
    component : React.ComponentType<profileProps>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
    if(isLoggedIn) {
        return <Component name = 'Baby'/>
    }
    else {
        return <Login/>
    }
}