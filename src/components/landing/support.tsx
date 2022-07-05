import Link from 'next/link';
import React from 'react';

const Support = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#2B2B2B] py-12 md:rounded-full">
      <h2 className="mb-1 bg-gradient-to-br from-orange-700 to-yellow-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Need Support
      </h2>
      <div className="mb-4 text-xl font-extrabold text-white sm:text-3xl">
        We&rsquo;re here to help
      </div>
      <p className="mx-2 mb-8 text-center text-base sm:w-3/5 xl:mx-0">
        We are on mission to solve every problem related to web3 payment
        infrastructure if you want to get on call and help us solve problems .
        do get in touch
      </p>
      <Link href="#">
        <a className="rounded-full bg-white py-3 px-6 text-lg text-wagpay-dark">
          Get Help
        </a>
      </Link>
    </div>
  );
};

export default Support;
