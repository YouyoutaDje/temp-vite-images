import {
  createContext,
  FunctionComponent,
  ReactElement,
  useContext,
  useState,
} from 'react';

type GalleryContextType = {
  search: string;
  setSearch: (value: string) => void;
};

const GalleryContext = createContext<GalleryContextType>({ search: 'cat', setSearch: () => console.log('not implemeted yet...') });

type GalleryProviderProps = {
  children?: ReactElement | ReactElement[];
};

const GalleryProvider: FunctionComponent<GalleryProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>('cat');

  return (
    <GalleryContext.Provider value={{ search, setSearch }}>
      {children}
    </GalleryContext.Provider>
  );
};

const useGalleryContext = () => useContext(GalleryContext);

export { useGalleryContext, GalleryProvider };
