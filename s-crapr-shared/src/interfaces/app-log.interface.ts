export interface AppLog {
    UUID: string,
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    level: 'info' | 'warn' | 'error',
    message: string,
}
