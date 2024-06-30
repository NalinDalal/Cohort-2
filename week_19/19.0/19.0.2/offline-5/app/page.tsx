/* export default function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const data = await response.json();
  return (
    <div>
      {data.todos.map((todo: any) => (
        <div>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
*/

export default async function Blog() {
  const res = await fetch("https://sum-server.100xdevs.com/todos");

  /*
  //Clear cache every 10 seconds
  const res = await fetch('https://sum-server.100xdevs.com/todos', {
    next: { revalidate: 10 }
});
  */

  /*
  //Clear cache in a next action
  import { revalidateTag } from 'next/cache'

const res = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })
  */

  const data = await res.json();
  const todos = data.todos;

  console.log("todos");
  return (
    <div>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
