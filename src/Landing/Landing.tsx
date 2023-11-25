import { Link } from "react-router-dom";
import styles from "./Landing.module.scss";

export const Landing = () => {
  return (
    <div className={styles.Body}>
      <header className={styles.header}>
        <h2 className={styles.logoName}>AquaTech</h2>
        <div className={styles.subheader}>погружения будущего</div>
      </header>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          ProSuit - Гидрокостюмы нового поколения
        </h1>
      </div>
      <main className={styles.wrapper}>
        <section className={styles.info}>
          <img
            className={styles.picture}
            src="./aquatech/sensors.png"
            alt="Датчики"
          />
          <div className={styles.content}>
            <h2 className={styles.title}>20+ датчиков по всему телу</h2>
            <ul className={styles.list}>
              <li>
                Определение глубины погружения, подводного давления и
                температуры окружающей среды
              </li>
              <li>Мониторинг пульса и температуры</li>
              <li>Мониторинг уровня кислорода в крови</li>
              <li>Определение геопозиции</li>
            </ul>
          </div>
        </section>
        <section className={styles.info}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Контроль и безопасность во время погружения
            </h2>
            <ul className={styles.list}>
              <li>Уведомление в случае критического значения показателей</li>
              <li>Кнопка вызова помощи прямо в костюме</li>
              <li>
                Возможность передачи данных на компьютер или телефон в радиусе
                километра
              </li>
            </ul>
          </div>
          <img
            className={styles.picture}
            src="./aquatech/diver.png"
            alt="Дайвер"
          />
        </section>
        <section className={styles.info}>
          <img
            className={styles.picture}
            src="./aquatech/smartdive.png"
            alt="Очки SmartDive"
          />
          <div className={styles.content}>
            <h2 className={styles.title}>Система SmartDive*</h2>
            <ul className={styles.list}>
              <li>Подводная дополненная реальность</li>
              <li>
                Просматривайте информацию об окружении в реальном времени прямо
                на маске
              </li>
              <li>
                Моментально определяйте морских обитателей, которых встретите
              </li>
              <li>Запечатлите то, что видите, с помощью встроенных камер</li>
              <li>Будущее в настоящем</li>
            </ul>
          </div>
        </section>
        <Link to="/catalog" className={styles.mainLink}>Каталог</Link>
        <footer className={styles.footer}>
          <span className={styles.clarification}>
            *Доступно в премиальных моделях
          </span>
          <div className={styles.footerContent}>
            <div className={styles.sitemap}>
              <h4>Информация</h4>
              <Link className={styles.link} to="/catalog">
                Каталог
              </Link>
              <Link className={styles.link} to="/policy">
                Политика обработки персональных данных
              </Link>
            </div>
            <div className={styles.contacts}>
              <h4>Контакты</h4>
              <div className={styles.link}>8 800 555 35 35</div>
              <div className={styles.link}>sales@aquatech.com</div>
              <h4>Для бизнеса</h4>
              <div className={styles.link}>b2b@aquatech.com</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
