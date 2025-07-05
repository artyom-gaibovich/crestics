export interface IPosition {
	i: number;
	j: number;
}

export const winPositions: IPosition[][] = [
	[
		{ i: 0, j: 0 },
		{ i: 0, j: 1 },
		{ i: 0, j: 2 },
	],
	[
		{ i: 1, j: 0 },
		{ i: 1, j: 1 },
		{ i: 1, j: 2 },
	],
	[
		{ i: 2, j: 0 },
		{ i: 2, j: 1 },
		{ i: 2, j: 2 },
	],

	[
		{ i: 0, j: 0 },
		{ i: 1, j: 0 },
		{ i: 2, j: 0 },
	],
	[
		{ i: 0, j: 1 },
		{ i: 1, j: 1 },
		{ i: 2, j: 1 },
	],
	[
		{ i: 0, j: 2 },
		{ i: 1, j: 2 },
		{ i: 2, j: 2 },
	],

	[
		{ i: 0, j: 0 },
		{ i: 1, j: 1 },
		{ i: 2, j: 2 },
	],
	[
		{ i: 0, j: 2 },
		{ i: 1, j: 1 },
		{ i: 2, j: 0 },
	],
];
