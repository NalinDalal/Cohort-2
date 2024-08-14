import { PrismaClient } from "@prisma/client";
import {userId} from "./create_user";
const prisma = new PrismaClient();

//todo creation in prisma
export async function create-todo(title: string, description: string,userid:string) {
    await prisma.todo.create({
        userId String @id @default(autoincrement())
title String @unique
        description String

    })
}
