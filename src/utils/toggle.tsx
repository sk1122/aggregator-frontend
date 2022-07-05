/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const Toggle = () => {
  return (
    <>
      {/* Code block starts */}
      <div className="relative cursor-pointer rounded-full shadow-sm">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="checkbox absolute m-1 h-4 w-4 cursor-pointer appearance-none rounded-full bg-white shadow-sm focus:outline-none"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block h-6 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700"
        />
      </div>
      {/* Code block ends */}

      <style>
        {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
      </style>
    </>
  );
};

export default Toggle;
