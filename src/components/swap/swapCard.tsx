import { useAppContext } from '@/context';
import ChainSelect from './ChainSelect';
import CoinSelect from './CoinSelect';
import SwapChainButton from './swapChainButton';
import WagPay from '@wagpay/sdk';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useChainContext } from '@/contexts/ChainContext';
import { Signer } from 'ethers';
import { Props } from 'next/script';
import { useSigner } from 'wagmi';


const SwapCard = () => {
  const wagpay = new WagPay();
  const {
    access,
    routeToExecute,
    isAuthenticated,
    swapping,
    setSwapping,
    routes,
    filteredFromChains,
    filteredToChains,
    setAccount,
    setIsAuthenticated,
    isDropDownOpenFromCoin,
    setIsDropDownOpenFromCoin,
    isDropDownOpenToCoin,
    setIsDropDownOpenToCoin,
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
    const { data: signerData, isError, isLoading } = useSigner()


  const styles = routeToExecute ? ' ' : ' cursor-not-allowed';
  const setAmountToSwap = (e: any) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  useEffect(() => {
    console.log(isAuthenticated);
  }, []);

  const swap = async () => {
    const currentAddr = await signerData?.getAddress()
    console.log(currentAddr)

    if (access) {
      toast.error("You don't have access ser!");
      console.log('hii');
      return;
    }

    setSwapping(true);
    console.log(routeToExecute, routes, routes[0], signerData);
    if (routeToExecute && routes && routes[0] && signerData) {
      console.log('swapping');
      const id = toast.loading('Swapping...');
      try {
        console.log(signerData);
        currentAddr && await wagpay.executeRoute(currentAddr, routeToExecute, signerData);
      } catch (e) {
        toast.error('some error', {
          id: id,
        });
        setSwapping(false);
        return;
      }
      toast.success('Successfully swapped', {
        id: id,
      });
    }
    setSwapping(false);
  };

  useEffect(() => {
    console.log(fromCoin, toCoin, wagpay.getSupportedCoins(137), 'fromCoin');
  }, [fromCoin, toCoin]);

  return (
    <>
      <section className="col-span-full flex w-full flex-col space-y-4 px-2 sm:px-8 lg:col-span-3 lg:px-0">
        <h1 className="mb-3 text-lg font-bold">Summary</h1>
        <div className="w-full rounded-md p-2 dark:bg-secondaryDark">
          <h2 className="mb-4 font-semibold">Selected Chains</h2>
          <div className="flex w-full justify-evenly space-x-3">
            <div className="w-1/2">
              <ChainSelect
                label="source chain"
                value={fromChain}
                setValue={setFromChain}
                supportedChains={filteredFromChains}
              />
            </div>
            <SwapChainButton />
            <div className="w-1/2">
              <ChainSelect
                label="Destination chain"
                value={toChain}
                setValue={setToChain}
                supportedChains={filteredToChains}
              />
            </div>
          </div>
        </div>

        <div className="col-span-7 mt-4 flex w-full flex-col space-y-2 rounded-md bg-primaryGray p-3 dark:bg-tertiaryGray sm:mt-7">
          <h2 className="mb-4 font-semibold">Selected Tokens</h2>
          <label
            htmlFor="sender"
            className="mb-2 block text-left text-sm text-black dark:text-white"
          >
            You Send
          </label>
          <div className="flex w-full">
            <div className="relative h-12 w-3/5 shadow-sm">
              <input
                value={amount}
                onChange={setAmountToSwap}
                type="number"
                placeholder="0.00"
                className="block h-12 w-full rounded-l-md border-none bg-tertiaryLight px-3 text-black shadow-sm outline-none focus:border-none focus:outline-none active:outline-none dark:bg-quaternaryGray dark:text-white sm:text-sm"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-xs text-gray-400">MAX</span>
              </div>
            </div>
            <CoinSelect
              value={fromCoin}
              setValue={setFromCoin}
              supportedCoins={Object.values(
                wagpay.getSupportedCoins(fromChain.id)
              )}
              isDropDownOpenCoin={isDropDownOpenFromCoin}
              setIsDropDownOpenCoin={setIsDropDownOpenFromCoin}
            />
          </div>
          <span className="text-sm text-primaryGray"></span>
          {/* svg */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="36"
            height="36"
            preserveAspectRatio="xMidYMid meet"
            className="flex w-full items-center"
            viewBox="0 0 24 24"
          >
            <path
              fill="#888888"
              d="m18 4l-4 4h3v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a4 4 0 0 0-4-4a4 4 0 0 0-4 4v8H2l4 4l4-4H7V8a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8a4 4 0 0 0 4 4a4 4 0 0 0 4-4V8h3l-4-4Z"
            ></path>
          </svg> */}
          {/* receive section */}
          <label
            htmlFor="sender"
            className="mb-2 block text-left text-sm text-black dark:text-white"
          >
            You Receive
          </label>
          <div className="flex w-full">
            <div className="relative h-12 w-3/5 shadow-sm">
              <input
                type="number"
                placeholder="0.00"
                value={
                  routeToExecute
                    ? Number(routeToExecute.amountToGet).toFixed(2)
                    : 0.0
                }
                className="block h-12 w-full rounded-l-md border-none bg-tertiaryLight px-3 text-black shadow-sm outline-none focus:border-none focus:outline-none active:outline-none dark:bg-quaternaryGray dark:text-white sm:text-sm"
                disabled
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-xs text-gray-400">MAX</span>
              </div>
            </div>
            <CoinSelect
              value={toCoin}
              setValue={setToCoin}
              supportedCoins={Object.values(
                wagpay.getSupportedCoins(toChain.id)
              )}
              isDropDownOpenCoin={isDropDownOpenToCoin}
              setIsDropDownOpenCoin={setIsDropDownOpenToCoin}
            />
          </div>
          <span className="text-sm text-primaryGray"></span>
        </div>

        <div className="flex w-full flex-col space-y-2 rounded-md p-2 dark:bg-secondaryDark">
          <div className="flex w-full items-center justify-between">
            <span>Bridge Name</span>
            <span className="text-sm font-light">{routeToExecute?.name}</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span>Bridge Fees</span>
            <span className="text-sm font-light">
              {routeToExecute?.transferFee}
            </span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span>Gas Fees</span>
            <span className="text-sm font-light">0.06 USDC</span>
          </div>
        </div>

        <div className="col-span-7 mt-1 flex items-center justify-between sm:mt-6">
          <span className="text-white">Select bridge Automatically</span>
          <div>
            {/* Start */}
            <div className="flex items-center">
              <div className="mr-2 text-sm italic text-gray-400">
                {toggle ? 'On' : 'Off'}
              </div>
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="switch"
                  className="sr-only"
                  checked={toggle}
                  onChange={() => setToggle(!toggle)}
                />
                <label className="bg-gray-400" htmlFor="switch">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        <div>
          {/* connect wallet button */}
          {signerData && (
            <>
              {swapping && (
                <button
                  onClick={() => swap()}
                  type="button"
                  className="flex justify-center items-center col-span-7 mt-5 w-full rounded-full border border-transparent bg-white py-2 px-4 text-base font-medium text-wagpay-dark hover:bg-indigo-50"
                >
                  <div className="bg-white text-sm cursor-pointer text-black px-3 py-3 rounded-md font-semibold w-40 flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#000"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="#000"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </button>
              )}
              {!swapping && (
                <button
                  onClick={swap}
                  type="button"
                  className={` ${styles} col-span-7 mt-5 w-full rounded-full border border-transparent bg-white py-2 px-4 text-base font-medium text-wagpay-dark hover:bg-indigo-501 `}
                >
                  Swap
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SwapCard;
