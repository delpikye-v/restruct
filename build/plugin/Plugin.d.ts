import { PluginManifest } from "./PluginManifest";
export interface RuntimePlugin {
    manifest: PluginManifest;
    setup(ctx: any): void;
}
