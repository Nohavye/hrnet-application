// Styles
import styles from './styles/styles.module.css'

/** A page wrapper component for enclosing the content of a page.
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The content to be wrapped by the page wrapper.
 * @returns {JSX.Element} The page wrapper component.
 */
export default function PageWrapper({ children }) {
    return <div className={styles.wrapper}>{children}</div>
}
