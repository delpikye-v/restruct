export type PluginCapability = "intent" | "store" | "effect" | "service";
export interface PluginManifest {
    id: string;
    name: string;
    capabilities: PluginCapability[];
}
