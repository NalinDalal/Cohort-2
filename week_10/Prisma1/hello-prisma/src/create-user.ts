import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            //title:"title of post",
            //content:'content of post',
            name: 'Nalin',
            email: 'nalindalal2004@gmsil.com'
        }
    }) // This will create a new user in the database
}

main()