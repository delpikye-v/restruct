/**
 * Capabilities define what a plugin is allowed to access.
 * This is used to sandbox plugins and prevent overreach.
 */
export type PluginCapability = "intent" | "store" | "effect" | "service";
/**
 * Plugin manifest
 *
 * Similar to VSCode / Chrome extension manifests.
 * Used for:
 * - Capability restriction
 * - Plugin identity
 * - Future permission checks
 */
export interface PluginManifest {
    /** Unique plugin id */
    id: string;
    /** Human readable name */
    name: string;
    /** Allowed capabilities */
    capabilities: PluginCapability[];
}
