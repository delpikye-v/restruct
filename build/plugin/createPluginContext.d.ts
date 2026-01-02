import { AppRuntime } from "@/app/AppRuntime";
import { PluginContext } from "./PluginContext";
import { PluginManifest } from "./PluginManifest";
/**
 * Create a restricted plugin context.
 *
 * IMPORTANT:
 * - Plugins NEVER receive AppRuntime directly
 * - Capabilities are enforced at runtime
 * - Plugin identity is captured via closure
 */
export declare function createPluginContext(app: AppRuntime, manifest: PluginManifest): PluginContext;
