import type { HTMLAttributes } from 'react';

export interface BoardProps extends HTMLAttributes<HTMLDivElement> {
	board: (null | 'X' | 'O')[];
}
