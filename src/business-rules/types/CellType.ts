export type BaseCellType = {
	i: number;
	j: number;
};

export type Player = {
	name: 'Крестик' | 'Нолик';
};

export type FilledCellType<T extends Player> = T & BaseCellType;

export type CellType = FilledCellType<Player> | BaseCellType;
