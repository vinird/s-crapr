export interface Job {
    UUID: string,
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    scrapperId: string,
    schedule: string,
    enabled: boolean
}
