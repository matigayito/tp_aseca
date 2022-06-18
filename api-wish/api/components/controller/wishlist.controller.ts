import { WishlistService } from './../service/wishlist.service';
import { Request, Response } from 'express';
import { OK } from "../utils/status-codes";
import { Context } from "../service/prisma.service";

export class WishListController {

    wishListService: WishlistService;

    constructor(ctx: Context) {
        const wishListService = new WishlistService(ctx)
        this.wishListService = wishListService;
    }

    public async createWishlist(req:Request, res:Response) {
        const id = +req.params.id
        return res.status(OK).json(await this.wishListService.createWishList(id))
    }

    public async getUserWishlist(req: Request, res:Response) {
        const id = +req.params.id
        return res.status(OK).json(await this.wishListService.getUserWishList(id))
    }
}