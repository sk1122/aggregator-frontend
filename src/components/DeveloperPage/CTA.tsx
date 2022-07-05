import Link from 'next/link';

const CTA = () => {
  return (
    <>
      <div className="my-32 flex  justify-center">
        <div className="flex w-[70%] justify-center rounded-lg border border-black bg-white p-8 text-black">
          <div className="flex w-full flex-col items-center justify-center space-y-1 md:space-y-2 lg:items-start">
            <span className="text-6xl font-extrabold  drop-shadow-lg sm:text-7xl">
              WagPay
            </span>
            <span className="bg-gradient-to-br from-orange-700 to-yellow-400 bg-clip-text text-6xl font-extrabold text-transparent drop-shadow-lg sm:text-7xl">
              Ecosystem
            </span>
            <span className="text-6xl font-extrabold  drop-shadow-lg sm:text-7xl">
              Overview
            </span>
          </div>
          <div className="space-y-8 px-5">
            <p>
              Learn about high-level topics related to wagpay integration and
              development such as development workflows, products built,
              programs,dApps (decentralized applications), and client SDKs.
            </p>
            <div className="flex w-full items-center justify-start space-x-4 md:space-x-6 ">
              <Link href="/">
                <a className="flex items-center rounded-full bg-wagpay-primary py-2 px-4 text-sm text-white drop-shadow-lg sm:py-3 sm:px-6 sm:text-base">
                  <span>Explore docs</span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
