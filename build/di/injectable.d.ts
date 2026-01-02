import { AppRuntime } from "@/app/AppRuntime";
import { ServiceDef } from "@/service/types";
export declare function Injectable(def?: Partial<ServiceDef>): ClassDecorator;
export declare function registerInjectables(app: AppRuntime, providers: any[]): void;
