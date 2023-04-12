import React, { useContext, createContext, useCallback, useState } from 'react';

interface IDrawerData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
};

export const DrawerContext = createContext<IDrawerData>({} as IDrawerData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface DrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({
  children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldIsDrawerOpen) => !oldIsDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};