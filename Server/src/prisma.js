import "dotenv/config";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

// 👇 sin opciones, Prisma 7 toma config de prisma.config.ts
const prisma = new PrismaClient();

export default prisma;
