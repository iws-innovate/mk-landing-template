import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} MK Consultoria.  
        Site modelo criado por <a href="https://innovasolutions.dev" target="_blank" rel="noreferrer">Innovate</a>.
      </p>
    </footer>
  );
}
