import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
//1. insert data
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data: {
//         username,
//         password,
//         firstName,
//         lastName
//     }
//   })
//   console.log(res);
// }

// insertUser("admin1", "123456", "nalin", "dalal")

output:
{
  id: 1,
  username: 'admin1',
  password: '123456',
  firstName: 'nalin',
  lastName: 'dalal'
}

*/

/* 
//2. update data
interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
})


output:
{
  id: 1,
  username: 'admin1',
  password: '123456',
  firstName: 'new name',
  lastName: 'singh'
}
*/
async function getUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    console.log(user);
}

getUser("admin1");