import { Link } from 'react-router-dom'
import styles from './Header.module.css'

/*O componete Link é componete do reac route dom, ela veio para subistituir o a do html */

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Esmael Adriano</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header
