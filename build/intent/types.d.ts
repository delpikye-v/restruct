export interface Intent<T = any> {
    type: string;
    payload?: T;
    meta?: Record<string, any>;
}
