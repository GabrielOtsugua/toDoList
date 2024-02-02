import "./global.css";
import "./App.css";
import { FaBook, FaPlusCircle } from "react-icons/fa";
import { BsJournalCheck } from "react-icons/bs";
import { Task } from "./components/Task";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  text: string;
}

function App() {
  const [text, setText] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const createTask = () => {
    setTaskList([...taskList, { id: uuidv4(), text: text }]);
    setText("");
  };

  return (
    <>
      <div className="container">
        <header></header>

        <h1>
          <FaBook size={22} /> to<span>do</span>
        </h1>

        <div className="task">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Adicione uma tarefa"
          />
          <button onClick={createTask}>
            <FaPlusCircle size={10} /> Criar
          </button>
        </div>

        <main>
          <section>
            <span className="tarefas-criadas">
              <p>Tarefas criadas</p>
              <span>0</span>
            </span>

            <span className="concluidas">
              <p>Concluídas</p>
              <span>0</span>
            </span>
          </section>

          <div>
            {taskList.map((item) => (
              <Task key={item.id} text={item.text} />
            ))}

            <span className="noTasks">
              <BsJournalCheck
                size={30}
                style={{ margin: "20px", color: "var(--gray-300)" }}
              />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens</span>
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
