import { useState, useEffect } from 'react';
import { useGetPicturesQuery } from '../store/api';
import { IPainting } from '../models/IPainting'; // Предполагаем, что у тебя есть интерфейс IPainting

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);

  const { data, error, isLoading, refetch } = useGetPicturesQuery({
    _page: currentPage,
    _limit: limit,
  });

  useEffect(() => {
    refetch();
  }, [currentPage, limit, refetch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (limit: number) => {
    setLimit(limit);
  };

  return {
    data: data as { data: IPainting[]; totalCount: number } | undefined,
    error,
    isLoading,
    currentPage,
    limit,
    handlePageChange,
    handleLimitChange,
  };
};
