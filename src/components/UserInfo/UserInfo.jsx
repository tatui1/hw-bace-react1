import styles from './styles.model.css'

export const UserInfo = (props) => {
    const {value, title} = props
    return (
        <div className={styles.block}>
            {title}: {value}
        </div>
    )
}