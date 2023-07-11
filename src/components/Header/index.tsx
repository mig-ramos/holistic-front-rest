import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href={"/"} activeClassName={styles.active}>
          <Image src={logo} alt="Logo Site Terapia" height={65} width={160} />
        </ActiveLink>
        <nav className={styles.nav}>
          <ActiveLink href="/" activeClassName={styles.active}>
            <span>Home</span>
          </ActiveLink>
          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <span>Sobre</span>
          </ActiveLink>
          <ActiveLink href="/servicos" activeClassName={styles.active}>
            <span>Serviços</span>
          </ActiveLink>
          <ActiveLink href="/localizacao" activeClassName={styles.active}>
            <span>Localização</span>
          </ActiveLink>
          <ActiveLink href="/agenda" activeClassName={styles.active}>
            <span>Agendar horário</span>
          </ActiveLink>
        </nav>
        <button className={styles.headerButton}>Entrar</button>
      </div>
    </header>
  );
}
