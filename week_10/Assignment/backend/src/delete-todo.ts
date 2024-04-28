import { PrismaClient } from "@prisma/client";
export async function deleteTodo(title: string, description: string,userid:string) {
    await prisma.todo.delete({
    delete todos
        userId String @id @default(autoincrement())
        title String @unique
        description String
    })
};

