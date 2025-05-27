"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// src/prisma.ts
const client_1 = require("@prisma/client");
exports.prisma = (_a = global.prisma) !== null && _a !== void 0 ? _a : new client_1.PrismaClient();
if (process.env.NODE_ENV !== 'production')
    global.prisma = exports.prisma;
exports.default = exports.prisma;
