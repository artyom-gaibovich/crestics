import styles from './Square.module.css';

export default function Square({ value, onClick }: { value: string | null; onClick: () => void }) {
	return (
		<div className={styles['square']} onClick={onClick}>
			{value}
		</div>
	);
}
