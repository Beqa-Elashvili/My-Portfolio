import type { CSSProperties } from "react";

/** Staggers `.enter` and `[data-reveal]` animations via the `--delay` custom property. */
export function delay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}
