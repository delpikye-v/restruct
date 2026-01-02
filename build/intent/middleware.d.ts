import { Intent } from "./types";
export type IntentContext = {
    intent: Intent;
    metadata: Record<string, any>;
};
export type IntentMiddleware = (ctx: IntentContext, next: () => Promise<void>) => Promise<void>;
