import { ServiceDef } from "@/service/types";
export declare class Container {
    private instances;
    private services;
    registerService(def: ServiceDef): void;
    resolve<T>(token: new (...args: any[]) => T): T;
    get<T>(token: new (...args: any[]) => T): T;
    private create;
}
