import { useState } from "react"
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import authOperations from "../../redux/auth/auth-operations";
import styles from './login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
   const inputHandler = ({target : {name,value}}) => {
       switch (name) {
           case 'email':
                return setEmail(value)
           case 'password':
               return setPassword(value)
           default:
               return;
       }
    }
    const handlerSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    }
    return (<>
        <NavLink to ='/' className = {styles.link}>На главную</NavLink>
        <div className ={styles.container}>
            <form onChange={inputHandler} onSubmit={handlerSubmit}>
                <ul>
                <li className={styles.item}><input placeholder='Почта' name ='email' value ={email} className ={styles.input}></input></li>
                <li className={styles.item}><input placeholder='Пароль' name = 'password' value ={password} className ={styles.input} ></input></li>
                <li className={styles.item}><button type = 'submit' className ={styles.button}>Войти</button></li>
                </ul>
            </form>
        </div>
   </> )
}