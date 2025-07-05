import Square from '../Square/Square.tsx';
import cn from 'classnames';
import styles from './Board.module.css';

export default function Board({ board, handleClick }) {
	return (
		<div className={cn(styles['container'])}>
			{board.map((value, index) => (
				<Square key={index} value={value} onClick={() => handleClick(index)} />
			))}
		</div>
	);
}
