import React from 'react';

import First from '@/components/landing/first';
import Navbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use swapping Dashboard"
        />
      }
    >
      <Navbar />
      <main className="relative h-fit bg-wagpay-dark pt-24 pb-20 sm:pb-0 lg:mb-0">
        <div className="mx-auto max-w-7xl sm:mb-28">
          <First />
        </div>
        {/* <div className="relative w-full bg-wagpay-dark">
          <svg
            width="1512"
            height="1175"
            viewBox="0 0 1512 1175"
            fill="none"
            className="absolute inset-x-0 hidden w-full xl:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="756"
              cy="587.5"
              rx="587.5"
              ry="982"
              transform="rotate(-90 756 587.5)"
              fill="url(#paint0_linear_232_385)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_232_385"
                x1="187.5"
                y1="660.999"
                x2="1108.68"
                y2="731.336"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B1D9FF" stopOpacity="0" />
                <stop offset="1" stopColor="#E8E9FF" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
          <Second />
        </div>
        <div className="mx-auto mb-28 max-w-7xl text-white">
          <Third />
        </div>
        <div className="mx-auto max-w-7xl text-white">
          <Support />
        </div>
        <Footer /> */}
      </main>
    </Main>
  );
};

export default Index;
