-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SORTEIO', 'PRESENCA', 'PREMIOS');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'SORTEIO',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sorteio" (
    "id" SERIAL NOT NULL,
    "premioId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,

    CONSTRAINT "Sorteio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "presente" BOOLEAN NOT NULL DEFAULT false,
    "sorteado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Premios" (
    "id" SERIAL NOT NULL,
    "premio" TEXT NOT NULL,
    "sorteado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Premios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- AddForeignKey
ALTER TABLE "Sorteio" ADD CONSTRAINT "Sorteio_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sorteio" ADD CONSTRAINT "Sorteio_premioId_fkey" FOREIGN KEY ("premioId") REFERENCES "Premios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
