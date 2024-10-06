import { FormEvent, FunctionComponent } from 'react';
import { useGalleryContext } from '../context';

const SearchForm: FunctionComponent = () => {
  const { setSearch } = useGalleryContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = (e.target as any).elements.search.value;
    if (!searchValue) return;
    setSearch(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-from" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};

export { SearchForm };
