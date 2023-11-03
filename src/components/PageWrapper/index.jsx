// Styles
import styles from './styles/styles.module.css'

// PageWrapper component
export default function PageWrapper({ children }) {
    return <div className={styles.wrapper}>{children}</div>
}
