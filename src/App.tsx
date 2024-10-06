import { FunctionComponent } from 'react';
import { ThemeToggle, SearchForm, Gallery } from './components';
import { GalleryProvider } from './context';

const App: FunctionComponent = () => {
  return (
    <main>
      <ThemeToggle />
      <GalleryProvider>
        <SearchForm />
        <Gallery />
      </GalleryProvider>
    </main>
  );
};

export default App;
