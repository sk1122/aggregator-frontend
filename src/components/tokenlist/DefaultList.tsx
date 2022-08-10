import { useAppContext } from "@/contexts/context";
import { TokenInterface, useChainContext } from "@/contexts/ChainContext";
import { tokens } from "@wagpay/types";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import first from "../landing/first";
import token from "./token";

import Token from "./token";
import CoinCaps from "./tokencap";

interface Props {
  setOnManageTokenPage: Function
  tokens: TokenInterface[] | any;
  tokenValue : string
}

  const DefaultTokenList = ({setOnManageTokenPage, tokens, tokenValue}: Props) => {
    const {defaultTokens, setToCoin, setFromCoin  } = useChainContext()
    const {setShowTokenList, showTokenList} = useAppContext()
    const [searchToken, setSearchToken] = useState<string>('')

    useEffect(() => {
      console.log(tokenValue)    
      
    }, [])
    

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
            defaultTokens?.map((token: TokenInterface) => {
              return <CoinCaps name={token.name} symbol={token.symbol} key={token.address} logoURI={token.logoURI} chainId={token.chainId} address={token.address} decimals={token.decimals} />
            })
          }
        </div>
        <div className='overflow-y-auto max-h-[330px]'>
          <div className="w-full bg-[#1F1F1F] p-1 space-y-1">
            {
            tokens?.slice(0,100).map((token: TokenInterface) => {
              return <div onClick={(e) => {
                e.stopPropagation()
                console.log(tokenValue)
                tokenValue == 'from' ? setFromCoin(token) : setToCoin(token)
                setShowTokenList(!showTokenList)
              }}> <Token decimals={token.decimals} name={token.name} symbol={token.symbol} logoURI={token.logoURI} address={token.address} chainId={token.chainId} key={token.name} /> </div>;
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