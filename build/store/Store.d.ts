type Listener<T> = (state: T) => void;
type Computed<T> = (state: T) => any;
export type StoreObserver<T> = (update: {
    storeId: string;
    nextState: T;
}) => void;
export declare class Store<T> {
    private state;
    private listeners;
    private computed;
    private observers;
    readonly id: string;
    constructor(state: T);
    get(): T;
    set(partial: Partial<T>): void;
    subscribe(fn: Listener<T>): () => boolean;
    computedValue(key: string, fn: Computed<T>): void;
    getComputed(key: string): any;
    /**
     * Plugin-safe observe
     */
    observe(fn: StoreObserver<T>): () => boolean;
}
export {};
