
import {
  chainEnum,
  ChainId,
  coinEnum,
  CoinKey,
  Routes,
  tokens,
} from '@wagpay/types';
import type { Chain } from '@wagpay/types';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import BridgeBar from '@/components/swap/bridgeBar';
import Navbar2 from '@/components/Navbar2';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Modal from '@/components/Modal';
import { db } from '@/utils/db';
import Loading from '@/components/swap/loading';
import EarlyAcess from '@/components/swap/EarlyAcess';
import { useAppContext } from '@/contexts/context';
import PriorityBar from '@/components/swap/priorityBar';
import SwapCard from '@/components/swap/swapCard';
import { useSigner } from 'wagmi';
import { useChainContext } from '@/contexts/ChainContext';
import Transections from '@/components/transections';
import {getPendingTx, getRoutes, getSupportedChains} from "@wagpay/sdk"

const Swap = () => {
  const {
    access,
    setAccess,
    isModalOpen,
    setIsModalOpen,
    setIsDropDownOpenp,
    setAccount,
    setIsAuthenticated,
    swapping,
    setSwapping,
    routeToExecute,
    setRouteToExecute,
    routes,
    setRoutes,
    setFilteredFromChains,
    setFilteredToChains,
    setSigner,
    setIsDropDownOpenFromCoin,
    setIsDropDownOpenToCoin,
    priorityValue,
    setPriorityValue,
    priorties,
    refreshRoutes,
    setRefreshRoutes,
    isTransectionModalOpen,
    showTokenList
  } = useAppContext();

  const {
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
  } = useChainContext();

  const { data: signerData, isError, isLoading } = useSigner();

  useEffect(() => {
    if (signerData) {
      signerData.getAddress().then((address: any) => {
        console.log(address);
        setAccount(address);
        db(address)
          .then((find) => {
            if (find) {
              setAccess(true);
              toast.success('You are whitelisted');
            } else {
              setAccess(false);
              toast.error('You are not whitelisted');
            }
          })
          // @ts-ignore
          .catch((e) => {
            setAccess(false);
            toast.error('You are not whitelisted');
          });
      });
      setIsModalOpen(true);
    }
  }, [signerData]);



  const checkWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
          setAccount(accounts[0]);
          setIsAuthenticated(true);

          // @ts-ignore
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = await provider.getSigner();

          setSigner(signer);

          console.log(accounts[0]);
        } else {
          console.log('Do not have access');
        }
      } else {
        console.log('Install Metamask');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const getRoutes = async (
    fromChainId: number,
    toChainId: number,
    fromToken: string,
    toToken: string,
    _amount: string
  ): Promise<void> => {
    if (access) {
      toast.error("You don't have access ser!");
      return;
    }
    var availableRoutes;

    const toastId = toast.loading('Fetching Routes');

    try {
      availableRoutes = await getRoutes(fromChainId, toChainId, fromToken, toToken, _amount);
    } catch (e) {
      toast.error("Can't Fetch Routes Between these chains", {
        id: toastId,
      });
      return;
    }

    toast.success('Fetched routes successfully', {
      id: toastId,
    });

    setRoutes(availableRoutes);
  };

  const FetcAvalabaleRoutes = () => {
    if (
      fromChain &&
      Number(fromChain.id) &&
      toChain &&
      fromCoin &&
      toCoin &&
      amount &&
      amount !== '0'
    ) {
      getRoutes(
        Number(fromChain.id),
        Number(toChain.id),
        fromCoin.symbol,
        toCoin.symbol,
        // @ts-ignore
        ethers.utils
          .parseUnits(
            amount,
            // @ts-ignore
            tokens[Number(fromChain.id)][fromCoin.toString()]?.decimals
          )
          .toString()
      );
    }
  };

  useEffect(() => {
    if (routes) setRouteToExecute(routes[0]);
    console.log(routes);
  }, [routes]);

  useEffect(() => {
    FetcAvalabaleRoutes();
  }, [fromChain, toChain, fromCoin, toCoin, refreshRoutes]);

  useEffect(() => {
    const timout = setTimeout(() => {
      FetcAvalabaleRoutes();
    }, 1000);
    return () => clearTimeout(timout);
  }, [amount]);

  useEffect(() => {
    const setIntervalRef = setInterval(() => {
      FetcAvalabaleRoutes();
    }, 60000);
    return clearInterval(setIntervalRef);
  }, []);

  useEffect(() => {
    const filteredChains = getSupportedChains().filter((chain) => {
      return chain.id != fromChain.id;
    });
    setFilteredFromChains(filteredChains);
  }, [fromChain]);

  useEffect(() => {
    const filteredChains = getSupportedChains().filter((chain) => {
      return chain.id != toChain.id;
    });
    setFilteredToChains([...filteredChains]);
  }, [toChain]);

  useEffect(() => {
    if (toChain.id === fromChain.id) {
      const toC = getSupportedChains().find((chain) => {
        return fromChain.id != chain.id;
      });
      if (!toC) return;
      setToChain(toC);
    }
  }, [fromChain]);

  useEffect(() => {
    if (toChain.id === fromChain.id) {
      const toC = getSupportedChains().find((chain) => {
        return toChain.id != chain.id;
      });
      if (!toC) return;
      setFromChain(toC);
    }
  }, [toChain]);

  useEffect(() => {
    if (toggle) {
      setRouteToExecute(routes[0]);
    }
  }, [toggle]);

  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use swapping Dashboard"
        />
      }
    >
      <Navbar2 />

      <div
        className="mt-4  grid w-full grid-cols-9 content-start gap-y-10 pb-6 md:pb-0 lg:mt-12 lg:gap-y-0 lg:gap-x-3"
        onClick={() => {
          setIsDropDownOpenToCoin(false);
          setIsDropDownOpenFromCoin(false);
        }}
      >
        <SwapCard />
        <div className="col-span-full w-full px-2 sm:px-8 lg:col-span-6 lg:px-0 ">
          <PriorityBar />
          <div className="relative flex w-full flex-col justify-center space-y-12 xl:items-start">
            {/* single option */}

            {toggle ? (
              routeToExecute ? (
                <BridgeBar priority={priorityValue} bridge={routeToExecute} />
              ) : null
            ) : (
              <div>
                {routes ? (
                  routes
                    .slice()
                    .sort((x: any, y: any) => {
                      console.log(priorties[0], priorties[1], priorties[2]);
                      if (
                        priorties[0] === priorityValue &&
                        Number(x.amountToGet) < Number(y.amountToGet)
                      ) {
                        return 1;
                      } else if (
                        priorties[1] === priorityValue &&
                        Number(x.transferFee) > Number(y.transferFee)
                      ) {
                        return 1;
                      } else if (
                        priorties[2] === priorityValue &&
                        Number(x.bridgeTime) < Number(y.bridgeTime)
                      ) {
                        return 1;
                      } else {
                        return -1;
                      }
                    })
                    .map((value: Routes, idx: number) => {
                      return (
                        <BridgeBar
                          priority={idx == 0 ? priorityValue : ''}
                          bridge={value}
                        />
                      );
                    })
                ) : (
                  <>
                    {swapping && (
                      <>
                        <Loading />
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <EarlyAcess />
        </Modal>
        {isTransectionModalOpen ? <Transections /> : null}
    
        
      </div>
    </Main>
  );
};

export default Swap;
