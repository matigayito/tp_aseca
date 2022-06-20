import { errorHandler } from './components/utils/error-handler';
import { ProductController } from './components/controller/product.controller';
const express = require('express');
import { UserController } from "./components/controller/user.controller";
import { WishListController } from './components/controller/wishlist.controller';
import { createContext } from "./components/service/prisma.service";
import { Request, Response, NextFunction } from 'express';

const context = createContext();

const userController = new UserController(context);
const wishListController = new WishListController(context);
const productController = new ProductController(context);

const app = express();
const apiRouter = express.Router();

app.post('/user', (req:Request, res:Response, next:NextFunction) => userController.registerUser(req, res, next))
app.get('/user', (req:Request, res:Response, next:NextFunction) => userController.getAllUsers(req, res, next))
app.get('/user/wishlist/:id', (req: Request, res:Response, next:NextFunction) => wishListController.getUserWishlist(req, res, next))
app.post('/user/wishlist/:id', (req: Request, res:Response, next:NextFunction) => wishListController.createWishlist(req, res, next))
app.post('/user/wishlist', (req: Request, res:Response, next:NextFunction) => wishListController.addItemToWishlist(req, res, next))
app.post('/products/discount', (req: Request, res:Response, next:NextFunction) => productController.updateDiscounts(req, res, next))

app.use(express.json())
app.use(apiRouter)
app.use(errorHandler)
app.listen(5000)
console.log("Listening on port 5000")
console.log(userController)