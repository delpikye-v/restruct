import { ServiceDef } from "@/service/types";
/**
 * Container
 *
 * Lightweight Dependency Injection container.
 *
 * Responsibilities:
 * - Register service definitions
 * - Resolve service instances
 * - Handle service lifecycle (singleton / transient)
 *
 * Design goals:
 * - Simple
 * - Predictable
 * - Plugin-safe (resolve-only)
 */
export declare class Container {
    /**
     * Cached singleton instances
     */
    private instances;
    /**
     * Registered service definitions
     */
    private services;
    /**
     * Register a service definition.
     *
     * Usually called during app/module bootstrap,
     * NOT by plugins.
     */
    registerService(def: ServiceDef): void;
    /**
     * Resolve a service instance by token.
     *
     * - singleton: cached instance
     * - transient: new instance per call
     */
    resolve<T>(token: new (...args: any[]) => T): T;
    /**
     * Alias for resolve()
     *
     * Added for ergonomics & NestJS-like API.
     * No additional capability.
     */
    get<T>(token: new (...args: any[]) => T): T;
    /**
     * Create a service instance.
     *
     * Dependencies are resolved automatically
     * using constructor parameter types.
     */
    private create;
}
