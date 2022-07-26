import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import { Routes, chainEnum } from '@wagpay/types';
import { useAppContext } from '@/context';

interface IBridgeBarProps {
  bridge: Routes;
  priority: string
}

const BridgeBar = ({ bridge, priority }: IBridgeBarProps) => {

  const {routeToExecute, setRouteToExecute} = useAppContext()
  const chainObj: any = {
    1: "Ethereum",
    137: "Polygon"
  }



  useEffect(( ) => {
      console.log("this is the bridge is selected ", routeToExecute)
  }, [routeToExecute])

  useEffect(() => {
    console.log(bridge.logoUri)
  }, [])



  return (
    <>
    <label htmlFor="selected-bridge" onClick={() => {
              setRouteToExecute(bridge)
            }}>
      <div className="mb-2 rounded-md border-[1px] border-gray-700 p-2">
        <div className="mb-2 flex items-center justify-between">
          {/* left */}
          <div className="flex items-center space-x-2">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.58481 11.1042V12.5178C7.58481 12.9137 7.27381 13.2247 6.87798 13.2247H5.46433C5.0685 13.2247 4.7575 12.9137 4.7575 12.5178V5.44954C4.7575 5.05372 5.0685 4.74271 5.46433 4.74271H5.87429C6.51043 4.74271 6.82144 3.97934 6.36907 3.54111L3.85276 0.996524C3.78754 0.929409 3.70952 0.876057 3.62332 0.839626C3.53712 0.803195 3.44449 0.784424 3.35091 0.784424C3.25733 0.784424 3.16469 0.803195 3.07849 0.839626C2.99229 0.876057 2.91428 0.929409 2.84906 0.996524L0.318615 3.54111C-0.133756 3.97934 0.191385 4.74271 0.813394 4.74271H1.22336C1.61918 4.74271 1.93018 5.05372 1.93018 5.44954V15.3451C1.93018 15.741 2.24119 16.052 2.63701 16.052H9.7053C10.1011 16.052 10.4121 15.741 10.4121 15.3451V11.1042C10.4121 10.7083 10.1011 10.3973 9.7053 10.3973H8.29164C7.90995 10.3973 7.58481 10.7083 7.58481 11.1042Z"
                fill="#615CCD"
              />
              <path
                d="M16.7718 13.2247C16.376 13.2247 16.065 12.9137 16.065 12.5179V2.62229C16.065 2.22647 15.7539 1.91547 15.3581 1.91547H8.28984C7.89401 1.91547 7.58301 2.22647 7.58301 2.62229V6.86327C7.58301 7.25909 7.89401 7.57009 8.28984 7.57009H9.70349C10.0993 7.57009 10.4103 7.25909 10.4103 6.86327V5.44961C10.4103 5.05378 10.7213 4.74278 11.1172 4.74278H12.5308C12.9266 4.74278 13.2376 5.05378 13.2376 5.44961V12.5179C13.2376 12.9137 12.9266 13.2247 12.5308 13.2247H12.1208C11.4847 13.2247 11.1737 13.9881 11.6261 14.4263L14.1565 16.9568C14.4392 17.2395 14.8775 17.2395 15.1602 16.9568L17.6907 14.4263C18.1289 13.9881 17.8179 13.2247 17.1959 13.2247H16.7718Z"
                fill="#615CCD"
              />
            </svg> */}
            <img className='object-cover w-5 h-5' src={bridge.logoUri} alt="" />
            <h2 className="text-xl font-semibold">{bridge?.name}</h2>
            {
              priority !== '' &&  <span className="h-fit rounded-full bg-green-800 px-2 text-center text-xs font-light text-white">
              {priority}
            </span>
            }
            
          </div>
          {/* right */}
          <div className="m-3">
            {/* Start */}
            <div  className="flex items-center">
              <input 
             checked={bridge.name == routeToExecute?.name ? true: false}
                type="radio"
                name="selected-bridge"
                className="form-radio border border-wagpayPurple bg-transparent text-indigo-500"
              />
            </div>
            {/* End */}
          </div>
        </div>
        <div className="mb-4 grid grid-cols-9">
          <div className="col-span-2 w-full">
            <div className="flex space-x-2">
              <img src="/images/usdc.png" alt="usdc" className="h-6 w-6" />
              <span className="text-base md:text-lg md:font-semibold">
                {ethers.utils.formatUnits(
                  bridge.route.amount.toString(),
                  bridge.route.fromToken.decimals
                )} {[ bridge.route.fromToken.symbol]}
              </span>
            </div>
            <span className="block text-xs text-primaryGray md:ml-9 md:text-sm">
              {chainObj[bridge.route.fromChain]}
            </span>
          </div>
          {bridge && bridge.uniswapData && bridge.uniswapData.dex ? (
            <div className="col-span-2 flex items-center ">
                <span className='w-full '>
                  Uniswap {Number(bridge.uniswapData.amountToGet).toFixed(2)} on{' '}
                  {bridge.uniswapData.toToken.symbol}
                </span>
            </div>
          ):  <div className="col-span-2 flex items-center ">
          <span className='w-full '>
      
          </span>
      </div>} 
          <div className="col-span-2 flex w-full items-center justify-center">
            <svg
              width=""
              height="10"
              viewBox="0 0 301 10"
              className="w-2/3 md:w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M300.386 5.38619C300.599 5.1729 300.599 4.8271 300.386 4.61381L296.911 1.13815C296.697 0.924862 296.351 0.924862 296.138 1.13815C295.925 1.35143 295.925 1.69723 296.138 1.91052L299.228 5L296.138 8.08948C295.925 8.30277 295.925 8.64857 296.138 8.86185C296.351 9.07514 296.697 9.07514 296.911 8.86185L300.386 5.38619ZM0 5.54615H1.08696V4.45385H0V5.54615ZM3.26087 5.54615H5.43478V4.45385H3.26087V5.54615ZM7.6087 5.54615H9.78261V4.45385H7.6087V5.54615ZM11.9565 5.54615H14.1304V4.45385H11.9565V5.54615ZM16.3043 5.54615H18.4783V4.45385H16.3043V5.54615ZM20.6522 5.54615H22.8261V4.45385H20.6522V5.54615ZM25 5.54615H27.1739V4.45385H25V5.54615ZM29.3478 5.54615H31.5217V4.45385H29.3478V5.54615ZM33.6956 5.54615H35.8696V4.45385H33.6956V5.54615ZM38.0435 5.54615H40.2174V4.45385H38.0435V5.54615ZM42.3913 5.54615H44.5652V4.45385H42.3913V5.54615ZM46.7391 5.54615H48.913V4.45385H46.7391V5.54615ZM51.0869 5.54615H53.2609V4.45385H51.0869V5.54615ZM55.4348 5.54615H57.6087V4.45385H55.4348V5.54615ZM59.7826 5.54615H61.9565V4.45385H59.7826V5.54615ZM64.1304 5.54615H66.3043V4.45385H64.1304V5.54615ZM68.4782 5.54615H70.6522V4.45385H68.4782V5.54615ZM72.8261 5.54615H75V4.45385H72.8261V5.54615ZM77.1739 5.54615H79.3478V4.45385H77.1739V5.54615ZM81.5217 5.54615H83.6956V4.45385H81.5217V5.54615ZM85.8695 5.54615H88.0434V4.45385H85.8695V5.54615ZM90.2174 5.54615H92.3913V4.45385H90.2174V5.54615ZM94.5652 5.54615H96.7391V4.45385H94.5652V5.54615ZM98.913 5.54615H101.087V4.45385H98.913V5.54615ZM103.261 5.54615H105.435V4.45385H103.261V5.54615ZM107.609 5.54615H109.783V4.45385H107.609V5.54615ZM111.956 5.54615H114.13V4.45385H111.956V5.54615ZM116.304 5.54615H118.478V4.45385H116.304V5.54615ZM120.652 5.54615H122.826V4.45385H120.652V5.54615ZM125 5.54615H127.174V4.45385H125V5.54615ZM129.348 5.54615H131.522V4.45385H129.348V5.54615ZM133.696 5.54615H135.87V4.45385H133.696V5.54615ZM138.043 5.54615H140.217V4.45385H138.043V5.54615ZM142.391 5.54615H144.565V4.45385H142.391V5.54615ZM146.739 5.54615H148.913V4.45385H146.739V5.54615ZM151.087 5.54615H153.261V4.45385H151.087V5.54615ZM155.435 5.54615H157.609V4.45385H155.435V5.54615ZM159.783 5.54615H161.957V4.45385H159.783V5.54615ZM164.13 5.54615H166.304V4.45385H164.13V5.54615ZM168.478 5.54615H170.652V4.45385H168.478V5.54615ZM172.826 5.54615H175V4.45385H172.826V5.54615ZM177.174 5.54615H179.348V4.45385H177.174V5.54615ZM181.522 5.54615H183.696V4.45385H181.522V5.54615ZM185.87 5.54615H188.044V4.45385H185.87V5.54615ZM190.218 5.54615H192.391V4.45385H190.218V5.54615ZM194.565 5.54615H196.739V4.45385H194.565V5.54615ZM198.913 5.54615H201.087V4.45385H198.913V5.54615ZM203.261 5.54615H205.435V4.45385H203.261V5.54615ZM207.609 5.54615H209.783V4.45385H207.609V5.54615ZM211.957 5.54615H214.131V4.45385H211.957V5.54615ZM216.305 5.54615H218.478V4.45385H216.305V5.54615ZM220.652 5.54615H222.826V4.45385H220.652V5.54615ZM225 5.54615H227.174V4.45385H225V5.54615ZM229.348 5.54615H231.522V4.45385H229.348V5.54615ZM233.696 5.54615H235.87V4.45385H233.696V5.54615ZM238.044 5.54615H240.218V4.45385H238.044V5.54615ZM242.392 5.54615H244.566V4.45385H242.392V5.54615ZM246.739 5.54615H248.913V4.45385H246.739V5.54615ZM251.087 5.54615H253.261V4.45385H251.087V5.54615ZM255.435 5.54615H257.609V4.45385H255.435V5.54615ZM259.783 5.54615H261.957V4.45385H259.783V5.54615ZM264.131 5.54615H266.305V4.45385H264.131V5.54615ZM268.479 5.54615H270.653V4.45385H268.479V5.54615ZM272.826 5.54615H275V4.45385H272.826V5.54615ZM277.174 5.54615H279.348V4.45385H277.174V5.54615ZM281.522 5.54615H283.696V4.45385H281.522V5.54615ZM285.87 5.54615H288.044V4.45385H285.87V5.54615ZM290.218 5.54615H292.392V4.45385H290.218V5.54615ZM294.566 5.54615H296.74V4.45385H294.566V5.54615ZM298.914 5.54615H300V4.45385H298.914V5.54615Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="col-span-2 w-full">
            <div className="flex justify-end space-x-2">
              <img src="/images/usdc.png" alt="usdc" className="h-6 w-6" />
              <span className="text-base md:text-lg md:font-semibold">
                {Number(bridge.amountToGet).toFixed(2)} {bridge.route.toToken.symbol}
              </span>
            </div>
            <span className="block text-xs text-primaryGray md:ml-9 md:text-sm">
              {chainObj[bridge.route.toChain]}
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="text-xs text-primaryGray md:text-sm">
            Bridge time:{bridge.bridgeTime}
          </div>
          <div className="text-xs text-primaryGray md:text-sm">
            Bridgefees- {bridge.transferFee}
          </div>
          <div className="text-xs text-primaryGray md:text-sm">
            No. of Action - ~2
          </div>
        </div>
      </div>
      </label>
    </>
  );
};

export default BridgeBar;
