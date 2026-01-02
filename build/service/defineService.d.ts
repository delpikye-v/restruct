import { AppRuntime } from "@/app/AppRuntime";
import { ServiceDef } from "./types";
export declare function defineService(def: ServiceDef): ServiceDef<any>;
export declare function registerService(app: AppRuntime, serviceClass: any): void;
