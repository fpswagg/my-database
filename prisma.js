"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const src_1 = require("./src");
exports.prisma = new src_1.PrismaClient();
exports.default = exports.prisma;
