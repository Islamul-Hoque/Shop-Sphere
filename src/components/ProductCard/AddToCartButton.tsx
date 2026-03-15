'use client'
import { twMerge } from "tailwind-merge";

const AddToCartButton = () => {
    return (
        <button className={twMerge( "bg-transparent border border-primary text-black rounded-full py-1.5 hover:bg-primary hover:text-white duration- 300 my-2" )}  >
            Add to cart
        </button>
    );
};

export default AddToCartButton;