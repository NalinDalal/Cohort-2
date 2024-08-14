import axios from "axios";
export async function getTodos() {
    const response = await axios.get(" https://sum-server.100xdevs.com/todos");
    let todos = response.data.todos;
    return todos;
}
