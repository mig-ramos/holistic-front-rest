import styles from "./styles.module.scss";

type AgendarProps = {
    titulo?: string;
    subTitulo?: string;
}

export function Agendar(props: AgendarProps) {
  return (
    <div className={styles.agendar}>  
      <div className={styles.titulo}>
      <h1>{props.titulo}</h1>
      <p>{props.subTitulo}</p>
      </div>  
      <button>Agende seu horário!</button>   
    </div>
  );
}