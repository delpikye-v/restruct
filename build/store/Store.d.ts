type Listener<T> = (state: T) => void;
type Computed<T> = (state: T) => any;
export type StoreObserver<T> = (update: {
    storeId: string;
    nextState: T;
}) => void;
export declare class Store<T> {
    private state;
    pluginLogId?: string | undefined;
    private listeners;
    private computed;
    private observers;
    private id;
    constructor(state: T, pluginLogId?: string | undefined);
    get(): T;
    set(partial: Partial<T>): void;
    subscribe(fn: Listener<T>): () => boolean;
    computedValue(key: string, fn: Computed<T>): void;
    getComputed(key: string): any;
    observe(fn: StoreObserver<T>): () => boolean;
    watch(fn: (state: T) => void): () => boolean;
}
export {};
