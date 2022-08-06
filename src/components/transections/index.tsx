import { useAppContext } from '@/context';
import { useEffect, useState } from 'react';
import WagPay from '@wagpay/sdk';
import { AiOutlineClose } from 'react-icons/ai';
import TransectionBar from './transectionBar';
import { useSigner } from 'wagmi';

const Transections = () => {
  const wagpay = new WagPay();
  const [tsxs, setTsxs] = useState([]);
  const [transectionfilter, setTransectionFilter] = useState('all_transection')
  const { data: signerData, isError, isLoading } = useSigner();
  const { setIsTransectionModalOpen } = useAppContext();
  const fetchTransections = async () => {
    const address = await signerData?.getAddress();
    const tsx: any = await wagpay.getTxs(
      '0x5b9f628bae945968a50827b0b586e0e52f65280d'
    );
    console.log(tsx);
    if (tsx) {
      setTsxs(tsx);
    }
  };

  useEffect(() => {
    fetchTransections();
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto backdrop-blur-sm fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="max-h-[800px] overflow-auto no-scrollbar relative w-auto my-6 mx-auto max-w-8xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#191919] outline-none focus:outline-none text-white px-5 py-2">
            {/*header*/}
            <div>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsTransectionModalOpen(false)}
              >
                <AiOutlineClose className="text-3xl text-white" />
              </button>
            </div>
            <div className="flex items-start justify-between rounded-t mt-5 sticky top-0 z-40 bg-[#191919] p-2">
              <h3 className="text-3xl font-semibold">Transections</h3>
              <select
                name="transection"
                id="transection"
                className="bg-[#3A3A3A]"
                onChange={(e) => {
                  setTransectionFilter(e.target.value)
                }}
              >
                <option key='all' value="all_transection">All Transection</option>
                <option key='pen' value="pending">Pending Transection</option>
                <option key='succ' value="successfull">
                  Successfull Transection
                </option>
              </select>
            </div>
            {/*body*/}
            <div className="relative p-3 flex-auto min-h-[600px] space-y-8">

              {
                transectionfilter !== 'all_transection' ? 
              tsxs.filter((tsx: any) => {
                return tsx.status.toLowerCase() == transectionfilter
              }).map((tsx: any) => {
                return (
                  <TransectionBar
                    bridgeName={tsx.bridge}
                    fromChain={tsx.from_chain}
                    fromToken=""
                    fromTransectionHash={tsx.origin_tx_hash}
                    toChain={tsx.to_chain}
                    toToken=""
                    totransectionHash=""
                    from={tsx.from}
                    to={tsx.to}
                    uniswap={null}
                    key={tsx.id}
                    status={tsx.status}
                  />
                );
              }): 
              tsxs.map((tsx: any) => {
                return (
                  <TransectionBar
                    bridgeName={tsx.bridge}
                    fromChain={tsx.from_chain}
                    fromToken=""
                    fromTransectionHash={tsx.origin_tx_hash}
                    toChain={tsx.to_chain}
                    toToken=""
                    totransectionHash=""
                    from={tsx.from}
                    to={tsx.to}
                    uniswap={null}
                    key={tsx.id}
                    status={tsx.status}
                  />
                );
              })

            }
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transections;
