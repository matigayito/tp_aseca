import { Request, Response, NextFunction } from 'express';
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

    public async registerUser(req: Request, res: Response, next:NextFunction) {
        const {username, password, ageGroup, sex} = req.body;
        return res.status(OK).json(await this.userService.createUser(username, password, ageGroup, sex))
    }

    public async getAllUsers(req: Request, res: Response, next:NextFunction) {
        return res.status(OK).json(await this.userService.getUsers())
    }
}