import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Third = () => {
  return (
    <>
      {/* section #1 */}
      <div className="mx-2 mb-0 flex flex-col items-center justify-center space-y-8 sm:mx-auto xl:mb-24 xl:flex-row xl:justify-evenly xl:space-y-0">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/images/multichain-card.png"
            alt="muktichain-card"
            priority
            width={520}
            height={300}
            placeholder="blur"
            blurDataURL="/images/multichain-card.png"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-6 text-center">
          <h2 className="w-full text-center xl:text-left">
            <span className="bg-gradient-to-br from-orange-700 to-yellow-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
              MultiChain
            </span>
            &nbsp;&nbsp;
            <span className="text-4xl font-extrabold text-white sm:text-6xl">
              Support
            </span>
          </h2>
          <div className="mx-2 text-center text-base sm:w-3/4 xl:mx-0 xl:w-full xl:text-left">
            We support it all so you don&apos;t have to comprimise. We support
            custom contracts on Polygon, Ethereum, Solana, and AVAX.
          </div>
        </div>
      </div>
      {/* section #2 */}
      <div className="mx-2 flex flex-col-reverse items-center justify-center space-y-8 sm:mx-auto xl:flex-row xl:justify-evenly xl:space-y-0">
        <div className="mt-8 flex w-full flex-col items-center justify-center space-y-6 text-center xl:mt-0">
          <h2 className="w-full text-center xl:text-left">
            <span className="inline-block bg-gradient-to-br from-orange-700 to-yellow-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
              Powerful & Flexible
            </span>
            <span className="block text-4xl font-extrabold text-white sm:text-6xl">
              developer tooling
            </span>
          </h2>
          <div className="mx-2 text-center text-base sm:w-3/4 xl:mx-0 xl:w-full xl:text-left">
            Get up and running in a few minutes with our checkout link. We also
            have easy-to-use APIs and a React SDK for you to create a more
            custom branded, native experience for your customers.
          </div>
          <div className="flex w-full justify-center xl:justify-start">
            <Link href="#">
              <a className="rounded-full bg-white px-4 py-2 text-wagpay-dark">
                Read the Documentation
              </a>
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Image
            src="/images/dev-tooling.png"
            alt="muktichain-card"
            priority
            width={520}
            height={420}
            placeholder="blur"
            blurDataURL="/images/dev-tooling.png"
          />
        </div>
      </div>
    </>
  );
};

export default Third;
