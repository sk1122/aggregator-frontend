
import WagPay from '@wagpay/sdk';
import { Chain, ChainId, CoinKey } from '@wagpay/types';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export interface ChainContextInterface {
  fromChain: Chain;
  toChain: Chain;
  fromCoin: TokenInterface;
  toCoin: TokenInterface;
  amount: string;
  toggle: boolean;
  setFromChain: Dispatch<SetStateAction<Chain>>;
  setToChain: Dispatch<SetStateAction<Chain>>;
  setFromCoin: Dispatch<SetStateAction<TokenInterface>>;
  setToCoin: Dispatch<SetStateAction<TokenInterface>>;
  setAmount: Dispatch<SetStateAction<string>>;
  setToggle: Dispatch<SetStateAction<boolean>>;
  tokens: TokenInterface[] | null
  setTokens: Dispatch<SetStateAction<TokenInterface[] | null>>
  defaultTokens: TokenInterface[]
}


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
  decimals: number;
  logoURI: string;
}

 const defaultTokens: TokenInterface[] = [
    {"address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","chainId":1,"name":"TetherUSD","symbol":"USDT","decimals":6,"logoURI":"https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"},
    {"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","chainId":1,"name":"USDCoin","symbol":"USDC","decimals":6,"logoURI":"https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"},
    {"address":"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0","chainId":1,"name":"MaticToken","symbol":"MATIC","decimals":18,"logoURI":"https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"}
  ]


const ChainContext = createContext<ChainContextInterface>(
  {} as ChainContextInterface
);

interface IContextProps {
  children: ReactNode;
}

export function useChainContext() {
  return useContext(ChainContext);
}

export function ChainContextProvider({ children }: IContextProps) {
  const wagpay = new WagPay();

  const [fromChain, setFromChain] = useState<Chain>(
    wagpay.getSupportedChains()[0]
  );
  const [toChain, setToChain] = useState<Chain>(wagpay.getSupportedChains()[1]);
  const [toggle, setToggle] = useState(false);
  const [fromCoin, setFromCoin] = useState(defaultTokens[0]);
  const [toCoin, setToCoin] = useState(defaultTokens[1]);
  const [amount, setAmount] = useState<string>('');
  const [tokens, setTokens] = useState<TokenInterface[] | null>(null);

  const sharedState: ChainContextInterface = {
    fromChain,
    toChain,
    fromCoin,
    toCoin,
    amount,
    toggle,
    setFromChain,
    setToChain,
    setFromCoin,
    setToCoin,
    setAmount,
    setToggle,
    tokens,
    setTokens, 
    defaultTokens
  };

  return (
    <ChainContext.Provider value={sharedState}>
      {children}
    </ChainContext.Provider>
  );
}
