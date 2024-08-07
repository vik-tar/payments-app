import {useContext} from "react";
import {SidebarContext} from "../providers/SidebarContext";

interface UseSidebar {
  isOpen?: boolean;
  toggleSidebar: () => void
}

export function useSidebar() : UseSidebar {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const toggleSidebar = () => {
    const newState = !isOpen;
    if (setIsOpen) {
      setIsOpen(newState);
    }
  }

  return { isOpen, toggleSidebar };
}