import Link from 'next/link';
import React from 'react';

const navigation = [
  { name: 'Developers', href: '/DevPage' },
  { name: 'Docs', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const Navbar = () => {
  return (
    <header className="bg-wagpay-dark pb-4 lg:pb-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-wagpay-dark py-6 lg:border-none">
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <a>
                <span className="sr-only">Wagpay</span>
                <h2 className="text-3xl font-bold text-white">Wagpay.</h2>
              </a>
            </Link>
            <div className="ml-10 hidden space-x-12 md:block">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative inline-block text-base font-medium text-white hover:text-indigo-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="ml-10 space-x-4">
              <Link href="/swap">
                <a className="flex items-center rounded-full border border-transparent bg-wagpay-primary py-2 px-4 text-sm font-medium text-white">
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
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-500 md:hidden" />
        <div className="mt-4 flex justify-center space-x-6 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
