import * as React from 'react';
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { CSSProperties, createContext} from 'react'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'

export interface Props {
    product: Product
    // children?: ReactElement | ReactElement[]
    children: (args: ProductCardHandlers) => JSX.Element,
    className?: string
    style?: CSSProperties
    onChange?:(args: onChangeArgs) => void
    initialValues?: InitialValues
    value?: number
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style , onChange, initialValues, value}: Props) => {
    const { count, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({onChange, product, initialValues, value});

    return (
        <Provider value={{
            count,
            maxCount: maxCount,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>

                {children({
                    product,
                    count,
                    isMaxCounReached: isMaxCountReached,
                    maxCount,
                    reset,
                    increaseBy
                })}
                {/* <ProductImage img={coffe} />

            <ProductTitle title='Coffee Mug' />

            <ProductButtons count={count} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    )
}

