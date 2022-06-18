import { Context } from './../service/prisma.service';
export class ProductRepository {
    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

    async getAllProducts() {
        return await this.context.prisma.product.findMany()
    }
}