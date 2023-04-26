import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interface';

interface useProductArgs {
	product: Product;
	onChange?: (Args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);

	const isMounted = useRef(false);
	const isControlled = useRef(!!onChange);

	const increaseBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ count: value, product });
		}
		let newValue = Math.max(counter + value, 0);
		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCounter(newValue);
		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count || value)
	}

	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	return {
		counter,
		isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
		maxCount: initialValues?.maxCount,

		reset,
		increaseBy,
	};
};
