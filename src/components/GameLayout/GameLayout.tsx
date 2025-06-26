import styles from './GameLayout.module.css';
import cn from 'classnames';

const arr = new Array(9).fill(null).map((_, i) => i + 1);

const GameLayout = () => {
	return (
		<div className={cn(styles['container'])}>
			{arr.map((item) => (
				<div>{item}</div>
			))}
		</div>
	);
};

export default GameLayout;
