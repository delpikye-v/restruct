import { Store } from "./Store";
export declare function computedAsync<T extends object, R>(store: Store<T>, key: string, asyncFn: (state: T) => Promise<R>): () => void;
