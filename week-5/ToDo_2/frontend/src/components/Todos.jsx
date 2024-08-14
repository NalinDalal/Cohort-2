/* 
todos=[{
    title:"go to gym",
    description:"workout for 1 hour"
}]*/
export function Todos({todos}){
    return <div>    {/* single div element can't have 2 parent div,may have many child */}

        <div>
        <h1>{todo[0].title}</h1>
        <h2>{todo[0].description}</h2>
        <button>{todo[0].completed==true?"Completed":"Mark as Complete"}</button>
        </div>

        <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed==true?"Completed":"Mark as Complete"}</button>
        </div>

        <div>
        {todos.map(function(todo){
            return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed==true?"Completed":"Mark as Complete"}</button>
        </div>
        })}
    </div>
    </div>
}