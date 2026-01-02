import { RuntimePlugin } from "./Plugin";
export type RemotePluginConfig = {
    url: string;
    exportName?: string;
};
export declare function loadRemotePlugin(config: RemotePluginConfig): Promise<RuntimePlugin>;
