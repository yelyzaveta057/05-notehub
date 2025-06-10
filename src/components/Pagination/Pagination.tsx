// src/components/Pagination/Pagination.tsx
import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  return (
      <ReactPaginate
      breakLabel="..."
      nextLabel="→"
      previousLabel="←"
      pageRangeDisplayed={3}
      pageCount={totalPages} 
      forcePage={currentPage - 1}
      onPageChange={(event) => onPageChange(event.selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      pageClassName={css.pageItem}
      previousClassName={css.pageItem}
      nextClassName={css.pageItem}
      breakClassName={css.pageItem}
    />
  );
};

export default Pagination;
