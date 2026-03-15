// import { notFound } from '@/assets';
// import Button from '@/components/Button';
// import Container from '@/components/Container';
// import Image from 'next/image';
// import React from 'react';

// const NotFoundPage = () => {
//     return (
//         <Container className="flex flex-col gap-2 items-center py-10">
//             <Image src={notFound} alt="notFound-image" className="max-w-60" />
//             <p className="text-xl font-semibold">Oops! Page not found</p>
//             <p className="text-sm text-gray-500 max-w-80 text-center">
//                 Whoops, this is embarrassing. Looks like the page you were looking for wasn&apos;t found.
//             </p>
//             <Button href="/">Back to Home</Button>
//         </Container>
//     );
// };

// export default NotFoundPage;

'use client'
import React from "react";
import ErrorAnimation from "../../public/404.json";
import Container from "@/components/Container";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <Container>
      <Lottie animationData={ErrorAnimation} loop={true}  style={{ width: "400px", height: "400px", margin: "0 auto" }} />
      <h1 className="text-3xl font-bold text-center mt-20"> Oops, page not found! </h1>
      <p className="text-center mt-4 text-gray-600"> The page you are looking for is not available. </p>
    </Container>
  );
};

export default ErrorPage;