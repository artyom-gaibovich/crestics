import styles from './GameLayout.module.css';
import cn from 'classnames';
import { Grid } from '../../business-rules/classes/Grid.ts';

const arr = new Array(9).fill(null).map((_, i) => i + 1);

const newGrid = new Grid({
	n: 3,
	m: 3,
}).build();

const GameLayout = () => {
	console.log(newGrid);
	return (
		<div className={cn(styles['container'])}>
			{arr.map((item) => (
				<div>{item}</div>
			))}
		</div>
	);
};

export default GameLayout;
