import {Context} from "../service/prisma.service";

export class UserRepository {

    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

    createUser(user: any) {
        return this.context.prisma.user.create({
            data: {
                username: user.username,
                password: user.password
            }
        })
    }

    getAllUsers() {
        return this.context.prisma.user.findMany()
    }
}