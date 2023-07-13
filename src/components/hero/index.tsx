import Image from "next/image";
import imgHero from "/public/images/img-02.jpg";
import styles from "./styles.module.scss";

type HeroProps = {
    titulo: string;
    subTitulo?: string;
}

export function Hero(props: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.titulo}>
      <h1>{props.titulo}</h1>
      <p>{props.subTitulo}</p>
      </div>     
        <Image src={imgHero} alt="Imagem Hero" className={styles.img} />   
    </div>
  );
}
