import styles from "./Products.module.scss";
import { ProductPreview } from "../components/ProductPreview/ProductPreview";
import { products } from "../const/products";

export const Products = () => {
  return (
    <div className={styles.Products}>
      {products.map((item) => (
        <ProductPreview key={Math.random()} {...item} />
      ))}
    </div>
  );
};
