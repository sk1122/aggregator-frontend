import { useAppContext } from '@/context';
import { TokenInterface } from '@/contexts/ChainContext';
import type { Token } from '@wagpay/types';
import React, { JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import TokenList from '../tokenlist';
interface ISelectProps {
  value: TokenInterface;
  onClick: Function
 
}


const CoinSelect = ({
  value,
  onClick
  
}: ISelectProps) => {
  useEffect(() => {
    console.log(value)
  }, [value])
  const {showTokenList} = useAppContext()
  return (
    <>
      <div className="relative w-2/5">
        <div
          className="flex flex-row overflow-hidden rounded-r-md"
          onClick={() => {
            onClick()}}
        >
          <div className="flex h-12 w-full cursor-pointer select-none flex-row justify-between bg-wagpay-card-bg-secondary px-1 text-white">
            <div className="flex flex-row items-center">
              <img
                className="mr-2.5 rounded-full object-cover w-6 h-6"
                src={value.logoURI}
              />
              <span className="leading-6">{value.symbol}</span>
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
      </div>
    </>
  );
};

export default CoinSelect;
