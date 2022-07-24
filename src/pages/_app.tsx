import '../styles/global.css';
import type { AppProps } from 'next/app';
import { AppContext } from '@/context';
import { ConnectWalletProvider } from '@/contexts/ConnectWalletContext';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import WagPay from '@wagpay/sdk';
import type { Chain, CoinKey, Routes } from '@wagpay/types';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ChainContextProvider } from '@/contexts/ChainContext';

function MyApp({ Component, pageProps }: AppProps) {
  const wagpay = new WagPay();
  const queryClient = new QueryClient();
  const priorties = ['Highest returns', 'Lowest bridge fees', 'Lowest time'];
  const [access, setAccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpenp, setIsDropDownOpenp] = useState(false);
  const [priorityValue, setPriorityValue] = useState(priorties[0]);
  // const [fromChain, setFromChain] = useState<Chain>(wagpay.getSupportedChains()[0]);
  // const [toChain, setToChain] = useState<Chain>(wagpay.getSupportedChains()[1]);
  // const [toggle, setToggle] = useState(false);
  // const [fromCoin, setFromCoin] = useState(Object.values(wagpay.getSupportedCoins(fromChain.id))[0].chainAgnositcId);
  // const [toCoin, setToCoin] = useState(Object.values(wagpay.getSupportedCoins(toChain.id))[1].chainAgnositcId);
  // const [amount, setAmount] = useState('0');
  const [routeToExecute, setRouteToExecute] = useState<Routes>();
  const [account, setAccount] = useState<string | undefined>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [swapping, setSwapping] = useState(false);
  const [routes, setRoutes] = useState<Routes[]>();
  const [isDropDownOpenFromCoin, setIsDropDownOpenFromCoin] = useState(false);
  const [isDropDownOpenToCoin, setIsDropDownOpenToCoin] = useState(false);
  const [refreshRoutes, setRefreshRoutes] = useState();
  // @ts-ignore
  // const { data: signerData, isError, isLoading } = useSigner();

  const [filteredFromChains, setFilteredFromChains] = useState<Chain[]>([]);
  const [filteredToChains, setFilteredToChains] = useState<Chain[]>([]);
  const [signer, setSigner] = useState();

  const sharedState = {
    access,
    setAccess,
    isModalOpen,
    setIsModalOpen,
    isDropDownOpenp,
    setIsDropDownOpenp,
    priorityValue,
    setPriorityValue,
    priorties,
    // fromChain, setFromChain,
    // toChain, setToChain,
    // toggle, setToggle,
    // fromCoin, setFromCoin,
    // toCoin, setToCoin,
    // amount, setAmount,
    routeToExecute,
    setRouteToExecute,
    account,
    setAccount,
    isAuthenticated,
    setIsAuthenticated,
    swapping,
    setSwapping,
    routes,
    setRoutes,
    // signerData,
    filteredFromChains,
    setFilteredFromChains,
    filteredToChains,
    setFilteredToChains,
    setSigner,
    signer,
    isDropDownOpenFromCoin,
    setIsDropDownOpenFromCoin,
    isDropDownOpenToCoin,
    setIsDropDownOpenToCoin,
    refreshRoutes,
    setRefreshRoutes,
  };

  return (
    <div className="min-h-screen bg-wagpay-dark  text-white">
      <QueryClientProvider client={queryClient}>
        <ChainContextProvider>
          <AppContext.Provider value={sharedState}>
            <ConnectWalletProvider>
              <Toaster></Toaster>
              <Component {...pageProps} />
            </ConnectWalletProvider>
          </AppContext.Provider>
        </ChainContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
