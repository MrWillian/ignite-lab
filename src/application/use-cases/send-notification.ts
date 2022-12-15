import { Injectable } from "@nestjs/common";
import { Content } from "../entities/notification/content";
import { Notification } from "../entities/notification/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    categories: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse>{
        const { recipientId, content, categories} = request;
        const notification = new Notification({
            recipientId, content: new Content(content), categories
        });

        await this.notificationsRepository.create(notification);

        return {
            notification
        }
    }
}