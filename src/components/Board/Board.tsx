import Square from '../Square/Square.tsx';
import cn from 'classnames';
import styles from './Board.module.css';
import type { BoardProps } from './Board.props.ts';

export default function Board({ board }: BoardProps) {
	return (
		<div className={cn(styles['container'])}>
			{board.map((value, index: number) => (
				<Square key={index} value={value} currentIndex={index} />
			))}
		</div>
	);
}
