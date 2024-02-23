const zod=require("zod");

const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo=zod.object({
    id:zod.string(),
})

// export this from file
module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}
/*
{
    title: string,
    description: string,
}
{
    id:string,
}
*/