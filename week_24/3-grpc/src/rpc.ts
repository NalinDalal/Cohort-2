import axios from "axios";
interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export async function getTodos(): Promise<Todo[]> {
  const response = await axios.get(" https://sum-server.100xdevs.com/todos");

  let todos = response.data.todos;
  return todos;
}
