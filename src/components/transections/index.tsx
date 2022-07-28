import { useAppContext } from '@/context';
import { useEffect, useState } from 'react';
import WagPay from '@wagpay/sdk';
import { AiOutlineClose } from 'react-icons/ai';
import { useSigner } from 'wagmi';

const Transections = () => {
  const wagpay = new WagPay();
  const [tsxs, setTsxs] = useState([]);
  const { data: signerData, isError, isLoading } = useSigner();
  const { setIsTransectionModalOpen } = useAppContext();

  const fetchTransections = async () => {
  const address = await  signerData?.getAddress()
      if(address ){
 const tsx: any = await wagpay.getTxs(
    address
    );
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
              >
                <option value="all_transection">All Transection</option>
                <option value="pending_transection">Pending Transection</option>
                <option value="successfull transection">
                  Successfull Transection
                </option>
              </select>
            </div>
            { /*
<div className="relative p-3 flex-auto min-h-[600px] space-y-8">
              {tsxs.map((tsx: any) => {
                return <TransectionBar key={tsx.id} />;
              })}
            </div>

           */ }
                      </div>
        </div>
      </div>
    </>
  );
};

export default Transections;









