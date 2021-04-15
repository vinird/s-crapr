export interface Job {
    UUID: string,
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    scrapperId: string,
    minute: string;
    hour: string;
    dayOfMonth: string;
    month: string;
    dayOfWeek: string;
    enabled: boolean
    description: string
}
