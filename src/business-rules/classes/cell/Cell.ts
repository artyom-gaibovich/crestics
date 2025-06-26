import type { ICell } from "../../interfaces/cell.interface.ts";
import type { CellType } from "../../types/CellType.ts";

export class Cell implements ICell {
  constructor(
    public readonly i: number,
    public readonly j: number,
  ) {}

  getCoords(): CellType {
    return {
      i: this.i,
      j: this.j,
    };
  }
}
