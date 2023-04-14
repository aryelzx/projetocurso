import React, { useContext, createContext, useCallback, useState, memo } from 'react';

interface IDrawerData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOption[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
};
interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}
export const DrawerContext = createContext<IDrawerData>({} as IDrawerData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface DrawerProviderProps {
  children: React.ReactNode;
}

const DrawerProvider: React.FC<DrawerProviderProps> = ({
  children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldIsDrawerOpen) => !oldIsDrawerOpen);
  }, []);
  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
export default memo(DrawerProvider);