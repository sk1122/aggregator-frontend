import { AiOutlineSearch } from "react-icons/ai";

  const AddTokens = () => {
    return (
      <>
        <div className="space-y-2">
          <div className="text-white bg-[#353434]  w-full px-2  flex items-center">
            <AiOutlineSearch className="text-2xl" />
            <input
              type="text"
              placeholder="search tokens"
              className="w-full bg-transparent border-none p-3 focus:outline-none focus:border-none"
            />
          </div>
          <div className="w-full border-3 text-center border border-gray-400 p-4 text-gray-500">
            <p>No Tokens Added</p>
          </div>
        </div>
      </>
    );
  };


  export default AddTokens;