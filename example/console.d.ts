// console.d.ts
declare global {
  interface Console {
    smart(...args: any[]): void;
  }
}

export {};
