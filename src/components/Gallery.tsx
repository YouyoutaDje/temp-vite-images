import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FunctionComponent } from 'react';
import { useGalleryContext } from '../context';
import { UNSPLASH_API_KEY } from '../config';

const url = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}`;

const Gallery: FunctionComponent = () => {
  const { search } = useGalleryContext();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['images', search],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${search}`);
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>Error: {error?.message}</h4>
      </section>
    );
  }

  if (!data.results?.length) {
    return (
      <section className="image-container">
        <h4>No results found!</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {(
        data.results as {
          urls: { regular?: string };
          id: string;
          alt_description: string;
        }[]
      ).map((item) => (
        <img
          src={item?.urls?.regular}
          key={item.id}
          alt={item.alt_description}
        />
      ))}
    </section>
  );
};

export { Gallery };
