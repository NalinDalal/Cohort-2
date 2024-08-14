import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const allTodos = await prisma.todo.findMany({
    where: { userId: userId },
    include: { user: true },
  });
  console.log(allTodos);
}
main();
