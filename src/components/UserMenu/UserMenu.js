import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import { useSelector, useDispatch } from "react-redux";
import styles from './userMenu.module.css';
export default function UserMenu() {
    const userEmail = useSelector(authSelectors.getUserEmail);
    const dispatch = useDispatch();
    return <>
        <div className ={styles.container}>
        <h2 className ={styles.heading}>Welcome,{userEmail}</h2>
            <button type="button" onClick={() => dispatch(authOperations.logOut())} className ={styles.button}>Выйти</button>
            </div>
    </>
}