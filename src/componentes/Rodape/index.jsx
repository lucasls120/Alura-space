import styles from './Rodape.module.scss'
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

export default function Rodape () {
  return(
    <footer className={styles.Rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <div className={styles.lucas}>
        <h2> Feito por Lucas Soares, Junto com a escola de programação da Alura. </h2>
      </div>
    </footer>
  )
}