import { NotificationRepository } from '../repository/notification.repository';
import { Context } from './prisma.service';

export class NotificationService {
    private notificationRepository

    constructor(ctx:Context) {
        this.notificationRepository = new NotificationRepository(ctx)
    }

    

}