import { Intent } from "@/intent/types";
export interface PluginContext {
    intent: {
        tap(fn: (intent: Intent) => void): void;
        on(type: string, fn: (intent: Intent) => void): void;
    };
    effect: {
        track(fn: (info: {
            pluginId: string;
            name: string;
            duration: number;
        }) => void): void;
    };
    store: {
        observe(fn: (info: {
            storeId: string;
            nextState: any;
        }) => void): void;
    };
    service: {
        get<T>(token: new (...args: any[]) => T): T;
    };
    runtime: {
        log(...args: any[]): void;
        version(): string;
    };
    meta: {
        id: string;
        name: string;
    };
}
