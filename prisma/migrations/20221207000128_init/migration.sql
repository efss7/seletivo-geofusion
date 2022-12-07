/*
  Warnings:

  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `List` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_idList_fkey";

-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_idProduct_fkey";

-- DropTable
DROP TABLE "Items";

-- DropTable
DROP TABLE "List";

-- CreateTable
CREATE TABLE "lists" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "listDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "idList" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_idList_fkey" FOREIGN KEY ("idList") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
