import {Context} from "../service/prisma.service";

export class UserRepository {

    context: Context

    constructor(ctx: Context) {
        console.log(ctx)
        this.context = ctx;
    }

    async createUser(user: any) {
        return this.context.prisma.user.create({
            data: {
                username: user.username,
                password: user.password,
            }
        })
    }

    async getAllUsers() {
        return this.context.prisma.user.findMany()
    }
}