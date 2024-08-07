import {createContext, Dispatch, SetStateAction} from "react";

export interface SidebarContext {
  isOpen?: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

export const SidebarContext = createContext<SidebarContext>({})