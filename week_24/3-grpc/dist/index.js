import { getTodos } from "./rpc";
const todos = await getTodos();
console.log(todos);
