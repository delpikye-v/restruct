/**
 * useComputed
 *
 * A lightweight hook for derived / computed state.
 * Similar to MobX computed or Recoil selectors.
 *
 * - Re-computes value when underlying store changes
 * - Does NOT manage state itself
 * - Depends on reactive store subscription
 *
 * @param compute - Function that returns derived value
 * @param deps - Optional dependency hint (memoization only)
 */
export declare function useComputed<T>(compute: () => T, deps?: any[]): T;
/**
 * INTERNAL API
 *
 * Called by Store to bind its subscribe mechanism
 * to the computed system.
 */
export declare function __bindComputedListener(fn: (onChange: () => void) => () => void): void;
