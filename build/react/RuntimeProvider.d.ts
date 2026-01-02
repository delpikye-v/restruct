import React from "react";
import { AppRuntime } from "@/app/AppRuntime";
export declare const RuntimeProvider: React.FC<{
    runtime: AppRuntime;
    children: React.ReactNode;
}>;
export declare function useRuntime(): AppRuntime;
