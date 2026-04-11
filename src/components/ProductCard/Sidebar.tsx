"use client"
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../../type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addToFavorite } from "@/redux/shofySlice";

const Sidebar = ({ product }: { product: ProductType }) => {
    const { favorite } = useSelector((state: StateType) => state?.shofy)
    const [existingProduct, setExistingProduct] = useState<ProductType | null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const availableProduct = favorite?.find((item) => item?.id === product?.id)
        if (availableProduct) { 
            setExistingProduct(availableProduct);
        } else {
            setExistingProduct(null)
        }
    }, [favorite, product, dispatch, existingProduct]);

    const handleFavorite = () => {
        dispatch(addToFavorite(product));
        if (existingProduct) {
            toast.success("Removed from favorite successfully!")
        } else {
            toast.success("Added to favorite successfully!")
        }
    };

    return (
        <div className="absolute right-2 bottom-44 border flex flex-col text-2xl border-base-300 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
            <button className="border-y-base-300 p-2 hover:bg-primary/30 hover:text-secondary duration-200">
                <FiShoppingCart />
            </button>
            <button className="border-y-base-300 p-2 hover:bg-secondary/5 hover:text-secondary duration-200">
                <LuEye />
            </button>
            <button onClick={handleFavorite}
                className="border-y-base-300 p-2 hover:bg-secondary/5 hover:text-secondary duration-200">
                {existingProduct ? (
                    <MdFavorite className="text-secondary" />
                ) : (
                    <MdFavoriteBorder />
                )}

            </button>
        </div>
    );
};

export default Sidebar;