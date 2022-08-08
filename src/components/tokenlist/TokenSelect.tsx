import { useState } from "react";

const TokenListSelect = () => {
  const [toggle, setToggle] = useState(false);
    return (
      <>
        <div className="flex justify-between items-center p-2 bg-[#C8C8C8] text-black rounded-sm">
          <div className="flex items-center space-x-2">
            <img src="/t.svg" alt="" />
            <div className="text-sm">
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