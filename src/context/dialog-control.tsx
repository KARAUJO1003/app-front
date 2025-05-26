/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface RoleContextProps {
  dataEdit: any;
  setDataEdit: (data: any) => void;
  toggleDialog: () => void;
  isOpen: boolean;
  isOpenAlertDialog: boolean;
  toggleAlertDialog: () => void;
  setIsOpenAlertDialog: (value: boolean) => void;
  handleSetDataEdit: (data: any) => void;
  clearDataEdit: () => void;
}

const DialogContext = createContext<RoleContextProps | undefined>(undefined);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [dataEdit, setDataEdit] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const toggleAlertDialog = () => {
    setIsOpenAlertDialog(!isOpenAlertDialog);
  };

  const clearDataEdit = () => {
    setDataEdit(null);
  };

  const handleSetDataEdit = (data: any) => {
    setDataEdit(data);
  };

  return (
    <DialogContext.Provider
      value={{
        dataEdit,
        setDataEdit,
        isOpen,
        toggleDialog,
        isOpenAlertDialog,
        setIsOpenAlertDialog,
        toggleAlertDialog,
        handleSetDataEdit,
        clearDataEdit,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export function useDialog<T = unknown>() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Error using DialogContext");
  }
  // Faz o cast do contexto para o tipo desejado
  return context as Omit<
    typeof context,
    "dataEdit" | "setDataEdit" | "handleSetDataEdit"
  > & {
    dataEdit: T | null;
    setDataEdit: (data: T | null) => void;
    handleSetDataEdit: (data: T) => void;
  };
}
