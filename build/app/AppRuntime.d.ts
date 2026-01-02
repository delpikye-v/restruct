import { Container } from "@/di/container";
import { IntentBus } from "@/intent/IntentBus";
import { EffectManager } from "@/effect/EffectManager";
import { RuntimePlugin } from "@/plugin/Plugin";
import { Module } from "@/module/types";
import { Store } from "@/store/Store";
export declare class AppRuntime {
    readonly container: Container;
    readonly intent: IntentBus;
    readonly effect: EffectManager;
    private modules;
    private stores;
    registerStore<T>(store: Store<T>): void;
    use(plugin: RuntimePlugin): void;
    $on: (type: string, handler: Function) => void;
    $emit: (intent: import("..").Intent) => Promise<void>;
    $onIntent: (scope: string, type: string, handler: Function) => void;
    $emitIntent: (scope: string, type: string, payload?: any) => Promise<void>;
    useModule(module: Module): void;
    initModules(): Promise<void>;
    destroyModules(): void;
    getModule<T extends Module = Module>(name: string): T | undefined;
    getStores(): Store<any>[];
}
