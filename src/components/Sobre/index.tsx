import Image from "next/image";
import imgSobre from "/public/images/female.svg";
import styles from "./styles.module.scss";

type SobreProps = {
    titulo: string;
    subTitulo?: string;
}

export function Sobre(props: SobreProps) {
  return (
    <section className={styles.sobre}>
      <Image src={imgSobre} alt="Imagem Hero" className={styles.img} />  
      <div className={styles.titulo}>
      <h1>{props.titulo}</h1>
      <p>{props.subTitulo}</p>
      </div>      
    </section>
  );
}