import { TokenList } from '@/contexts/ChainContext';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import AddTokens from './addToken';
import TokenListSelect from './TokenSelect';

interface Props {
  tokenlists: TokenList[]
  setTokens: Function
}


const CustomTokenList = ({tokenlists, setTokens}:Props) => {
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
              {tokenlists.map((tokenList: TokenList) => {
                return (
                  <TokenListSelect
                  url={tokenList.url}
                    setTokens={setTokens}
                    name={tokenList.name}
                    logo={tokenList.logourl}
                    key={tokenList.timestamp}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <AddTokens />
        )}
      </div>
    </>
  );
};

export default CustomTokenList;
