export type EffectHandler = () => void | (() => void);
export type EffectTrackHandler = (info: {
    pluginId?: string;
    name: string;
    duration: number;
}) => void;
/**
 * EffectManager
 *
 * 1. Trigger side-effects by intent
 * 2. Track effect execution (observability)
 */
export declare class EffectManager {
    /**
     * intentType -> effect handlers
     */
    private effects;
    /**
     * effect trackers (observability)
     */
    private trackers;
    /**
     * Register effect for an intent type
     */
    on(intentType: string, handler: EffectHandler): () => void;
    /**
     * Emit effects for an intent type
     */
    emit(intentType: string): void;
    /**
     * Register effect tracker (used by plugins/devtools)
     */
    track(handler: EffectTrackHandler): () => boolean;
    /**
     * Run an async effect with tracking
     */
    run<T>(name: string, effect: () => Promise<T>): Promise<T>;
    /**
     * Notify all trackers
     */
    private notifyTrackers;
    /**
     * Optional helper for devtools/debug
     */
    has(intentType: string): boolean;
    /**
     * Clear everything
     */
    clear(): void;
}
