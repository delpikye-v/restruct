import { ServiceDef } from "@/service/types";
export interface ModuleOptions {
    providers?: Array<any | ServiceDef>;
}
export declare function Module(options: ModuleOptions): (constructor: any) => void;
