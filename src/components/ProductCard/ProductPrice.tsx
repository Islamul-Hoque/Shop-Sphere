"use client"
import React, { useEffect, useState } from "react";
import { ProductType, StateType } from "../../../type";
import PriceFormat from "./PriceFormat";
import { useSelector } from "react-redux";

const ProductPrice = ({ product }: { product: ProductType }) => {
    const { cart } = useSelector((state: StateType) => state?.shofy);
    const [existingProduct, setExistingProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const availableProduct = cart?.find((item) => item?.id === product?.id);
        if (availableProduct) {
            setExistingProduct(availableProduct);
        }
    }, [cart, product]);


    // main card calculation
    const regularPrice = product?.price
    const discountedPrice = product?.price + product?.discountPercentage / 100

    return (
        <div className="flex items-center gap-2">
            <PriceFormat 
            amount = {existingProduct ? discountedPrice * existingProduct.quantity! : discountedPrice}

            className="text-gray-500 line-through font-normal" />
            <PriceFormat  
            amount = {existingProduct ? regularPrice * existingProduct.quantity! : regularPrice}
            className="font-semibold text-primary" />
        </div>
    )
};

export default ProductPrice;