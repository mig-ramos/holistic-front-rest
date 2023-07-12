import styles from "./styles.module.scss";

export function Footer() {
  return (
    <header className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 siderbit.dev | Orgulhosamente criado por Miguel</p>
      </div>
    </header>
  );
}
