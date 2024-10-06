import {
  createContext,
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

type AppProviderProps = {
  children?: ReactElement;
};

type AppContextType = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
};

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme');


  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === 'true';
};

const AppContext = createContext<AppContextType>({
  toggleDarkTheme: () => console.log('not initialized yet'),
  isDarkTheme: getInitialDarkMode(),
});

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialDarkMode());

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('darkTheme', String(!isDarkTheme));
  };

  useEffect(() => {
    document.body?.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
