import type { CellType } from '../types/CellType.ts';

export interface ICell {
	getCoords(): CellType;
}
