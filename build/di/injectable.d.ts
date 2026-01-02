import { AppRuntime } from "@/app/AppRuntime";
import { ServiceDef } from "@/service/types";
/**
 * Injectable decorator
 *
 * Automatically registers service definition
 * into AppRuntime container when module initializes.
 */
export declare function Injectable(def?: Partial<ServiceDef>): ClassDecorator;
/**
 * Register all injectable services into a runtime container
 */
export declare function registerInjectables(app: AppRuntime, providers: any[]): void;
