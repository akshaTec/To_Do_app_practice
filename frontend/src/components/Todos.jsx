
export function Todos({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button>{todo.done? "Done": "Mark as done"}</button>
            </div>
        })}
    </div>
}