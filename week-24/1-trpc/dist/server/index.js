"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const standalone_1 = require("@trpc/server/adapters/standalone"); // to serve the api
const todoInputType = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string().optional(),
});
const todoInputType2 = zod_1.z.object({ email: zod_1.z.string(), password: zod_1.z.string() });
const appRouter = (0, trpc_1.router)({
    // ... procedures defined here
    createTodo: trpc_1.publicProcedure.input(todoInputType).mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const title = opts.input.title;
        const description = opts.input.description;
        // do db stuff here
        return {
            id: "1",
        };
    })),
    signUp: trpc_1.publicProcedure.input(todoInputType2).mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const email = opts.input.email;
        const password = opts.input.password;
        // do db stuff here
        // do validation here
        let token = "token";
        return {
            token,
        };
    })) /*
    createTodo: publicProcedure
      .input(z.object({ title: z.string() }))
      .mutation(async (opts) => {
        console.log("hi there");
      }),*/,
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        console.log(authHeader);
        return {
            authHeader,
            username: "username",
        };
    },
});
server.listen(3000);
