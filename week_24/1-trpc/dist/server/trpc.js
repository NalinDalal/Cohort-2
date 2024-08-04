"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure1 = exports.router1 = exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create(); //initialise the trpc server, only once per backend
exports.router = t.router; //export reuable router, procedure etc
exports.publicProcedure = t.procedure;
const t1 = server_1.initTRPC
    .context()
    .create();
exports.router1 = t1.router;
exports.publicProcedure1 = t1.procedure;
