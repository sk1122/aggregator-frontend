import WagPay from '@wagpay/sdk';
import { Routes } from '@wagpay/types';
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Chain } from 'wagmi';

interface AppContextInterface {
  access: boolean;
  setAccess: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isDropDownOpenp: boolean;
  setIsDropDownOpenp: Dispatch<SetStateAction<boolean>>;
  priorityValue: string;
  setPriorityValue: Dispatch<SetStateAction<string>>;
  priorties: string[];
  routeToExecute: Routes | null;
  setRouteToExecute: Dispatch<SetStateAction<Routes | null>>;
  account: string | undefined;
  setAccount: Dispatch<SetStateAction<string | undefined>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  swapping: boolean;
  setSwapping: Dispatch<SetStateAction<boolean>>;
  routes: Routes[] | null;
  setRoutes: Dispatch<SetStateAction<Routes[] | null>>;
  filteredFromChains: Chain[];
  setFilteredFromChains: Dispatch<SetStateAction<Chain[]>>;
  filteredToChains: Chain[];
  setFilteredToChains: Dispatch<SetStateAction<Chain[]>>;
  setSigner: Dispatch<SetStateAction<any>>;
  signer: any;
  isDropDownOpenFromCoin: boolean;
  setIsDropDownOpenFromCoin: Dispatch<SetStateAction<boolean>>;
  isDropDownOpenToCoin: boolean;
  setIsDropDownOpenToCoin: Dispatch<SetStateAction<boolean>>;
  refreshRoutes: boolean;
  setRefreshRoutes: Dispatch<SetStateAction<boolean>>;
  isTransectionModalOpen: boolean;
  setIsTransectionModalOpen: Dispatch<SetStateAction<boolean>>;
  toAdress: string | null;
  setToAdress: Dispatch<SetStateAction<string | null>>;
  showTokenList: boolean;
  setShowTokenList: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<any>({});

export function useAppContext() {
  return useContext(AppContext);
}

interface IAppContextProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: IAppContextProps) {
  const priorties = ['Highest returns', 'Lowest bridge fees', 'Lowest time'];
  const [access, setAccess] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpenp, setIsDropDownOpenp] = useState(false);
  const [priorityValue, setPriorityValue] = useState(priorties[0]);
  const [routeToExecute, setRouteToExecute] = useState<Routes | null>(null);
  const [account, setAccount] = useState<string | undefined>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [swapping, setSwapping] = useState<boolean>(false);
  const [routes, setRoutes] = useState<Routes[] | null>(null);
  const [isDropDownOpenFromCoin, setIsDropDownOpenFromCoin] = useState<boolean>(false);
  const [isDropDownOpenToCoin, setIsDropDownOpenToCoin] = useState<boolean>(false);
  const [refreshRoutes, setRefreshRoutes] = useState<boolean>(false);
  const [filteredFromChains, setFilteredFromChains] = useState<Chain[]>([]);
  const [filteredToChains, setFilteredToChains] = useState<Chain[]>([]);
  const [signer, setSigner] = useState<any>();
  const [isTransectionModalOpen, setIsTransectionModalOpen] = useState<boolean>(false);
  const [toAdress, setToAdress] = useState<string | null>(null);
  const [showTokenList, setShowTokenList] = useState<boolean>(false);

  const sharedState: AppContextInterface = {
    access,
    setAccess,
    isModalOpen,
    setIsModalOpen,
    isDropDownOpenp,
    setIsDropDownOpenp,
    priorityValue,
    setPriorityValue,
    priorties,
    routeToExecute,
    setRouteToExecute,
    account,
    setAccount,
    isAuthenticated,
    setIsAuthenticated,
    swapping,
    setSwapping,
    routes,
    setRoutes,
    filteredFromChains,
    setFilteredFromChains,
    filteredToChains,
    setFilteredToChains,
    setSigner,
    signer,
    isDropDownOpenFromCoin,
    setIsDropDownOpenFromCoin,
    isDropDownOpenToCoin,
    setIsDropDownOpenToCoin,
    refreshRoutes,
    setRefreshRoutes,
    isTransectionModalOpen,
    setIsTransectionModalOpen,
    toAdress,
    setToAdress,
    showTokenList,
    setShowTokenList,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
