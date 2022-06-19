import { NotificationService } from './../service/notification.service';
import { WishlistService } from './../service/wishlist.service';
import { Request, Response } from 'express';
import { ValidationError } from "../utils/errors";
import { OK } from "../utils/status-codes";
import { UserService } from "../service/user.service";
import { Context } from "../service/prisma.service";
import { ProductService } from '../service/product.service';

interface Discount {
    productId: number,
    discount: number
}

export class ProductController {

    productService: ProductService;
    notificationService: NotificationService;

    constructor(ctx: Context) {
        const productService = new ProductService(ctx)
        const notificationService = new NotificationService(ctx)
        this.notificationService = notificationService
        this.productService = productService;
    }

    public async updateDiscounts(req: Request, res: Response) {
        const discounts:Discount[] = req.body;
        const productsUpdated = await this.productService.updateProductDiscounts(discounts)
        return res.status(OK).json(productsUpdated)
    }
}