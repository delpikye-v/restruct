import { AppRuntime } from "@/app/AppRuntime";
export interface LifecycleHooks {
    onInit?(app: AppRuntime): void | Promise<void>;
    onReady?(app: AppRuntime): void;
    onDestroy?(): void;
}
