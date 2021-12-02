import styles from './welcome.module.css'
export default function Welcome() {
    return <>
        <h2 className ={styles.heading}>Привет, <span className ={styles.underline}>Незнакомец</span> !!!</h2>
    </>
}