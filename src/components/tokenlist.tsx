import { useAppContext } from '@/context';
import toggle from '@/utils/toggle';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const TokenList = () => {
  const { showTokenList, setShowTokenList } = useAppContext();
  const [toggle, setToggle] = useState(false)

  const CoinCaps = () => {
    return (
      <>
        <div className="px-3 py-1 items-center rounded-full flex bg-[#353434]">
          <img
            src="/images/usdc.png"
            className=" w-5 h-5 mr-1 rounded-full"
            alt=""
          />
          <p className="text-sm">USDC</p>
        </div>
      </>
    );
  };

  const Token = () => {
    return (
      <>
        <div className="w-full bg-[#353434] p-2 flex text-xl items-center space-x-2">
          <img
            src="/images/usdc.png"
            className=" w-6 h-6 mr-1 rounded-full"
            alt=""
          />
          <p className="text-sm">USDC</p>
        </div>
      </>
    );
  };

  const DefaultTokenList = () => {
    return (
      <>
        <div className="text-white bg-[#353434]  w-full px-2  flex items-center">
          <AiOutlineSearch className="text-2xl" />
          <input
            type="text"
            placeholder="search tokens"
            className="w-full bg-transparent border-none p-3 focus:outline-none focus:border-none"
          />
        </div>
        <div className="flex flex-wrap items-center space-x-2 space-y-1">
          <CoinCaps />
        </div>
        <div>
          <div className="w-full bg-[#1F1F1F] p-1 space-y-1">
            <Token />
          </div>
        </div>

        <div className="w-full pb-2 absolute bottom-0 ">
          <button className="float-right bg-[#353434] px-3 py-2 flex items-center  ">
            {' '}
            <span>
              <FiEdit className="text-xl mr-1" />
            </span>{' '}
            manage tokens{' '}
          </button>
        </div>
      </>
    );
  };

  const CustomTokenList = () => {
    return (
      <>
        <div className="w-full flex justify-between text-center bg-[#1F1F1F] p-1 space-y-0">
          <div className="w-full bg-[#353434] p-2">
            <p>List</p>
          </div>
          <div className="w-full bg-transparent p-2">
            <p>Token</p>
          </div>
        </div>
        <div className="text-white bg-[#353434]  w-full px-2  flex items-center">
          <AiOutlineSearch className="text-2xl" />
          <input
            type="text"
            placeholder="search tokens"
            className="w-full bg-transparent border-none p-3 focus:outline-none focus:border-none"
          />
        </div>
        <div className='space-y-1'>
          <TokenListSelect />
           <TokenListSelect />
            <TokenListSelect />
        </div>
      </>
    );
  };

  const TokenListSelect = () => {
    return (
      <>
        <div className='flex justify-between items-center p-2 bg-[#C8C8C8] text-black rounded-sm'>
          <div className='flex items-center space-x-2'>
            <img src="/t.svg" alt="" />
            <div className='text-sm'>
              <p>1inch</p>
              <p>32 tokens</p>
            </div>
          </div>
            <div className="flex items-center">
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
        </div>
      </>
    );
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto backdrop-blur-sm fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="max-h-[800px] overflow-auto no-scrollbar relative  my-6 mx-auto max-w-5xl  w-[450px]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#191919] overflow-hidden outline-none focus:outline-none text-white px-5 ">
            <div className="flex items-start justify-between rounded-t mt-5 sticky top-0 z-40 bg-[#191919] ">
              <h3 className="text-xl font-semibold">select token</h3>
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
              {/* <DefaultTokenList /> */}
              <CustomTokenList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenList;
