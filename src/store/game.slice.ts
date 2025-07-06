import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
	currentPlayer: 'X' | 'O';
	board: (null | 'X' | 'O')[];
	gameOver: boolean;
	winsX: number;
	winner: 'X' | 'O' | 'Draw' | null;
	winsO: number;
}

const initialState: GameState = {
	board: new Array(9).fill(null),
	currentPlayer: 'X',
	winsX: 0,
	winner: null,
	gameOver: false,
	winsO: 0,
};
export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		move: (state, action: PayloadAction<number>) => {
			if (state.board[action.payload] || state.gameOver) return;

			state.board[action.payload] = state.currentPlayer;

			const winPatterns = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			for (const [a, b, c] of winPatterns) {
				if (
					state.board[a] &&
					state.board[a] === state.board[b] &&
					state.board[a] === state.board[c]
				) {
					state.winner = state.board[a];
					state.gameOver = true;
					if (state.winner === 'X') state.winsX++;
					else if (state.winner === 'O') state.winsO++;
					return;
				}
			}

			if (!state.board.includes(null)) {
				state.winner = 'Draw';
				state.gameOver = true;
				return;
			}

			state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
		},
		reset: (state) => {
			state.board = new Array(9).fill(null);
			state.currentPlayer = 'X';
			state.gameOver = false;
			state.winner = null;
		},
	},
});

export default gameSlice.reducer;
export const gameActions = gameSlice.actions;
