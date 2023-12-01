import styles from "./Radio.module.scss";

export const Radio = ({
  name,
  value,
  label,
  id,
  checked,
  onChange,
}: {
  name: string;
  value: string | number;
  label: string;
  id: string
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return <div className={styles.Radio}>
        <input type="radio" id={id} className={styles.button} name={name} value={value} onChange={onChange} checked={checked} />
        <label htmlFor={id} className={styles.label}>{label}</label>
    </div>
};
