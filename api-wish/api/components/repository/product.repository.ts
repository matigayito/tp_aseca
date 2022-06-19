import { Context } from './../service/prisma.service';
export class ProductRepository {
    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

    async getAllProducts() {
        return await this.context.prisma.product.findMany()
    }

    async updateProductDiscount(productId: any, discount: any) {
        return await this.context.prisma.product.update({
            where:{
                id: productId
            },
            data:{
                discount
            }
        })
    }
}