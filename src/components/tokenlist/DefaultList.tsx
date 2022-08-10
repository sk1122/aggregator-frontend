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
      const DefaultTokens: TokenInterface[] = [
    {"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","chainId":1,"name":"TetherUSD","symbol":"USDT","decimals":6,"logoURI":"https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"},
    {"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","chainId":1,"name":"USDCoin","symbol":"USDC","decimals":6,"logoURI":"https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"},
    {"address":"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0","chainId":1,"name":"MaticToken","symbol":"MATIC","decimals":18,"logoURI":"https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"}
  ]


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
          {
            DefaultTokens?.map((token: TokenInterface) => {
              return <CoinCaps name={token.name} symbol={token.symbol} key={token.address} logoURI={token.logoURI} chainId={token.chainId} address={token.address} decimals={token.decimals} />
            })
          }
        </div>
        <div className='overflow-y-auto max-h-[330px]'>
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
     

        <div className="w-full pb-2 absolute bottom-0 flex justify-between items-center">
          <div>
            tokens : {tokens?.length}
          </div>
          <button
            onClick={(e) => {
              setOnManageTokenPage(true);
            }}
            className=" bg-[#353434] px-3 py-2 flex items-center  "
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