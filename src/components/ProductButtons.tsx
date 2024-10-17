import * as React from 'react';
import styles from '../styles/styles.module.css'
import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    const { count, maxCount, increaseBy } = useContext(ProductContext);

    const isMaxCountReached = useCallback(
    () => !!maxCount && count === maxCount, 
    [count, maxCount]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{count}</div>
            {!isMaxCountReached() && <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>}
        </div>
    )
}
