import {Context} from "../service/prisma.service";

export class WishlistRepository {

    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

    async createWishlist(userId: any) {
        return await this.context.prisma.wishlist.create({
            data: {
                userId
            }
        })
    }

    async getUserWishList(userId:any) {
        return this.context.prisma.wishlist.findMany({
            where:{
                userId: userId
            }
        })
    }

    async addProductToWishlist(productId:any, wishlistId:any) {
        return await this.context.prisma.wishlist.update({
            where:{
                id: wishlistId
            },
            data:{
                products:{
                    create: [
                        {
                            products:{
                                connect: { id: productId }
                            }
                        }
                    ]
                } 
            }
        })
    }
}