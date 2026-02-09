import styles from './Tabela.module.css';

const Tabela = ({ imcAtual }) => {
    const getDestaque = (min, max) => {
        if (max) {
            return imcAtual >= min && imcAtual <= max ? styles.destaque : '';
        }
        return imcAtual >= min ? styles.destaque : '';
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr className={imcAtual > 0 && imcAtual < 18.5 ? styles.destaque : ''}>
                    <td>Menor que 18,5</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr className={getDestaque(18.5, 24.9)}>
                    <td>18,5 - 24,9</td>
                    <td>Peso normal (Eutrofia)</td>
                </tr>
                <tr className={getDestaque(25.0, 29.9)}>
                    <td>25,0 - 29,9</td>
                    <td>Sobrepeso (Pré-obesidade)</td>
                </tr>
                <tr className={getDestaque(30.0, 34.9)}>
                    <td>30,0 - 34,9</td>
                    <td>Obesidade Grau I</td>
                </tr>
                <tr className={getDestaque(35.0, 39.9)}>
                    <td>35,0 - 39,9</td>
                    <td>Obesidade Grau II (Severa)</td>
                </tr>
                <tr className={getDestaque(40, null)}>
                    <td>Maior ou igual a 40</td>
                    <td>Obesidade Grau III (Mórbida)</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Tabela;