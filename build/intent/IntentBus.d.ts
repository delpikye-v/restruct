import { Intent } from "./types";
import { IntentMiddleware } from "./middleware";
export declare class IntentBus {
    private handlers;
    private middlewares;
    use(mw: IntentMiddleware): void;
    on(type: string, handler: Function): void;
    dispatch(intent: Intent): Promise<void>;
    onScoped(scope: string, type: string, handler: Function): void;
    dispatchScoped(scope: string, type: string, payload?: any): Promise<void>;
}
