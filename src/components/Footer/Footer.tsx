import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';
import SocialLinks from '../header/SocialLinks';
import Title from './Title';
import { information, navigation } from '@/constants';
import { GoDotFill } from 'react-icons/go';
import { BsEnvelopeAt } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className="bg-lightBg py-10 lg:py-20">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex flex-col gap-y-5">
                    <Link href={"/"}>
                        <Image src={logo} alt="logo" />
                    </Link>
                    <p> We are a team of designers and developers that create high quality WordPress  </p>
                    <SocialLinks iconStyle="bg-base-200 border border-primary shadow-md text-black p-3 text-lg hover:bg-primary hover:text-base-200 cursor-pointer duration-200 rounded-md" />
                </div>
                <div className="mt-3 flex flex-col gap-y-2">
                    <Title>My Account </Title>
                    {navigation?.map((item) => (
                        <Link key={item?.title} href={item?.href} className="flex items-center gap-x-2 text-gray-700 hover:text-primary duration-200 font-medium"   >
                            <GoDotFill size={10} /> {item?.title}
                        </Link>
                    ))}
                </div>

                <div className="mt-3 flex flex-col gap-y-2">
                    <Title>My Account </Title>
                    {information?.map((item) => (
                        <Link key={item?.title} href={item?.href} className="flex items-center gap-x-2 text-gray-700 hover:text-primary duration-200 font-medium"   >
                            <GoDotFill size={10} /> {item?.title}
                        </Link>
                    ))}
                </div>

                <div className="mt-3">
                    <Title>Talk to Us</Title>
                    <div >
                        <div> <p className="text-sm">Got Questions? Call us</p>
                            <Title>+670 413 90 762</Title>
                        </div>
                        <div className="mt-3">
                            <p className="text-base flex items-center gap-x-3 text-gray-600">
                                <BsEnvelopeAt /> shofy@support.com
                            </p>
                            <p className="text-base flex items-center gap-x-3 text-gray-600">
                                <GrLocation /> Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer