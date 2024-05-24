import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
try{
  const body = await c.req.json();
 const { email, password } = body;
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json(App{jwt: token});}
  
  catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
});

userRouter.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
try{
  const body = await c.req.json();
    const { email, password } = body;
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
  }catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
});
