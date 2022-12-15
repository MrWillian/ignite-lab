import { Replace } from "src/helpers/Replace";
import { BaseEntity } from "../BaseEntity";
import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    categories: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification extends BaseEntity {
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date}>) {
        super();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }

    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set categories(categories: string) {
        this.props.categories = categories;
    }

    public get categories(): string {
        return this.props.categories;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}
