import { Context } from './../service/prisma.service';
import { Prisma } from "@prisma/client";

const products: Prisma.ProductCreateInput[] = [
    {
        name: "Remera",
        price: 40,
        discount: 10
    },
    {
        name: "Reloj",
        price: 80,
        discount: 40
    },
    {
        name: "Pantalon",
        price: 50,
        discount: 20
    }
]

export const seedProducts = async (ctx: Context) => {
    console.log("Seeding products...")
    products.map( data => {
        ctx.prisma.product.create({
            data
        })
    })
}