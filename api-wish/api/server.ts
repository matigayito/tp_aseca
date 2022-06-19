import { ProductController } from './components/controller/product.controller';
const express = require('express');
import { UserController } from "./components/controller/user.controller";
import { WishListController } from './components/controller/wishlist.controller';
import { createContext } from "./components/service/prisma.service";
import { Request, Response } from 'express';
import { seedProducts } from './components/seeds/product.seeds';

const context = createContext();

const userController = new UserController(context);
const wishListController = new WishListController(context);
const productController = new ProductController(context);

const app = express();
const apiRouter = express.Router();

apiRouter.post('/user', (req:Request, res:Response) => userController.registerUser(req, res))
apiRouter.get('/user', (req:Request, res:Response) => userController.getAllUsers(req, res))
apiRouter.get('/wishlist/:id', (req: Request, res:Response) => wishListController.getUserWishlist(req, res))
apiRouter.post('/wishlist/:id', (req: Request, res:Response) => wishListController.createWishlist(req, res))
apiRouter.post('/products/discount', (req: Request, res:Response) => productController.updateDiscounts(req, res))


app.use(express.json())
app.use(apiRouter)
app.listen(5000)
console.log("Listening on port 5000")
console.log(userController)
seedProducts(context)