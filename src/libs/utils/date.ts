export const now = (): string => new Date().toISOString()

export const toISOString = (date: string): string => new Date(date).toISOString()
