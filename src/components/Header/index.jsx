// React Router
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Utils
import { HEADER_SETTINGS } from './utils'

// Styles
import styles from './styles/styles.module.css'

/** The header component that displays the application name and navigation links.
 * @returns {JSX.Element} The header component.
 */
export default function Header() {
    const { pathname } = useLocation()

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h1>HRnet</h1>
                <span>{HEADER_SETTINGS[pathname].pageTitle}</span>
            </div>
            <Link to={HEADER_SETTINGS[pathname].link.to}>
                {HEADER_SETTINGS[pathname].link.content}
            </Link>
        </header>
    )
}
