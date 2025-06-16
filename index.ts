export * from './prisma';
import { PrismaClient } from './prisma';

export const prisma = new PrismaClient();

export default prisma;
