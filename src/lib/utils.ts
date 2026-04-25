/**
 * Utility functions used across the portfolio
 */

/**
 * Joins class names together, filtering out falsy values.
 * Usage: cn("base-class", condition && "conditional-class", "other-class")
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Clamps a number between a min and max value.
 * Useful for animation ranges and scroll-based effects.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Maps a value from one range to another.
 * Example: mapRange(0.5, 0, 1, 0, 100) → 50
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}
