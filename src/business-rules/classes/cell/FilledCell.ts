import type { ICell } from '../../interfaces/cell.interface.ts';
import type { Player } from '../../Player.ts';
import type { BaseCellType } from '../../types/CellType.ts';

export class FilledPlayerCell implements ICell {
	constructor(
		public readonly player: Player,
		public readonly cell: ICell,
	) {}

	getPlayerName() {
		return this.player.name;
	}

	getCoords(): BaseCellType {
		return {
			i: this.cell.getCoords().i,
			j: this.cell.getCoords().j,
		};
	}
}
