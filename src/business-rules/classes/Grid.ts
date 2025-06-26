import { Cell } from "./cell/Cell.ts";

export class Grid {
  constructor(private readonly size: { n: number; m: number }) {}

  build(): Cell[][] {
    return new Array(this.size.n)
      .fill(null)
      .map((_, i) =>
        new Array(this.size.m).fill(null).map((_, j) => new Cell(i, j)),
      );
  }
}
