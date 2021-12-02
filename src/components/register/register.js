import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import authOperations from "../../redux/auth/auth-operations";
import styles from './register.module.css';
export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const inputHandler = ({target:{name,value}}) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email': return setEmail(value);
            case 'password': return setPassword(value);
            default:
                return;
    
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setEmail('');
        setName('');
        setPassword('');
    }
    return (
        <>
            <NavLink to ='/' className={styles.link}>На главную</NavLink>
        <div className ={styles.container}>
                <h3 className={styles.heading}>Регистрация</h3>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit} onChange={inputHandler}>
                        <ul>
                <li className = {styles.item}><input name ='name'   placeholder='Имя' value ={name} className ={styles.input}></input></li>
                <li className = {styles.item}><input name= 'email'  placeholder='Почта' value ={email} className ={styles.input}></input></li>
                <li className = {styles.item}><input name='password'  placeholder='Пароль' value ={password} className ={styles.input}></input></li>
                <li className = {styles.item}><button type ='submit' className ={styles.button}>Регистрация</button></li>
                </ul>
                    </form>
                    </div>
        </div>
   </> )
}