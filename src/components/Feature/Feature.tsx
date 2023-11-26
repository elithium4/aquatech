import { LandingPost } from "@interfaces/landing";
import styles from "./Feature.module.scss";
import globalCss from "../../global.module.scss";

export const Feature = ({ imgUrl, imgAlt, title, listItems }: LandingPost) => {
  return (
    <section className={styles.info}>
      <div className={styles.pictureWrapper}>
        <img
          className={styles.picture}
          src={`./${imgUrl}`}
          alt={imgAlt}
        />
        <h2 className={`${globalCss.mobileOnly} ${styles.title}`}>{title}</h2>
      </div>
      <div className={styles.content}>
        <h2 className={`${globalCss.desktopOnly} ${styles.title}`}>{title}</h2>
        <ul className={styles.list}>
          {listItems.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
