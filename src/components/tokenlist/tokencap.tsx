import {  TokenInterface } from "@/contexts/ChainContext";

 const CoinCaps = ({name, symbol, address, logoURI}: TokenInterface) => {
    return (
      <>
        <div className="px-3 py-1 items-center rounded-full flex bg-[#353434]">
          <img
            src={logoURI}
            className=" w-5 h-5 mr-1 rounded-full"
            alt=""
          />
          <p className="text-sm">{name}</p>
        </div>
      </>
    );
  };

export default CoinCaps;