import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            categories: 'social',
            recipientId: 'recipient-id-1',
        });
        expect(notification).toBeTruthy();
    });
});
