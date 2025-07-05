import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './game.slice.ts';

export const store = configureStore({
	reducer: {
		game: gameSlice,
	},
});

store.subscribe(() => {});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
