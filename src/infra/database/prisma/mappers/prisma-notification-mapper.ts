import { Notification as RawNotification } from "@prisma/client";
import { Notification } from "@application/entities/notification/notification";
import { Content } from "@application/entities/notification/content";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            categories: notification.categories,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
            canceledAt: notification.canceledAt
        }
    }

    static toDomain(raw: RawNotification): Notification {
        return new Notification(
            {
                categories: raw.categories,
                content: new Content(raw.content),
                recipientId: raw.recipientId,
                readAt: raw.readAt,
                canceledAt: raw.canceledAt,
                createdAt: raw.createdAt
            },
            raw.id
        );
    }
}
