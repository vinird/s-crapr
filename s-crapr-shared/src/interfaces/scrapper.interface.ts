export interface Scrapper {
    UUID: string,
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    url: string,
    cssSelector: string,
    outputFormat: 'raw' | 'json' | 'text',
}
