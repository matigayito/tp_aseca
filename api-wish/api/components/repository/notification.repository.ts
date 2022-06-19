import { Context } from './../service/prisma.service';
export class NotificationRepository {
    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

}