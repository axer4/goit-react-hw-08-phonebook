import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import styles from './homepage.module.css';
export default function HomePage() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return <>
        <div className = {styles.home}>
        <NavLink to='/register' exact className ={styles.link}><p className ={styles.register}>Регистрация</p></NavLink>
        <NavLink to='/login' exact className ={styles.link} activeClassName ={styles.activeLink}><p className={styles.login}>Логин</p></NavLink>
            {isLoggedIn && <NavLink to='/contacts' className ={styles.link} activeClassName = {styles.activeLink}><p className ={styles.contacts}>Контакты</p></NavLink>}
        </div>    
        </>
}