import { z } from "@hono/zod-openapi";
import { createRoute } from "@hono/zod-openapi";
import { OpenAPIHono } from "@hono/zod-openapi";
//inputs from the user on routes
const ParamsSchema = z.object({
    name: z
        .string()
        .min(1)
        .max(10)
        .openapi({
        params: {
            name: "id",
            in: "path",
        },
        example: "123",
    }),
});
//output schema
const UserSchema = z
    .object({
    id: z.string().min(1).max(10).openapi({
        example: 123,
    }),
    name: z.string().openapi({
        example: "John Doe",
    }),
    age: z.number().openapi({
        example: 42,
    }),
})
    .openapi("User");
const getUserRoute = createRoute({
    method: "get",
    path: "/users/{id}",
    request: {
        params: ParamsSchema,
    },
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: UserSchema,
                },
            },
            description: "Retrieve the user",
        },
    },
});
const app = new OpenAPIHono();
app.openapi(getUserRoute, (c) => {
    const { id } = c.req.valid("param");
    return c.json({
        id,
        age: 20,
        name: "Ultra-man",
    });
});
// The OpenAPI documentation will be available at /doc
app.doc("/doc", {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "My API",
    },
});
export default app;
