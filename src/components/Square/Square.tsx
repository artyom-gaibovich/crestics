import styles from './Square.module.css';
import { gameActions } from '../../store/game.slice.ts';
import type { AppDispatch } from '../../store/store.ts';
import { useDispatch } from 'react-redux';
import type { SquareProps } from './Square.props.ts';

export default function Square({ value, currentIndex }: SquareProps) {
	const dispatch = useDispatch<AppDispatch>();
	const handleClick = () => {
		dispatch(gameActions.move(currentIndex));
	};
	return (
		<div className={styles['square']} onClick={handleClick}>
			{value}
		</div>
	);
}
