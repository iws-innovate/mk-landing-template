import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2>Nossos Serviços</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Landing Pages</h3>
          <p>
            Páginas rápidas e responsivas, criadas sob medida para capturar leads e apresentar serviços de forma profissional.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Integrações com WhatsApp</h3>
          <p>
            Adicione botões de contato inteligente para facilitar conversões em seu site já existente.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Otimização e Manutenção</h3>
          <p>
            Correção de bugs, melhorias de desempenho, ajustes de layout e manutenção contínua com suporte confiável.
          </p>
        </div>
      </div>
    </section>
  );
}
