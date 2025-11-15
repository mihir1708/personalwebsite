declare module "lenis" {
  interface LenisOptions {
    duration?: number;
    smooth?: boolean;
    smoothTouch?: boolean;
    smoothWheel?: boolean;
    touchMultiplier?: number;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    destroy(): void;
  }
}

