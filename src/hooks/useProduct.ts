import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
  value?: number;
}

export const useProduct = ({
  onChange,
  initialValues,
  value = 0,
  product,
}: useProductArgs) => {
  const [count, setCount] = useState<number>(initialValues?.count || value);
  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(count + value, 0);
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    if (initialValues?.maxCount && newValue > initialValues.maxCount) return;
    
    setCount(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCount(initialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;

    setCount(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    count,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,
    reset
  };
};
