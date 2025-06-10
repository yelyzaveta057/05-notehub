import type { ChangeEvent } from 'react';
import css from './SearchBox.module.css';

interface Props {
  query: string;
  updateQuery: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ query, updateQuery }: Props) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={query}
      onChange={updateQuery}
    />
  );
};

export default SearchBox;
