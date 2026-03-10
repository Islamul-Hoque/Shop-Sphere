import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const linksData = [
    {
        icon: <FaGithub />,
        href: "https://github.com/Islamul-Hoque"
    },
    {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/Islamul-Hoque/",
    },
    {
        icon: <FaFacebook />,
        href: "https://www.facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL"
    },
    {
        icon: <FaYoutube />,
        href: "https://www.youtube.com/@technicalishfakrox",
    },
    {
        icon: <FaEnvelope />,
        href: "mailto:islamulhoque2006@gmail.com"
    },
];

const SocialLinks = ({ className, iconStyle,}: { className?: string;  iconStyle?: string; }) => {
    return (
        <div className={twMerge("text-xl py-2 text-white/50 flex items-center gap-x-2", className)}>
            {linksData?.map((item, index) => (
                <Link key={index} href={item?.href} target="_blank" className={twMerge("border border-white/20 inline-flex p-2 rounded-full hover:text-primary hover:border-primary duration-300 cursor-pointer", iconStyle)} >
                    {item?.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;