import type { Player } from "../../Player.ts";
import type { ICell } from "../../interfaces/cell.interface.ts";
import type { FilledCellType } from "../../types/CellType.ts";

export class FilledPlayerCell {
  constructor(
    public readonly player: Player,
    public readonly cell: ICell,
  ) {}

  getCoords(): FilledCellType<Player> {
    return {
      ...this.cell.getCoords(),
      ...this.player,
    };
  }
}
