'use client'
import { twMerge } from "tailwind-merge";
import { ProductType } from "../../../type";

const AddToCartButton = ({product, className}:{product: ProductType, className: string}) => {
    return (
        <button className={twMerge( "bg-transparent border border-primary text-black rounded-full py-1.5 hover:bg-primary hover:text-white duration- 300 my-2", className )}  >
            Add to cart
        </button>
    );
};

export default AddToCartButton;