import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Calculadora de IMC</h1>
            <p className={styles.descricao}>
                Insira seu peso e altura abaixo para descobrir seu Índice de Massa Corporal e ver em qual categoria você se enquadra.
            </p>
        </header>
    );
};

export default Header;