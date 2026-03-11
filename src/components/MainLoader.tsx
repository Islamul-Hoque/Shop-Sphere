import { logo } from "@/assets";
import Image from "next/image";

const MainLoader = () => {
    return (
        <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center z-50">
            <Image src={logo} className="w-48 h-auto object-contain" priority  alt="Logo" />
            <div className="w-52 p-4 rounded-lg
                bg-amazonBlue flex items-center justify-center relative">
                <span className="w-14 h-14 inline-flex border-8 border-base-300 rounded-full relative">
                    <span className="w-14 h-14 border-8  border-r-primary border-b-base-300 border-t-base-300 border-l-base-300 rounded-full absolute -top-2 -left-2 animate-spin" ></span>
                </span>
            </div>
            <p className="text-lg text-center font-semibold tracking-wide text-secondary">
                Loading...
            </p>
        </div>
    );
};

export default MainLoader;