import { tokens } from "@wagpay/types";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { TokenInterface } from "../tokenlist";
import Token from "./token";
import CoinCaps from "./tokencap";

interface Props {
  setOnManageTokenPage: Function
  tokens: TokenInterface[] | any;
}

  const DefaultTokenList = ({setOnManageTokenPage, tokens}: Props) => {
    const [searchToken, setSearchToken] = useState<string>('')
    return (
      <>
        <div className="text-white bg-[#353434]  w-full px-2  flex items-center ">
          <AiOutlineSearch className="text-2xl" />
          <input
            type="text"
            value={searchToken}
            onChange={(e) => {
               setSearchToken( e.target.value)
            }}
            placeholder="search tokens"
            className="w-full bg-transparent border-none p-3 focus:outline-none focus:border-none"
          />
        </div>
        <div className="flex flex-wrap items-center space-x-2 space-y-1">
          <CoinCaps />
        </div>
        <div className='overflow-y-auto max-h-[340px]'>
          <div className="w-full bg-[#1F1F1F] p-1 space-y-1">
            {
             searchToken !== ''  ? tokens?.filter((token: TokenInterface) => token.name.startsWith(searchToken) ).map((token: TokenInterface) => {
              return <Token decimals={token.decimals} name={token.name} symbol={token.symbol} logoURI={token.logoURI} address={token.address} chainId={token.chainId} key={token.name} />;
            }) : 
            tokens?.map((token: TokenInterface) => {
              return <Token decimals={token.decimals} name={token.name} symbol={token.symbol} logoURI={token.logoURI} address={token.address} chainId={token.chainId} key={token.name} />;
            })
            
            }
          </div>
        </div>

        <div className="w-full pb-2 absolute bottom-0 ">
          <button
            onClick={(e) => {
              setOnManageTokenPage(true);
            }}
            className="float-right bg-[#353434] px-3 py-2 flex items-center  "
          >
            {' '}
            <span>
              <FiEdit className="text-xl mr-1" />
            </span>{' '}
            manage tokens{' '}
          </button>
        </div>
      </>
    );
  };


  export default DefaultTokenList;