import { useState } from "react"


export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [des, setDes]= useState("")

    return (
        <div>
            <input type="text" placeholder="Title" onChange={function(e){
                setTitle(e.target.value)
            }}></input><br></br>
            <input type="text" placeholder="Description" onChange={function(e){
                setDes(e.target.value)
            }}></input><br></br>
            <button onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body: JSON.stringify({
                        title: title,
                        description: des
                    }),
                    headers:{
                        "Content-type": "application/json"
                    }
                })
                    .then(async function (res) {
                        const json = await res.json();
                        alert("Todo added")
                    })
            }}>Add To Do</button>
        </div>
    )
}

// module.exports = CreateTodo