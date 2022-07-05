import { useAppContext } from '@/context';
import type { Token } from '@wagpay/types';
import React, { useState } from 'react';

interface ISelectProps {
  value: string;
  setValue: Function;
  supportedCoins: Token[];
  isDropDownOpenCoin: boolean;
  setIsDropDownOpenCoin: Function;
}

const CoinSelect = ({
  supportedCoins,
  value,
  setValue,
  isDropDownOpenCoin,
  setIsDropDownOpenCoin,
}: ISelectProps) => {
  const selectedCoin = (coin: Token) => {
    setValue(coin.chainAgnositcId);
    setIsDropDownOpenCoin(!isDropDownOpenCoin);
  };

  return (
    <>
      <div className="relative w-2/5">
        <div
          className="flex flex-row overflow-hidden rounded-r-md"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDownOpenCoin(!isDropDownOpenCoin);
          }}
        >
          <div className="flex h-12 w-full cursor-pointer select-none flex-row justify-between bg-wagpay-card-bg-secondary px-1 text-white">
            <div className="flex flex-row items-center">
              <img
                className="mr-2.5 rounded-md bg-gray-300 object-cover"
                src="https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg"
                alt="chain_icon"
              />
              <span className="leading-6">{value}</span>
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
        {isDropDownOpenCoin && (
          <div className="absolute top-12 left-0 z-10 w-full overflow-hidden rounded-b-md bg-wagpay-card-bg-secondary mt-2 text-white shadow">
            {supportedCoins.map((coin: Token) => (
              <div
                key={coin.chainAgnositcId}
                className="flex h-11 w-full cursor-pointer select-none flex-row justify-between bg-wagpay-card-bg-secondary mt-2 py-2.5 pl-3 pr-2 text-white hover:bg-tertiaryGray"
                onClick={(e) => {
                  e.stopPropagation();
                  selectedCoin(coin);
                }}
              >
                <div className="flex flex-row items-center">
                  <img
                    className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                    src="https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg"
                    alt="chain_icon"
                  />
                  <span className="leading-6">{coin.symbol}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoinSelect;
