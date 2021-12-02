import { useSelector } from "react-redux";
import authSelectors from '../redux/auth/auth-selectors';
import UserMenu from "./UserMenu/UserMenu";
import Welcome from "../views/welcomePage";
export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return <> 
       {isLoggedIn ? <UserMenu/> : <Welcome/>} 
    </>
}