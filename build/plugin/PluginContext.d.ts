import { Intent } from "@/intent/types";
/**
 * PluginContext
 *
 * Public API exposed to runtime plugins.
 * This is a SANDBOXED surface – plugins never touch AppRuntime directly.
 */
export interface PluginContext {
    /**
     * Intent observability
     */
    intent: {
        /**
         * Tap into the intent pipeline (read-only).
         * Called for every dispatched intent.
         */
        tap(fn: (intent: Intent) => void): void;
        /**
         * Listen to a specific intent type.
         * Useful for analytics, logging, metrics.
         */
        on(type: string, fn: (intent: Intent) => void): void;
    };
    /**
     * Effect observability
     */
    effect: {
        /**
         * Track effect execution.
         * Runtime decides when & how this is called.
         */
        track(fn: (info: {
            pluginId: string;
            name: string;
            duration: number;
        }) => void): void;
    };
    /**
     * Store observability (read-only)
     */
    store: {
        /**
         * Observe store updates.
         * No mutation allowed.
         */
        observe(fn: (info: {
            storeId: string;
            nextState: any;
        }) => void): void;
    };
    /**
     * Service access (DI – read-only by default)
     */
    service: {
        /**
         * Resolve a service from DI container.
         *
         * Plugin only GETS instances,
         * cannot register or override providers.
         */
        get<T>(token: new (...args: any[]) => T): T;
    };
    /**
     * Runtime utilities (safe helpers)
     */
    runtime: {
        /**
         * Scoped plugin logger
         */
        log(...args: any[]): void;
        /**
         * Runtime version or metadata
         */
        version(): string;
    };
    meta: {
        id: string;
        name: string;
    };
}
