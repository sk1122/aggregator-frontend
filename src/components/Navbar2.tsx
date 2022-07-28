import { useAppContext } from '@/context';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import React from 'react';

const Navbar2 = () => {
  const { isTransectionModalOpen, setIsTransectionModalOpen } = useAppContext()
  return (
    <header className="bg-wagpay-dark pb-4 lg:pb-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-wagpay-dark py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Wagpay</span>
                <h2 className="text-3xl font-bold text-white">Wagpay.</h2>
              </a>
            </Link>

          </div>
          <div className="flex items-center cursor-pointer hover:underline space-x-8 " onClick={(e) => {
            setIsTransectionModalOpen(!isTransectionModalOpen)
          }}>
            <a
              className="text-lg font-bold text-white border px-4 py-1">Transections
            </a>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              return (
                <div
                  {...(!mounted && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!mounted || !account || !chain) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className="rounded-full border border-transparent bg-white py-2 px-4 text-base font-medium text-wagpay-dark hover:bg-indigo-50"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="rounded-full border border-transparent bg-red-600 py-2 px-4 text-base font-medium text-white"
                        >
                          Wrong network
                        </button>
                      );
                    }
                    return (
                      <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 md:space-x-4 lg:space-x-6">
                        <button
                          onClick={openChainModal}
                          className="flex items-center rounded-full border border-transparent bg-white px-1 text-base font-medium text-wagpay-dark hover:bg-indigo-50"
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 28,
                                height: 28,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  style={{ width: 28, height: 28 }}
                                />
                              )}
                            </div>
                          )}
                          <span className="rounded-full bg-white px-4 py-2">
                            {chain.name}
                          </span>
                        </button>

                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="rounded-full border border-transparent bg-white px-1 text-base text-wagpay-dark hover:bg-indigo-50"
                        >
                          {account.displayName}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Navbar2;