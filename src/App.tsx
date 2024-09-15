import CardGrid from './components/Card';
import Header from './components/Header';

import classes from './styles/index.module.scss';

import { useGetDataQuery, useGetImageQuery } from './store/api';

import { Painting } from './types';

import { useMemo } from 'react';

function App() {
  const { data: paintings, error, isLoading } = useGetDataQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const imageUrls = useMemo(() => {
    const urls: { [key: string]: string } = {};

    if (paintings) {
      paintings.forEach((painting: Painting) => {
        const { data, error, isLoading } = useGetImageQuery(painting.name);

        // Условно проверяем наличие данных и сохраняем URL
        if (!isLoading && data) {
          urls[painting.name] = data;
        }
      });
    }

    return urls;
  }, [paintings]);

  return (
    <>
      <Header />
      <main className={classes.container}>
        <h1>Hello</h1>
        <p>bimbimbimbambam</p>
        <CardGrid paintings={paintings || []} imageUrls={imageUrls || {}}/>
      </main>
    </>
  );
}

export default App;
