import styles from "./styles.module.scss";

export function Contato() {
  return (
    <section className={styles.contatoContainer}>
      <h2>Se preferir entre em contato:</h2>
      <div className={styles.contatoContent}>
        <div className={styles.contatoItem}>
          <p>Av Paulista, 000 - Pinheiros - SP</p>
          <p>11 3844-6655</p>
          <p>terapeuta@teste.com</p>
          <p>das 09h às 16h</p>
        </div>
        <div className={styles.contatoItem}>
          <p>Querendo entrar em contato pelo Watsapp:</p>
          <p>(XX) XXXXX-XXXX</p>
          <p>GOOGLE MAP</p>
        </div>
      </div>
    </section>
  );
}
