import { AppRuntime } from "@/app/AppRuntime";
import { Module } from "@/module/types";
/**
 * Load a module class into AppRuntime
 */
export declare function loadModule(app: AppRuntime, ModuleClass: any): Promise<Module>;
