import type { Chain } from '@wagpay/types';
import React, { useState } from 'react';
import { useNetwork } from 'wagmi';

interface ISelectProps {
  label?: string;
  value: Chain;
  setValue: Function;
  supportedChains: Chain[];
}

const ChainSelect = ({
  label,
  value,
  setValue,
  supportedChains,
}: ISelectProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const selectedChain = (chain: Chain) => {
    setValue(chain);
    setIsDropDownOpen(false);
  };

  const { activeChain, chains } = useNetwork();

  return (
    <>
      {label && (
        <label
          htmlFor="from"
          className="mb-2 block text-sm font-medium text-white"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <div
          className="flex flex-row overflow-hidden rounded-md"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          <div className="flex h-11 w-full cursor-pointer select-none flex-row justify-between bg-[#464646] py-2.5 pl-3 pr-2 text-white">
            <div className="flex flex-row items-center">
              <img
                className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                src={value.logoUri}
                alt="chain_icon"
              />
              <span className="leading-6 flex">
                {value.chainName}
                {value.id === activeChain?.id && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                    <circle cx="5" cy="5" r="5" fill="green" />
                  </svg>
                )}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 transition duration-200 ease-in-out"
            >
              <path
                fill="#D0D0D0"
                d="M17 9.17a1 1 0 00-1.41 0L12 12.71 8.46 9.17a1 1 0 00-1.41 0 1 1 0 000 1.42l4.24 4.24a1 1 0 001.42 0L17 10.59a1 1 0 000-1.42z"
              ></path>
            </svg>
          </div>
        </div>
        {isDropDownOpen && (
          <div className="absolute top-12 left-0 z-10 w-full overflow-hidden rounded-b-md bg-[#464646] text-white shadow">
            {supportedChains.map((chain: Chain) => (
              <div
                key={chain.id}
                className="flex h-11 w-full cursor-pointer select-none flex-row justify-between bg-[#464646] py-2.5 pl-3 pr-2 text-white "
                onClick={() => selectedChain(chain)}
              >
                <div className="flex flex-row items-center">
                  <img
                    className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                    src={chain.logoUri}
                    alt="chain_icon"
                  />
                  <span className="leading-6 flex">
                    {chain.chain}
                    {chain.id == activeChain?.id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <circle cx="5" cy="5" r="5" fill="green" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChainSelect;
