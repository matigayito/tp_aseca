import {Context} from "../service/prisma.service";

export class UserRepository {

    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

    async createUser(user: any) {
        return this.context.prisma.user.create({
            data: {
                username: user.username,
                password: user.password,
                ageGroup: user.ageGroup,
                sex: user.sex
            }
        })
    }

    async getAllUsers() {
        return this.context.prisma.user.findMany()
    }
}