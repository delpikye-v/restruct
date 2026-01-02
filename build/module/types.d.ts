import { AppRuntime } from "@/app/AppRuntime";
import { LifecycleHooks } from "@/core/types";
export interface Module extends LifecycleHooks {
    name: string;
    dependencies?: string[];
    setup(app: AppRuntime): void;
    onInit?(app: AppRuntime): void;
    onDestroy?(): void;
    onModuleLoaded?(dep: Module): void;
    onModuleInitDone?(): void;
}
