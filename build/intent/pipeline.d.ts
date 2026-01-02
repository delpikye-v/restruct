import { Intent } from "./types";
export interface IntentContext {
    intent: Intent;
    meta?: Record<string, any>;
}
