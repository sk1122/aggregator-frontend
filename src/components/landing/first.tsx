import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const First = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="flex flex-col items-center justify-center space-y-8 sm:px-6 sm:text-center md:mx-auto md:max-w-5xl md:items-start lg:col-span-6 lg:flex lg:items-center lg:text-left">
        <div className="flex w-full flex-col items-center justify-center space-y-1 md:space-y-2 lg:items-start">
          <span className="text-6xl font-extrabold text-white drop-shadow-lg sm:text-7xl">
            Frictionless
          </span>
          <span className="bg-gradient-to-br from-orange-700 to-yellow-400 bg-clip-text text-6xl font-extrabold text-transparent drop-shadow-lg sm:text-7xl">
            Crosschain
          </span>
          <span className="text-6xl font-extrabold text-white drop-shadow-lg sm:text-7xl">
            Swapping
          </span>
        </div>
        <div className="flex w-full items-center justify-center text-center text-sm text-white sm:text-lg lg:justify-start">
          Helping you choose the best bridge for your swap
        </div>
        <div className="flex w-full items-center justify-center space-x-4 md:space-x-6 lg:justify-start">
          <Link href="/swap">
            <a className="flex items-center rounded-full bg-wagpay-primary py-2 px-4 text-sm text-white drop-shadow-lg sm:py-3 sm:px-6 sm:text-base">
              <span>Open App</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                ></path>
              </svg>
            </a>
          </Link>
          {/* add waitlist form url here */}
          <a
            className="rounded-full border border-white bg-transparent px-4 py-2 text-sm text-white drop-shadow-lg sm:py-3 sm:px-6 sm:text-base"
            href="#"
          >
            Join Waitlist
          </a>
        </div>
      </div>
      <div className="mt-16 w-full sm:mt-24 lg:col-span-6 lg:mt-0">
        <div className="mx-2 sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
          <Image
            src="/images/placeholder.png"
            alt="landing_page_image"
            priority
            width={520}
            height={520}
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
