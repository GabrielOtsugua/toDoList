import "../global.css";
import styles from "./Task.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  text: string;
}

export function Task({ text }: TaskProps) {
  return (
    <div className={styles.div}>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" />
        <p className={styles.p}>{text}</p>
      </label>

      <span className={styles.trashBox}>
        <FaRegTrashAlt className={styles.trash} />
      </span>
    </div>
  );
}
