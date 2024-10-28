import classes from './index.module.scss';
import { usePagination } from './hooks/usePagination';
import { useAppDispatch } from './hooks/redux';

import { setTotalPages } from './store/slices/paginationSlice';

import CardGrid from './components/CardGrid';
import Header from './components/Header';
import Search from './components/Search';
import Pagination from './components/Pagination';
import { useEffect } from 'react';
import { setTheme } from './store/slices/themeSlice';
import Loader from './UI/Loader';

function App() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading, currentPage, handlePageChange } =
    usePagination();

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(theme));
    if (data) {
      dispatch(setTotalPages(data.totalCount || 0));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      <Header />
      <main className={classes.container}>
        <Search />
        <CardGrid paintings={data?.data || []} />
        <Pagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default App;
