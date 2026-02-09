import { useState, useEffect } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ onCalcula }) => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const validaInput = (valor, setter) => {
    const num = parseFloat(valor);
    if (num > 0 || valor === "") {
      setter(num);
    } else {
      setter(0);
    }
  };

  useEffect(() => {
    if (peso > 0 && altura > 0) {
      const alturaMetros = altura > 3 ? altura / 100 : altura;
      const resultado = peso / (alturaMetros * alturaMetros);
      onCalcula(resultado);
    } else {
      onCalcula(0);
    }
  }, [peso, altura, onCalcula]);

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label>Altura (m ou cm)</label>
        <input 
          type="number" 
          step="0.01"
          min="0"
          placeholder="Ex: 1.75" 
          onChange={e => validaInput(e.target.value, setAltura)} 
        />
      </div>
      <div className={styles.field}>
        <label>Peso (kg)</label>
        <input 
          type="number" 
          step="0.1"
          min="0"
          placeholder="Ex: 75.5" 
          onChange={e => validaInput(e.target.value, setPeso)} 
        />
      </div>
    </form>
  );
};

export default Formulario;