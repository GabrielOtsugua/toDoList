import { Dispatch, SetStateAction } from "react";
import "../global.css";
import styles from "./Task.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

interface Task {
  id: string;
  text: string;
}

interface TaskProps {
  id: string;
  text: string;
  taskList: Task[];
  setTaskList: Dispatch<SetStateAction<Task[]>>;
}

export function Task({ id, text, taskList, setTaskList }: TaskProps) {
  const deleteTask = () => {
    const listWithoutTheTask = taskList.filter((task) => task.id !== id);
    setTaskList(listWithoutTheTask);
  };

  return (
    <div className={styles.div}>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" />
        <p className={styles.p}>{text}</p>
      </label>

      <span onClick={deleteTask} className={styles.trashBox}>
        <FaRegTrashAlt className={styles.trash} />
      </span>
    </div>
  );
}
