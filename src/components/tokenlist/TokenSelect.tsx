import { TokenInterface } from "@/contexts/ChainContext";
import axios from "axios";
import { useEffect, useState } from "react";

interface props  {
  name: string
  logo: string
  url: string
  setTokens: Function
}

const TokenListSelect = ({name, logo, setTokens, url}: props) => {
  const [toggle, setToggle] = useState(name=='1inch'? true:  false);
  const fetchNewTokens = async(url : string) => {
      const res = await axios.get(url);
      const resTokens = res.data.tokens
      if(resTokens) {
      setTokens((prev: TokenInterface[]) =>  {
          return [...resTokens, ...prev]
      })
      console.log(resTokens)
      }
 }

useEffect(() => {
  if(toggle) {
    if(name !== '1inch') {
    fetchNewTokens(url)
    }
  }
}, [toggle]) 

    return (
      <>
        <div className={ (toggle ? ' bg-gray-200 text-wagpay-dark ': ' bg-[#353434] text-white ') +  ` flex justify-between items-center p-2  rounded-sm`}>
          <div className="flex items-center space-x-2">
            <img src={logo} className="w-6 h-6" alt="" />
            <div className="text-sm">
              <p>{name}</p>
              <p>32 tokens</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="form-switch">
              <input
                type="checkbox"
                id={name}
                name={name}
                className="sr-only"
                checked={toggle}
                onChange={() => setToggle(!toggle)}
              />
              <label className="bg-gray-400" htmlFor={name}>
                <span className="bg-white shadow-sm" aria-hidden="true"></span>
                <span className="sr-only">Switch label</span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default TokenListSelect;