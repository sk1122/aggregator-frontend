import { useAppContext } from '@/context';
import { useChainContext } from '@/contexts/ChainContext';
import { TbArrowsLeftRight } from 'react-icons/tb';

const SwapChainButton = () => {
  const { setFromChain, toChain, setToChain, fromChain } = useChainContext();

  return (
    <>
      <div
        className="col-span-1 mt-8 cursor-pointer place-self-center sm:block bg-wagpay-card-bg-secondary p-2 rounded-full "
        onClick={() => {
          setFromChain(toChain);
          setToChain(fromChain);
        }}
      >
        <TbArrowsLeftRight />
      </div>
    </>
  );
};

export default SwapChainButton;
