import { Link, useParams } from "react-router-dom";
import styles from "./ProductInfo.module.scss";
import globalCss from "../../global.module.scss";
import { useEffect, useState } from "react";
import { Radio } from "../../components/Radio/Radio";
import { products } from "src/const/products";
import { ProductInfo } from "@interfaces/product";

type Gender = "f" | "m";
type Size = "s" | "m" | "l" | "xl";

export const ProductPage = () => {
  const params = useParams();
  const [gender, setGender] = useState<Gender>("m");
  const [size, setSize] = useState<Size>("m");
  const [subtype, setSubtype] = useState<string>("");
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const productType = params.productName;

  const onGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value as Gender);
  };

  const onSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value as Size);
  };

  const onSubtypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtype(e.target.value);
  };

  useEffect(() => {
    const typeInfo = products.find((el) => el.url === productType);
    if (typeInfo) setProduct(typeInfo);
    if (typeInfo?.extra) {
      setSubtype(typeInfo.extra.types[0].code);
    }
  }, [productType]);

  return (
    <div className={styles.ProductInfo}>
      <div className={styles.imageWrapper}>
        <div className={globalCss.mobileOnly}>
        <div className={styles.header}>
          <Link to="/products" className={styles.returnLink} />
          <h1 className={styles.title}>{product?.name}</h1>
        </div>
        </div>
        <img
          alt="Костюм"
          src={`./${productType}/${productType}${
            subtype.length ? `_${subtype}` : ""
          }_${gender}.png`}
          className={styles.image}
        />
      </div>
      <div className={styles.information}>
        <div className={globalCss.desktopOnly}>
        <div className={styles.header}>
          <Link to="/products" className={styles.returnLink} />
          <h1 className={styles.title}>{product?.name}</h1>
        </div>
        </div>
        <div className={styles.group}>
          <p className={styles.groupLabel}>Пол</p>
          <Radio
            id="genderM"
            label="Мужской"
            name="gender"
            value="m"
            checked={gender === "m"}
            onChange={onGenderChange}
          />
          <Radio
            id="genderF"
            label="Женский"
            name="gender"
            value="f"
            checked={gender === "f"}
            onChange={onGenderChange}
          />
        </div>
        <div className={styles.group}>
          <p className={styles.groupLabel}>Размер</p>
          <Radio
            id="S"
            label="S"
            name="size"
            value="s"
            checked={size === "s"}
            onChange={onSizeChange}
          />
          <Radio
            id="M"
            label="M"
            name="size"
            value="m"
            checked={size === "m"}
            onChange={onSizeChange}
          />
          <Radio
            id="L"
            label="L"
            name="size"
            value="l"
            checked={size === "l"}
            onChange={onSizeChange}
          />
          <Radio
            id="XL"
            label="XL"
            name="size"
            value="xl"
            checked={size === "xl"}
            onChange={onSizeChange}
          />
        </div>
        {product?.extra && (
          <div className={styles.group}>
            <p className={styles.groupLabel}>{product.extra.name}</p>
            {product.extra.types.map((el) => (
              <Radio
                name="extra"
                value={el.code}
                id={el.code}
                label={el.name}
                onChange={onSubtypeChange}
                checked={subtype === el.code}
                key={el.code}
              />
            ))}
          </div>
        )}
        <div className={styles.purchase}>
          <button className={globalCss.prettyButton}>Купить</button>
        </div>
        <div className={styles.about}>
          <p className={styles.subtitle}>О продукте</p>
          <p className={styles.description}>{product?.descriptionFull}</p>
          <p className={styles.subtitle}>Особенности</p>
          <ul className={styles.list}>
            {product?.features?.map((el) => (
              <li className={styles.item} key={Math.random()}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
