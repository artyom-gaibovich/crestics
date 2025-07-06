import cn from 'classnames';
import styles from './Score.module.css';
import type { RootState } from '../../store/store.ts';
import { useSelector } from 'react-redux';

export default function Score() {
	const winsX = useSelector((state: RootState) => state.game.winsX);
	const winsO = useSelector((state: RootState) => state.game.winsO);

	return (
		<div className={cn(styles['container__mini'])}>
			<div>Победы X : {winsX}</div>
			<div>Победы O : {winsO}</div>
		</div>
	);
}
