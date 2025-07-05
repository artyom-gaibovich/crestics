import type { CellType } from './types/CellType.ts';
import type { Grid } from './classes/Grid.ts';
import { Cell } from './classes/cell/Cell.ts';
import { Player } from './Player.ts';
import { FilledPlayerCell } from './classes/cell/FilledCell.ts';
import type { IPosition } from './win-postions/win-positions.ts';

export class Game {
	private gridMap: (FilledPlayerCell | Cell)[][];
	private isFinished: boolean;
	winPlayer: Player | undefined;

	constructor(
		grid: Grid,
		private readonly winPositions: IPosition[][],
		private readonly playerList: Player[],
		private currentPlayer: Player,
	) {
		this.gridMap = grid.build();
		this.isFinished = false;
	}

	doAction(position: CellType, player: Player) {
		this.validate();
		if (this.isFinished) {
			return;
		}
		this.gridMap = this.gridMap.map((row) => {
			return row.map((cell) => {
				const { i, j } = cell.getCoords();
				if (position.i === i && j === position.j) {
					return new FilledPlayerCell(player, new Cell(i, j));
				}
				return cell;
			});
		});
	}

	private validate() {
		if (this.isFinished) {
			return;
		}
		this.winPositions.forEach((position) => {
			position.forEach((position) => {
				let c = 0;
				const flappedMatrix = this.gridMap.flat(2);
				flappedMatrix.forEach((cell) => {
					const { i, j } = cell.getCoords();
					const playerName = this.currentPlayer.getName();
					if (c === 3) {
						this.isFinished = true;
						this.winPlayer = this.currentPlayer;
					}
					if (
						cell instanceof FilledPlayerCell &&
						i === position.i &&
						j === position.j &&
						playerName === cell.getPlayerName()
					) {
						c += 1;
					}
				});
			});
		});
	}
}
