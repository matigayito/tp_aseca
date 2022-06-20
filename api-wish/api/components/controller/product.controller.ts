import { ErrorCode } from './../utils/error-code';
import { ErrorException } from './../utils/error-exception';
import { INCORRECT_TYPES } from './../utils/status-codes';
import { Discount } from './../forms/discount.form';
import { NotificationService } from './../service/notification.service';
import { WishlistService } from './../service/wishlist.service';
import { Request, Response, NextFunction } from 'express';
import { OK } from "../utils/status-codes";
import { UserService } from "../service/user.service";
import { Context } from "../service/prisma.service";
import { ProductService } from '../service/product.service';
import { validate, validateOrReject } from 'class-validator';
const axios = require('axios')

export class ProductController {

    productService: ProductService;
    notificationService: NotificationService;
    userService: UserService;

    constructor(ctx: Context) {
        const productService = new ProductService(ctx)
        const notificationService = new NotificationService(ctx)
        this.userService = new UserService(ctx)
        this.notificationService = notificationService
        this.productService = productService;
    }

    public async updateDiscounts(req: Request, res: Response, next:NextFunction) {
        const { discountsArray } = req.body
        const discounts = discountsArray.map((d:any) => {
            const newDiscount = new Discount(d.productId, d.discount)
            return validate(newDiscount).then(errors => {
                if (errors.length > 0) {
                   throw new ErrorException(ErrorCode.IncorrectTypesError)
                }
            })
        });
        const productsUpdated = await this.productService.updateProductDiscounts(discounts)
        return res.send(productsUpdated)
    }

    public async searchProducts(req: Request, res: Response, next:NextFunction) {
        const search = req.query.search || ""
        const id = req.params.id
        const user = await this.userService.findUser(+id)
        const userCategories = await this.userService.getCategories(+id)
        const categories = userCategories.map((category:any) => category?.name)
        const products = await this.productService.getAllProducts()
        axios.post('http://localhost:4000', {

        })
        .then()
    }
}