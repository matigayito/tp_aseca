import { WishlistService } from './../service/wishlist.service';
import { Request, Response, NextFunction } from 'express';
import { OK } from "../utils/status-codes";
import { Context } from "../service/prisma.service";

export class WishListController {

    wishListService: WishlistService;

    constructor(ctx: Context) {
        const wishListService = new WishlistService(ctx)
        this.wishListService = wishListService;
    }

    public async createWishlist(req:Request, res:Response, next:NextFunction) {
        const userId = +req.params.id
        return res.status(OK).json(await this.wishListService.createWishList(userId))
    }

    public async getUserWishlist(req: Request, res:Response, next:NextFunction) {
        const userId = +req.params.id
        return res.status(OK).json(await this.wishListService.getUserWishList(userId))
    }

    public async addItemToWishlist(req: Request, res:Response, next:NextFunction) {
        const {productId, wishlistId} = req.body
        return res.status(OK).json(await this.wishListService.addProductToWishList(productId, wishlistId))
    }
}