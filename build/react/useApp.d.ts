export declare function useModule<T>(cls: new (...a: any[]) => T): T;
export declare function useIntent(scope?: string): (type: string, payload?: any) => void;
