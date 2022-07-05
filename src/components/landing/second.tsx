import React from 'react';

const Second = () => {
  return (
    <div className="z-50 mx-auto h-fit max-w-7xl bg-wagpay-dark">
      <div className="pt-16 pb-32">
        <div className="container mx-auto max-w-7xl xl:px-4 2xl:px-0">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="relative z-20 flex shrink-0 items-center text-center text-base text-wagpay-primary">
                Accept crypto Fast
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <span className="mt-8 block text-center text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-5xl">
              <span className="text-white sm:block">
                Everything you need to get&nbsp;
              </span>
              <span className="text-white sm:block">
                started with Crypto Payments
              </span>
            </span>
            <div className="text-center text-base text-white">
              <span className="sm:block">
                At Wagpay, We have every feature that you will need to accept
              </span>
              <span className="sm:block">
                payments in crypto and track them, more features coming soon!
              </span>
            </div>
          </div>
          {/* cards */}
          <div className="mx-12">
            {/* first card */}
            <div className="mt-20 flex w-full flex-col items-center lg:flex-row">
              <div className="h-96 w-96 border border-gray-300"></div>
              <div className="card_gradient flex h-72 flex-col items-start justify-evenly border border-gray-200 px-8 text-white sm:w-[520px] lg:-ml-12">
                <h2 className="text-xl font-semibold">Register on Wagpay</h2>
                <p className="text-base">
                  At wagpay, we have every feature that you will need to accept
                  payments in crypto and track them, more features coming
                  soon.At wagpay, we have every feature that you will need to
                  accept payments in crypto and track them, more features coming
                  soon.
                </p>
              </div>
            </div>
            {/* second card */}
            <div className="mt-20 flex w-full flex-col-reverse items-center justify-end lg:flex-row">
              <div className="card_gradient flex h-72 flex-col items-start justify-evenly border border-gray-200 px-8 text-white sm:w-[520px] lg:-mr-12">
                <h2 className="text-xl font-semibold">Register on Wagpay</h2>
                <p className="text-base">
                  At wagpay, we have every feature that you will need to accept
                  payments in crypto and track them, more features coming
                  soon.At wagpay, we have every feature that you will need to
                  accept payments in crypto and track them, more features coming
                  soon.
                </p>
              </div>
              <div className="h-96 w-96 border border-gray-300"></div>
            </div>
            {/* third card */}
            <div className="mt-20 flex w-full flex-col items-center lg:flex-row">
              <div className="h-96 w-96 border border-gray-300"></div>
              <div className="card_gradient flex h-72 flex-col items-start justify-evenly border border-gray-200 px-8 text-white sm:w-[520px] lg:-ml-12">
                <h2 className="text-xl font-semibold">Register on Wagpay</h2>
                <p className="text-base">
                  At wagpay, we have every feature that you will need to accept
                  payments in crypto and track them, more features coming
                  soon.At wagpay, we have every feature that you will need to
                  accept payments in crypto and track them, more features coming
                  soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
