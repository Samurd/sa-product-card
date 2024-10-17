import * as React from 'react';
import { useContext } from "react";
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = ""
    }
    return (
        <img className={styles.productImg} src={imgToShow} alt="Coffee Mug" />
    )
}