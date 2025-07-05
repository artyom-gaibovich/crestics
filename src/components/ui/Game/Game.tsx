import { useEffect, useState } from 'react';
import Board from '../Board/Board.tsx';
import cn from 'classnames';
import styles from './Game.module.css';

export default function Game() {
	const [board, setBoard] = useState<(null | 'X' | 'O')[]>(new Array(9).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
	const [gameOver, setGameOver] = useState(false);
	const [winsX, setWinsX] = useState(0);
	const [winsO, setWinsO] = useState(0);

	const handleClick = (index: number) => {
		if (board[index] || gameOver) return;
		const newBoard = [...board];
		newBoard[index] = currentPlayer;
		setBoard(newBoard);
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const resetGame = () => {
		setBoard(new Array(9).fill(null));
		setCurrentPlayer('X');
		setGameOver(false);
	};

	useEffect(() => {
		const checkWinner = () => {
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
			for (const pattern of winPatterns) {
				const [a, b, c] = pattern;
				if (board[a] && board[a] === board[b] && board[a] === board[c]) {
					return board[a];
				}
			}
			if (!board.includes(null)) {
				return 'Draw';
			}
			return null;
		};
		const result = checkWinner();
		if (result === 'X') {
			setWinsX((prev) => prev + 1);
			alert('Победил X');
			resetGame();
		} else if (result === 'O') {
			setWinsO((prev) => prev + 1);
			alert('Победил O');
			resetGame();
		} else if (result === 'Draw') {
			alert('Ничья!');
			resetGame();
		}
	}, [board]);

	return (
		<div className={cn(styles['wrapper'])}>
			<div>Текущий игрок: {currentPlayer}</div>
			<Board board={board} handleClick={(e: Event) => handleClick(e)} />
			<div className={cn(styles['container__mini'])}>
				<div>Победы X : {winsX}</div>
				<div>Победы O : {winsO}</div>
			</div>
		</div>
	);
}
