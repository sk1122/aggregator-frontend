import { useAppContext } from '@/context';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { FiEdit } from "react-icons/fi";


const TokenList = () => {
  const { showTokenList, setShowTokenList } = useAppContext();

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
              <div className="text-white bg-[#353434]  w-full px-2  flex items-center">
                <AiOutlineSearch className="text-2xl" />
                <input
                  type="text"
                  placeholder="search tokens"
                  className="w-full bg-transparent border-none p-3 focus:outline-none focus:border-none"
                />
              </div>
              <div className="flex flex-wrap items-center space-x-2 space-y-1">
                <div className="px-3 py-1 items-center rounded-full flex bg-[#353434]">
                  <img
                    src="/images/usdc.png"
                    className=" w-6 h-6 mr-1 rounded-full"
                    alt=""
                  />
                  <p>USDC</p>
                </div>
                <div className="px-3 py-1 rounded-full flex bg-[#353434]">
                  <img
                    src="/images/usdc.png"
                    className=" w-6 h-6 mr-1 rounded-full"
                    alt=""
                  />
                  <p>USDC</p>
                </div>
                <div className="px-3 py-1 rounded-full flex bg-[#353434]">
                  <img
                    src="/images/usdc.png"
                    className=" w-6 h-6 mr-1 rounded-full"
                    alt=""
                  />
                  <p>USDC</p>
                </div>
                <div className="px-3 py-1 rounded-full flex bg-[#353434]">
                  <img
                    src="/images/usdc.png"
                    className=" w-6 h-6 mr-1 rounded-full"
                    alt=""
                  />
                  <p>Eth</p>
                </div>
              </div>
              <div>
                <div className='w-full bg-[#1F1F1F] p-1 space-y-1'>
                  <div className="w-full bg-[#353434] p-2 flex text-xl items-center space-x-2">
                    <img
                      src="/images/usdc.png"
                      className=" w-8 h-8 mr-1 rounded-full"
                      alt=""
                    />
                    <p>USDC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full p-3 absolute bottom-0 right-4'>
            <button className='float-right bg-[#353434] px-3 py-2 flex items-center  ' > <span><FiEdit className='text-xl mr-1' /></span> manage tokens </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenList;
