import { Notification } from "components/Notification/Notification";
import styles from 'components/Statistics/Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <div className={styles.wrapper}>
        {total ? <>
        <h2 className={styles.title}>Statistics</h2>
        <ul className={styles.list}>
            <li><p>Good: {good}</p></li>
            <li><p>Neutral: {neutral}</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: {total}</p></li>
            <li><p>Positive feedback: {positivePercentage}%</p></li>
        </ul>    
        </> : <Notification message="There is no feedback"/>}
    </div>
}