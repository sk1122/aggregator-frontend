import '@rainbow-me/rainbowkit/styles.css';

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import type { ReactNode } from 'react';
import { createContext } from 'react';
import { chain, createClient, WagmiProvider } from 'wagmi';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: 'Wagpay',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const ConnectWalletContext = createContext(null);

const appInfo = {
  appName: 'Wagpay Swap',
  learnMoreUrl: 'https://wagpay-swapping-dashboard.vercel.app/',
};

type IContextProps = {
  children: ReactNode;
};

export function ConnectWalletProvider({ children }: IContextProps) {
  return (
    <ConnectWalletContext.Provider value={null}>
      <WagmiProvider client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          appInfo={appInfo}
          coolMode
          theme={midnightTheme()}
        >
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </ConnectWalletContext.Provider>
  );
}
