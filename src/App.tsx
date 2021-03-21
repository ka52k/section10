import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo"

// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // console.log(res);
        // res.data.map((todo) => todo.title)
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // <p>{todo.title}</p>
        <Todo
          key={todo.id}
          title={todo.title} 
          userId={todo.userId} 
          completed={todo.completed} 
        />
      ))}
    </div>
  );
}
