import { useState } from "react";
import { ProductInfo } from "../../interfaces/product";
import styles from "./ProductPreview.module.scss";
import { Link } from "react-router-dom";

export const ProductPreview = ({
  previewUrl,
  name,
  description,
  expandColor,
  url
}: ProductInfo) => {
  const [isHovered, setHovered] = useState(false);
  const hoveredStyle = {
    background: `linear-gradient(to right, ${expandColor} 50%, #000100 0)`,
    backgroundSize: "200% 100%",
    backgroundPosition: "right",
  };

  return (
    <Link
    to={`/products/${url}`}
      className={styles.ProductPreview}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={`./${previewUrl}`} alt={name} className={styles.image} />
      <div className={styles.textBlock} style={isHovered ? hoveredStyle : {}}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
