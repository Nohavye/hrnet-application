// Styles
import styles from './styles.module.css'

// Hooks
import { useLocation } from 'react-router-dom'

// Components
import { Link } from 'react-router-dom'

// Constants
import { LOCAL_SETTINGS } from './constants'

export default function Component() {
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
