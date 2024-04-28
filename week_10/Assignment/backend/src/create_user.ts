import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//user creation in prisma
export async function create_user(username: string, email: string, password: string,userid:string,firstname:string,lastname:string) {
    await prisma.user.create({
    userId String @id @default(autoincrement())
    username String @unique
    email String @unique
    password String
    })
}
