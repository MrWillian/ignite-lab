import { Content } from "@application/entities/notification/content";
import { Notification, NotificationProps } from "@application/entities/notification/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        categories: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'example-recipient-id',
        ...override
    })
}
