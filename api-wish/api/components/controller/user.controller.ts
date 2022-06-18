import { WishlistService } from './../service/wishlist.service';
import { Request, Response } from 'express';
import { ValidationError } from "../utils/errors";
import { OK } from "../utils/status-codes";
import { UserService } from "../service/user.service";
import { Context } from "../service/prisma.service";

export class UserController {

    userService: UserService;
    test:String = "test";

    constructor(ctx: Context) {
        const userService = new UserService(ctx)
        this.userService = userService;
    }

    public async registerUser(req: Request, res: Response) {
        const {username, password} = req.body;
        return res.status(OK).json(await this.userService.createUser(username, password))
    }

    public async getAllUsers(req: Request, res: Response) {
        return res.status(OK).json(await this.userService.getUsers())
    }
}