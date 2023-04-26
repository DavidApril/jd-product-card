import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface Props {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
	// TODO: maxCount
	const { increaseBy, counter, maxCount } = useContext(ProductContext);

	const isMaxReached = useCallback(
		() => !!maxCount && counter == maxCount,

		[counter, maxCount]
	);

	//TODO: isMaxReached = useCallback, dependencies [ counter, maxCount ]

	// TRUE if count === maxCount else FALSE;

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button
				className={styles.buttonMinus}
				style={style}
				onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button
				className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
				onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	);
};
