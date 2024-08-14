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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
//@ts-ignore
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, "secret");
        if (decoded) {
            next();
        }
        else {
            res.status(401).send("Unauthorised");
        }
    });
}
app.get("/", authMiddleware, (req, res) => {
    res.send("You are logged in");
});
app.listen(3000);
