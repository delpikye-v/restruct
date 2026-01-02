export type EffectHandler = () => void | (() => void);
export type EffectTrackHandler = (info: {
    pluginId?: string;
    name: string;
    duration: number;
}) => void;
export declare class EffectManager {
    private effects;
    private trackers;
    on(intentType: string, handler: EffectHandler): () => void;
    emit(intentType: string): void;
    track(handler: EffectTrackHandler): () => boolean;
    run<T>(name: string, effect: () => Promise<T>): Promise<T>;
    private notifyTrackers;
    has(intentType: string): boolean;
    clear(): void;
}
