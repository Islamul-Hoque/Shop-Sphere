import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="absolute right-2 bottom-44 border flex flex-col text-2xl border-base-300 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
            <button className="border-y-base-300 p-2 hover:bg-primary/30 hover:text-secondary duration-200">
                <FiShoppingCart />
            </button>
            <button className="border-y-base-300 p-2 hover:bg-secondary/5 hover:text-secondary duration-200">
                <LuEye />
            </button>
            <button className="border-y-base-300 p-2 hover:bg-secondary/5 hover:text-secondary duration-200">
                <MdFavoriteBorder />
            </button>
        </div>
    );
};

export default Sidebar;
