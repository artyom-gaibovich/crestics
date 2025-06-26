import type { CellType } from "./types/CellType.ts";
import type { Grid } from "./classes/Grid.ts";
import { Cell } from "./classes/cell/Cell.ts";
import type { Player } from "./Player.ts";
import { FilledPlayerCell } from "./classes/cell/FilledCell.ts";

export class Game {
  private gridMap: (FilledPlayerCell | Cell)[][];
  constructor(grid: Grid) {
    this.gridMap = grid.build();
  }

  doAction(position: CellType, player: Player) {
    this.gridMap = this.gridMap.map((row, _) => {
      return row.map((cell, _) => {
        const { i, j } = cell.getCoords();
        if (position.i === i && j === position.j) {
          return new FilledPlayerCell(player, new Cell(i, j));
        }
        return cell;
      });
    });
  }

  private validate() {}
}
