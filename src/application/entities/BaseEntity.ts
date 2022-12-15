import { randomUUID } from "crypto";

export class BaseEntity {
    private _id: string;

    constructor() {
        this._id = randomUUID();
    }

    public get id(): string {
        return this._id;
    }
}
