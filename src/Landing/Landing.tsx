import { Link } from "react-router-dom";
import styles from "./Landing.module.scss";
import globalCss from "../global.module.scss";
import { posts } from "../const/landing";
import { Feature } from "../components/Feature/Feature";

export const Landing = () => {
  return (
    <div className={styles.Body}>
      <div className={styles.banner}>
        <h1 className={`${globalCss.desktopOnly} ${styles.bannerTitle}`}>
          ProSuit - Гидрокостюмы нового поколения
        </h1>
      </div>
      <h1 className={`${globalCss.mobileOnly} ${styles.title}`}>
        ProSuit - <br />
        Гидрокостюмы нового поколения
      </h1>
      <main className={styles.wrapper}>
        {posts.map((post) => (
          <Feature key={Math.random()} {...post} />
        ))}
        <Link to="/products" className={globalCss.prettyButton}>
          Каталог
        </Link>
        <footer className={styles.footer}>
          <span className={styles.clarification}>
            *Доступно в моделях линейки ProSuit Ultra
          </span>
          <div className={styles.footerContent}>
            <div className={styles.sitemap}>
              <h4 className={styles.title}>Информация</h4>
              <Link className={styles.link} to="/products">
                Каталог
              </Link>
              <Link className={styles.link} to="/policy">
                Политика обработки персональных данных
              </Link>
            </div>
            <div className={styles.contacts}>
              <h4 className={styles.title}>Контакты</h4>
              <a href="tel:88005553535" className={styles.link}>
                8 800 555 35 35
              </a>
              <a href="mailto:sales@aquatech.com" className={styles.link}>
                sales@aquatech.com
              </a>
              <h4 className={styles.title}>Для бизнеса</h4>
              <a href="mailto:b2b@aquatech.com" className={styles.link}>
                b2b@aquatech.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
