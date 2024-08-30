const express = require("express")
const app= express()
const {todo_check_Schema, id_check_Schema} = require("./types")
const {Todo} = require("./db")

const PORT = 3000


app.use(express.json())


app.post('/todo',async (req, res) => {
    
    const payload = req.body
    const todo_check= todo_check_Schema.safeParse(payload)

    if(!todo_check.success){
        res.status(403).json({
            msg: "invalid input type"
        })
        return 
    }

    


})

app.get('/todo',(req,res) => {

})

app.put('/completed',async (req,res)=>{
    const id= req.body.id

    const id_check=id_check_Schema.safeParse(id)

    if(id_check.success){
        res.json({
            msg: "Valid id "
        })
    }else{
        res.status(403).json({
            msg:"Invalid id"
        })
    }

})



app.listen(PORT, ()=>{
    console.log(`Server live on port: ${PORT}`)
})