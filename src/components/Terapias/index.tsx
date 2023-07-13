import { Terapia } from "../Terapia";
import styles from "./styles.module.scss";

type TerapiasProps = {
    titulo: string;
    subTitulo?: string;
}

export function Terapias() {
  return (
    <div className={styles.terapias}>
      <Terapia titulo="Reiki" subTitulo="O Reiki consiste na manipulação das energias a partir da imposição de mãos sem que essas realmente toquem o paciente."/>
      <Terapia titulo="Massoterapia" subTitulo="As Massoterapias se fundamentam na aplicação de movimentos e pressões sobre pontos gatilhos para o alívio do estresse e de ‘nodos’ de rigidez muscular, causando sensação de prazer e relaxamento." />
      <Terapia titulo="Herbologia" subTitulo="A herbologia baseia-se no meio mais ancestral de tratamento, o uso de plantas medicinais. Existe um longo catálogo contendo as ervas, flores, sementes, folhas, caules e raízes, que podem ser usadas como fontes terapêuticas, assim como os efeitos medicinais que apresentam. " />
    </div>
  );
}