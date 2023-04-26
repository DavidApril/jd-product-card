import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, productCardHandlers } from '../interfaces/interface';
import React from 'react';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	value?: number;
	product: Product;
	className?: string;
	style?: React.CSSProperties;
	children: (Args: productCardHandlers) => JSX.Element;
	initialValues?: InitialValues;
	onChange?: (Args: onChangeArgs) => void;
	// children?: React.ReactElement | React.ReactElement[];
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
	
	const { counter, increaseBy, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
				maxCount: initialValues?.maxCount,
			}}>
			<div
				className={`${styles.productCard} ${className} ${style}`}
				style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,

					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
