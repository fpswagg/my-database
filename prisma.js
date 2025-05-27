"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const src_1 = require("./src");
exports.prisma = global.prisma || new src_1.PrismaClient();
if (process.env.NODE_ENV !== 'production') {
    global.prisma = exports.prisma;
}
exports.default = exports.prisma;
