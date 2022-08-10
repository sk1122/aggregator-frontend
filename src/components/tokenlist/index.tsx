import { useAppContext } from '@/context';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import axios from 'axios';
import { Token } from '@wagpay/types';
import CustomTokenList from './customList';
import DefaultTokenList from './DefaultList';

export interface TokenList {
  name: string;
  url: string;
  logourl: string;
  timestamp: string;
}





export interface TokenInterface {
  address: string;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number
  logoURI: string;
}


const defaultList: TokenList[] = [
    {
      name: '1inch',
      url: 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link',
      timestamp: '2022-08-08T06:09:44.387+00:00',
      logourl: 'https://app.1inch.io/assets/images/logo.png',
    },
    {
      name: 'CoinGecko',
      url: 'https://tokens.coingecko.com/uniswap/all.json',
      timestamp: '2022-08-08T06:09:44.387+00:01',
      logourl:
        'https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png',
    },
  ];


const TokenList = () => {
  const { showTokenList, setShowTokenList } = useAppContext();
  const [onMangaeTokenPage, setOnManageTokenPage] = useState(false);
  const [tokens, setTokens] = useState<Token[] | null>(null);
  const [tokenLists, setTokenlists] = useState<TokenList[]>(defaultList)



  const fetchTokens = async () => {
    const res = await axios.get(
      'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link'
    );
    setTokens(res.data.tokens);
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  useEffect(() => {
    console.log(tokens);
    console.log(tokens?.filter((token: any) => token.symbol == "ETH"))
    
  }, [tokens]);


 
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto backdrop-blur-sm fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="max-h-[800px] overflow-auto no-scrollbar relative  my-6 mx-auto max-w-5xl  w-[450px]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#191919] overflow-hidden outline-none focus:outline-none text-white px-5 ">
            <div className="flex items-center justify-between rounded-t mt-5 sticky top-0 z-40 bg-[#191919] ">
              {onMangaeTokenPage ? (
                <>
                  <button
                    onClick={(e) => {
                      setOnManageTokenPage(false);
                    }}
                  >
                    <IoMdArrowBack className="text-lg" />
                  </button>

                  <h3 className="text-xl font-semibold">select token</h3>
                </>
              ) : (
                <h3 className="text-xl font-semibold">mangae token</h3>
              )}
              <div>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowTokenList(false)}
                >
                  <AiOutlineClose className="text-2xl text-white " />
                </button>
              </div>
            </div>
            {/*body*/}
            <div className="relative py-2 flex-auto min-h-[500px] space-y-3">
              {onMangaeTokenPage ? <CustomTokenList setTokens={setTokens} tokenlists={tokenLists} /> : <DefaultTokenList setOnManageTokenPage={setOnManageTokenPage} tokens={tokens} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenList;
