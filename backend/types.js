const z = require('zod');

const todo_check_Schema= z.object({
    title: z.string(),
    description: z.string()
})

const id_check_Schema = z.string()

module.exports= {
    todo_check_Schema,
    id_check_Schema
}