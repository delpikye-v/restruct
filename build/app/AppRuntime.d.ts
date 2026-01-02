import { Container } from "@/di/container";
import { IntentBus } from "@/intent/IntentBus";
import { EffectManager } from "@/effect/EffectManager";
import { RuntimePlugin } from "@/plugin/Plugin";
import { Module } from "@/module/types";
/**
 * AppRuntime
 *
 * Core runtime kernel of the framework.
 *
 * Responsibilities:
 * - Dependency Injection container
 * - Intent dispatching
 * - Effect execution
 * - Module lifecycle orchestration
 * - Plugin integration (via restricted context)
 */
export declare class AppRuntime {
    /** Dependency Injection container */
    readonly container: Container;
    /** Intent bus (event + command layer) */
    readonly intent: IntentBus;
    /** Effect manager (side-effects layer) */
    readonly effect: EffectManager;
    /** Registered modules */
    private modules;
    /**
     * Register and initialize a runtime plugin
     *
     * Plugins receive a restricted context
     * based on declared capabilities.
     */
    use(plugin: RuntimePlugin): void;
    $on: (type: string, handler: Function) => void;
    $emit: (intent: import("..").Intent) => Promise<void>;
    $onIntent: (scope: string, type: string, handler: Function) => void;
    $emitIntent: (scope: string, type: string, payload?: any) => Promise<void>;
    useModule(module: Module): void;
    initModules(): Promise<void>;
    destroyModules(): void;
    getModule<T extends Module = Module>(name: string): T | undefined;
}
