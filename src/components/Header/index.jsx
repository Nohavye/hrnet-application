// React Router
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Utils
import { LOCAL_SETTINGS } from './utils'

// Styles
import styles from './styles/styles.module.css'

// Header component
export default function Header() {
    const { pathname } = useLocation()

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h1>HRnet</h1>
                <span>{LOCAL_SETTINGS[pathname].pageTitle}</span>
            </div>
            <Link to={LOCAL_SETTINGS[pathname].link.to}>
                {LOCAL_SETTINGS[pathname].link.content}
            </Link>
        </header>
    )
}
