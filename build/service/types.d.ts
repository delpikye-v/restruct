export type ServiceLifecycle = "singleton" | "transient";
export interface ServiceDef<T = any> {
    token: new (...args: any[]) => T;
    lifecycle?: ServiceLifecycle;
    visibility?: "app" | "plugin";
}
