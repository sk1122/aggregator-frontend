import { FiRefreshCw } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { useAppContext } from '@/context';


const PriorityBar = () => {
  const {isDropDownOpenp, setIsDropDownOpenp, priorties, priorityValue, setPriorityValue, refreshRoutes, setRefreshRoutes} = useAppContext()

  return (
    <>
     <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>Select bridges to swap</span>
          <button
            type="button"
            onClick={() => {
              setRefreshRoutes(true)
            }}
            className="flex items-center justify-center space-x-2 text-xs text-primaryGray decoration-wavy hover:underline hover:underline-offset-2"
          >
            <span>Refresh routes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="16"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#888888"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 6.5c1.378-2.412 4.024-4 7-4a8 8 0 0 1 8 8m-1 4c-1.408 2.287-4.118 4-7 4a8 8 0 0 1-8-8"></path>
                <path d="M8.5 6.5h-5v-5m9 13h5v5"></path>
              </g>
            </svg>
          </button>
        </div>
        <select
        onChange={(e) => setPriorityValue(e.target.value)}
          name="filter"
          id="filter"
          className="form-select rounded-md border-none bg-secondaryDark outline-none dark:text-white"
        >

          {
            priorties.map((priority: any) => {
              return <option
              selected={priority === priority[0]}
              value={priority}
              className="rounded-b-md border-none bg-secondaryDark outline-none dark:text-white"
          
            >
             {priority}
            </option>
            })
          }
          
          
        </select>
      </div>
    </>
  )
}

export default PriorityBar;