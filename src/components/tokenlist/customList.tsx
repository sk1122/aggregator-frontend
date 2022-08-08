import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TokenList from ".";
import AddTokens from "./addToken";
import TokenListSelect from "./TokenSelect";
interface TokenList {
  name :string
  url: string
  logourl: string
  timestamp: string
}


const CustomTokenList = () => {

  const Tokenlists: TokenList[] = [
    {name: "1inch", url:"https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link", timestamp: "2022-08-08T06:09:44.387+00:00", logourl: "https://app.1inch.io/assets/images/logo.png"},
    {name: "CoinGecko", url: "https://tokens.coingecko.com/uniswap/all.json", timestamp: "2022-08-08T06:09:44.387+00:01",  logourl: "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"}
  ]


  
    const [selectedTab, setSelectedTab] = useState('List');
    return (
      <>
        <div className="w-full flex justify-between text-center bg-[#1F1F1F] p-1 space-y-0">
          <div
            onClick={(e) => {
              setSelectedTab('List');
            }}
            className={
              (selectedTab == 'List' ? 'bg-[#353434]' : ' bg-transparent ') +
              ' w-full  p-2'
            }
          >
            <p>List</p>
          </div>
          <div
            onClick={(e) => {
              setSelectedTab('Token');
            }}
            className={
              (selectedTab == 'Token' ? 'bg-[#353434]' : ' bg-transparent ') +
              ' w-full  p-2'
            }
          >
            <p>Token</p>
          </div>
        </div>
        <div>
          {selectedTab == 'List' ? (
            <>
              <div className="text-white bg-[#353434]  w-full px-2  flex items-center mb-3">
                <AiOutlineSearch className="text-2xl" />
                <input
                  type="text"
                  placeholder="search tokens"
                  className="w-full bg-transparent border-none p-3 focus:outline-none focus:border-none"
                />
              </div>
              <div className="space-y-1">
               {
                Tokenlists.map((tokenList: TokenList) => {
                  return <TokenListSelect name={tokenList.name} logo={tokenList.logourl} key={tokenList.timestamp}  />
                })
               }
              </div>{' '}
            </>
          ) : (
            <AddTokens />
          )}
        </div>
      </>
    );
  };


  export default CustomTokenList;