import axios from "axios";
import { useState } from "react";

interface props  {
  name: string
  logo: string
  setTokens: Function
}

const TokenListSelect = ({name, logo, setTokens}: props) => {
  const [toggle, setToggle] = useState(false);
  const fetchNewTokens = async(url : string) => {
      const res = await axios.get(url);
  }

    return (
      <>
        <div className="flex justify-between items-center p-2 bg-[#C8C8C8] text-black rounded-sm">
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