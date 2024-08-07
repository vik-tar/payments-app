import React, {useState} from "react";
import {SidebarContext} from "./SidebarContext";

const SidebarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{
      isOpen,
      setIsOpen
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider