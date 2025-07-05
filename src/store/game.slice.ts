import { createSlice } from '@reduxjs/toolkit';
import { Grid } from '../business-rules/classes/Grid.ts';
const initialState = {
	game: new Grid({
		n: 3,
		m: 3,
	}),
};
export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {},
});

export default gameSlice.reducer;
export const cartActions = gameSlice.actions;
