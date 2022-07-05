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
  fromCoin: CoinKey;
  toCoin: CoinKey;
  amount: string;
  toggle: boolean;
  setFromChain: Dispatch<SetStateAction<Chain>>;
  setToChain: Dispatch<SetStateAction<Chain>>;
  setFromCoin: Dispatch<SetStateAction<CoinKey>>;
  setToCoin: Dispatch<SetStateAction<CoinKey>>;
  setAmount: Dispatch<SetStateAction<string>>;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

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
  const [fromCoin, setFromCoin] = useState(
    Object.values(wagpay.getSupportedCoins(fromChain.id))[0].chainAgnositcId
  );
  const [toCoin, setToCoin] = useState(
    Object.values(wagpay.getSupportedCoins(toChain.id))[1].chainAgnositcId
  );
  const [amount, setAmount] = useState<string>('');

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
  };

  return (
    <ChainContext.Provider value={sharedState}>
      {children}
    </ChainContext.Provider>
  );
}
