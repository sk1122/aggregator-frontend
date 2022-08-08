import { TokenInterface } from "../tokenlist";

  const Token = ({name, symbol, logoURI}: TokenInterface) => {
    return (
      <>
        <div className="w-full bg-[#353434] p-2 flex text-xl items-center space-x-2">
          <img
            src={logoURI}
            className=" w-6 h-6 mr-1 rounded-full"
            alt=""
          />
          <p className="text-sm">{name}</p>
        </div>
      </>
    );
  };

  export default Token;