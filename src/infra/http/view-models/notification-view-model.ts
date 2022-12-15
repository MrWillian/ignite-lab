import { Notification } from "@application/entities/notification/notification";

export class NotificationViewModel {
    static toHTTP(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.categories,
            recipientId: notification.recipientId,
        }
    }
}
