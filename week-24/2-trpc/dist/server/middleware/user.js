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
exports.isLoggedIn = void 0;
const server_1 = require("@trpc/server");
const trpc_1 = require("../trpc");
exports.isLoggedIn = (0, trpc_1.middleware)((opts) => __awaiter(void 0, void 0, void 0, function* () {
    const { ctx } = opts;
    if (!ctx.userId) {
        throw new server_1.TRPCError({ code: 'UNAUTHORIZED' });
    }
    let user = yield ctx.db.User.findOne({
        username: ctx.userId
    });
    return opts.next({
        ctx: {
            user
        },
    });
}));
