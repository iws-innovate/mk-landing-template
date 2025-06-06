import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Fale com a gente</h2>
      <p>Quer um site como esse? Fale conosco pelo WhatsApp.</p>
      <a
        href="https://wa.me/55SEUNUMERO?text=Olá%2C+gostei+do+template+MK+Consultoria%2C+podemos+conversar%3F"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Solicitar orçamento
      </a>
    </section>
  );
}
