import type { HTMLAttributes } from 'react';

export interface SquareProps extends HTMLAttributes<HTMLDivElement> {
	currentIndex: number;
	value: string | null;
}
