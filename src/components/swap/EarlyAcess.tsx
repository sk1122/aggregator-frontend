import { useAppContext } from "@/context";

const EarlyAcess = () => {
  const {access, setAccess, isModalOpen, setIsModalOpen} = useAppContext()


  return (
    <>
     <div className="w-full h-full flex justify-center flex-col items-center text-black font-inter">
            <div
              onClick={() => setIsModalOpen(false)}
              className="cursor-pointer absolute top-5 right-5"
            >
              X
            </div>
            {!access && (
              <>
                <h1 className="text-2xl">
                  Checking if you are in the whitelist
                </h1>
                <div className="mb-5">
                  <div className="bg-white text-sm cursor-pointer text-black px-3 py-3 rounded-md font-semibold w-40 flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#000"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="#000"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </>
            )}
            {access && (
              <h1 className="text-2xl">You have access to WagPay ser!</h1>
            )}
            <div>
              If not please fill this{' '}
              <a className="text-blue-500 font-bold" href="">
                form
              </a>
            </div>
          </div>
    </>
  )
}

export default EarlyAcess;