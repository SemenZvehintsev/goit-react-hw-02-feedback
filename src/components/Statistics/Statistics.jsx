import { Notification } from "components/Notification/Notification"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <div>
        {total ? <>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p></> : <Notification message="There is no feedback"/>}
    </div>
}