import { useEffect } from 'react';
import Board from '../Board/Board.tsx';
import cn from 'classnames';
import styles from './Game.module.css';
import type { AppDispatch, RootState } from '../../store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store/game.slice.ts';
import Score from '../Score/Score.tsx';

export default function Game() {
	const dispatch = useDispatch<AppDispatch>();
	const board = useSelector((state: RootState) => state.game.board);
	const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);
	const winner = useSelector((state: RootState) => state.game.winner);

	useEffect(() => {
		if (winner === 'X' || winner === 'O') {
			alert(`Победил ${winner}`);
			dispatch(gameActions.reset());
		} else if (winner === 'Draw') {
			alert('Ничья!');
			dispatch(gameActions.reset());
		}
	}, [dispatch, winner]);
	return (
		<div className={cn(styles['wrapper'])}>
			<div>Текущий игрок: {currentPlayer}</div>
			<Board board={board} />
			<Score></Score>
		</div>
	);
}
