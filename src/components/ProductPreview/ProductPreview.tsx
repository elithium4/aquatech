import { useState } from "react";
import { ProductShort } from "../../interfaces/product";
import styles from "./ProductPreview.module.scss";

export const ProductPreview = ({
  previewUrl,
  name,
  description,
  expandColor
}: ProductShort) => {
  const [isHovered, setHovered] = useState(false);
  const hoveredStyle = {
    background: `linear-gradient(to right, ${expandColor} 50%, #000100 0)`,
    backgroundSize: "200% 100%",
    backgroundPosition: "right",
  };

  return (
    <div
      className={styles.ProductPreview}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={`./aquatech/${previewUrl}`} alt={name} className={styles.image} />
      <div className={styles.textBlock} style={isHovered ? hoveredStyle : {}}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
