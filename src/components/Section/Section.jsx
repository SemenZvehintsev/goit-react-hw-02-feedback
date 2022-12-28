import styles from 'components/Section/Section.module.css'

export const Section = ({title, children}) => {
    return <><div className={styles.section}>
    <h1>{title}</h1>
    {children}
    </div>
    </>
}